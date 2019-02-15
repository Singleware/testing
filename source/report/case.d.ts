/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import { Map } from './map';
import { Method } from './method';

/**
 * Test case report, section interface.
 */
export interface Case {
  /**
   * Number of performed tests methods.
   */
  total: number;
  /**
   * Map of test case methods.
   */
  methods: Map<Method>;
  /**
   * Test case error message.
   */
  error?: string;
}
