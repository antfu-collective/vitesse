/* eslint-disable @typescript-eslint/no-var-requires */
const { extractor } = require('variantwind')

module.exports = {
  purge: {
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.ts',
    ],
    whitelist: [
      'schema-dark',
    ],
    options: {
      extractors: [
        {
          extractor,
          extensions: ['vue'],
        },
      ],
    },
  },
  theme: {
    darkSelector: '.schema-dark',
    extend: {
      opacity: {
        10: '0.1',
        85: '0.85',
      },
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'hover'],
    borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-active', 'active', 'focus', 'disabled'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'active'],
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
  ],
}
