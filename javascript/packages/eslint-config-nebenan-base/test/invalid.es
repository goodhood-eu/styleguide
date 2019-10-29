// ============ VARIABLES ============
// expect: no-var, no-unused-vars
var foo = 'bar';

/* eslint-disable no-unused-vars */

// expect: arrow-parens
const func = awesome => `I return ${awesome}`;

// expect: semi
func()

const checkV = 1;
// expect: no-mixed-operators
const check = checkV && checkV || checkV || checkV;

const sumOperators = 1
// expect: operator-linebreak
+
2;


// ============ CLASS ============
class Person {
  // expect: space-before-function-paren
  hello () {
    // expect: quotes
    console.warn("Hello");
  }
  // expect: lines-between-class-members
  walk() {}

  // expect: no-dupe-class-members
  walk() {}
}


// ============ FUNCTION ============
// expect: func-names
const foo3 = function namedFunction() {
// expect: no-extra-semi
};

const reassignedProps = (data) => {
  // expect: no-param-reassign
  data = 'hello';
};


// ============ IMPORT ============
// expect: import/first, import/extensions
import './valid.es';

// expect: import/first, import/no-extraneous-dependencies
import 'chalk';

// expect: import/first, import/no-unresolved
import './not_exist';

const constVar = 1;
// expect: no-const-assign
constVar = 2;

// expect: arrow-body-style
const returnInCurly = (a) => { return a; };


// ============ OBJECT ============
// expect: no-new-object
const objInstance = new Object({});

const objWihMetods = {
  // expect: object-shorthand
  hello: function() {
    console.warn('hello');
  },
};

const objQuoteProps = {
  // expect: quote-props
  'a': 1,
};

// expect: no-prototype-builtins
objQuoteProps.hasOwnProperty('a');

// expect: prefer-object-spread
const mergedObj = Object.assign({}, { a: 1 }, { b: 2 });


// ============ ARRAY ============
// expect: no-array-constructor
const arrayInstance = new Array();
