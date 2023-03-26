import type { Locale } from 'vue-i18n'
import { createI18n } from 'vue-i18n'
import { type UserModule } from '~/types'

// Import i18n resources
// https://vitejs.dev/guide/features.html#glob-import
//
// Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
const i18n = createI18n({
  legacy: false,
  locale: '',
  messages: {},
})

export const availableLocales = (import.meta.env.locales).split(',')
const loadedLanguages: string[] = []

function setI18nLanguage(lang: Locale) {
  i18n.global.locale.value = lang as any
  document.querySelector('html')?.setAttribute('lang', lang)
  return lang
}

export function loadLanguageAsync(lang: string) {
  // If the same language
  if (i18n.global.locale.value === lang)
    return Promise.resolve(setI18nLanguage(lang))

  // If the language was already loaded
  if (loadedLanguages.includes(lang))
    return Promise.resolve(setI18nLanguage(lang))

  // If the language hasn't been loaded yet
  return import(`../../locales/${lang}.yml`).then(
    (messages) => {
      i18n.global.setLocaleMessage(lang, messages.default)
      loadedLanguages.push(lang)
      return setI18nLanguage(lang)
    },
  )
}

export const install: UserModule = ({ app }) => {
  app.use(i18n)
  loadLanguageAsync('en')
}
