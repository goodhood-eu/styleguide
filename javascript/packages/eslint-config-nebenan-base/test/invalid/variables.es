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

// expect: quotes
const doubleQuotes = "Hello";

// expect: quotes
const templateString = `Capt. Janeway`;

// expect: template-curly-spacing
const templateStringWithSpace = `How are you ${ 1 }?`;

// expect: no-multi-str
const longText = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// expect: prefer-template
const joinedString = 'How are you' + 1 + '?';

// expect: no-useless-escape
const escapedString = 'Ba\s \m';

// expect: no-multi-assign, no-undef
const multiAssignA = multiAssignB = multiAssignC = 1;

let plusPlus = 1;
// expect: no-plusplus
plusPlus++;
