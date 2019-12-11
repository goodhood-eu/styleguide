/* eslint-disable no-unused-vars */

const reassignedProps = (data) => {
  data.hello = 'hello';
};

const inconsistentReturn = () => {
  if (reassignedProps === 1) return true;
};

const noDestruction = (data) => {
  const open = data.open;
  open();
};

const returnInCurly = (a) => a;

if (returnInCurly === 1) {
  const blockScope = () => 'Hello';
}

const spacedFunc = function() {};

const argsArray = [1, 2, 3];
console.log(...argsArray);

[].map(() => 1);

const arrowInArrow = () => (argsArray >= 1 ? 1 : 2);

const lineBreak = () => (
  1
);

const conditionReturn = (arg) => {
  if (arg) {
    return true;
  }
  return false;
};
