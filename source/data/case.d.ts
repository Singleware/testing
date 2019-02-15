/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */
import * as Report from '../report';

import { Method } from './method';

/**
 * Test data, case interface.
 */
export interface Case {
  /**
   * Test case name.
   */
  name: string;
  /**
   * Test case methods.
   */
  methods: Method[];
  /**
   * Test case assertion list.
   */
  assertions: Report.Assertion[];
}
