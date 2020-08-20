import './main.postcss'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'

// import routes genereted by Voie
import routes from 'voie-pages'
// import icons data genereted by PurgeIcons
import '@purge-icons/generated'

import App from './App.vue'
import { messages } from './messages'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const i18n = createI18n({
  locale: 'en',
  messages,
})

app.use(i18n)
app.use(router)

app.mount('#app')
