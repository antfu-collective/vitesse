<p align='center'>
  <img src='https://user-images.githubusercontent.com/11247099/111864893-a457fd00-899e-11eb-9f05-f4b88987541d.png' alt='Vitesse - Opinionated Vite Starter Template' width='600'/>
</p>

<p align='center'>
使用 <b>Vitesse</b><sup><em>(speed) </em></sup> 的 web 应用
<br> 
</p>

<br>

<p align='center'>
<a href="https://vitesse.netlify.app/">在线 Demo</a>
</p>

<br>

## 语言
查看 `README` 的其他语言版本: [English](./README.md) | 简体中文

<br>

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - 生来就很快

- 🗂 [基于文件的路由](./src/pages)

- 📦 [组件自动化加载](./src/components)

- 🍍 [使用 pinia 的状态管理](https://pinia.esm.dev/)

- 📑 [布局系统](./src/layouts)

- 📲 [PWA](https://github.com/antfu/vite-plugin-pwa)

- 🎨 [Windi CSS](https://github.com/windicss/windicss) - 下一代实用的原子css框架

- 😃 [各种图标集为你所用，从不妥协](https://github.com/antfu/unplugin-icons)

- 🌍 [I18n 国际化开箱即用](./locales)

- 🗒 [Markdown 支持](https://github.com/antfu/vite-plugin-md)

- 🔥 使用 [新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 📥 [API 自动加载](https://github.com/antfu/unplugin-auto-import) - 直接使用 Composition API 甚至更多

- 🖨 使用 [vite-ssg](https://github.com/antfu/vite-ssg) 的服务端渲染 (SSG)

- 🦔 使用 [critters](https://github.com/GoogleChromeLabs/critters) 的关键 CSS

- 🦾 当然也是 TypeScript 的

- ⚙️ 使用的 [Vitest](https://github.com/vitest-dev/vitest) 的单元测试, 以及使用 [Cypress](https://cypress.io/) 结合 [GitHub Actions](https://github.com/features/actions) 的 E2E 测试

- ☁️ 零配置部署 Netlify

<br>

## 预设

### UI 框架

- [Windi CSS](https://github.com/windicss/windicss) (按需的 [TailwindCSS](https://tailwindcss.com/)) - 更轻，更快和和一系列额外的特性!
  - [Windi CSS Typography](https://windicss.org/plugins/official/typography.html)

### Icons

- [Iconify](https://iconify.design) - 可以使用 [🔍Icônes](https://icones.netlify.app/) 任意的图标
- [`unplugin-icons`](https://github.com/antfu/unplugin-icons) - 组件化的图标

### 插件

- [Vue Router](https://github.com/vuejs/vue-router)
  - [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages) - 以文件系统为基础的路由
  - [`vite-plugin-vue-layouts`](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) - 页面布局系统
- [Pinia](https://pinia.esm.dev) - 直接的, 类型安全的, 使用 composition api 的轻便灵活的 vue 状态管理
- [`unplugin-vue-components`](https://github.com/antfu/unplugin-vue-components) - 自动加载组件
- [`unplugin-auto-import`](https://github.com/antfu/unplugin-auto-import) - 直接使用Vue Composition API等，无需导入
- [`vite-plugin-pwa`](https://github.com/antfu/vite-plugin-pwa) - PWA
- [`vite-plugin-windicss`](https://github.com/antfu/vite-plugin-windicss) - Windi CSS 的整合
- [`vite-plugin-md`](https://github.com/antfu/vite-plugin-md) - Markdown 作为组件，当然也可以让组件在Markdown 中使用
  - [`markdown-it-prism`](https://github.com/jGleitz/markdown-it-prism) - [Prism](https://prismjs.com/) 的语法高亮
  - [`prism-theme-vars`](https://github.com/antfu/prism-theme-vars) - 利用css变量自定义 Prism.js 的主题
- [Vue I18n](https://github.com/intlify/vue-i18n-next) - 国际化
  - [`vite-plugin-vue-i18n`](https://github.com/intlify/vite-plugin-vue-i18n) - Vue I18n 的 vite 插件
- [VueUse](https://github.com/antfu/vueuse) - 实用的 composition API 集合
- [`@vueuse/head`](https://github.com/vueuse/head) - 响应式地操作 document head

### 编码风格

- 使用 Composition API 地 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)
- [ESLint](https://eslint.org/) 配置为 [@antfu/eslint-config](https://github.com/antfu/eslint-config), 单引号, 无分号.

### 开发工具
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://github.com/vitest-dev/vitest) - Vite支持下的单元测试
- [Cypress](https://cypress.io/) - E2E 测试
- [pnpm](https://pnpm.js.org/) - 快, 节省磁盘空间的包管理器
- [`vite-ssg`](https://github.com/antfu/vite-ssg) - 服务端生成
  - [critters](https://github.com/GoogleChromeLabs/critters) - 关键 CSS
- [Netlify](https://www.netlify.com/) - 零配置的部署
- [VS Code 扩展](./.vscode/extensions.json)
  - [Vite](https://marketplace.visualstudio.com/items?itemName=antfu.vite) - 自动启动Vite服务器
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 `<script setup>` IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=lokalise.i18n-ally) - 多合一的 i18n 支持
  - [Windi CSS 智能感知](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - Windi CSS 的 IDE 支持
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## 衍生项目

由于这个模板的业务场景非常的局限，下面提供了一个精心策划的列表，列出了社区维护的具有不同偏好和功能集的衍生项目。也可以看看他们。当然也欢迎你 PR 提供自己的项目！

###### 官方

- [vitesse-lite](https://github.com/antfu/vitesse-lite) - Vitesse 的轻量版本
- [vitesse-nuxt3](https://github.com/antfu/vitesse-nuxt3) - Vitesse 的 Nuxt 3 版本
- [vitesse-nuxt-bridge](https://github.com/antfu/vitesse-nuxt-bridge) - Vitesse 的 Nuxt2 桥接版本
- [vitesse-webext](https://github.com/antfu/vitesse-webext) - 开箱即用的浏览器扩展 vite 模板

###### 社区

- [vitesse-addons](https://github.com/JohnCampionJr/vitesse-addons) by [@johncampionjr](https://github.com/johncampionjr) - 集成其他配置, 包含 [Prettier](https://prettier.io) 和 [Storybook](https://storybook.js.org)
- [vitesse-ssr-template](https://github.com/frandiox/vitesse-ssr-template) by [@frandiox](https://github.com/frandiox) - Vitesse 的 SSR 版本
- [vitespa](https://github.com/ctholho/vitespa) by [@ctholho](https://github.com/ctholho) - 类似 Vitesse 但无SSG/SSR
- [vitailse](https://github.com/zynth17/vitailse) by [@zynth17](https://github.com/zynth17) - 类似 Vitesse 但使用 TailwindCSS
- [vitesse-modernized-chrome-ext](https://github.com/xiaoluoboding/vitesse-modernized-chrome-ext) by [@xiaoluoboding](https://github.com/xiaoluoboding) - ⚡️ vite开箱即用的现代化的V3 Chrome扩展模板
- [vitesse-stackter-clean-architect](https://github.com/shamscorner/vitesse-stackter-clean-architect) by [@shamscorner](https://github.com/shamscorner) - 使用 vitesse 的一种模块化的干净架构模式
- [vitesse-enterprise](https://github.com/FranciscoKloganB/vitesse-enterprise) by [@FranciscoKloganB](https://github.com/FranciscoKloganB) - 无论团队规模大小，编码风格一致。

## 现在可以试试!

> Vitesse 需要 Node版本 >=14

### GitHub 模板

[使用这个模板创建仓库](https://github.com/antfu/vitesse/generate).

### 克隆到本地

如果您更喜欢使用更干净的git历史记录手动执行此操作

```bash
npx degit antfu/vitesse my-vitesse-app
cd my-vitesse-app
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

## 清单

使用此模板时，请尝试按照清单正确更新您自己的信息

- [ ] 在 `LICENSE` 中改变作者名
- [ ] 在 `App.vue` 中改变标题
- [ ] 在 `public` 目录下改变favicon
- [ ] 移除 `.github` 文件夹中包含资助的信息
- [ ] 整理 README 并删除路由

紧接着, 享受吧 :)

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:3333 中看到

```bash
pnpm dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm build
```

然后你会看到用于发布的 `dist` 文件夹被生成。

### 部署到 Netlify

前往 [Netlify](https://app.netlify.com/start) 并选择你的仓库, 一路 `OK` 下去，稍等一下后，你的应用将被创建.

## 为什么

最近我创建了几个Vite应用。对于我来说，设置配置是短时间快速实现想法的瓶颈。


所以为了更方便地创建应用，我为自己制作了这个开箱即用的模板，当然也伴随着一些优秀的实践。它非常固有化，但可以进行fork并随意的调整. [(查看社区的衍生项目)](#variations)
