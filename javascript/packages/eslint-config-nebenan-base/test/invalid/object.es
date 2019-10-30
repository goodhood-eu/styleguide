/* eslint-disable no-unused-vars */

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
