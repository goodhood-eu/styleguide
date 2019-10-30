/* eslint-disable no-unused-vars */

import 'eslint';
import pkg from '../../package';

console.warn('Used dep', pkg);

const requireInFunc = () => require('path');

const dynamicRequire = () => require(`${'path'}`);

export const notDefault = 1;
