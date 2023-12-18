import config from '@daotl/eslint-config'

export default config({
  unocss: true,
}, {
  ignores: ['cypress', '.nx', 'nx.json', '**/*.md', 'tsconfig.*'],
},
  {
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.build.json'],
      }
    }
  },
  {
    files: ["**/*.spec.ts"],
    languageOptions: {
      parserOptions: {
        project: ['tsconfig.spec.json'],
      }
    }
  },
)
