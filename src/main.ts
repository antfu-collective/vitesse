import '@unocss/reset/tailwind.css'
import './styles/main.css'
// eslint-disable-next-line import/no-unresolved
import 'uno.css'

import { setupLayouts } from 'virtual:generated-layouts'
import { ViteSSG } from 'vite-ssg'

// eslint-disable-next-line import/no-unresolved
import generatedRoutes from '~pages'

import App from './App.vue'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).forEach((i) =>
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
      i.install?.(ctx),
    )
  },
)
