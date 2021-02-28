import { createI18n } from 'vue-i18n'
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })

  app.use(i18n)
}
