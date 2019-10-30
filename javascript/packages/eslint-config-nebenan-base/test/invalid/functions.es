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

if (func === 1) {
  // expect: no-inner-declarations
  function blockScope() {}
}

// expect: no-new-func
const funcConstructor = new Function('a', 'b', 'return a + b');

// expect: space-before-blocks, space-before-function-paren
const spacedFunc = function (){};

const argsArray = [1, 2, 3];
// expect: prefer-spread
console.log.apply(console, argsArray);

// expect: prefer-arrow-callback
[].map(function() { return 1; });

// expect: no-confusing-arrow
const arrowInArrow = () => argsArray >= 1 ? 1 : 2;

const lineBreak = () =>
// expect: implicit-arrow-linebreak
  1;

const lineBreakAlternative = () =>
// expect: implicit-arrow-linebreak
  (1);
