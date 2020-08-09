import './main.postcss'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
// @ts-ignore
import routes from '/@voie/pages'
import { registerComponents } from './components'
import App from './App.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(registerComponents)

app.mount('#app')
