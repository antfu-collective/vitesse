import 'windi.css'
import './styles/main.css'
import { setupLayouts } from 'layouts-generated'
import generatedRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

import type { UserModuleInstaller } from './types'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // Install all modules under `./src/modules/`.
    const modules = Object.values(
      import.meta.globEager('./modules/*.ts'),
    ) as Array<UserModuleInstaller>

    modules.map(i => i.install?.(ctx))
  },
)
