// this allows much faster HMR
// discussed here: https://github.com/tailwindlabs/tailwindcss/issues/2820
import './styles/tw-base.postcss'
import './styles/tw-components.postcss'
import './styles/tw-utilities.postcss'
import './styles/main.postcss'

import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'pages-generated'
import { setupLayouts } from 'layouts-generated'
import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
