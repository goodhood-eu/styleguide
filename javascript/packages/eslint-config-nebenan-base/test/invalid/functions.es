/* eslint-disable no-unused-vars */

// expect: func-names
const foo3 = function namedFunction() {};

const reassignedProps = (data) => {
  // expect: no-param-reassign
  data = 'hello';
};

// expect: arrow-body-style
const returnInCurly = (a) => { return a; };

// expect: arrow-parens
const func = awesome => 'Arrow parens';
