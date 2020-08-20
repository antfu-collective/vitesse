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

- ⚡️ [Vue3](https://github.com/vuejs/vue-next), [Vite](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/), [ESBuild](https://github.com/evanw/esbuild) - born with fastness

- 🗂 [File based routing](./src/pages)

- 📲 [Components auto importing](./src/components)

- 🎨 TailwindCSS with dark mode out-of-box

- 😃 [Use icons from any icon sets, with no compromise](./src/components)

- 🌍 [i18n ready](./locales)

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

## Checklist

When you setup your clones, try follow the checklist to update info properly

- [ ] Rename `name` field in `package.json`
- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `index.html`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes

And, enjoy :)

## Usage

### Development

Just run and visit http://localhost:3000

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the genrated file in `dist` that ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select you clone, `OK` along the way, and your App will be live in a minute.

## Why

I have created several Vite apps recently. Setting the configs up is kinda the bottleneck for me to make the ideas simply come true within a very short time. 

So I made this starter template for myself to create apps more easily, along with some good practices that I have learned from making those apps. It's strongly opinionated, but feel free to tweak it or even maintains your own forks.
