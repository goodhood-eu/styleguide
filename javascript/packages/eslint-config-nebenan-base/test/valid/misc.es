/* eslint-disable no-unused-vars */

Promise.reject('Reject with string');

console.warn('Can use console');

for (let i = 0; i < 10; i += 1) {
  console.warn('Can use continue');
  continue;
}

const condition = 1 === true;

switch (1) {
  case true: {
    const insideSwitch = 1;
    break;
  }
}

const ternary = condition === 1 ? null : 5;
