/**
 * Copyright (C) 2018 Silas B. Domingos
 * This source code is licensed under the MIT License as described in the file LICENSE.
 */

/**
 * Test data, method interface.
 */
export interface Method {
  /**
   * Method name.
   */
  name: string;
  /**
   * Method description.
   */
  description: string;
  /**
   * Method directive.
   */
  directive?: string;
}
