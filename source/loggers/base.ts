/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
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
