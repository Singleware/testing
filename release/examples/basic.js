"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Testing = require("../source");
/**
 * Test case A
 */
let CaseA = class CaseA extends Testing.Case {
    /**
     * Test method A
     */
    testA() {
        this.areEquals(10, 10);
    }
};
__decorate([
    Class.Public(),
    Testing.Method({ description: 'This test shall pass.', directive: 'Success directive' })
], CaseA.prototype, "testA", null);
CaseA = __decorate([
    Class.Describe()
], CaseA);
/**
 * Test case B
 */
let CaseB = class CaseB extends Testing.Case {
    /**
     * Test method B
     */
    testB() {
        this.areEquals(10, 20);
    }
};
__decorate([
    Class.Public(),
    Testing.Method({ directive: 'Fail directive' })
], CaseB.prototype, "testB", null);
CaseB = __decorate([
    Class.Describe()
], CaseB);
/**
 * Run test suite and output the result log.
 */
const suite = new Testing.Suite();
const logger = new Testing.Loggers.Tap();
suite.addCase(CaseA);
suite.addCase(CaseB);
suite.perform().then((report) => {
    logger.print(report);
});
