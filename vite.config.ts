import path from 'node:path'

import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import Vue from '@vitejs/plugin-vue'
import LinkAttributes from 'markdown-it-link-attributes'
import Shiki from 'markdown-it-shikiji'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import { VitePWA } from 'vite-plugin-pwa'
import VueDevTools from 'vite-plugin-vue-devtools'
import Inspector from 'vite-plugin-vue-inspector'
import Layouts from 'vite-plugin-vue-layouts'
import WebfontDownload from 'vite-plugin-webfont-dl'
import generateSitemap from 'vite-ssg-sitemap'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
    // Fix issue when component libraries in the workspace are using different versions of deps like Vue
    // See: https://github.com/vuejs/core/issues/4344#issuecomment-1023220225
    dedupe: ['vue', 'vue-i18n', 'vue-router'],
  },

  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/],
        }),
      },
    }),

    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: ['.vue'],
      exclude: ['**/components/*'],
      dts: 'src/types/typed-router.d.ts',
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        '@vueuse/head',
        '@vueuse/core',
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          'vue-router/auto': ['useLink'],
        },
      ],
      dts: 'src/types/auto-imports.d.ts',
      dirs: ['src/composables', 'src/stores'],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ['vue', 'md'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: 'src/types/components.d.ts',
    }),

    // https://github.com/unocss/unocss
    // see uno.config.ts for config
    Unocss(),

    // https://github.com/unplugin/unplugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: 'prose prose-sm m-auto text-left',
      headEnabled: true,
      async markdownItSetup(md) {
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: '_blank',
            rel: 'noopener',
          },
        })
        md.use(await Shiki({
          defaultColor: false,
          themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
          },
        }))
      },
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),

    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, 'locales/**')],
    }),

    // https://github.com/antfu/vite-plugin-inspect

    // Visit http://localhost:3333/__inspect/ to see the inspector
    Inspect(),

    // https://github.com/webfansplz/vite-plugin-vue-inspector
    Inspector({
      toggleButtonVisibility: 'never',
      toggleComboKey: 'control-alt-i',
    }),

    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),

    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    include: ['test/**/*.test.ts'],
    environment: 'jsdom',
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false,
    },
    onFinished() {
      generateSitemap()
    },
  },

  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ['workbox-window', /vue-i18n/],
  },
})
