import * as Class from '@singleware/class';
import * as Data from './data';
import * as Report from './report';
import * as Decorators from './decorators';
import * as Types from './types';
/**
 * Test case class.
 */
export declare class Case extends Class.Null {
    /**
     * Map of test data.
     */
    private static dataMap;
    /**
     * Gets the test case data associated to the specified test case type.
     * @param type Test case class.
     * @returns Returns the test case data.
     */
    private static getCaseData;
    /**
     * Register the specified assertion values.
     * @param type Assertion type.
     * @param actual Actual value.
     * @param expected Expected value.
     * @param success Determines whether the assertion was successful or not.
     * @returns Return the received success argument.
     */
    private addAssertion;
    /**
     * Determines whether the specified condition is true.
     * @param condition Condition to be verified.
     * @param message Message displayed when the condition is not true.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isTrue(condition: any, message?: string): void;
    /**
     * Determines whether the specified condition is false.
     * @param condition Condition to be verified.
     * @param message Message displayed when the condition is not false.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isFalse(condition: any, message?: string): void;
    /**
     * Determines whether the specified value is NaN.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not NaN.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isNaN(value: any, message?: string): void;
    /**
     * Determines whether the specified value is null.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not null.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isNull(value: any, message?: string): void;
    /**
     * Determines whether the specified value is infinite.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not infinite.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isInfinite(value: any, message?: string): void;
    /**
     * Determines whether the specified value is undefined.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not undefined.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isUndefined(value: any, message?: string): void;
    /**
     * Determines whether the specified value is empty.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not empty.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isEmpty(value: any, message?: string): void;
    /**
     * Determines whether the specified value is a boolean type.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not a boolean type.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isBoolean(value: any, message?: string): void;
    /**
     * Determines whether the specified value is a string type.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not a string type.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isString(value: any, message?: string): void;
    /**
     * Determines whether the specified value is a number type.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not a number type.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isNumber(value: any, message?: string): void;
    /**
     * Determines whether the specified value is an array type.
     * @param value Value to be verified.
     * @param message Message displayed when the value is not an array type.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isArray(value: any, message?: string): void;
    /**
     * Determines whether the specified value is an instance of the expected type.
     * @param value Value to be verified.
     * @param type Expected type.
     * @param message Message displayed when the value is not an instance of the expected type.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isInstanceOf(value: any, type: Types.Constructor<any>, message?: string): void;
    /**
     * Determines whether the actual is greater than the expected value.
     * @param actual Actual value.
     * @param expected Expected value.
     * @param message Message displayed when the actual value is not greater than the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isGreaterThan(actual: any, expected: any, message?: string): void;
    /**
     * Determines whether the actual value is greater than or equal the expected value.
     * @param actual Actual value.
     * @param expected Expected value.
     * @param message Message displayed when the actual value is not greater than or equal the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isGreaterThanOrEqual(actual: any, expected: any, message?: string): void;
    /**
     * Determines whether the actual value is less than the expected value.
     * @param actual Actual value.
     * @param expected Expected value.
     * @param message Message displayed when the value is not less than the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isLessThan(actual: any, expected: any, message?: string): void;
    /**
     * Determines whether the actual value is less than or equal the expected value.
     * @param actual Actual value.
     * @param expected Expected value.
     * @param message Message displayed when the actual value is not less than or equal the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected isLessThanOrEqual(actual: any, expected: any, message?: string): void;
    /**
     * Determines whether the specified values are equals.
     * @param first First value.
     * @param second Second value.
     * @param message Message displayed when the specified values are not equals.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected areEquals(first: any, second: any, message?: string): void;
    /**
     * Determines whether the specified values are not equals.
     * @param first First value.
     * @param second Second value.
     * @param message Message displayed when the specified values are equals.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected areNotEquals(first: any, second: any, message?: string): void;
    /**
     * Determines whether the specified values and types are the same.
     * @param first First value.
     * @param second Second value.
     * @param message Message displayed when the specified values are not the same.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected areSame(first: any, second: any, message?: string): void;
    /**
     * Determines whether the specified values and types are not the same.
     * @param first First value.
     * @param second Second value.
     * @param message Message displayed when the specified values are the same.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected areNotSame(first: any, second: any, message?: string): void;
    /**
     * Determines whether the specified array has the expected index.
     * @param array Array to be verified.
     * @param index Expected index.
     * @param message Message displayed when the array does not have the expected index.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected hasIndex(array: any[], index: number, message?: string): void;
    /**
     * Determines whether the specified object has the expected property.
     * @param object Object to be verified.
     * @param property Expected property.
     * @param message Message displayed when the object does not have the expected property.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected hasProperty(object: any, property: string, message?: string): void;
    /**
     * Determines whether the specified object has the expected method.
     * @param object Object to be verified.
     * @param method Expected method.
     * @param message Message displayed when the object does not have the expected method.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected hasMethod(object: any, method: string, message?: string): void;
    /**
     * Determines whether the specified array contains the given value.
     * @param array Source array.
     * @param expected Expected value.
     * @param message Message displayed when the array does not contains the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected hasValue(array: any[], expected: any, message?: string): void;
    /**
     * Determines whether the specified array contains only the expected value.
     * @param array Source array.
     * @param expected Expected value.
     * @param message Message displayed when the array does not contains only the expected value.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected hasOnly(array: any[], expected: any, message?: string): void;
    /**
     * Determines whether the specified callback throws an expected exception.
     * @param callback Callback to be performed.
     * @param type Optional exception class type.
     * @param message Message displayed when the callback does not throws the exception.
     * @throws Throws an error using the supplied or the default message when the assertion fails.
     */
    protected hasException(callback: Function, type?: Types.Constructor | undefined, message?: string): void;
    /**
     * Decorates the specified method to be a test case method.
     * @param properties Test method properties.
     * @returns Returns the decorator method.
     */
    static Method(properties?: Decorators.Method): MethodDecorator;
    /**
     * Get all test methods from the specified test case class.
     * @param type Test case class.
     * @return Returns the list of methods from the specified test case class.
     * @throws Throws an error when the specified test case class is not a described test case.
     */
    static getMethodList(type: Types.Constructor<Case>): Data.Method[];
    /**
     * Sets the assertion list into the specified test case class.
     * @param type Test case class.
     * @param assertions List of assertions.
     * @throws Throws an error when the specified test case class is not a described test case.
     */
    static setAssertionList(type: Types.Constructor<Case>, assertions: Report.Assertion[]): void;
}
