import config from '@daotl/eslint-config'
import unocss from '@unocss/eslint-plugin'

export default [
  {
    ignores: ['cypress', '**/*.md'],
  },
  ...config(),
  unocss.configs.flat,
]
