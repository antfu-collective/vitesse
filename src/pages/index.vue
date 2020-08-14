<template>
  <div>
    <p class="text-4xl">
      <Icon class="iconify inline-block" icon="carbon:campsite" />
    </p>
    <p>
      <a href="https://github.com/antfu/vitesse" target="_blank">
        Vitesse
      </a>
    </p>
    <p class="text-sm opacity-50">
      <em>{{ t('intro.desc') }}</em>
    </p>

    <div class="py-4" />

    <input
      v-model="name"
      :placeholder="t('intro.whats-your-name')"
      class="px-4 py-2 border border-gray-200 rounded text-center text-sm outline-none active:outline-none bg-transparent dark:border-gray-700"
      style="width: 250px"
      @keydown.enter="go"
    >

    <div>
      <button
        class="btn m-3 text-sm"
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

export const name = ref('')

const router = useRouter()
export const go = () => {
  if (name.value)
    router.push(`/hi/${name.value}`)
}

const { t } = useI18n()
export { t }
</script>
