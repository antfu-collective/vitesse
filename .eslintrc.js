module.exports = {
  root: true,
  extends: '@daotl/eslint-config-vue/typescript',
  parserOptions: {
    project: 'tsconfig.json',
  },
  rules: {
    'import/no-unresolved': ['error', { ignore: ['^virtual:'] }],
  },
}
