const path = require('path');

module.exports = {
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(`${__dirname}/../../`)],
        ],
        extensions: ['.es', '.js', '.jsx', '.ts', '.tsx', '.json'],
      },
    },
  },
  plugins: ['unicorn'],
  rules: {
    'arrow-parens': ['error', 'always'],
    'camelcase': 'off',
    'class-methods-use-this': 'off',
    'consistent-return': 'off',
    'curly': ['error', 'multi-line'],
    'default-case': 'off',
    'default-param-last': 'off',
    'func-names': ['error', 'never'],
    'func-style': ['error', 'expression'], // completely disables function statements
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off', // forces to write illegible code
    'global-require': 'off',
    'import/extensions': ['error', 'never'],
    'import/no-dynamic-require': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-console': 'off',
    'no-continue': 'off',
    'no-control-regex': 'off',
    'no-floating-decimal': 'off',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 0, maxEOF: 0 }],
    'no-param-reassign': ['error', { props: false }],
    'no-restricted-exports': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
      'YieldExpression',
    ],
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off', // forces to write illegible code
    'prefer-destructuring': 'off', // forces to write broken code!
    'prefer-promise-reject-errors': 'off',
    'prefer-template': 'warn',
    'space-before-function-paren': ['error', 'never'],
    'unicorn/filename-case': ['error', { case: 'snakeCase' }],
  },
};
