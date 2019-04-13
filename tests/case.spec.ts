/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';
import * as Testing from '../source';

/**
 * Test case class.
 */
@Class.Describe()
export class Case extends Testing.Case {
  /**
   * Test the isTrue assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsTrue(): void {
    this.isTrue(true);
    this.hasException(() => this.isTrue(false));
  }

  /**
   * Test the isFalse assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsFalse(): void {
    this.isFalse(false);
    this.hasException(() => this.isFalse(true));
  }

  /**
   * Test the isNaN assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsNaN(): void {
    this.isNaN(NaN);
    this.hasException(() => this.isNaN(0));
  }

  /**
   * Test the isNull assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsNull(): void {
    this.isNull(null);
    this.hasException(() => this.isNull(0));
    this.hasException(() => this.isNull(void 0));
  }

  /**
   * Test the isInfinite assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsInfinite(): void {
    this.isInfinite(Infinity);
    this.hasException(() => this.isInfinite(0));
    this.hasException(() => this.isInfinite(NaN));
  }

  /**
   * Test the isUndefined assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsUndefined(): void {
    this.isUndefined(void 0);
    this.hasException(() => this.isUndefined(0));
    this.hasException(() => this.isUndefined(null));
  }

  /**
   * Test the isEmpty assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsEmpty(): void {
    this.isEmpty([]);
    this.isEmpty({});
    this.isEmpty('');
    this.hasException(() => this.isEmpty(0));
    this.hasException(() => this.isEmpty(null));
  }

  /**
   * Test the isBoolean assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsBoolean(): void {
    this.isBoolean(true);
    this.isBoolean(false);
    this.hasException(() => this.isBoolean(0));
    this.hasException(() => this.isBoolean(1));
  }

  /**
   * Test the isString assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsString(): void {
    this.isString('string');
    this.hasException(() => this.isString(0));
  }

  /**
   * Test the isNumber assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsNumber(): void {
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
  @Class.Public()
  @Testing.Method()
  public testIsArray(): void {
    this.isArray([]);
    this.isArray(new Array());
    this.hasException(() => this.isArray(0));
  }

  /**
   * Test the isInstanceOf assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsInstanceOf(): void {
    this.isInstanceOf(this, Case);
    this.isInstanceOf(this, Testing.Case);
    this.hasException(() => this.isInstanceOf(this, Array));
  }

  /**
   * Test the isGreaterThan assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsGreaterThan(): void {
    this.isGreaterThan(1, 0);
    this.hasException(() => this.isGreaterThan(0, 1));
  }

  /**
   * Test the isGreaterThanOrEqual assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsGreaterThanOrEqual(): void {
    this.isGreaterThanOrEqual(1, 0);
    this.isGreaterThanOrEqual(0, 0);
    this.hasException(() => this.isGreaterThanOrEqual(0, 1));
  }

  /**
   * Test the isLessThan assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsLessThan(): void {
    this.isLessThan(0, 1);
    this.hasException(() => this.isLessThan(1, 0));
  }

  /**
   * Test the isLessThanOrEqual assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testIsLessThanOrEqual(): void {
    this.isLessThanOrEqual(0, 1);
    this.isLessThanOrEqual(1, 1);
    this.hasException(() => this.isLessThanOrEqual(1, 0));
  }

  /**
   * Test the areEquals assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testAreEquals(): void {
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
  @Class.Public()
  @Testing.Method()
  public testAreNotEquals(): void {
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
  @Class.Public()
  @Testing.Method()
  public testAreSame(): void {
    this.areSame(1, 1);
    this.areSame('1', '1');
    this.hasException(() => this.areSame(0, 1));
    this.hasException(() => this.areSame(1, '1'));
    this.hasException(() => this.areSame(true, false));
  }

  /**
   * Test the areNotSame assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testAreNotSame(): void {
    this.areNotSame(1, '1');
    this.areNotSame(1, true);
    this.hasException(() => this.areNotSame(1, 1));
    this.hasException(() => this.areNotSame('1', '1'));
    this.hasException(() => this.areNotSame(true, true));
  }

  /**
   * Test the hasProperty assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testHasProperty(): void {
    this.hasProperty(Object, 'toString');
    this.hasException(() => this.hasProperty(Object, 'unknown'));
  }

  /**
   * Test the hasMethod assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testHasMethod(): void {
    this.hasMethod(Object, 'toString');
    this.hasException(() => this.hasMethod(Object, 'unknown'));
  }

  /**
   * Test the hasIndex assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testHasIndex(): void {
    const list = ['a', 'b', 'c'];
    this.hasIndex(list, 0);
    this.hasIndex(list, 1);
    this.hasIndex(list, 2);
    this.hasException(() => this.hasIndex(list, 3));
  }

  /**
   * Test the hasValue assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testHasValue(): void {
    const list = ['a', 'b', 'c'];
    this.hasValue(list, 'a');
    this.hasValue(list, 'b');
    this.hasValue(list, 'c');
    this.hasException(() => this.hasValue(list, 'd'));
  }

  /**
   * Test the hasOnly assertion.
   */
  @Class.Public()
  @Testing.Method()
  public testHasOnly(): void {
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
  @Class.Public()
  @Testing.Method()
  public testHasException(): void {
    this.hasException(() => {
      throw new Error('Test exception');
    });
    this.hasException(() => {
      throw new TypeError('Test exception');
    }, TypeError);
    this.hasException(() => this.hasException(() => {}));
  }
}
