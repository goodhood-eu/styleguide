/* eslint-disable no-unused-vars */

// expect: import/no-extraneous-dependencies
import 'chalk';

// expect: import/no-unresolved
import './unexisted_module';

const variable = 2;

// expect: import/first, import/extensions
import '../../package.json';
