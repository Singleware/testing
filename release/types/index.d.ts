export { Suite } from './suite';
export { Case } from './case';
export { Constructor, ClassDecorator, MethodDecorator } from './types';
import * as Loggers from './loggers';
export import Loggers = Loggers;
import * as Report from './report';
export import Report = Report;
/**
 * Declarations.
 */
import * as Decorators from './decorators';
import * as Types from './types';
/**
 * Decorates the specified method to be a test case method.
 * @param properties Test method properties.
 * @returns Returns the decorator method.
 */
export declare const Method: (properties?: Decorators.Method | undefined) => Types.MethodDecorator;
