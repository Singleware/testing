/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import { Assertion } from './assertion';

/**
 * Test case report, method interface.
 */
export interface Method {
  /**
   * Test method description.
   */
  description: string;
  /**
   * Test method assertions.
   */
  assertions: Assertion[];
  /**
   * Test method directive.
   */
  directive?: string;
  /**
   * Test method error message.
   */
  error?: string;
}
