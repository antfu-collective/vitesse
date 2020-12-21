import { App } from 'vue'
import installI18n from './i18n'
import './icons'

export default (app: App) => {
  installI18n(app)
}
