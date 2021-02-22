import { defineConfig } from 'vite-plugin-windicss'
import colors from 'windicss/colors'
import typography from 'windicss/plugin/typography'

const color = 'inherit' as const

export default defineConfig({
  darkMode: 'class',
  plugins: [
    typography(),
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            a: {
              '&:hover': {
                opacity: 1,
                color: colors.teal[600],
              },
              color,
              fontWeight: '500',
              opacity: 0.75,
              textDecoration: 'underline',
            },
            b: { color },
            code: { color },
            color,
            em: { color },
            h1: { color },
            h2: { color },
            h3: { color },
            h4: { color },
            maxWidth: '65ch',
            strong: { color },
          },
        },
      },
    },
  },
})
