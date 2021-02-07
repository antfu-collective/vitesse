import './styles/main.postcss'
import generatedRoutes from 'pages-generated'
import { ViteSSG } from 'vite-ssg'
import { createRouterLayout } from 'vue-router-layout'
import { RouteRecordRaw } from 'vue-router'
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
