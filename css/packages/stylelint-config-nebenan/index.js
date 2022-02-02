module.exports = {
  extends: 'stylelint-config-standard-scss',
  plugins: [
    'stylelint-order',
  ],
  rules: {
    'at-rule-empty-line-before': ['always', {
      except: [
        'blockless-after-same-name-blockless',
        'first-nested',
      ],
      ignore: ['after-comment'],
      ignoreAtRules: ['if', 'else'],
    }],

    'at-rule-no-unknown': null,
    'at-rule-disallowed-list': ['extend'],

    'block-opening-brace-newline-after': ['always'],
    'block-closing-brace-newline-before': ['always'],
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['if', 'else'],
    }],

    'color-named': 'never',

    'declaration-empty-line-before': null,

    'function-name-case': 'lower',

    'max-nesting-depth': [3, { ignoreAtRules: ['media'] }],
    'number-leading-zero': 'never',
    'no-descending-specificity': null,

    'selector-max-id': 0,
    'selector-class-pattern': '^[a-zA-Z]+(-[\\w-]+)?$',

    'scss/at-rule-no-unknown': true,
    'scss/at-function-parentheses-space-before': 'never',
    'scss/at-else-if-parentheses-space-before': 'never',
    'scss/at-function-pattern': '^[a-z0-9_\\-]+$',
    'scss/at-mixin-argumentless-call-parentheses': 'never',
    'scss/at-mixin-pattern': '^[a-z0-9_\\-]+$',
    'scss/comment-no-loud': true,
    'scss/declaration-nested-properties': 'never',
    'scss/dollar-variable-pattern': '^[a-z0-9_\\-]+$',
    'scss/percent-placeholder-pattern': '^we-are-not-using-placeholders-at-this-time$',
    'scss/at-import-partial-extension': null,
    'scss/comment-no-empty': null,

    'order/order': [
      'dollar-variables',
      'custom-properties',
      {
        type: 'at-rule',
        name: 'include',
      },
      'declarations',
      'rules',
      {
        type: 'at-rule',
        name: 'keyframes',
      },
    ],
    'order/properties-order': [
      'min-width',
      'min-height',
      'max-width',
      'max-height',

      'width',
      'height',

      'margin',
      'margin-top',
      'margin-right',
      'margin-bottom',
      'margin-left',

      'padding',
      'padding-top',
      'padding-right',
      'padding-bottom',
      'padding-left',

      'content',
      'display',

      'float',
      'clear',
      'vertical-align',

      'flex',
      'flex-grow',
      'flex-shrink',
      'flex-basis',
      'flex-direction',

      'flex-order',
      'flex-wrap',
      'flex-flow',

      'order',
      'justify-content',
      'align-self',
      'align-items',
      'align-content',
      'flex-pack',
      'flex-align',

      'overflow',
      'overflow-x',
      'overflow-y',

      'position',
      'top',
      'right',
      'bottom',
      'left',

      'transform',
      'transform-origin',

      'z-index',

      'visibility',
      'opacity',

      'border',
      'border-width',
      'border-top',
      'border-top-width',
      'border-right',
      'border-right-width',
      'border-bottom',
      'border-bottom-width',
      'border-left',
      'border-left-width',
    ],
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'export',
          'import',
          'global',
          'local',
          'external',
        ],
      },
    ],
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['from'],
      },
    ],
    'property-no-unknown': [
      true,
      {
        ignoreSelectors: [':export', /^:import/],
      },
    ],
  },
};
