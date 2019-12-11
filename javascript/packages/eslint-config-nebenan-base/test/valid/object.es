/* eslint-disable no-unused-vars */

const objInstance = {};

const objWihMetods = {
  hello: () => {
    console.warn('hello');
  },
};

const objProps = {
  a: 1,
};

const objectTwoLines = { a: 1,
  b: 3 };

Object.prototype.hasOwnProperty.call(objProps, 'a');

const mergedObj = { ...{ a: 1 }, ...{ b: 2 } };

const objectProps = { a: 1 };
const props = objectProps.a;
