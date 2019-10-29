import 'eslint';
import './invalid';

const foo = 'bar';

const func = () => `I return ${foo}`;

func();

/* eslint-disable no-unused-vars */

class Person {
  methodWithoutThis() {
    console.warn('Hello');
  }

  hello() {}
}

const var_snake_case = 'ok';

const requireInFunc = () => require('path');

for (let i = 0; i < var_snake_case.length; i += 1) {
  continue;
}

const float = .2;

const inconsistentReturn = () => {
  if (var_snake_case === 1) return true;
};

const reassignedProps = (data) => {
  data.hello = 'hello';
};

const _underscoredVariable = 1;

const objectLiteral = { a: 1,
  b: 3 };

const noDestruction = (data) => {
  const open = data.open;
  open();
};

const sumOperator = 1 + 1;

const rejectPromiseWithString = () => Promise.reject('error');

const dynamicRequire = () => require(`${'path'}`);

export const notDefault = 1;

console.warn('Can use console');

let canChange = 1;
canChange = 2;

const returnInCurly = (a) => a;

const objInstance = {};

const objWihMetods = {
  hello: () => {
    console.warn('hello');
  },
};

const objProps = {
  a: 1,
};

Object.prototype.hasOwnProperty.call(objProps, 'a');

const mergedObj = { ...{ a: 1 }, ...{ b: 2 } };
