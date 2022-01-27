const tsConfig = {
  extends: '@daotl/eslint-config-vue/typescript',
  parserOptions: {
    project: 'tsconfig.json',
  },
}

module.exports = {
  root: true,
  rules: {
    'no-undef': 'off', // Turned off for `unplugin-auto-import`
    'import/no-unresolved': ['error', { ignore: ['^virtual:'] }],
    'vue/multi-word-component-names': 'off',
  },
  overrides: [
    // For TS
    {
      files: '**/*.{ts,tsx,vue}',
      ...tsConfig,
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
      },
    },
    // For JS and config files (.fes.js .eslintrc.js .stylelintrc.js)
    {
      files: '**/*.{js,jsx}',
      extends: '@daotl/eslint-config-vue',
    },
    // For tests
    {
      files: ['**/*.spec.{j,t}s?(x)'],
      ...tsConfig,
      env: {
        jest: true,
      },
    },
  ],
}
