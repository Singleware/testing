/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import * as Report from './report';
import * as Types from './types';

import { Case } from './case';

/**
 * Test suite class.
 */
@Class.Describe()
export class Suite extends Class.Null {
  /**
   * List of tests cases.
   */
  @Class.Private()
  private caseList = <Types.Constructor<Case>[]>[];

  /**
   * Adds the specified test case into this test suite.
   * @param test Test case class.
   * @throws Throw an error when the specified test case already exists in the this test suite.
   */
  @Class.Public()
  public addCase(test: Types.Constructor<Case>): void {
    if (this.caseList.includes(test.prototype.constructor)) {
      throw new Error(`The specified test already exists in this test suite.`);
    }
    this.caseList.push(test);
  }

  /**
   * Removes the specified test case from this test suite.
   * @param test Test case class.
   * @throws Throw an error when the specified test case does not exists in the this test suite.
   */
  @Class.Public()
  public removeCase(test: Types.Constructor<Case>): void {
    const index = this.caseList.indexOf(test.prototype.constructor);
    if (index === -1) {
      throw new Error(`The specified test does not exists in this test suite.`);
    }
    this.caseList.splice(index, 1);
  }

  /**
   * Perform all test cases from this test suite.
   * @returns Returns the test suite report.
   */
  @Class.Public()
  public async perform(): Promise<Report.Suite> {
    let currentCase: Report.Case;
    let currentMethod: Report.Method | undefined;
    const suiteReport = <Report.Suite>{
      total: 0,
      errors: 0,
      cases: {}
    };
    for (let i = 0; i < this.caseList.length; ++i) {
      const test = this.caseList[i];
      const name = `${i}@${test.name}`;
      suiteReport.cases[name] = currentCase = <Report.Case>{
        total: 0,
        methods: {}
      };
      try {
        const methodList = Case.getMethodList(test);
        const caseInstance = new test();
        for (const method of methodList) {
          suiteReport.total++;
          currentCase.total++;
          currentCase.methods[method.name] = currentMethod = <Report.Method>{
            description: method.description,
            directive: method.directive,
            assertions: []
          };
          try {
            Case.setAssertionList(test, currentMethod.assertions);
            await (<any>caseInstance)[method.name].call(caseInstance);
          } catch (exception) {
            suiteReport.errors++;
            currentMethod.error = `${exception.message}`;
          }
        }
      } catch (exception) {
        suiteReport.errors++;
        currentCase.error = `${exception.message}`;
      }
    }
    return suiteReport;
  }
}
