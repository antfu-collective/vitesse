/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      './index.html',
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.ts',
    ],
    options: {
      whitelist: [
        'schema-dark',
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
    cursor: ['responsive', 'disabled'],
    backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'hover', 'disabled'],
    borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-active', 'active', 'focus', 'disabled'],
    textColor: ['dark', 'dark-hover', 'dark-active', 'hover', 'active', 'disabled'],
    opacity: ['dark', 'hover', 'active', 'focus', 'disabled'],
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
}
