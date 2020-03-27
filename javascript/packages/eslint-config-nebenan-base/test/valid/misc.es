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

const variableCheck = condition || null;

const operatorOneLine = 1 + 1;

if (condition > true) {
  console.warn('With braces');
}

if (condition > true) console.warn('In one line');
else console.warn('Same for else');

if (condition > true) {
  console.warn('Do smth');
} else {
  console.warn('Do smth else');
}

// Comment with space

const indent = () => {
  console.warn('2 space');
};

if (condition > true) {
  console.warn('Proper spacing before blocks');
}

const sum = 5 + 5;

const longCode = (
  condition > 5
  && condition === true
  && condition < 3
  && condition > 5
  && condition > 5
  && condition > 5
  && condition > 5
  && condition > 5
);

const comma = [1, 2];

const computedPropObj = {};
const computedProp = computedPropObj['@key'];

const spacedKeys = {
  a: 1,
};

const commaStyle = [
  1,
  2,
  3,
];
