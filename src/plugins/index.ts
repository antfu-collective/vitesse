import { App } from 'vue'
import installRouter from './router'
import installI18n from './i18n'

export default (app: App) => {
  installRouter(app)
  installI18n(app)
}
