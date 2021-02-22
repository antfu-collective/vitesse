import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
import Prism from 'markdown-it-prism'
import ViteIcons, { ViteIconsResolver } from 'vite-plugin-icons'
import ViteComponents from 'vite-plugin-components'
import Markdown from 'vite-plugin-md'
import Pages from 'vite-plugin-pages'
import { VitePWA } from 'vite-plugin-pwa'
import Layouts from 'vite-plugin-vue-layouts'
import WindiCSS from 'vite-plugin-windicss'

export default defineConfig({
  resolve: {
    // Check path mapping at `./tsconfig.json - compilerOptions.paths`.
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.md$/, /\.vue$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['md', 'vue'],
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/vite-plugin-md
    Markdown({
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
      },
      wrapperClasses: 'prose prose-sm m-auto text-left',
    }),

    // https://github.com/antfu/vite-plugin-components
    ViteComponents({
      // Allow auto load markdown components under `./src/components/`.
      extensions: ['vue', 'md'],

      // Allow auto import and register components used in markdown.
      customLoaderMatcher: id => id.endsWith('.md'),

      // Auto import icons.
      customComponentResolvers: [
        // https://github.com/antfu/vite-plugin-icons
        ViteIconsResolver({
          componentPrefix: '',
          // enabledCollections: ['carbon']
        }),
      ],
    }),

    // https://github.com/antfu/vite-plugin-icons
    ViteIcons(),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
      safelist: 'prose prose-sm m-auto',
    }),

    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      manifest: {
        icons: [
          {
            sizes: '192x192',
            src: '/pwa-192x192.png',
            type: 'image/png',
          },
          {
            sizes: '512x512',
            src: '/pwa-512x512.png',
            type: 'image/png',
          },
          {
            purpose: 'any maskable',
            sizes: '512x512',
            src: '/pwa-512x512.png',
            type: 'image/png',
          },
        ],
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
      },
    }),

    // https://github.com/intlify/vite-plugin-vue-i18n
    VueI18n({
      include: [path.resolve(__dirname, 'locales/**')],
    }),
  ],
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    formatting: 'minify',
    script: 'async',
  },

  optimizeDeps: {
    exclude: [
      'vue-demi',
    ],
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
    ],
  },
})
