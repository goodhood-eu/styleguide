/* eslint-disable no-unused-vars */

import 'eslint';
import alias from '@/packages/eslint-config-nebenan-base/package-lock';
import pkg from '../../package';

console.warn('Used dep', alias, pkg);

const requireInFunc = () => require('path');

const dynamicRequire = () => require(`${'path'}`);

export const notDefault = 1;
