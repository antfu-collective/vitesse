import { createI18n } from 'vue-i18n'
import { UserModule } from '~/types'

// import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
const folderPath = '../../locales/'
const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager(`${folderPath}*.y(a)?ml`))
    .map(([key, value]) => {
      const yaml = key.endsWith('.yaml')
      return [key.slice(folderPath.length, yaml ? -5 : -4), value.default]
    }),
)

export const install: UserModule = ({ app }) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages,
  })

  app.use(i18n)
}
