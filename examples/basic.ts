/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 *
 * The proposal of this example is to show how to implement the test using the testing package.
 */
import * as Class from '@singleware/class';
import * as Testing from '../source';

/**
 * Test case A
 */
@Class.Describe()
class CaseA extends Testing.Case {
  /**
   * Test method A
   */
  @Class.Public()
  @Testing.Method({ description: 'This test shall pass.', directive: 'Success directive' })
  public testA() {
    this.areEquals(10, 10);
  }
}

/**
 * Test case B
 */
@Class.Describe()
class CaseB extends Testing.Case {
  /**
   * Test method B
   */
  @Class.Public()
  @Testing.Method({ directive: 'Fail directive' })
  public testB() {
    this.areEquals(10, 20);
  }
}

/**
 * Run test suite and output the result log.
 */
const suite = new Testing.Suite();
const logger = new Testing.Loggers.Tap();

suite.addCase(CaseA);
suite.addCase(CaseB);

suite.perform().then((report: Testing.Report.Suite) => {
  logger.print(report);
});
