import './styles/main.postcss'
import generatedRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import { RouteRecordRaw } from 'vue-router'
import { createRouterLayout } from './logics/router-layout'
import App from './App.vue'

const RouterLayout = createRouterLayout((layout: string) => {
  return import(`./layouts/${layout}.vue`)
})

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: RouterLayout,
    children: generatedRoutes,
  },
]

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
  },
)
