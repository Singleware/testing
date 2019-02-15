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
const Testing = require("../source");
/**
 * Test case class.
 */
let Case = Case_1 = class Case extends Testing.Case {
    /**
     * Test the isTrue assertion.
     */
    testIsTrue() {
        this.isTrue(true);
        this.hasException(() => this.isTrue(false));
    }
    /**
     * Test the isFalse assertion.
     */
    testIsFalse() {
        this.isFalse(false);
        this.hasException(() => this.isFalse(true));
    }
    /**
     * Test the isNaN assertion.
     */
    testIsNaN() {
        this.isNaN(NaN);
        this.hasException(() => this.isNaN(0));
    }
    /**
     * Test the isNull assertion.
     */
    testIsNull() {
        this.isNull(null);
        this.hasException(() => this.isNull(0));
        this.hasException(() => this.isNull(void 0));
    }
    /**
     * Test the isInfinite assertion.
     */
    testIsInfinite() {
        this.isInfinite(Infinity);
        this.hasException(() => this.isInfinite(0));
        this.hasException(() => this.isInfinite(NaN));
    }
    /**
     * Test the isUndefined assertion.
     */
    testIsUndefined() {
        this.isUndefined(void 0);
        this.hasException(() => this.isUndefined(0));
        this.hasException(() => this.isUndefined(null));
    }
    /**
     * Test the isEmpty assertion.
     */
    testIsEmpty() {
        this.isEmpty([]);
        this.isEmpty({});
        this.isEmpty('');
        this.hasException(() => this.isEmpty(0));
        this.hasException(() => this.isEmpty(null));
    }
    /**
     * Test the isBoolean assertion.
     */
    testIsBoolean() {
        this.isBoolean(true);
        this.isBoolean(false);
        this.hasException(() => this.isBoolean(0));
        this.hasException(() => this.isBoolean(1));
    }
    /**
     * Test the isString assertion.
     */
    testIsString() {
        this.isString('string');
        this.hasException(() => this.isString(0));
    }
    /**
     * Test the isNumber assertion.
     */
    testIsNumber() {
        this.isNumber(10);
        this.isNumber(10.5);
        this.isNumber(0x0a);
        this.isNumber(NaN);
        this.isNumber(Infinity);
        this.hasException(() => this.isNumber('0'));
    }
    /**
     * Test the isArray assertion.
     */
    testIsArray() {
        this.isArray([]);
        this.isArray(new Array());
        this.hasException(() => this.isArray(0));
    }
    /**
     * Test the isInstanceOf assertion.
     */
    testIsInstanceOf() {
        this.isInstanceOf(this, Case_1);
        this.isInstanceOf(this, Testing.Case);
        this.hasException(() => this.isInstanceOf(this, Array));
    }
    /**
     * Test the isGreaterThan assertion.
     */
    testIsGreaterThan() {
        this.isGreaterThan(1, 0);
        this.hasException(() => this.isGreaterThan(0, 1));
    }
    /**
     * Test the isGreaterThanOrEqual assertion.
     */
    testIsGreaterThanOrEqual() {
        this.isGreaterThanOrEqual(1, 0);
        this.isGreaterThanOrEqual(0, 0);
        this.hasException(() => this.isGreaterThanOrEqual(0, 1));
    }
    /**
     * Test the isLessThan assertion.
     */
    testIsLessThan() {
        this.isLessThan(0, 1);
        this.hasException(() => this.isLessThan(1, 0));
    }
    /**
     * Test the isLessThanOrEqual assertion.
     */
    testIsLessThanOrEqual() {
        this.isLessThanOrEqual(0, 1);
        this.isLessThanOrEqual(1, 1);
        this.hasException(() => this.isLessThanOrEqual(1, 0));
    }
    /**
     * Test the areEquals assertion.
     */
    testAreEquals() {
        this.areEquals(1, 1);
        this.areEquals(1, '1');
        this.areEquals(1, true);
        this.areEquals(0, false);
        this.hasException(() => this.areEquals(1, 0));
        this.hasException(() => this.areEquals(1, '0'));
        this.hasException(() => this.areEquals(1, false));
        this.hasException(() => this.areEquals(0, true));
    }
    /**
     * Test the areNotEquals assertion.
     */
    testAreNotEquals() {
        this.areNotEquals(1, 0);
        this.areNotEquals(1, '0');
        this.areNotEquals(1, false);
        this.areNotEquals(0, true);
        this.hasException(() => this.areNotEquals(1, 1));
        this.hasException(() => this.areNotEquals(1, '1'));
        this.hasException(() => this.areNotEquals(1, true));
        this.hasException(() => this.areNotEquals(0, false));
    }
    /**
     * Test the areSame assertion.
     */
    testAreSame() {
        this.areSame(1, 1);
        this.areSame('1', '1');
        this.hasException(() => this.areSame(0, 1));
        this.hasException(() => this.areSame(1, '1'));
        this.hasException(() => this.areSame(true, false));
    }
    /**
     * Test the areNotSame assertion.
     */
    testAreNotSame() {
        this.areNotSame(1, '1');
        this.areNotSame(1, true);
        this.hasException(() => this.areNotSame(1, 1));
        this.hasException(() => this.areNotSame('1', '1'));
        this.hasException(() => this.areNotSame(true, true));
    }
    /**
     * Test the hasProperty assertion.
     */
    testHasProperty() {
        this.hasProperty(Object, 'toString');
        this.hasException(() => this.hasProperty(Object, 'unknown'));
    }
    /**
     * Test the hasMethod assertion.
     */
    testHasMethod() {
        this.hasMethod(Object, 'toString');
        this.hasException(() => this.hasMethod(Object, 'unknown'));
    }
    /**
     * Test the hasIndex assertion.
     */
    testHasIndex() {
        const list = ['a', 'b', 'c'];
        this.hasIndex(list, 0);
        this.hasIndex(list, 1);
        this.hasIndex(list, 2);
        this.hasException(() => this.hasIndex(list, 3));
    }
    /**
     * Test the hasValue assertion.
     */
    testHasValue() {
        const list = ['a', 'b', 'c'];
        this.hasValue(list, 'a');
        this.hasValue(list, 'b');
        this.hasValue(list, 'c');
        this.hasException(() => this.hasValue(list, 'd'));
    }
    /**
     * Test the hasOnly assertion.
     */
    testHasOnly() {
        const list = ['a', 'b', 'c'];
        this.hasOnly(list, 'a');
        this.hasOnly(list, 'b');
        this.hasOnly(list, 'c');
        this.hasException(() => this.hasOnly(list, 'd'));
        this.hasException(() => this.hasOnly(['a', 'b', 'c', 'a'], 'a'));
    }
    /**
     * Test the hasException assertion.
     */
    testHasException() {
        this.hasException(() => {
            throw new Error('Test exception');
        });
        this.hasException(() => {
            throw new TypeError('Test exception');
        }, TypeError);
        this.hasException(() => this.hasException(() => { }));
    }
};
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsTrue", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsFalse", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsNaN", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsNull", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsInfinite", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsUndefined", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsEmpty", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsBoolean", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsString", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsNumber", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsArray", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsInstanceOf", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsGreaterThan", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsGreaterThanOrEqual", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsLessThan", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testIsLessThanOrEqual", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testAreEquals", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testAreNotEquals", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testAreSame", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testAreNotSame", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testHasProperty", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testHasMethod", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testHasIndex", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testHasValue", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testHasOnly", null);
__decorate([
    Class.Public(),
    Testing.Method()
], Case.prototype, "testHasException", null);
Case = Case_1 = __decorate([
    Class.Describe()
], Case);
exports.Case = Case;
