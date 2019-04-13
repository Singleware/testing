"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
var suite_1 = require("./suite");
exports.Suite = suite_1.Suite;
var case_1 = require("./case");
exports.Case = case_1.Case;
const Loggers = require("./loggers");
exports.Loggers = Loggers;
const Report = require("./report");
exports.Report = Report;
const case_2 = require("./case");
/**
 * Decorates the specified method to be a test case method.
 * @param properties Test method properties.
 * @returns Returns the decorator method.
 */
exports.Method = (properties) => case_2.Case.Method(properties);
