const path = require('path');

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  globals: {},
  parser: null,
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      generators: false,
      objectLiteralDuplicateProperties: false,
      jsx: true,
    },
  },
  plugins: [
    'react',
    'jsx-a11y',
    'react-hooks',
    'import',
    'unicorn',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: [
          '.es',
          '.jsx',
        ],
      },
    ],
    'react/jsx-no-bind': [
      'off',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],
    'react/prop-types': [
      'error',
      {
        skipUndeclared: true,
      },
    ],
    'react/forbid-prop-types': [
      'off',
      {
        forbid: [
          'any',
          'array',
          'object',
        ],
        checkContextTypes: true,
        checkChildContextTypes: true,
      },
    ],
    'react/jsx-props-no-spreading': [
      'off',
      {
        html: 'enforce',
        custom: 'enforce',
        explicitSpread: 'ignore',
        exceptions: [],
      },
    ],
    'react/no-did-mount-set-state': [
      'off',
    ],
    'react/no-danger': [
      'off',
    ],
    'react/require-default-props': [
      'off',
      {
        forbidDefaultForRequired: true,
      },
    ],
    'react/jsx-max-props-per-line': [
      'error',
      {
        maximum: 3,
        when: 'multiline',
      },
    ],
    'react/sort-comp': [
      'error',
      {
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
      },
    ],
    'react/default-props-match-prop-types': [
      'off',
      {
        allowRequiredDefaults: false,
      },
    ],
    'react/destructuring-assignment': [
      'off',
      'always',
    ],
    'react/jsx-one-expression-per-line': [
      'off',
      {
        allow: 'single-child',
      },
    ],
    'react/jsx-props-no-multi-spaces': [
      'off',
    ],
    'react/no-this-in-sfc': [
      'off',
    ],
    'react/react-in-jsx-scope': [
      'off',
    ],
    'react/jsx-uses-react': [
      'off',
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/no-unused-class-component-methods': [
      'off',
    ],
    'react/no-unstable-nested-components': [
      'error',
      {
        allowAsProps: true,
      },
    ],
    'react-hooks/exhaustive-deps': [
      'off',
    ],
    'jsx-a11y/no-static-element-interactions': [
      'off',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/anchor-has-content': [
      'off',
      {
        components: [],
      },
    ],
    'jsx-a11y/media-has-caption': [
      'off',
      {
        audio: [],
        video: [],
        track: [],
      },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': [
      'off',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ],
    'jsx-a11y/label-has-for': [
      'off',
      {
        components: [],
        required: {
          every: [
            'nesting',
            'id',
          ],
        },
        allowChildren: false,
      },
    ],
    'jsx-a11y/label-has-associated-control': [
      'off',
      {
        labelComponents: [],
        labelAttributes: [],
        controlComponents: [],
        assert: 'both',
        depth: 25,
      },
    ],
    'jsx-a11y/click-events-have-key-events': [
      'off',
    ],
    'jsx-a11y/anchor-is-valid': [
      'off',
      {
        components: [
          'Link',
        ],
        specialLink: [
          'to',
        ],
        aspects: [
          'noHref',
          'invalidHref',
          'preferButton',
        ],
      },
    ],
    'jsx-quotes': [
      'error',
      'prefer-double',
    ],
    'import/no-unresolved': [
      2,
      {
        ignore: [
          '\\.svg\\?url',
          '\\.webp\\?width',
        ],
        caseSensitive: true,
        caseSensitiveStrict: false,
      },
    ],
    'no-console': [
      'off',
    ],
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
      'YieldExpression',
    ],
    'space-before-function-paren': [
      'error',
      'never',
    ],
    'global-require': [
      'off',
    ],
    'default-case': [
      'off',
      {
        commentPattern: '^no default$',
      },
    ],
    'no-continue': [
      'off',
    ],
    'prefer-template': [
      'warn',
    ],
    'arrow-parens': [
      'error',
      'always',
    ],
    'no-floating-decimal': [
      'off',
    ],
    'func-names': [
      'error',
      'never',
    ],
    'func-style': [
      'error',
      'expression',
    ],
    camelcase: [
      'off',
      {
        properties: 'never',
        ignoreDestructuring: false,
        ignoreImports: false,
        ignoreGlobals: false,
      },
    ],
    'consistent-return': [
      'off',
    ],
    'no-mixed-operators': [
      'error',
      {
        allowSamePrecedence: true,
      },
    ],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'class-methods-use-this': [
      'off',
      {
        exceptMethods: [],
        enforceForClassFields: true,
      },
    ],
    'no-underscore-dangle': [
      'off',
      {
        allow: [],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
        allowAfterThisConstructor: false,
        allowFunctionParams: true,
      },
    ],
    'object-curly-newline': [
      'off',
      {
        ObjectExpression: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ObjectPattern: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ImportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
        ExportDeclaration: {
          minProperties: 4,
          multiline: true,
          consistent: true,
        },
      },
    ],
    'function-paren-newline': [
      'off',
      'multiline-arguments',
    ],
    'prefer-destructuring': [
      'off',
      {
        VariableDeclarator: {
          array: false,
          object: true,
        },
        AssignmentExpression: {
          array: true,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'default-param-last': [
      'off',
    ],
    'no-restricted-exports': [
      'off',
      {
        restrictedNamedExports: [
          'default',
          'then',
        ],
      },
    ],
    'function-call-argument-newline': [
      'off',
      'consistent',
    ],
    'no-control-regex': [
      'off',
    ],
    curly: [
      'error',
      'multi-line',
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'prefer-promise-reject-errors': [
      'off',
      {
        allowEmptyReject: true,
      },
    ],
    'import/no-dynamic-require': [
      'off',
    ],
    'import/extensions': [
      'error',
      'never',
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
      },
    ],
    'import/prefer-default-export': [
      'off',
    ],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        case: 'snakeCase',
      },
    ],
    strict: [
      'error',
      'never',
    ],
    'import/named': [
      'error',
    ],
    'import/default': [
      'off',
    ],
    'import/namespace': [
      'off',
    ],
    'import/export': [
      'error',
    ],
    'import/no-named-as-default': [
      'error',
    ],
    'import/no-named-as-default-member': [
      'error',
    ],
    'import/no-deprecated': [
      'off',
    ],
    'import/no-mutable-exports': [
      'error',
    ],
    'import/no-commonjs': [
      'off',
    ],
    'import/no-amd': [
      'error',
    ],
    'import/no-nodejs-modules': [
      'off',
    ],
    'import/first': [
      'error',
    ],
    'import/imports-first': [
      'off',
    ],
    'import/no-duplicates': [
      'error',
    ],
    'import/no-namespace': [
      'off',
    ],
    'import/order': [
      'error',
      {
        groups: [
          [
            'builtin',
            'external',
            'internal',
          ],
        ],
        warnOnUnassignedImports: false,
      },
    ],
    'import/newline-after-import': [
      'error',
    ],
    'import/no-restricted-paths': [
      'off',
    ],
    'import/max-dependencies': [
      'off',
      {
        max: 10,
      },
    ],
    'import/no-absolute-path': [
      'error',
    ],
    'import/no-internal-modules': [
      'off',
      {
        allow: [],
      },
    ],
    'import/unambiguous': [
      'off',
    ],
    'import/no-webpack-loader-syntax': [
      'error',
    ],
    'import/no-unassigned-import': [
      'off',
    ],
    'import/no-named-default': [
      'error',
    ],
    'import/no-anonymous-default-export': [
      'off',
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/exports-last': [
      'off',
    ],
    'import/group-exports': [
      'off',
    ],
    'import/no-default-export': [
      'off',
    ],
    'import/no-named-export': [
      'off',
    ],
    'import/no-self-import': [
      'error',
    ],
    'import/no-cycle': [
      'error',
      {
        maxDepth: '∞',
        ignoreExternal: false,
      },
    ],
    'import/no-useless-path-segments': [
      'error',
      {
        commonjs: true,
      },
    ],
    'import/dynamic-import-chunkname': [
      'off',
      {
        importFunctions: [],
        webpackChunknameFormat: '[0-9a-zA-Z-_/.]+',
      },
    ],
    'import/no-relative-parent-imports': [
      'off',
    ],
    'import/no-unused-modules': [
      'off',
      {
        ignoreExports: [],
        missingExports: true,
        unusedExports: true,
      },
    ],
    'import/no-import-module-exports': [
      'error',
      {
        exceptions: [],
      },
    ],
    'import/no-relative-packages': [
      'error',
    ],
    'arrow-body-style': [
      'error',
      'as-needed',
      {
        requireReturnForObjectLiteral: false,
      },
    ],
    'arrow-spacing': [
      'error',
      {
        before: true,
        after: true,
      },
    ],
    'constructor-super': [
      'error',
    ],
    'generator-star-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'no-class-assign': [
      'error',
    ],
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-const-assign': [
      'error',
    ],
    'no-dupe-class-members': [
      'error',
    ],
    'no-duplicate-imports': [
      'off',
    ],
    'no-new-symbol': [
      'error',
    ],
    'no-restricted-imports': [
      'off',
      {
        paths: [],
        patterns: [],
      },
    ],
    'no-this-before-super': [
      'error',
    ],
    'no-useless-computed-key': [
      'error',
    ],
    'no-useless-constructor': [
      'error',
    ],
    'no-useless-rename': [
      'error',
      {
        ignoreDestructuring: false,
        ignoreImport: false,
        ignoreExport: false,
      },
    ],
    'no-var': [
      'error',
    ],
    'object-shorthand': [
      'error',
      'always',
      {
        ignoreConstructors: false,
        avoidQuotes: true,
      },
    ],
    'prefer-arrow-callback': [
      'error',
      {
        allowNamedFunctions: false,
        allowUnboundThis: true,
      },
    ],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-numeric-literals': [
      'error',
    ],
    'prefer-reflect': [
      'off',
    ],
    'prefer-rest-params': [
      'error',
    ],
    'prefer-spread': [
      'error',
    ],
    'require-yield': [
      'error',
    ],
    'rest-spread-spacing': [
      'error',
      'never',
    ],
    'sort-imports': [
      'off',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: [
          'none',
          'all',
          'multiple',
          'single',
        ],
      },
    ],
    'symbol-description': [
      'error',
    ],
    'template-curly-spacing': [
      'error',
    ],
    'yield-star-spacing': [
      'error',
      'after',
    ],
    'init-declarations': [
      'off',
    ],
    'no-catch-shadow': [
      'off',
    ],
    'no-delete-var': [
      'error',
    ],
    'no-label-var': [
      'error',
    ],
    'no-restricted-globals': [
      'error',
      {
        name: 'isFinite',
        message: 'Use Number.isFinite instead https://github.com/airbnb/javascript#standard-library--isfinite',
      },
      {
        name: 'isNaN',
        message: 'Use Number.isNaN instead https://github.com/airbnb/javascript#standard-library--isnan',
      },
      'addEventListener',
      'blur',
      'close',
      'closed',
      'confirm',
      'defaultStatus',
      'defaultstatus',
      'event',
      'external',
      'find',
      'focus',
      'frameElement',
      'frames',
      'history',
      'innerHeight',
      'innerWidth',
      'length',
      'location',
      'locationbar',
      'menubar',
      'moveBy',
      'moveTo',
      'name',
      'onblur',
      'onerror',
      'onfocus',
      'onload',
      'onresize',
      'onunload',
      'open',
      'opener',
      'opera',
      'outerHeight',
      'outerWidth',
      'pageXOffset',
      'pageYOffset',
      'parent',
      'print',
      'removeEventListener',
      'resizeBy',
      'resizeTo',
      'screen',
      'screenLeft',
      'screenTop',
      'screenX',
      'screenY',
      'scroll',
      'scrollbars',
      'scrollBy',
      'scrollTo',
      'scrollX',
      'scrollY',
      'self',
      'status',
      'statusbar',
      'stop',
      'toolbar',
      'top',
    ],
    'no-shadow': [
      'error',
    ],
    'no-shadow-restricted-names': [
      'error',
    ],
    'no-undef': [
      'error',
    ],
    'no-undef-init': [
      'error',
    ],
    'no-undefined': [
      'off',
    ],
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      'error',
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],
    'array-bracket-newline': [
      'off',
      'consistent',
    ],
    'array-element-newline': [
      'off',
      {
        multiline: true,
        minItems: 3,
      },
    ],
    'array-bracket-spacing': [
      'error',
      'never',
    ],
    'block-spacing': [
      'error',
      'always',
    ],
    'brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    'capitalized-comments': [
      'off',
      'never',
      {
        line: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
        block: {
          ignorePattern: '.*',
          ignoreInlineComments: true,
          ignoreConsecutiveComments: true,
        },
      },
    ],
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [
      'error',
      'last',
      {
        exceptions: {
          ArrayExpression: false,
          ArrayPattern: false,
          ArrowFunctionExpression: false,
          CallExpression: false,
          FunctionDeclaration: false,
          FunctionExpression: false,
          ImportDeclaration: false,
          ObjectExpression: false,
          ObjectPattern: false,
          VariableDeclaration: false,
          NewExpression: false,
        },
      },
    ],
    'computed-property-spacing': [
      'error',
      'never',
    ],
    'consistent-this': [
      'off',
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'func-call-spacing': [
      'error',
      'never',
    ],
    'func-name-matching': [
      'off',
      'always',
      {
        includeCommonJSModuleExports: false,
        considerPropertyDescriptor: true,
      },
    ],
    'id-denylist': [
      'off',
    ],
    'id-length': [
      'off',
    ],
    'id-match': [
      'off',
    ],
    'implicit-arrow-linebreak': [
      'error',
      'beside',
    ],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        FunctionDeclaration: {
          parameters: 1,
          body: 1,
        },
        FunctionExpression: {
          parameters: 1,
          body: 1,
        },
        CallExpression: {
          arguments: 1,
        },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoredNodes: [
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
        ],
        ignoreComments: false,
        offsetTernaryExpressions: false,
      },
    ],
    'key-spacing': [
      'error',
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    'keyword-spacing': [
      'error',
      {
        before: true,
        after: true,
        overrides: {
          return: {
            after: true,
          },
          throw: {
            after: true,
          },
          case: {
            after: true,
          },
        },
      },
    ],
    'line-comment-position': [
      'off',
      {
        position: 'above',
        ignorePattern: '',
        applyDefaultPatterns: true,
      },
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'lines-around-comment': [
      'off',
    ],
    'lines-around-directive': [
      'error',
      {
        before: 'always',
        after: 'always',
      },
    ],
    'max-depth': [
      'off',
      4,
    ],
    'max-len': [
      'error',
      100,
      2,
      {
        ignoreUrls: true,
        ignoreComments: false,
        ignoreRegExpLiterals: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
      },
    ],
    'max-lines': [
      'off',
      {
        max: 300,
        skipBlankLines: true,
        skipComments: true,
      },
    ],
    'max-lines-per-function': [
      'off',
      {
        max: 50,
        skipBlankLines: true,
        skipComments: true,
        IIFEs: true,
      },
    ],
    'max-nested-callbacks': [
      'off',
    ],
    'max-params': [
      'off',
      3,
    ],
    'max-statements': [
      'off',
      10,
    ],
    'max-statements-per-line': [
      'off',
      {
        max: 1,
      },
    ],
    'multiline-comment-style': [
      'off',
      'starred-block',
    ],
    'multiline-ternary': [
      'off',
      'never',
    ],
    'new-cap': [
      'error',
      {
        newIsCap: true,
        newIsCapExceptions: [],
        capIsNew: false,
        capIsNewExceptions: [
          'Immutable.Map',
          'Immutable.Set',
          'Immutable.List',
        ],
        properties: true,
      },
    ],
    'new-parens': [
      'error',
    ],
    'newline-after-var': [
      'off',
    ],
    'newline-before-return': [
      'off',
    ],
    'newline-per-chained-call': [
      'error',
      {
        ignoreChainWithDepth: 4,
      },
    ],
    'no-array-constructor': [
      'error',
    ],
    'no-bitwise': [
      'error',
    ],
    'no-inline-comments': [
      'off',
    ],
    'no-lonely-if': [
      'error',
    ],
    'no-mixed-spaces-and-tabs': [
      'error',
    ],
    'no-multi-assign': [
      'error',
    ],
    'no-negated-condition': [
      'off',
    ],
    'no-nested-ternary': [
      'error',
    ],
    'no-new-object': [
      'error',
    ],
    'no-plusplus': [
      'error',
    ],
    'no-spaced-func': [
      'error',
    ],
    'no-tabs': [
      'error',
    ],
    'no-ternary': [
      'off',
    ],
    'no-trailing-spaces': [
      'error',
      {
        skipBlankLines: false,
        ignoreComments: false,
      },
    ],
    'no-unneeded-ternary': [
      'error',
      {
        defaultAssignment: false,
      },
    ],
    'no-whitespace-before-property': [
      'error',
    ],
    'nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'object-property-newline': [
      'error',
      {
        allowAllPropertiesOnSameLine: true,
        allowMultiplePropertiesPerLine: false,
      },
    ],
    'one-var': [
      'error',
      'never',
    ],
    'one-var-declaration-per-line': [
      'error',
      'always',
    ],
    'operator-assignment': [
      'error',
      'always',
    ],
    'operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'none',
        },
      },
    ],
    'padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    'padding-line-between-statements': [
      'off',
    ],
    'prefer-exponentiation-operator': [
      'error',
    ],
    'prefer-object-spread': [
      'error',
    ],
    'quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],
    'require-jsdoc': [
      'off',
    ],
    semi: [
      'error',
      'always',
    ],
    'semi-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'semi-style': [
      'error',
      'last',
    ],
    'sort-keys': [
      'off',
      'asc',
      {
        caseSensitive: false,
        natural: true,
      },
    ],
    'sort-vars': [
      'off',
    ],
    'space-before-blocks': [
      'error',
    ],
    'space-in-parens': [
      'error',
      'never',
    ],
    'space-infix-ops': [
      'error',
    ],
    'space-unary-ops': [
      'error',
      {
        words: true,
        nonwords: false,
        overrides: {},
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: [
            '-',
            '+',
          ],
          markers: [
            '=',
            '!',
            '/',
          ],
        },
        block: {
          exceptions: [
            '-',
            '+',
          ],
          markers: [
            '=',
            '!',
            ':',
            '::',
          ],
          balanced: true,
        },
      },
    ],
    'switch-colon-spacing': [
      'error',
      {
        after: true,
        before: false,
      },
    ],
    'template-tag-spacing': [
      'error',
      'never',
    ],
    'unicode-bom': [
      'error',
      'never',
    ],
    'wrap-regex': [
      'off',
    ],
    'callback-return': [
      'off',
    ],
    'handle-callback-err': [
      'off',
    ],
    'no-buffer-constructor': [
      'error',
    ],
    'no-mixed-requires': [
      'off',
      false,
    ],
    'no-new-require': [
      'error',
    ],
    'no-path-concat': [
      'error',
    ],
    'no-process-env': [
      'off',
    ],
    'no-process-exit': [
      'off',
    ],
    'no-restricted-modules': [
      'off',
    ],
    'no-sync': [
      'off',
    ],
    'for-direction': [
      'error',
    ],
    'getter-return': [
      'error',
      {
        allowImplicit: true,
      },
    ],
    'no-async-promise-executor': [
      'error',
    ],
    'no-await-in-loop': [
      'error',
    ],
    'no-compare-neg-zero': [
      'error',
    ],
    'no-cond-assign': [
      'error',
      'always',
    ],
    'no-constant-condition': [
      'warn',
    ],
    'no-debugger': [
      'error',
    ],
    'no-dupe-args': [
      'error',
    ],
    'no-dupe-else-if': [
      'error',
    ],
    'no-dupe-keys': [
      'error',
    ],
    'no-duplicate-case': [
      'error',
    ],
    'no-empty': [
      'error',
    ],
    'no-empty-character-class': [
      'error',
    ],
    'no-ex-assign': [
      'error',
    ],
    'no-extra-boolean-cast': [
      'error',
    ],
    'no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
      },
    ],
    'no-extra-semi': [
      'error',
    ],
    'no-func-assign': [
      'error',
    ],
    'no-import-assign': [
      'error',
    ],
    'no-inner-declarations': [
      'error',
    ],
    'no-invalid-regexp': [
      'error',
    ],
    'no-irregular-whitespace': [
      'error',
    ],
    'no-loss-of-precision': [
      'error',
    ],
    'no-misleading-character-class': [
      'error',
    ],
    'no-obj-calls': [
      'error',
    ],
    'no-promise-executor-return': [
      'error',
    ],
    'no-prototype-builtins': [
      'error',
    ],
    'no-regex-spaces': [
      'error',
    ],
    'no-setter-return': [
      'error',
    ],
    'no-sparse-arrays': [
      'error',
    ],
    'no-template-curly-in-string': [
      'error',
    ],
    'no-unexpected-multiline': [
      'error',
    ],
    'no-unreachable': [
      'error',
    ],
    'no-unreachable-loop': [
      'error',
      {
        ignore: [],
      },
    ],
    'no-unsafe-finally': [
      'error',
    ],
    'no-unsafe-negation': [
      'error',
    ],
    'no-unsafe-optional-chaining': [
      'error',
      {
        disallowArithmeticOperators: true,
      },
    ],
    'no-unused-private-class-members': [
      'off',
    ],
    'no-useless-backreference': [
      'error',
    ],
    'no-negated-in-lhs': [
      'off',
    ],
    'require-atomic-updates': [
      'off',
    ],
    'use-isnan': [
      'error',
    ],
    'valid-jsdoc': [
      'off',
    ],
    'valid-typeof': [
      'error',
      {
        requireStringLiterals: true,
      },
    ],
    'accessor-pairs': [
      'off',
    ],
    'array-callback-return': [
      'error',
      {
        allowImplicit: true,
        checkForEach: false,
      },
    ],
    'block-scoped-var': [
      'error',
    ],
    complexity: [
      'off',
      20,
    ],
    'default-case-last': [
      'error',
    ],
    'dot-notation': [
      'error',
      {
        allowKeywords: true,
        allowPattern: '',
      },
    ],
    'dot-location': [
      'error',
      'property',
    ],
    eqeqeq: [
      'error',
      'always',
      {
        null: 'ignore',
      },
    ],
    'grouped-accessor-pairs': [
      'error',
    ],
    'guard-for-in': [
      'error',
    ],
    'max-classes-per-file': [
      'error',
      1,
    ],
    'no-alert': [
      'warn',
    ],
    'no-caller': [
      'error',
    ],
    'no-case-declarations': [
      'error',
    ],
    'no-constructor-return': [
      'error',
    ],
    'no-div-regex': [
      'off',
    ],
    'no-else-return': [
      'error',
      {
        allowElseIf: false,
      },
    ],
    'no-empty-function': [
      'error',
      {
        allow: [
          'arrowFunctions',
          'functions',
          'methods',
        ],
      },
    ],
    'no-empty-pattern': [
      'error',
    ],
    'no-eq-null': [
      'off',
    ],
    'no-eval': [
      'error',
    ],
    'no-extend-native': [
      'error',
    ],
    'no-extra-bind': [
      'error',
    ],
    'no-extra-label': [
      'error',
    ],
    'no-fallthrough': [
      'error',
    ],
    'no-global-assign': [
      'error',
      {
        exceptions: [],
      },
    ],
    'no-native-reassign': [
      'off',
    ],
    'no-implicit-coercion': [
      'off',
      {
        boolean: false,
        number: true,
        string: true,
        allow: [],
      },
    ],
    'no-implicit-globals': [
      'off',
    ],
    'no-implied-eval': [
      'error',
    ],
    'no-invalid-this': [
      'off',
    ],
    'no-iterator': [
      'error',
    ],
    'no-labels': [
      'error',
      {
        allowLoop: false,
        allowSwitch: false,
      },
    ],
    'no-lone-blocks': [
      'error',
    ],
    'no-loop-func': [
      'error',
    ],
    'no-magic-numbers': [
      'off',
      {
        ignore: [],
        ignoreArrayIndexes: true,
        enforceConst: true,
        detectObjects: false,
      },
    ],
    'no-multi-spaces': [
      'error',
      {
        ignoreEOLComments: false,
      },
    ],
    'no-multi-str': [
      'error',
    ],
    'no-new': [
      'error',
    ],
    'no-new-func': [
      'error',
    ],
    'no-new-wrappers': [
      'error',
    ],
    'no-nonoctal-decimal-escape': [
      'error',
    ],
    'no-octal': [
      'error',
    ],
    'no-octal-escape': [
      'error',
    ],
    'no-proto': [
      'error',
    ],
    'no-redeclare': [
      'error',
    ],
    'no-restricted-properties': [
      'error',
      {
        object: 'arguments',
        property: 'callee',
        message: 'arguments.callee is deprecated',
      },
      {
        object: 'global',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'self',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'window',
        property: 'isFinite',
        message: 'Please use Number.isFinite instead',
      },
      {
        object: 'global',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'self',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        object: 'window',
        property: 'isNaN',
        message: 'Please use Number.isNaN instead',
      },
      {
        property: '__defineGetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        property: '__defineSetter__',
        message: 'Please use Object.defineProperty instead.',
      },
      {
        object: 'Math',
        property: 'pow',
        message: 'Use the exponentiation operator (**) instead.',
      },
    ],
    'no-return-assign': [
      'error',
      'always',
    ],
    'no-return-await': [
      'error',
    ],
    'no-script-url': [
      'error',
    ],
    'no-self-assign': [
      'error',
      {
        props: true,
      },
    ],
    'no-self-compare': [
      'error',
    ],
    'no-sequences': [
      'error',
    ],
    'no-throw-literal': [
      'error',
    ],
    'no-unmodified-loop-condition': [
      'off',
    ],
    'no-unused-expressions': [
      'error',
      {
        allowShortCircuit: false,
        allowTernary: false,
        allowTaggedTemplates: false,
        enforceForJSX: false,
      },
    ],
    'no-unused-labels': [
      'error',
    ],
    'no-useless-call': [
      'off',
    ],
    'no-useless-catch': [
      'error',
    ],
    'no-useless-concat': [
      'error',
    ],
    'no-useless-escape': [
      'error',
    ],
    'no-useless-return': [
      'error',
    ],
    'no-void': [
      'error',
    ],
    'no-warning-comments': [
      'off',
      {
        terms: [
          'todo',
          'fixme',
          'xxx',
        ],
        location: 'start',
      },
    ],
    'no-with': [
      'error',
    ],
    'prefer-named-capture-group': [
      'off',
    ],
    'prefer-regex-literals': [
      'error',
      {
        disallowRedundantWrapping: true,
      },
    ],
    radix: [
      'error',
    ],
    'require-await': [
      'off',
    ],
    'require-unicode-regexp': [
      'off',
    ],
    'vars-on-top': [
      'error',
    ],
    'wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],
    yoda: [
      'error',
    ],
    'react-hooks/rules-of-hooks': [
      'error',
    ],
    'jsx-a11y/accessible-emoji': [
      'off',
    ],
    'jsx-a11y/alt-text': [
      'error',
      {
        elements: [
          'img',
          'object',
          'area',
          'input[type="image"]',
        ],
        img: [],
        object: [],
        area: [],
        'input[type="image"]': [],
      },
    ],
    'jsx-a11y/aria-activedescendant-has-tabindex': [
      'error',
    ],
    'jsx-a11y/aria-props': [
      'error',
    ],
    'jsx-a11y/aria-proptypes': [
      'error',
    ],
    'jsx-a11y/aria-role': [
      'error',
      {
        ignoreNonDOM: false,
      },
    ],
    'jsx-a11y/aria-unsupported-elements': [
      'error',
    ],
    'jsx-a11y/autocomplete-valid': [
      'off',
      {
        inputComponents: [],
      },
    ],
    'jsx-a11y/control-has-associated-label': [
      'error',
      {
        labelAttributes: [
          'label',
        ],
        controlComponents: [],
        ignoreElements: [
          'audio',
          'canvas',
          'embed',
          'input',
          'textarea',
          'tr',
          'video',
        ],
        ignoreRoles: [
          'grid',
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'row',
          'tablist',
          'toolbar',
          'tree',
          'treegrid',
        ],
        depth: 5,
      },
    ],
    'jsx-a11y/heading-has-content': [
      'error',
      {
        components: [
          '',
        ],
      },
    ],
    'jsx-a11y/html-has-lang': [
      'error',
    ],
    'jsx-a11y/iframe-has-title': [
      'error',
    ],
    'jsx-a11y/img-redundant-alt': [
      'error',
    ],
    'jsx-a11y/interactive-supports-focus': [
      'error',
    ],
    'jsx-a11y/lang': [
      'error',
    ],
    'jsx-a11y/mouse-events-have-key-events': [
      'error',
    ],
    'jsx-a11y/no-access-key': [
      'error',
    ],
    'jsx-a11y/no-autofocus': [
      'error',
      {
        ignoreNonDOM: true,
      },
    ],
    'jsx-a11y/no-distracting-elements': [
      'error',
      {
        elements: [
          'marquee',
          'blink',
        ],
      },
    ],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [
      'error',
      {
        tr: [
          'none',
          'presentation',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [
      'error',
      {
        ul: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        ol: [
          'listbox',
          'menu',
          'menubar',
          'radiogroup',
          'tablist',
          'tree',
          'treegrid',
        ],
        li: [
          'menuitem',
          'option',
          'row',
          'tab',
          'treeitem',
        ],
        table: [
          'grid',
        ],
        td: [
          'gridcell',
        ],
      },
    ],
    'jsx-a11y/no-noninteractive-tabindex': [
      'error',
      {
        tags: [],
        roles: [
          'tabpanel',
        ],
      },
    ],
    'jsx-a11y/no-onchange': [
      'off',
    ],
    'jsx-a11y/no-redundant-roles': [
      'error',
    ],
    'jsx-a11y/role-has-required-aria-props': [
      'error',
    ],
    'jsx-a11y/role-supports-aria-props': [
      'error',
    ],
    'jsx-a11y/scope': [
      'error',
    ],
    'jsx-a11y/tabindex-no-positive': [
      'error',
    ],
    'react/display-name': [
      'off',
      {
        ignoreTranspilerName: false,
      },
    ],
    'react/forbid-dom-props': [
      'off',
      {
        forbid: [],
      },
    ],
    'react/jsx-boolean-value': [
      'error',
      'never',
      {
        always: [],
      },
    ],
    'react/jsx-closing-bracket-location': [
      'error',
      'line-aligned',
    ],
    'react/jsx-closing-tag-location': [
      'error',
    ],
    'react/jsx-curly-spacing': [
      'error',
      'never',
      {
        allowMultiline: true,
      },
    ],
    'react/jsx-handler-names': [
      'off',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-indent-props': [
      'error',
      2,
    ],
    'react/jsx-key': [
      'off',
    ],
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-no-literals': [
      'off',
      {
        noStrings: true,
      },
    ],
    'react/jsx-no-undef': [
      'error',
    ],
    'react/jsx-pascal-case': [
      'error',
      {
        allowAllCaps: true,
        ignore: [],
      },
    ],
    'react/sort-prop-types': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        requiredFirst: false,
        sortShapeProp: true,
      },
    ],
    'react/jsx-sort-prop-types': [
      'off',
    ],
    'react/jsx-sort-props': [
      'off',
      {
        ignoreCase: true,
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: false,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'react/jsx-sort-default-props': [
      'off',
      {
        ignoreCase: true,
      },
    ],
    'react/jsx-uses-vars': [
      'error',
    ],
    'react/no-deprecated': [
      'error',
    ],
    'react/no-did-update-set-state': [
      'error',
    ],
    'react/no-will-update-set-state': [
      'error',
    ],
    'react/no-direct-mutation-state': [
      'off',
    ],
    'react/no-is-mounted': [
      'error',
    ],
    'react/no-multi-comp': [
      'off',
    ],
    'react/no-set-state': [
      'off',
    ],
    'react/no-string-refs': [
      'error',
    ],
    'react/no-unknown-property': [
      'error',
    ],
    'react/prefer-es6-class': [
      'error',
      'always',
    ],
    'react/prefer-stateless-function': [
      'error',
      {
        ignorePureComponents: true,
      },
    ],
    'react/require-render-return': [
      'error',
    ],
    'react/self-closing-comp': [
      'error',
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens-new-line',
        assignment: 'parens-new-line',
        return: 'parens-new-line',
        arrow: 'parens-new-line',
        condition: 'parens-new-line',
        logical: 'parens-new-line',
        prop: 'parens-new-line',
      },
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline-multiprop',
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never',
    ],
    'react/jsx-indent': [
      'error',
      2,
    ],
    'react/jsx-no-target-blank': [
      'error',
      {
        enforceDynamicLinks: 'always',
        links: true,
        forms: false,
      },
    ],
    'react/jsx-no-comment-textnodes': [
      'error',
    ],
    'react/no-render-return-value': [
      'error',
    ],
    'react/require-optimization': [
      'off',
      {
        allowDecorators: [],
      },
    ],
    'react/no-find-dom-node': [
      'error',
    ],
    'react/forbid-component-props': [
      'off',
      {
        forbid: [],
      },
    ],
    'react/forbid-elements': [
      'off',
      {
        forbid: [],
      },
    ],
    'react/no-danger-with-children': [
      'error',
    ],
    'react/no-unused-prop-types': [
      'error',
      {
        customValidators: [],
        skipShapeProps: true,
      },
    ],
    'react/style-prop-object': [
      'error',
    ],
    'react/no-unescaped-entities': [
      'error',
    ],
    'react/no-children-prop': [
      'error',
    ],
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'always',
        afterOpening: 'never',
        beforeClosing: 'never',
      },
    ],
    'react/jsx-space-before-closing': [
      'off',
      'always',
    ],
    'react/no-array-index-key': [
      'error',
    ],
    'react/forbid-foreign-prop-types': [
      'warn',
      {
        allowInPropTypes: true,
      },
    ],
    'react/void-dom-elements-no-children': [
      'error',
    ],
    'react/no-redundant-should-component-update': [
      'error',
    ],
    'react/no-unused-state': [
      'error',
    ],
    'react/boolean-prop-naming': [
      'off',
      {
        propTypeNames: [
          'bool',
          'mutuallyExclusiveTrueProps',
        ],
        rule: '^(is|has)[A-Z]([A-Za-z0-9]?)+',
        message: '',
      },
    ],
    'react/no-typos': [
      'error',
    ],
    'react/jsx-curly-brace-presence': [
      'error',
      {
        props: 'never',
        children: 'never',
      },
    ],
    'react/no-access-state-in-setstate': [
      'error',
    ],
    'react/button-has-type': [
      'error',
      {
        button: true,
        submit: true,
        reset: false,
      },
    ],
    'react/jsx-child-element-spacing': [
      'off',
    ],
    'react/jsx-max-depth': [
      'off',
    ],
    'react/no-unsafe': [
      'off',
    ],
    'react/jsx-fragments': [
      'error',
      'syntax',
    ],
    'react/jsx-curly-newline': [
      'error',
      {
        multiline: 'consistent',
        singleline: 'consistent',
      },
    ],
    'react/state-in-constructor': [
      'error',
      'always',
    ],
    'react/static-property-placement': [
      'error',
      'property assignment',
    ],
    'react/prefer-read-only-props': [
      'off',
    ],
    'react/jsx-no-script-url': [
      'error',
      [
        {
          name: 'Link',
          props: [
            'to',
          ],
        },
      ],
    ],
    'react/jsx-no-useless-fragment': [
      'error',
    ],
    'react/no-adjacent-inline-elements': [
      'off',
    ],
    'react/jsx-newline': [
      'off',
    ],
    'react/jsx-no-constructed-context-values': [
      'error',
    ],
    'react/no-namespace': [
      'error',
    ],
    'react/prefer-exact-props': [
      'error',
    ],
    'react/no-arrow-function-lifecycle': [
      'error',
    ],
    'react/no-invalid-html-attribute': [
      'error',
    ],
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', path.resolve(`${__dirname}/../../`)],
        ],
        extensions: ['.es', '.js', '.jsx', '.ts', '.tsx', '.json'],
      },
      node: {
        extensions: [
          '.mjs',
          '.js',
          '.json',
        ],
      },
    },
    'import/extensions': [
      '.js',
      '.mjs',
      '.jsx',
    ],
    'import/core-modules': [],
    'import/ignore': [
      'node_modules',
      '\\.(coffee|scss|css|less|hbs|svg|json)$',
    ],
    react: {
      pragma: 'React',
      version: 'detect',
    },
    propWrapperFunctions: [
      'forbidExtraProps',
      'exact',
      'Object.freeze',
    ],
  },
  ignorePatterns: [],
};
