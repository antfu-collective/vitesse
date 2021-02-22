<script setup lang="ts">
import { tryOnMounted } from '@vueuse/core'
import { useHead } from '@vueuse/head'
import { nextTick } from 'vue'

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})

tryOnMounted(async() => {
  await nextTick()

  const { matches: prefersDark } = window.matchMedia('(prefers-color-scheme: dark)')
  const setting = localStorage.getItem('color-schema') ?? 'auto'

  if (setting === 'dark' || (prefersDark && setting !== 'light'))
    document.documentElement.classList.toggle('dark', true)
})
</script>

<template>
  <router-view />
</template>
