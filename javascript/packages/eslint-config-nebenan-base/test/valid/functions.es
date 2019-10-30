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
