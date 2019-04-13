/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Data from '../data';

/**
 * Test case report, assertion interface.
 */
export interface Assertion {
  /**
   * Assertion type.
   */
  type: Data.Assertion;
  /**
   * Actual value.
   */
  actual: any;
  /**
   * Expected value.
   */
  expected: any;
  /**
   * Determines the assertion success status.
   */
  success: boolean;
}
