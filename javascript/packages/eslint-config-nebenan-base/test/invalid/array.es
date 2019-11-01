/* eslint-disable no-unused-vars */

// expect: no-array-constructor
const arrayInstance = new Array();

// expect: array-callback-return
const noReturn = [].filter((item) => {
  if (item) return true;
});

// expect: array-bracket-spacing, no-multi-spaces
const spacedArray = [  1, 2];
