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
const case_1 = require("./case");
/**
 * Test suite class.
 */
let Suite = class Suite extends Class.Null {
    /**
     * Test suite class.
     */
    constructor() {
        super(...arguments);
        /**
         * List of tests cases.
         */
        this.caseList = [];
    }
    /**
     * Adds the specified test case into this test suite.
     * @param test Test case class.
     * @throws Throw an error when the specified test case already exists in the this test suite.
     */
    addCase(test) {
        if (this.caseList.includes(test.prototype.constructor)) {
            throw new Error(`The specified test already exists in this test suite.`);
        }
        this.caseList.push(test);
    }
    /**
     * Removes the specified test case from this test suite.
     * @param test Test case class.
     * @throws Throw an error when the specified test case does not exists in the this test suite.
     */
    removeCase(test) {
        const index = this.caseList.indexOf(test.prototype.constructor);
        if (index === -1) {
            throw new Error(`The specified test does not exists in this test suite.`);
        }
        this.caseList.splice(index, 1);
    }
    /**
     * Perform all test cases from this test suite.
     * @returns Returns the test suite report.
     */
    async perform() {
        let currentCase;
        let currentMethod;
        const suiteReport = {
            total: 0,
            errors: 0,
            cases: {}
        };
        for (let i = 0; i < this.caseList.length; ++i) {
            const test = this.caseList[i];
            const name = `${i}@${test.name}`;
            suiteReport.cases[name] = currentCase = {
                total: 0,
                methods: {}
            };
            try {
                const methodList = case_1.Case.getMethodList(test);
                const caseInstance = new test();
                for (const method of methodList) {
                    suiteReport.total++;
                    currentCase.total++;
                    currentCase.methods[method.name] = currentMethod = {
                        description: method.description,
                        directive: method.directive,
                        assertions: []
                    };
                    try {
                        case_1.Case.setAssertionList(test, currentMethod.assertions);
                        await caseInstance[method.name].call(caseInstance);
                    }
                    catch (exception) {
                        suiteReport.errors++;
                        currentMethod.error = `${exception.message}`;
                    }
                }
            }
            catch (exception) {
                suiteReport.errors++;
                currentCase.error = `${exception.message}`;
            }
        }
        return suiteReport;
    }
};
__decorate([
    Class.Private()
], Suite.prototype, "caseList", void 0);
__decorate([
    Class.Public()
], Suite.prototype, "addCase", null);
__decorate([
    Class.Public()
], Suite.prototype, "removeCase", null);
__decorate([
    Class.Public()
], Suite.prototype, "perform", null);
Suite = __decorate([
    Class.Describe()
], Suite);
exports.Suite = Suite;
