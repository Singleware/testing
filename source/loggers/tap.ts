/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import * as Report from '../report';
import { Base } from './base';

/**
 * Test logger, TAP class.
 */
@Class.Describe()
export class Tap extends Class.Null implements Base {
  /**
   * Gets the test report line.
   * @param status Test status.
   * @param number Test number.
   * @param method Test method.
   * @param description Test description.
   * @param directive Test directive.
   * @return Returns the test report line.
   */
  @Class.Private()
  private getReportLine(status: boolean, number: number, method: string, description?: string, directive?: string): string {
    let line = `${status ? `ok` : `not ok`} ${number} - ${method}`;
    if (description !== void 0) {
      line += `: ${description}`;
    }
    if (directive !== void 0) {
      line += ` # ${directive}`;
    }
    return line;
  }

  /**
   * Print the log output.
   * @param report Test suite report.
   */
  @Class.Public()
  public print(report: Report.Suite): void {
    let counter = 1;
    console.log('TAP version 13');
    console.log(`1..${report.total}`);
    for (const caseName in report.cases) {
      const testCase = report.cases[caseName];
      for (const methodName in testCase.methods) {
        const testMethod = testCase.methods[methodName];
        if (testMethod.error) {
          console.log(this.getReportLine(false, counter++, methodName, testMethod.error, testMethod.directive));
        } else {
          console.log(this.getReportLine(true, counter++, methodName, testMethod.description, testMethod.directive));
        }
      }
    }
  }
}
