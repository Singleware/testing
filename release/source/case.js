"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Case_1;
"use strict";
/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
const Class = require("@singleware/class");
const Data = require("./data");
/**
 * Test case class.
 */
let Case = Case_1 = class Case extends Class.Null {
    /**
     * Gets the test case data associated to the specified test case type.
     * @param type Test case class.
     * @returns Returns the test case data.
     */
    static getCaseData(type) {
        let caseData;
        if (!(caseData = Case_1.dataMap.get(type))) {
            Case_1.dataMap.set(type, (caseData = {
                name: type.name,
                methods: [],
                assertions: []
            }));
        }
        return caseData;
    }
    /**
     * Register the specified assertion values.
     * @param type Assertion type.
     * @param actual Actual value.
     * @param expected Expected value.
     * @param success Determines whether the assertion was successful or not.
     * @returns Return the received success argument.
     */
    addAssertion(type, actual, expected, success) {
        const caseData = Case_1.dataMap.get(Reflect.getPrototypeOf(this).constructor);
        caseData.assertions.push({
            type: type,
            actual: `${actual}`,
            expected: `${expected}`,
            success: success
        });
        return success;
    }
    /**
     * Determines whether the specified condition is true.
     * @param condition Condition to be verified.
     * @param message Message displayed when the condition is not true.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isTrue(condition, message) {
        if (!this.addAssertion(Data.Assertion.IsTrue, condition, 'true', condition === true)) {
            throw new Error(message || `The given value is not true.`);
        }
    }
    /**
     * Determines whether the specified condition is false.
     * @param condition Condition to be verified.
     * @param message Message displayed when the condition is not false.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isFalse(condition, message) {
        if (!this.addAssertion(Data.Assertion.IsFalse, condition, 'false', condition === false)) {
            throw new Error(message || `The given value is not false.`);
        }
    }
    /**
     * Determines whether the specified value is NaN.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not NaN.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isNaN(value, message) {
        if (!this.addAssertion(Data.Assertion.IsNaN, value, 'NaN', isNaN(value))) {
            throw new Error(message || `The given value is not NaN.`);
        }
    }
    /**
     * Determines whether the specified value is null.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not null.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isNull(value, message) {
        if (!this.addAssertion(Data.Assertion.IsNull, value, 'null', value === null)) {
            throw new Error(message || `The given value is not null.`);
        }
    }
    /**
     * Determines whether the specified value is infinite.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not infinite.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isInfinite(value, message) {
        if (!this.addAssertion(Data.Assertion.IsInfinite, value, 'Infinite', !isNaN(value) && !isFinite(value))) {
            throw new Error(message || `The given value is not infinite.`);
        }
    }
    /**
     * Determines whether the specified value is undefined.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not undefined.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isUndefined(value, message) {
        if (!this.addAssertion(Data.Assertion.IsUndefined, value, 'undefined', value === void 0)) {
            throw new Error(message || `The given value is not undefined.`);
        }
    }
    /**
     * Determines whether the specified value is empty.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not empty.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isEmpty(value, message) {
        if (value instanceof Array) {
            if (!this.addAssertion(Data.Assertion.IsEmpty, `array(${value.length})`, 'array(0)', value.length === 0)) {
                throw new Error(message || `The given array is not empty.`);
            }
        }
        else if (value instanceof Object) {
            if (!this.addAssertion(Data.Assertion.IsEmpty, `object{...}`, 'object{}', Object.keys(value).length === 0)) {
                throw new Error(message || `The given object is not empty.`);
            }
        }
        else if (!this.addAssertion(Data.Assertion.IsEmpty, `string(${value.length})`, 'string(0)', value.length === 0)) {
            throw new Error(message || `The given value is not empty.`);
        }
    }
    /**
     * Determines whether the specified value is a boolean type.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not a boolean type.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isBoolean(value, message) {
        if (!this.addAssertion(Data.Assertion.IsBoolean, typeof value, 'boolean', typeof value === 'boolean')) {
            throw new Error(message || `The given value is not a boolean type.`);
        }
    }
    /**
     * Determines whether the specified value is a string type.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not a string type.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isString(value, message) {
        if (!this.addAssertion(Data.Assertion.IsString, typeof value, 'string', typeof value === 'string')) {
            throw new Error(message || `The given value is not a string type.`);
        }
    }
    /**
     * Determines whether the specified value is a number type.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not a number type.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isNumber(value, message) {
        if (!this.addAssertion(Data.Assertion.IsNumber, typeof value, 'number', typeof value === 'number')) {
            throw new Error(message || `The given value is not a number type.`);
        }
    }
    /**
     * Determines whether the specified value is an array type.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not an array type.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isArray(value, message) {
        if (!this.addAssertion(Data.Assertion.IsArray, typeof value, 'array', value instanceof Array)) {
            throw new Error(message || `The given value is not an array type.`);
        }
    }
    /**
     * Determines whether the specified value is an instance of the expected type.
     * @param value Value to be verified.
     * @param type Expected type.
     * @param message Message displayed when the value is not an instance of the expected type.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isInstanceOf(value, type, message) {
        if (!this.addAssertion(Data.Assertion.IsInstanceOf, 'true', 'false', value instanceof type)) {
            throw new Error(message || `The given value is not an instance of the expected type.`);
        }
    }
    /**
     * Determines whether the actual is greater than the expected value.
     * @param actual Actual value.
     * @param expected Expected value.
     * @param message Message displayed when the actual value is not greater than the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isGreaterThan(actual, expected, message) {
        if (!this.addAssertion(Data.Assertion.IsGreaterThan, actual, expected, actual > expected)) {
            throw new Error(message || `The actual value is not greater than the expected value.`);
        }
    }
    /**
     * Determines whether the actual value is greater than or equal the expected value.
     * @param actual Actual value.
     * @param expected Expected value.
     * @param message Message displayed when the actual value is not greater than or equal the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isGreaterThanOrEqual(actual, expected, message) {
        if (!this.addAssertion(Data.Assertion.IsGreaterThanOrEqual, actual, expected, actual >= expected)) {
            throw new Error(message || `The actual value is not greater than or equal the expected value.`);
        }
    }
    /**
     * Determines whether the actual value is less than the expected value.
     * @param actual Actual value.
     * @param expected Expected value.
     * @param message Message displayed when the value is not less than the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isLessThan(actual, expected, message) {
        if (!this.addAssertion(Data.Assertion.IsLessThan, actual, expected, actual < expected)) {
            throw new Error(message || `The actual value is not less than the expected value.`);
        }
    }
    /**
     * Determines whether the actual value is less than or equal the expected value.
     * @param actual Actual value.
     * @param expected Expected value.
     * @param message Message displayed when the actual value is not less than or equal the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    isLessThanOrEqual(actual, expected, message) {
        if (!this.addAssertion(Data.Assertion.IsLessThanOrEqual, actual, expected, actual <= expected)) {
            throw new Error(message || `The given value is not less than or equal the expected value.`);
        }
    }
    /**
     * Determines whether the specified values are equals.
     * @param first First value.
     * @param second Second value.
     * @param message Message displayed when the specified values are not equals.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    areEquals(first, second, message) {
        if (!this.addAssertion(Data.Assertion.AreEquals, first, second, first == second)) {
            throw new Error(message || `The given values are not equals as expected.`);
        }
    }
    /**
     * Determines whether the specified values are not equals.
     * @param first First value.
     * @param second Second value.
     * @param message Message displayed when the specified values are equals.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    areNotEquals(first, second, message) {
        if (!this.addAssertion(Data.Assertion.AreNotEquals, first, second, first != second)) {
            throw new Error(message || `The given values are equals as not expected.`);
        }
    }
    /**
     * Determines whether the specified values and types are the same.
     * @param first First value.
     * @param second Second value.
     * @param message Message displayed when the specified values are not the same.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    areSame(first, second, message) {
        if (!this.addAssertion(Data.Assertion.AreSame, first, second, first === second)) {
            throw new Error(message || `The given values are not the same as expected.`);
        }
    }
    /**
     * Determines whether the specified values and types are not the same.
     * @param first First value.
     * @param second Second value.
     * @param message Message displayed when the specified values are the same.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    areNotSame(first, second, message) {
        if (!this.addAssertion(Data.Assertion.AreNotSame, first, second, first !== second)) {
            throw new Error(message || `The given values are the same as not expected.`);
        }
    }
    /**
     * Determines whether the specified array has the expected index.
     * @param array Array to be verified.
     * @param index Expected index.
     * @param message Message displayed when the array does not have the expected index.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    hasIndex(array, index, message) {
        if (!this.addAssertion(Data.Assertion.IsIndex, 'true', 'false', array[index] !== void 0)) {
            throw new Error(message || `The given array does not have the expected index.`);
        }
    }
    /**
     * Determines whether the specified object has the expected property.
     * @param object Object to be verified.
     * @param property Expected property.
     * @param message Message displayed when the object does not have the expected property.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    hasProperty(object, property, message) {
        if (!this.addAssertion(Data.Assertion.IsProperty, 'true', 'false', property in object)) {
            throw new Error(message || `The given object does not have the expected property.`);
        }
    }
    /**
     * Determines whether the specified object has the expected method.
     * @param object Object to be verified.
     * @param method Expected method.
     * @param message Message displayed when the object does not have the expected method.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    hasMethod(object, method, message) {
        if (!this.addAssertion(Data.Assertion.IsMethod, 'true', 'false', object[method] instanceof Function)) {
            throw new Error(message || `The given object does not have the expected method.`);
        }
    }
    /**
     * Determines whether the specified array contains the given value.
     * @param array Source array.
     * @param expected Expected value.
     * @param message Message displayed when the array does not contains the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    hasValue(array, expected, message) {
        if (!this.addAssertion(Data.Assertion.HasValue, 'true', 'false', array.includes(expected))) {
            throw new Error(message || `The given array does not contains the expected value.`);
        }
    }
    /**
     * Determines whether the specified array contains only the expected value.
     * @param array Source array.
     * @param expected Expected value.
     * @param message Message displayed when the array does not contains only the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    hasOnly(array, expected, message) {
        const first = array.indexOf(expected);
        const second = array.indexOf(expected, first + 1);
        if (!this.addAssertion(Data.Assertion.HasOnly, 'true', 'false', first !== -1 && second === -1)) {
            throw new Error(message || `The given array does not contains only the expected value.`);
        }
    }
    /**
     * Determines whether the specified callback throws an expected exception.
     * @param callback Callback to be performed.
     * @param type Optional exception class type.
     * @param message Message displayed when the callback does not throws the exception.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    hasException(callback, type, message) {
        let status = false;
        try {
            callback.call({});
        }
        catch (exception) {
            status = !type || exception instanceof type;
        }
        finally {
            if (!this.addAssertion(Data.Assertion.HasException, 'true', 'false', status)) {
                throw new Error(message || `The given callback does not throws the expected exception.`);
            }
        }
    }
    /**
     * Decorates the specified method to be a test case method.
     * @param properties Test method properties.
     * @returns Returns the decorator method.
     */
    static Method(properties) {
        return (scope, name, descriptor) => {
            const caseData = this.getCaseData(scope.constructor);
            caseData.methods.push({ ...properties, name: name });
        };
    }
    /**
     * Get all test methods from the specified test case class.
     * @param type Test case class.
     * @return Returns the list of methods from the specified test case class.
     * @throws Throws an error when the specified test case class is not a described test case.
     */
    static getMethodList(type) {
        const caseData = this.dataMap.get(type.prototype.constructor);
        if (!caseData) {
            throw new Error(`The specified class is not described as test case class.`);
        }
        return caseData.methods;
    }
    /**
     * Sets the assertion list into the specified test case class.
     * @param type Test case class.
     * @param assertions List of assertions.
     * @throws Throws an error when the specified test case class is not a described test case.
     */
    static setAssertionList(type, assertions) {
        const caseData = this.dataMap.get(type.prototype.constructor);
        if (!caseData) {
            throw new Error(`The specified class is not described as test case class.`);
        }
        caseData.assertions = assertions;
    }
};
/**
 * Map of test data.
 */
Case.dataMap = new WeakMap();
__decorate([
    Class.Private()
], Case.prototype, "addAssertion", null);
__decorate([
    Class.Protected()
], Case.prototype, "isTrue", null);
__decorate([
    Class.Protected()
], Case.prototype, "isFalse", null);
__decorate([
    Class.Protected()
], Case.prototype, "isNaN", null);
__decorate([
    Class.Protected()
], Case.prototype, "isNull", null);
__decorate([
    Class.Protected()
], Case.prototype, "isInfinite", null);
__decorate([
    Class.Protected()
], Case.prototype, "isUndefined", null);
__decorate([
    Class.Protected()
], Case.prototype, "isEmpty", null);
__decorate([
    Class.Protected()
], Case.prototype, "isBoolean", null);
__decorate([
    Class.Protected()
], Case.prototype, "isString", null);
__decorate([
    Class.Protected()
], Case.prototype, "isNumber", null);
__decorate([
    Class.Protected()
], Case.prototype, "isArray", null);
__decorate([
    Class.Protected()
], Case.prototype, "isInstanceOf", null);
__decorate([
    Class.Protected()
], Case.prototype, "isGreaterThan", null);
__decorate([
    Class.Protected()
], Case.prototype, "isGreaterThanOrEqual", null);
__decorate([
    Class.Protected()
], Case.prototype, "isLessThan", null);
__decorate([
    Class.Protected()
], Case.prototype, "isLessThanOrEqual", null);
__decorate([
    Class.Protected()
], Case.prototype, "areEquals", null);
__decorate([
    Class.Protected()
], Case.prototype, "areNotEquals", null);
__decorate([
    Class.Protected()
], Case.prototype, "areSame", null);
__decorate([
    Class.Protected()
], Case.prototype, "areNotSame", null);
__decorate([
    Class.Protected()
], Case.prototype, "hasIndex", null);
__decorate([
    Class.Protected()
], Case.prototype, "hasProperty", null);
__decorate([
    Class.Protected()
], Case.prototype, "hasMethod", null);
__decorate([
    Class.Protected()
], Case.prototype, "hasValue", null);
__decorate([
    Class.Protected()
], Case.prototype, "hasOnly", null);
__decorate([
    Class.Protected()
], Case.prototype, "hasException", null);
__decorate([
    Class.Private()
], Case, "dataMap", void 0);
__decorate([
    Class.Private()
], Case, "getCaseData", null);
__decorate([
    Class.Public()
], Case, "Method", null);
__decorate([
    Class.Public()
], Case, "getMethodList", null);
__decorate([
    Class.Public()
], Case, "setAssertionList", null);
Case = Case_1 = __decorate([
    Class.Describe()
], Case);
exports.Case = Case;
