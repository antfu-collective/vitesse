import { Plugin } from 'vue'
import Modal from './Modal.vue'
import Icon from './Icon.vue'
import Footer from './Footer.vue'

export const registerComponents: Plugin = {
  install(app) {
    app.component('Modal', Modal)
    app.component('Icon', Icon)
    app.component('Footer', Footer)
  },
}
