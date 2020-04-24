const foo = 'bar';
console.warn('used variable', foo);

/* eslint-disable no-unused-vars */

const var_snake_case = 'ok';

const float = .2;

const _underscoredVariable = 1;

let canChange = 1;
canChange = 2;

const singleQuotes = 'Hello';

const templateString = `Capt. ${'Name'}`;

const longText = `
  This is a super long error that was thrown because
  of Batman. When you stop to think about how Batman had anything to do
  with this, you would get nowhere
  fast.
`;

const longTextAlternative = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';

const escapedString = 'Ba\' \t';

let plusPlus = 1;
plusPlus += 1;

const number = Number(1);
const numberParse = parseInt('1', 10);

const str = String('string');

const bool = Boolean('string');

class Cls {}
// expect: new-cap
const instance = new Cls();
