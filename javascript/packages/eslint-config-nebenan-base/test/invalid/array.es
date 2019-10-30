/* eslint-disable no-unused-vars */

// expect: no-array-constructor
const arrayInstance = new Array();

// expect: array-callback-return
const noReturn = [].filter((item) => {
  if (item) return true;
});
