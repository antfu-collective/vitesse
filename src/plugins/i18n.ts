import { App } from 'vue'
import { createI18n } from 'vue-i18n'
import { messages } from '../messages'

export default (app: App) => {
  const i18n = createI18n({
    locale: 'en',
    messages,
  })

  app.use(i18n)
}
