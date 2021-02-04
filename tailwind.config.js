/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const typography = require('@tailwindcss/typography')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.md',
      './src/**/*.js',
      './src/**/*.ts',
    ],
    options: {
      safelist: ['prose', 'prose-sm', 'm-auto'],
    },
  },
  variants: {
    extend: {
      cursor: ['disabled'],
      backgroundColor: ['disabled'],
      borderColor: ['active', 'disabled'],
      textColor: ['active', 'disabled'],
      opacity: ['dark', 'active', 'disabled'],
    }
  },
  darkMode: 'class',
  plugins: [typography],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.75,
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: { color: 'inherit' },
            strong: { color: 'inherit' },
            em: { color: 'inherit' },
            h1: { color: 'inherit' },
            h2: { color: 'inherit' },
            h3: { color: 'inherit' },
            h4: { color: 'inherit' },
            code: { color: 'inherit' },
          },
        },
      },
    },
  },
}
