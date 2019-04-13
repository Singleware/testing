"use strict";
/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Test case data, assertion enumerator.
 */
var Assertion;
(function (Assertion) {
    Assertion[Assertion["IsTrue"] = 0] = "IsTrue";
    Assertion[Assertion["IsFalse"] = 1] = "IsFalse";
    Assertion[Assertion["IsNull"] = 2] = "IsNull";
    Assertion[Assertion["IsNaN"] = 3] = "IsNaN";
    Assertion[Assertion["IsInfinite"] = 4] = "IsInfinite";
    Assertion[Assertion["IsUndefined"] = 5] = "IsUndefined";
    Assertion[Assertion["IsEmpty"] = 6] = "IsEmpty";
    Assertion[Assertion["IsBoolean"] = 7] = "IsBoolean";
    Assertion[Assertion["IsString"] = 8] = "IsString";
    Assertion[Assertion["IsNumber"] = 9] = "IsNumber";
    Assertion[Assertion["IsArray"] = 10] = "IsArray";
    Assertion[Assertion["IsProperty"] = 11] = "IsProperty";
    Assertion[Assertion["IsMethod"] = 12] = "IsMethod";
    Assertion[Assertion["IsIndex"] = 13] = "IsIndex";
    Assertion[Assertion["IsInstanceOf"] = 14] = "IsInstanceOf";
    Assertion[Assertion["IsGreaterThan"] = 15] = "IsGreaterThan";
    Assertion[Assertion["IsGreaterThanOrEqual"] = 16] = "IsGreaterThanOrEqual";
    Assertion[Assertion["IsLessThan"] = 17] = "IsLessThan";
    Assertion[Assertion["IsLessThanOrEqual"] = 18] = "IsLessThanOrEqual";
    Assertion[Assertion["AreEquals"] = 19] = "AreEquals";
    Assertion[Assertion["AreNotEquals"] = 20] = "AreNotEquals";
    Assertion[Assertion["AreSame"] = 21] = "AreSame";
    Assertion[Assertion["AreNotSame"] = 22] = "AreNotSame";
    Assertion[Assertion["HasValue"] = 23] = "HasValue";
    Assertion[Assertion["HasOnly"] = 24] = "HasOnly";
    Assertion[Assertion["HasException"] = 25] = "HasException";
})(Assertion = exports.Assertion || (exports.Assertion = {}));
