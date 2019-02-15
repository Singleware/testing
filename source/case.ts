/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Class from '@singleware/class';

import * as Data from './data';
import * as Report from './report';
import * as Decorators from './decorators';
import * as Types from './types';

/**
 * Test case class.
 */
@Class.Describe()
export class Case extends Class.Null {
  /**
   * Map of test data.
   */
  @Class.Private()
  private static dataMap = new WeakMap<Object, Data.Case>();

  /**
   * Gets the test case data associated to the specified test case type.
   * @param type Test case class.
   * @returns Returns the test case data.
   */
  @Class.Private()
  private static getCaseData(type: Types.Constructor<Case>): Data.Case {
    let caseData: Data.Case | undefined;
    if (!(caseData = Case.dataMap.get(type))) {
      Case.dataMap.set(
        type,
        (caseData = {
          name: type.name,
          methods: [],
          assertions: []
        })
      );
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
  @Class.Private()
  private addAssertion(type: Data.Assertion, actual: any, expected: any, success: boolean): boolean {
    const caseData = <Data.Case>Case.dataMap.get(Reflect.getPrototypeOf(this).constructor);
    caseData.assertions.push(<Report.Assertion>{
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
  @Class.Protected()
  protected isTrue(condition: any, message?: string): void {
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
  @Class.Protected()
  protected isFalse(condition: any, message?: string): void {
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
  @Class.Protected()
  protected isNaN(value: any, message?: string): void {
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
  @Class.Protected()
  protected isNull(value: any, message?: string): void {
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
  @Class.Protected()
  protected isInfinite(value: any, message?: string): void {
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
  @Class.Protected()
  protected isUndefined(value: any, message?: string): void {
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
  @Class.Protected()
  protected isEmpty(value: any, message?: string): void {
    if (value instanceof Array) {
      if (!this.addAssertion(Data.Assertion.IsEmpty, `array(${value.length})`, 'array(0)', value.length === 0)) {
        throw new Error(message || `The given array is not empty.`);
      }
    } else if (value instanceof Object) {
      if (!this.addAssertion(Data.Assertion.IsEmpty, `object{...}`, 'object{}', Object.keys(value).length === 0)) {
        throw new Error(message || `The given object is not empty.`);
      }
    } else if (!this.addAssertion(Data.Assertion.IsEmpty, `string(${value.length})`, 'string(0)', value.length === 0)) {
      throw new Error(message || `The given value is not empty.`);
    }
  }

  /**
   * Determines whether the specified value is a boolean type.
   * @param value Value to be verified.
   * @param message Message displayed when the value is not a boolean type.
   * @throws Throws an error using the supplied or the default message when the assertion fails.
   */
  @Class.Protected()
  protected isBoolean(value: any, message?: string): void {
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
  @Class.Protected()
  protected isString(value: any, message?: string): void {
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
  @Class.Protected()
  protected isNumber(value: any, message?: string): void {
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
  @Class.Protected()
  protected isArray(value: any, message?: string): void {
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
  @Class.Protected()
  protected isInstanceOf(value: any, type: Types.Constructor<any>, message?: string): void {
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
  @Class.Protected()
  protected isGreaterThan(actual: any, expected: any, message?: string): void {
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
  @Class.Protected()
  protected isGreaterThanOrEqual(actual: any, expected: any, message?: string): void {
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
  @Class.Protected()
  protected isLessThan(actual: any, expected: any, message?: string): void {
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
  @Class.Protected()
  protected isLessThanOrEqual(actual: any, expected: any, message?: string): void {
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
  @Class.Protected()
  protected areEquals(first: any, second: any, message?: string): void {
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
  @Class.Protected()
  protected areNotEquals(first: any, second: any, message?: string): void {
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
  @Class.Protected()
  protected areSame(first: any, second: any, message?: string): void {
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
  @Class.Protected()
  protected areNotSame(first: any, second: any, message?: string): void {
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
  @Class.Protected()
  protected hasIndex(array: any[], index: number, message?: string): void {
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
  @Class.Protected()
  protected hasProperty(object: any, property: string, message?: string): void {
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
  @Class.Protected()
  protected hasMethod(object: any, method: string, message?: string): void {
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
  @Class.Protected()
  protected hasValue(array: any[], expected: any, message?: string): void {
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
  @Class.Protected()
  protected hasOnly(array: any[], expected: any, message?: string): void {
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
  @Class.Protected()
  protected hasException(callback: Function, type?: Types.Constructor | undefined, message?: string): void {
    let status = false;
    try {
      callback.call({});
    } catch (exception) {
      status = !type || exception instanceof type;
    } finally {
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
  @Class.Public()
  public static Method(properties?: Decorators.Method): MethodDecorator {
    return <T>(scope: Object, name: string | symbol, descriptor: TypedPropertyDescriptor<T>): void => {
      const caseData = this.getCaseData(<Types.Constructor<Case>>scope.constructor);
      caseData.methods.push(<Data.Method>{ ...properties, name: name });
    };
  }

  /**
   * Get all test methods from the specified test case class.
   * @param type Test case class.
   * @return Returns the list of methods from the specified test case class.
   * @throws Throws an error when the specified test case class is not a described test case.
   */
  @Class.Public()
  public static getMethodList(type: Types.Constructor<Case>): Data.Method[] {
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
  @Class.Public()
  public static setAssertionList(type: Types.Constructor<Case>, assertions: Report.Assertion[]): void {
    const caseData = this.dataMap.get(type.prototype.constructor);
    if (!caseData) {
      throw new Error(`The specified class is not described as test case class.`);
    }
    caseData.assertions = assertions;
  }
}
