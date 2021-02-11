import './styles/main.postcss'
import generatedRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from './layouts/_setup'
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
