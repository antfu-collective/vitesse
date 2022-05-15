module.exports = {
  root: true,
  extends: '@daotl/eslint-config-vue/typescript',
  overrides: [
    {
      files: '*.{ts,tsx,vue,mdx}',
      parserOptions: {
        project: 'tsconfig.json',
      },
    },
  ],
  rules: {
    'no-undef': 'off', // Turned off for `unplugin-auto-import`
  },
}
