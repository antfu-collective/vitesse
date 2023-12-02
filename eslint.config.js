import antfu from '@antfu/eslint-config'

export default antfu(
  {
    unocss: true,
    prettier: {
      css: true,
      html: true,
    },
  },
)
