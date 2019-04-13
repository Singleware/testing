/*
 * Copyright (C) 2018-2019 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import { Map } from './map';
import { Case } from './case';

/**
 * Test case report, suite interface.
 */
export interface Suite {
  /**
   * Number of performed tests cases.
   */
  total: number;
  /**
   * Number of errors during the performing.
   */
  errors: number;
  /**
   * Map of test cases.
   */
  cases: Map<Case>;
}
