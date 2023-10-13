import 'uno.css'
import '@unocss/reset/tailwind.css'
import './styles/main.css'

import { setupLayouts } from 'virtual:generated-layouts'
// import Previewer from 'virtual:vue-component-preview'
import { ViteSSG } from 'vite-ssg'

import generatedRoutes from '~pages'

import App from './App.vue'
import type { UserModule } from './types'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes, base: import.meta.env.BASE_URL },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(
      import.meta.glob<{ install: UserModule }>('./modules/*.ts', {
        eager: true,
      }),
    ).forEach((i) => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)
