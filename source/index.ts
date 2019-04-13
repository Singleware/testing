/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
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

import { Case } from './case';

/**
 * Decorates the specified method to be a test case method.
 * @param properties Test method properties.
 * @returns Returns the decorator method.
 */
export const Method = (properties?: Decorators.Method): Types.MethodDecorator => Case.Method(properties);
