/* eslint-disable no-unused-vars */

// expect: eqeqeq
const condition = 1 == true;

switch (1) {
  case true:
    // expect: no-case-declarations
    const insideSwitch = 1;
    break;
}

// expect: no-nested-ternary
const nestedTernary = condition > true
  // expect: operator-linebreak
  ? null
  // expect: operator-linebreak
  : condition > 3 ? 5 : null;
