<script setup lang="ts">
import { useQuery } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import { useUserStore } from '~/stores/user'

// graphql
const { result, loading, error } = useQuery(gql`
  query ExampleQuery {
    company {
      ceo
    }
    roadster {
      apoapsis_au
    }
  }
`)

const user = useUserStore()
const name = ref(user.savedName)

const router = useRouter()
const go = () => {
  if (name.value)
    router.push(`/hi/${encodeURIComponent(name.value)}`)
}

const { t } = useI18n()
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
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />

    <input
      id="input"
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      :aria-label="t('intro.whats-your-name')"
      type="text"
      autocomplete="false"
      p="x-4 y-2"
      w="250px"
      text="center"
      bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go"
    >
    <label class="hidden" for="input">{{ t('intro.whats-your-name') }}</label>

    <div>
      <button
        class="m-3 text-sm btn"
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>

    <div class="py-4" />

    <h1 class="text-lg underline font-semibold mb-3">
      <a href="https://v4.apollo.vuejs.org/" target="_blank">
        Vue Apollo GraphQL V4 (alpha)
      </a>
    </h1>
    <div>
      <div v-if="loading">
        Loading. . .
      </div>
      <div v-else-if="error">
        Error: {{ error.message }}
      </div>
      <code v-else-if="result">
        {{ result }}
      </code>
    </div>

    <div class="py-4" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
