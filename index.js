/* eslint max-len:0, prettierx/options:[2,{printWidth:120}] */
/*
  Configuración para ESLint 7.x

  El soporte preact se basa en react con los siguientes cambios:

  - 'react/no-did-update-set-state': ON,
  - 'react/no-unknown-property': [ON, { ignore: ['class', 'for'] }]

  @date 2019-02-28T03:48:11.238Z
*/
const globals = require('./globals')

const WARN = 1
const ON = 2
const OFF = 0

/**
 * Autodetection of React Version.
 */
const getReactVersion = () => {
  try {
    const version = require('react').version || '999.999.999'
    return version
  } catch (err) {
    if (err.code === 'MODULE_NOT_FOUND') {
      console.info('React is not detected, skipping react plugin installation.')
    } else {
      console.error(err.message)
    }
  }
  return ''
}

const consistentTypeAssertionsOpts = {
  assertionStyle: 'as',
  objectLiteralTypeAssertions: 'allow-as-parameter',
}

const memberDelimiterStyleOpts = {
  multiline: {
    delimiter: 'none',
  },
  singleline: {
    requireLast: false,
  },
}

const namingConventionOpts = [
  {
    selector: 'default',
    format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'forbid',
  },
  {
    selector: 'default',
    format: ['camelCase', 'snake_case', 'UPPER_CASE'],
    modifiers: ['private'],
    leadingUnderscore: 'require',
    trailingUnderscore: 'allow',
  },
  {
    selector: 'class',
    format: ['PascalCase', 'UPPER_CASE'],
  },
  {
    selector: 'typeLike',
    format: ['PascalCase'],
    leadingUnderscore: 'allow',
    trailingUnderscore: 'allow',
  },
]

const noUnusedExpressionsOpts = {
  allowShortCircuit: true,
  allowTernary: true,
}

const noUnusedVarsOpts = {
  args: 'after-used',
  ignoreRestSiblings: true,
  argsIgnorePattern: '^_',
}

const noUseBeforeDefineOpts = {
  classes: true,
  functions: false,
  typedefs: false,
  variables: true,
}

const noUselessRenameOpts = {
  ignoreDestructuring: false,
  ignoreImport: false,
  ignoreExport: false,
}

const linesBetweenClassMembersOpts = {
  exceptAfterSingleLine: true,
  exceptAfterOverload: true,
}

const spacedCommentsOpts = {
  block: {
    exceptions: ['*'],
    markers: ['*package', '!', ',', ':', '::', 'flow-include', '#__PURE__'],
    balanced: true,
  },
  line: {
    exceptions: ['-', '='],
    markers: ['*package', '!', '/', ',', '=', '#region', '#endregion', '#'],
  },
}

const promiseCatchOrReturnOpts = {
  allowThen: true,
  terminationMethod: ['catch', 'finally'],
}

const banTSCommentOpts = {
  'ts-expect-error': 'allow-with-description',
  'ts-ignore': 'allow-with-description',
  'ts-nocheck': false,
  'ts-check': false,
  'minimumDescriptionLength': 3,
}

const a11yAnchorIsValidOpts = {
  aspects: ['noHref', 'invalidHref'],
  components: ['Link'],
  specialLink: ['to'],
}

const a11yInteractiveHandlers = ['onClick', 'onMouseDown', 'onMouseUp', 'onKeyPress', 'onKeyDown', 'onKeyUp']

const a11yNoNoninterElemInteractionsOpts = { handlers: a11yInteractiveHandlers }

const a11yNoNoninterElemToInteractive = {
  ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
  ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
  li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
  table: ['grid'],
  td: ['gridcell'],
}

const simpleImportSortOpts = {
  groups: [
    // Node.js builtins. You could also generate this regex if you use a `.js` config.
    [`^(${require('module').builtinModules.join('|')})(/|$)`],
    // Packages. `react` related packages come first.
    ['^react', '^@?\\w'],
    // Internal packages.
    ['^src/'],
    // Side effect imports.
    ['^\\u0000'],
    // Style imports.
    ['^.+\\.s?css$'],
    // Parent imports. Put `..` first.
    ['^\\.\\./?$', '^\\.\\.(?!/?$)'],
    // Other relative imports. Put same-folder imports and `.` last.
    ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
  ],
}

module.exports = {
  // TypeScript
  parser: '@typescript-eslint/parser',

  // May be 'unicorn' is a good candidate to include here
  plugins: [
    '@typescript-eslint',
    'compat',
    'jsx-a11y',
    'prettierx',
    'promise',
    'react',
    'react-hooks',
    'react-perf',
    'simple-import-sort',
    'unicorn',
  ],

  env: {
    browser: true,
    es2017: true, // esto pone `parserOptions.ecmaVersion` = 2018
  },

  parserOptions: {
    ecmaFeatures: { jsx: true },
    impliedStrict: true,
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false, // typescript-parser
  },

  settings: {
    react: {
      version: getReactVersion(),
    },
  },

  rules: {
    'accessor-pairs': ON,
    'array-callback-return': WARN,
    'block-scoped-var': WARN,
    'complexity': [WARN, { max: 12 }],
    'consistent-return': WARN,
    'constructor-super': ON,
    'default-case-last': ON,
    'default-case': [WARN, { commentPattern: '^no default$' }],
    'default-param-last': ON,
    'eqeqeq': [ON, 'always', { null: 'ignore' }],
    'for-direction': ON,
    'getter-return': ON,
    'guard-for-in': WARN,
    'max-depth': WARN,
    'max-lines-per-function': [WARN, { max: 80, skipBlankLines: true, skipComments: true }],
    'max-params': [WARN, { max: 4 }],
    'new-cap': [ON, { newIsCap: true, capIsNew: false }],
    'no-alert': ON,
    'no-array-constructor': ON,
    'no-async-promise-executor': ON,
    'no-await-in-loop': ON,
    'no-caller': ON,
    'no-case-declarations': WARN,
    'no-class-assign': ON,
    'no-compare-neg-zero': ON,
    'no-cond-assign': [ON, 'except-parens'],
    'no-const-assign': ON,
    'no-constant-condition': [ON, { checkLoops: false }],
    'no-constructor-return': ON,
    'no-control-regex': ON,
    'no-debugger': ON,
    'no-delete-var': ON,
    'no-div-regex': ON,
    'no-dupe-args': ON,
    'no-dupe-class-members': ON,
    'no-dupe-else-if': ON,
    'no-dupe-keys': ON,
    'no-duplicate-case': ON,
    'no-duplicate-imports': ON,
    'no-else-return': ON,
    'no-empty-character-class': ON,
    'no-empty-function': WARN,
    'no-empty-pattern': ON,
    'no-empty': [ON, { allowEmptyCatch: false }],
    'no-eval': ON,
    'no-ex-assign': ON,
    'no-extend-native': ON,
    'no-extra-bind': ON,
    'no-extra-boolean-cast': ON,
    'no-extra-label': ON,
    'no-fallthrough': ON,
    'no-func-assign': ON,
    'no-global-assign': ON,
    'no-implicit-globals': ON,
    'no-implied-eval': ON,
    'no-import-assign': ON,
    'no-inner-declarations': [ON, 'functions'],
    'no-invalid-regexp': ON,
    'no-irregular-whitespace': ON,
    'no-iterator': ON,
    'no-label-var': ON,
    'no-labels': [ON, { allowLoop: false, allowSwitch: false }],
    'no-lone-blocks': ON,
    'no-lonely-if': ON,
    'no-loop-func': ON,
    'no-misleading-character-class': ON,
    'no-multi-str': ON,
    'no-new-func': ON,
    'no-new-object': ON,
    'no-new-symbol': ON,
    'no-new-wrappers': ON,
    'no-new': ON,
    'no-obj-calls': ON,
    'no-octal-escape': ON,
    'no-octal': ON,
    'no-proto': ON,
    'no-prototype-builtins': ON,
    'no-redeclare': ON,
    'no-regex-spaces': ON,
    'no-restricted-globals': [ON].concat(globals),
    'no-restricted-syntax': [ON, 'WithStatement'],
    'no-return-assign': [ON, 'except-parens'],
    'no-return-await': ON,
    'no-script-url': ON,
    'no-self-assign': ON,
    'no-self-compare': ON,
    'no-sequences': ON,
    'no-shadow-restricted-names': ON,
    'no-sparse-arrays': ON,
    'no-template-curly-in-string': ON,
    'no-this-before-super': ON,
    'no-throw-literal': ON,
    'no-undef-init': ON,
    'no-unmodified-loop-condition': ON,
    'no-unneeded-ternary': [ON, { defaultAssignment: false }],
    'no-unreachable': ON,
    'no-unsafe-finally': ON,
    'no-unsafe-negation': ON,
    'no-unused-labels': ON,
    'no-useless-backreference': ON,
    'no-useless-call': ON,
    'no-useless-catch': ON,
    'no-useless-computed-key': ON,
    'no-useless-concat': ON,
    'no-useless-escape': ON,
    'no-useless-rename': [ON, noUselessRenameOpts],
    'no-useless-return': ON,
    'no-var': WARN,
    'no-with': ON,
    'one-var': [ON, { initialized: 'never' }],
    'prefer-const': [ON, { destructuring: 'all' }],
    'prefer-numeric-literals': ON,
    'prefer-promise-reject-errors': WARN,
    'radix': ON,
    'require-atomic-updates': ON,
    'require-yield': ON,
    'spaced-comment': [WARN, 'always', spacedCommentsOpts],
    'strict': [ON, 'never'],
    'symbol-description': ON,
    'use-isnan': ON,
    'valid-typeof': [ON, { requireStringLiterals: true }],
    'yoda': [ON, 'never'],

    '@typescript-eslint/adjacent-overload-signatures': ON,
    '@typescript-eslint/array-type': [ON, { default: 'array' }],
    '@typescript-eslint/ban-ts-comment': [ON, banTSCommentOpts],
    '@typescript-eslint/ban-types': ON,
    '@typescript-eslint/consistent-type-assertions': [ON, consistentTypeAssertionsOpts],
    '@typescript-eslint/lines-between-class-members': [ON, 'always', linesBetweenClassMembersOpts],
    '@typescript-eslint/member-delimiter-style': [ON, memberDelimiterStyleOpts],
    '@typescript-eslint/method-signature-style': ON,
    '@typescript-eslint/naming-convention': [ON, ...namingConventionOpts],
    '@typescript-eslint/no-confusing-non-null-assertion': ON,
    '@typescript-eslint/no-extra-non-null-assertion': ON,
    '@typescript-eslint/no-extraneous-class': WARN,
    '@typescript-eslint/no-for-in-array': ON,
    '@typescript-eslint/no-inferrable-types': ON,
    '@typescript-eslint/no-loss-of-precision': ON,
    '@typescript-eslint/no-misused-new': ON,
    '@typescript-eslint/no-namespace': ON,
    '@typescript-eslint/no-non-null-asserted-optional-chain': WARN,
    '@typescript-eslint/no-parameter-properties': ON,
    '@typescript-eslint/no-shadow': WARN,
    '@typescript-eslint/no-this-alias': [ON, { allowDestructuring: true, allowedNames: ['_self'] }],
    '@typescript-eslint/no-unused-expressions': [ON, noUnusedExpressionsOpts],
    '@typescript-eslint/no-unused-vars': [OFF, noUnusedVarsOpts],
    '@typescript-eslint/no-use-before-define': [ON, noUseBeforeDefineOpts],
    '@typescript-eslint/no-useless-constructor': WARN,
    '@typescript-eslint/prefer-as-const': ON,
    '@typescript-eslint/prefer-function-type': WARN,
    '@typescript-eslint/prefer-namespace-keyword': ON,
    '@typescript-eslint/prefer-optional-chain': WARN,
    '@typescript-eslint/prefer-ts-expect-error': WARN,
    '@typescript-eslint/type-annotation-spacing': ON,
    '@typescript-eslint/unified-signatures': WARN,

    'compat/compat': ON,

    // Reemplaza 'sort-imports': [ON, sortImportsOpts],
    'simple-import-sort/sort': [ON, simpleImportSortOpts],

    'jsx-a11y/accessible-emoji': ON,
    'jsx-a11y/alt-text': ON,
    'jsx-a11y/anchor-has-content': WARN,
    'jsx-a11y/anchor-is-valid': [ON, a11yAnchorIsValidOpts],
    'jsx-a11y/aria-activedescendant-has-tabindex': ON,
    'jsx-a11y/aria-props': ON,
    'jsx-a11y/aria-proptypes': ON,
    'jsx-a11y/aria-role': ON,
    'jsx-a11y/aria-unsupported-elements': ON,
    'jsx-a11y/autocomplete-valid': [ON, { inputComponents: ['Input'] }],
    'jsx-a11y/click-events-have-key-events': WARN,
    'jsx-a11y/heading-has-content': ON,
    'jsx-a11y/html-has-lang': ON,
    'jsx-a11y/iframe-has-title': ON,
    'jsx-a11y/img-redundant-alt': WARN,
    'jsx-a11y/interactive-supports-focus': ON,
    'jsx-a11y/label-has-associated-control': WARN,
    'jsx-a11y/lang': ON,
    'jsx-a11y/mouse-events-have-key-events': WARN,
    'jsx-a11y/no-access-key': ON,
    'jsx-a11y/no-autofocus': WARN,
    'jsx-a11y/no-distracting-elements': ON,
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [WARN, { tr: ['link'] }],
    'jsx-a11y/no-noninteractive-element-interactions': [ON, a11yNoNoninterElemInteractionsOpts],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [ON, a11yNoNoninterElemToInteractive],
    'jsx-a11y/no-noninteractive-tabindex': [ON, { tags: [], roles: ['tabpanel'] }],
    'jsx-a11y/no-redundant-roles': ON,
    'jsx-a11y/no-static-element-interactions': [ON, { handlers: a11yInteractiveHandlers }],
    'jsx-a11y/role-has-required-aria-props': ON,
    'jsx-a11y/role-supports-aria-props': ON,
    'jsx-a11y/scope': ON,
    'jsx-a11y/tabindex-no-positive': WARN,

    'prettierx/options': WARN,

    'promise/catch-or-return': [ON, promiseCatchOrReturnOpts],
    'promise/no-callback-in-promise': ON,
    'promise/no-nesting': WARN,
    'promise/no-new-statics': ON,
    'promise/no-return-in-finally': ON,
    'promise/no-return-wrap': [ON, { allowReject: true }],
    'promise/param-names': ON,
    'promise/valid-params': ON,

    'react/button-has-type': ON,
    'react/forbid-foreign-prop-types': [ON, { allowInPropTypes: true }],
    'react/jsx-boolean-value': ON,
    'react/jsx-filename-extension': [ON, { extensions: ['.tsx', '.jsx'] }],
    'react/jsx-key': ON,
    'react/jsx-max-depth': [ON, { max: 5 }],
    'react/jsx-no-bind': [ON, {}],
    'react/jsx-no-comment-textnodes': ON,
    'react/jsx-no-duplicate-props': [ON, { ignoreCase: true }],
    'react/jsx-no-script-url': [ON, [{ name: 'Link', props: ['to'] }]],
    'react/jsx-no-target-blank': ON,
    'react/jsx-no-undef': ON,
    'react/jsx-no-useless-fragment': ON,
    'react/jsx-pascal-case': [ON, { ignore: [] }],
    'react/jsx-uses-react': ON,
    'react/jsx-uses-vars': ON,
    'react/no-access-state-in-setstate': ON,
    'react/no-danger-with-children': ON,
    'react/no-deprecated': ON,
    'react/no-did-update-set-state': ON,
    'react/no-direct-mutation-state': ON,
    'react/no-is-mounted': ON,
    'react/no-multi-comp': [ON, { ignoreStateless: true }],
    'react/no-redundant-should-component-update': ON,
    'react/no-string-refs': ON,
    'react/no-this-in-sfc': ON,
    'react/no-typos': ON,
    'react/no-unescaped-entities': [ON, { forbid: ['>', '"', "'", '}'] }],
    'react/no-unknown-property': ON, // preact
    'react/no-will-update-set-state': ON,
    'react/react-in-jsx-scope': ON,
    'react/require-render-return': ON,
    'react/style-prop-object': ON,
    'react/void-dom-elements-no-children': ON,

    'react-hooks/exhaustive-deps': WARN,
    'react-hooks/rules-of-hooks': ON,

    'react-perf/jsx-no-new-object-as-prop': ON,
    'react-perf/jsx-no-new-array-as-prop': ON,
    'react-perf/jsx-no-jsx-as-prop': ON,

    'unicorn/better-regex': ON,
    'unicorn/catch-error-name': [ON, { name: 'err', caughtErrorsIgnorePattern: '^_' }],
    'unicorn/custom-error-definition': ON,
    'unicorn/error-message': ON,
    'unicorn/import-index': WARN,
    'unicorn/new-for-builtins': ON,
    'unicorn/no-array-instanceof': ON,
    'unicorn/no-console-spaces': WARN,
    'unicorn/no-new-buffer': ON,
    'unicorn/no-process-exit': ON,
    'unicorn/no-unreadable-array-destructuring': WARN,
    'unicorn/no-unsafe-regex': WARN,
    'unicorn/no-unused-properties': WARN,
    'unicorn/no-zero-fractions': WARN,
    'unicorn/prefer-add-event-listener': WARN,
    'unicorn/prefer-dataset': WARN,
    'unicorn/prefer-event-key': ON,
    'unicorn/prefer-includes': ON,
    'unicorn/prefer-modern-dom-apis': WARN,
    'unicorn/prefer-negative-index': ON,
    'unicorn/prefer-node-append': WARN,
    'unicorn/prefer-node-remove': WARN,
    'unicorn/prefer-optional-catch-binding': ON,
    'unicorn/prefer-spread': ON,
    'unicorn/prefer-starts-ends-with': WARN,
    'unicorn/prefer-text-content': ON,
    'unicorn/prefer-type-error': ON,
    'unicorn/throw-new-error': ON,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'default-param-last': OFF,
        'no-dupe-class-members': OFF,
        'no-empty-function': OFF,
        'no-return-await': OFF,
        'no-unused-vars': OFF,
        '@typescript-eslint/default-param-last': ON,
        '@typescript-eslint/no-array-constructor': ON,
        '@typescript-eslint/no-dupe-class-members': ON,
        '@typescript-eslint/no-empty-function': WARN,
        '@typescript-eslint/no-require-imports': ON,
      },
    },
  ],
}
