/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./index.html', './src/**/*.vue', './src/**/*.js', './src/**/*.ts'],
  },
  variants: {
    cursor: ['responsive', 'disabled'],
    backgroundColor: ['dark', 'hover', 'disabled'],
    borderColor: ['dark', 'active', 'focus', 'disabled'],
    textColor: ['dark', 'hover', 'active', 'disabled'],
    opacity: ['dark', 'hover', 'active', 'focus', 'disabled'],
    typography: ['dark'],
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
      },
      opacity: {
        10: '0.1',
        85: '0.85',
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',
            a: {
              color: 'inherit',
              opacity: 0.6,
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
            },
            b: {
              color: 'inherit',
            },
            strong: {
              color: 'inherit',
            },
            em: {
              color: 'inherit',
            },
            h1: {
              color: 'inherit',
            },
            h2: {
              color: 'inherit',
            },
            h3: {
              color: 'inherit',
            },
            h4: {
              color: 'inherit',
            },
          },
        },
      },
    },
  },
}
