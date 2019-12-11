/* eslint-disable no-unused-vars */

// expect: import/no-extraneous-dependencies
import 'chalk';

// expect: import/no-duplicates
import module from '../../index';
// expect: import/no-duplicates
import { some } from '../../index';

// expect: import/no-unresolved
import './unexisted_module';

const variable = 2;

// expect: import/first, import/extensions
import '../../package.json';

// expect: import/no-mutable-exports
let mutable = 1;
mutable = 2;
export { mutable };
