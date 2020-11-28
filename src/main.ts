import './main.postcss'
import { createApp } from 'vue'
import installPlugins from './plugins'

import App from './App.vue'

const app = createApp(App)

installPlugins(app)

app.mount('#app')
