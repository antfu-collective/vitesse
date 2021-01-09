import { App } from 'vue'
import { createI18n } from 'vue-i18n'

// import i18n resources
import en from '../../locales/en.json'
import zhCN from '../../locales/zh-CN.json'
import fr from '../../locales/fr.json'
import es from '../../locales/es.json'
import vi from '../../locales/vi.json'
import ja from '../../locales/ja.json'


export default (app: App) => {
  const i18n = createI18n({
    locale: 'en',
    messages: {
      en,
      'zh-CN': zhCN,
      fr,
      es,
      vi,
      ja
    }
  })

  app.use(i18n)
}
