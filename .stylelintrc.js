const commonExtends = ['stylelint-config-property-sort-order-smacss']

module.exports = {
  ignoreFiles: 'src/{.fes,.fes-production}/**/*',
  extends: commonExtends,
  rules: {
    'order/properties-alphabetical-order': null,
    'color-named': 'always-where-possible',
    'selector-max-id': 1,
  },
  overrides: [
    {
      files: 'src/**/*.css',
      extends: ['stylelint-config-recommended', ...commonExtends],
    },
    {
      files: 'src/**/*.scss',
      extends: ['stylelint-config-recommended-scss', ...commonExtends],
    },
    {
      files: 'src/**/*.vue',
      extends: ['stylelint-config-recommended-vue/scss', ...commonExtends],
    },
  ],
}
