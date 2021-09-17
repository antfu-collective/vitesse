<script setup lang="ts">
import { useUserStore } from '~/stores/user'

const user = useUserStore()
const name = ref(user.savedName)
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">This is an auth only page. Try navigating to it without first setting a user.</em>
    </p>

    <div class="py-4" />

    <div>
      <router-link
        class="btn m-3 text-sm mt-6"
        to="/"
      >
        Home
      </router-link>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  middleware: auth
</route>
