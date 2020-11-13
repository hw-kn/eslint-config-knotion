const noBaseToStringOpts = {
  ignoredTypeNames: ['RegExp', 'Error', 'TypeError', 'URL'],
}

const restrictTemplateExpressionsOpts = {
  allowNumber: true,
  allowBoolean: true,
  allowAny: true,
  allowNullish: true,
}

/*
  Rules that requires runtime info from the TS compiler
*/
module.exports = {
  rules: {
    '@typescript-eslint/no-base-to-string': [2, noBaseToStringOpts],
    '@typescript-eslint/no-confusing-void-expression': [1, { ignoreVoidOperator: true }],
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/no-implied-eval': 2,
    '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: false }],
    '@typescript-eslint/no-throw-literal': 2,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 2,
    '@typescript-eslint/no-unnecessary-qualifier': 2,
    '@typescript-eslint/no-unnecessary-type-arguments': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/no-unsafe-assignment': 1,
    '@typescript-eslint/no-unsafe-call': 1,
    '@typescript-eslint/no-unsafe-member-access': 1,
    '@typescript-eslint/no-unsafe-return': 1,
    '@typescript-eslint/no-unused-vars-experimental': 1,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/prefer-includes': 1,
    '@typescript-eslint/prefer-nullish-coalescing': 1,
    '@typescript-eslint/prefer-reduce-type-parameter': 1,
    '@typescript-eslint/prefer-regexp-exec': 1,
    '@typescript-eslint/promise-function-async': 1,
    '@typescript-eslint/require-array-sort-compare': 2,
    '@typescript-eslint/restrict-plus-operands': 1,
    '@typescript-eslint/restrict-template-expressions': [1, restrictTemplateExpressionsOpts],
    '@typescript-eslint/return-await': 2,
  },
}
