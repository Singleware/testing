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
export declare class Tap extends Class.Null implements Base {
    /**
     * Gets the test report line.
     * @param status Test status.
     * @param number Test number.
     * @param method Test method.
     * @param description Test description.
     * @param directive Test directive.
     * @return Returns the test report line.
     */
    private getReportLine;
    /**
     * Print the log output.
     * @param report Test suite report.
     */
    print(report: Report.Suite): void;
}
