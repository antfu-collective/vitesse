import { createI18n } from 'vue-i18n'
// Import i18n resources
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
/*
 * Static bundle importing https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n#static-bundle-importing
 * All i18n resources specified in the plugin `include` option can be loaded
 * at once using the import syntax
 */
import messages from '@intlify/vite-plugin-vue-i18n/messages'
import type { UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })

  app.use(i18n)
}
