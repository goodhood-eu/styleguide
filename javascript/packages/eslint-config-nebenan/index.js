module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'nebenan-base',
  ],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.es', '.jsx'] }],
    'react/jsx-no-bind': 'off',
    'react/prop-types': ['error', { skipUndeclared: true }],
    'react/forbid-prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-danger': 'off',
    'react/require-default-props': 'off',
    'react/jsx-max-props-per-line': ['error', { maximum: 3, when: 'multiline' }],
    'react/sort-comp': ['error', {
      order: [
        'static-methods',
        'lifecycle',
        '/^(get|set)(?!(DefaultState$|DefaultProps$|ChildContext$)).+$/',
        '/^(get|set).+$/',
        'everything-else',
        '/^handle.+$/',
        '/^render.+$/',
        'render',
      ],
    }],
    'react/default-props-match-prop-types': 'off',
    'react/destructuring-assignment': 'off', // bugged
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/no-this-in-sfc': 'off', // broken
    'react/react-in-jsx-scope': 'off', // useless with new react transform
    'react/jsx-uses-react': 'off',
    'react/function-component-definition': ['error', {
      'namedComponents': 'arrow-function',
      'unnamedComponents': 'arrow-function',
    }],
    'react/no-unused-class-component-methods': 'off',

    'react-hooks/exhaustive-deps': 'off', // doesn't work well enough with custom hooks

    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/label-has-for': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off', // bugged
  },
};
