/* eslint-disable @typescript-eslint/no-unused-vars */

import 'eslint';
import alias from '@/typescript';

console.warn('Used dep', alias);

const requireInFunc = () => require('path');

const dynamicRequire = () => require(`${'path'}`);

export const notDefault = 1;

export { default } from 'eslint';
