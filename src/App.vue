<script setup lang="ts">
import { DefaultApolloClient } from '@vue/apollo-composable'
import { apolloClient } from './ApolloClient'

// https://v4.apollo.vuejs.org/
provide(DefaultApolloClient, apolloClient)

// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Vitesse',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
  ],
})
</script>

<template>
  <router-view />
</template>
