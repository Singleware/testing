"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
/**
 * Test logger, TAP class.
 */
let Tap = class Tap extends Class.Null {
    /**
     * Gets the test report line.
     * @param status Test status.
     * @param number Test number.
     * @param method Test method.
     * @param description Test description.
     * @param directive Test directive.
     * @return Returns the test report line.
     */
    getReportLine(status, number, method, description, directive) {
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
    print(report) {
        let counter = 1;
        console.log('TAP version 13');
        console.log(`1..${report.total}`);
        for (const caseName in report.cases) {
            const testCase = report.cases[caseName];
            for (const methodName in testCase.methods) {
                const testMethod = testCase.methods[methodName];
                if (testMethod.error) {
                    console.log(this.getReportLine(false, counter++, methodName, testMethod.error, testMethod.directive));
                }
                else {
                    console.log(this.getReportLine(true, counter++, methodName, testMethod.description, testMethod.directive));
                }
            }
        }
    }
};
__decorate([
    Class.Private()
], Tap.prototype, "getReportLine", null);
__decorate([
    Class.Public()
], Tap.prototype, "print", null);
Tap = __decorate([
    Class.Describe()
], Tap);
exports.Tap = Tap;
