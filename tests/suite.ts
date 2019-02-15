/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Testing from '../source';

import { Case } from './case.spec';

const suite = new Testing.Suite();
const logger = new Testing.Loggers.Tap();

suite.addCase(Case);

suite.perform().then((report: Testing.Report.Suite) => {
  logger.print(report);
  process.exitCode = report.errors > 0 ? 1 : 0;
});
