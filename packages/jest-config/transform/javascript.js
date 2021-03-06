/**
 * Copyright IBM Corp. 2020, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

'use strict';

const { createTransformer } = require('babel-jest');
const babelOptions = require('babel-preset-ibm-cloud-paks/test');

module.exports = createTransformer(babelOptions);
