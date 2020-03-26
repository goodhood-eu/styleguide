module.exports = {
  extends: ['airbnb-base'],
  env: {
    browser: true,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: [
          '.js',
          '.es',
        ],
      },
    },
  },
  rules: {
    'no-console': 'off',
    'no-restricted-syntax': [
      'error',

      'LabeledStatement',
      'WithStatement',
      'YieldExpression',
    ],
    'space-before-function-paren': ['error', 'never'],
    'global-require': 'off',
    'default-case': 'off',
    'no-continue': 'off',
    'prefer-template': 'warn',
    'arrow-parens': ['error', 'always'],
    'no-floating-decimal': 'off',
    'func-names': ['error', 'never'],
    'func-style': ['error', 'expression'], // completely disables function statements
    camelcase: 'off',
    'consistent-return': 'off',
    'no-mixed-operators': ['error', { allowSamePrecedence: true }],
    'no-param-reassign': ['error', { props: false }],
    'class-methods-use-this': 'off',
    'no-underscore-dangle': 'off',
    'object-curly-newline': 'off', // forces to write illegible code
    'function-paren-newline': 'off', // forces to write illegible code
    'prefer-destructuring': 'off', // forces to write broken code!
    'no-control-regex': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'prefer-promise-reject-errors': 'off',
    'import/no-dynamic-require': 'off',
    'import/extensions': ['error', 'never'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
  },
};
