import * as Report from '../report';
/**
 * Test logger, base interface.
 */
export interface Base {
    /**
     * Print the log output.
     * @param report Test suite report.
     */
    print(report: Report.Suite): void;
}
