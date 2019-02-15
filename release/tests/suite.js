"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Testing = require("../source");
const case_spec_1 = require("./case.spec");
const suite = new Testing.Suite();
const logger = new Testing.Loggers.Tap();
suite.addCase(case_spec_1.Case);
suite.perform().then((report) => {
    logger.print(report);
    process.exitCode = report.errors > 0 ? 1 : 0;
});
