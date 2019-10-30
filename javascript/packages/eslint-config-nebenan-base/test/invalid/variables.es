// expect: no-var, no-unused-vars
var foo = 'bar';

/* eslint-disable no-unused-vars */

// expect: no-mixed-operators
const check = true && true || true || true;

const operatorLineBreak = 1
// expect: operator-linebreak
+
2;

const constVar = 1;
// expect: no-const-assign
constVar = 2;
