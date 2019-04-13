/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Test case data, assertion enumerator.
 */
export enum Assertion {
  IsTrue,
  IsFalse,
  IsNull,
  IsNaN,
  IsInfinite,
  IsUndefined,
  IsEmpty,
  IsBoolean,
  IsString,
  IsNumber,
  IsArray,
  IsProperty,
  IsMethod,
  IsIndex,
  IsInstanceOf,
  IsGreaterThan,
  IsGreaterThanOrEqual,
  IsLessThan,
  IsLessThanOrEqual,
  AreEquals,
  AreNotEquals,
  AreSame,
  AreNotSame,
  HasValue,
  HasOnly,
  HasException
}
