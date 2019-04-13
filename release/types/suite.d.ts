import * as Class from '@singleware/class';
import * as Report from './report';
import * as Types from './types';
import { Case } from './case';
/**
 * Test suite class.
 */
export declare class Suite extends Class.Null {
    /**
     * List of tests cases.
     */
    private caseList;
    /**
     * Adds the specified test case into this test suite.
     * @param test Test case class.
     * @throws Throw an error when the specified test case already exists in the this test suite.
     */
    addCase(test: Types.Constructor<Case>): void;
    /**
     * Removes the specified test case from this test suite.
     * @param test Test case class.
     * @throws Throw an error when the specified test case does not exists in the this test suite.
     */
    removeCase(test: Types.Constructor<Case>): void;
    /**
     * Perform all test cases from this test suite.
     * @returns Returns the test suite report.
     */
    perform(): Promise<Report.Suite>;
}
