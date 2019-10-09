// Expect-errors: no-var, no-unused-vars
var foo = 'bar';

// Expect-errors: arrow-parens
const func = awesome => `I return ${awesome}`;

// Expect-errors: semi
func()
