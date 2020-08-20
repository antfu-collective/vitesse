<p align='center'>
  <img src='https://user-images.githubusercontent.com/11247099/90765536-b3010780-e31c-11ea-9297-80eb28c4f192.png' alt='Vitess - Opinionated Vite Starter Template' width='600'/>
</p>

<p align='center'>
<em>Mocking up web app with <b>⚡️Vitesse</b></em>
</p>

<br>

<p align='center'>
<a href="https://vitesse.netlify.app/">Live Demo</a>
</p>

<br>

## Features

- ⚡️ Vue3, Vite, pnpm, ESBuild - born with fastness

- 🗂 [File based routing](./src/pages)

- 📲 [Components auto importing](./src/components)

- 🎨 TailwindCSS with dark mode out-of-box

- 😃 [Use icons from any icon sets, with no compromise](./src/components)

- 🌍 i18n ready

- 🦾 TypeScript, of course

- ☁️ Deploy on Netlify, zero config

<br>

## Pre-packed

### UI Frameworks

- [Tailwind CSS](https://tailwindcss.com/)
- [tailwindcss-dark-mode](https://github.com/ChanceArthur/tailwindcss-dark-mode)

### Icons

- [Iconify](https://iconify.design) - use icons from any icon sets [🔍Icônes](https://icones.netlify.app/)
- [PurgeIcons](https://github.com/antfu/purge-icons) - bundles only the icons that you use

### Plugins

- [Vue Router](https://github.com/vuejs/vue-router)
  - [vite-plugin-voie](https://github.com/vamplate/vite-plugin-voie) - file system based routing
- [vite-plugin-components](https://github.com/antfu/vite-plugin-components) - components auto import
- [vue-i18n](https://github.com/intlify/vue-i18n-next) - internationalization
- [VueUse](https://github.com/antfu/vueuse) - collection of useful composition APIs

### Coding Style

- Use Composition API with [`<script setup>` SFC](https://github.com/vuejs/rfcs/blob/sfc-improvements/active-rfcs/0000-sfc-script-setup.md)
- [ESLint](https://eslint.org/) with [@antfu/eslint-config-vue](https://github.com/antfu/eslint-config), single colons, no semi.

### Dev tools

- [TypeScript](https://www.typescriptlang.org/)
- [pnpm](https://pnpm.js.org/) - fast, disk space efficient package manager
- [Netlify](https://www.netlify.com/) - deploy
- [VS Code Extensions](./.vscode/extensions.json)
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify)
  - [i18n Ally](https://marketplace.visualstudio.com/items?itemName=antfu.i18n-ally)
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Try it now!

### Github Template

[Create a repo from this template on Github](https://github.com/antfu/vitesse/generate).

### Clone to local

If you prefer do to it manually with cleaner git history

```bash
npx degit antfu/vitesse my-vitesse-app
cd my-vitesse-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Why

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck for me to make the idea simply comes true in a very short time. 

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. It's strongly opinionated, but feel free to tweak it or even maintains your own forks.
