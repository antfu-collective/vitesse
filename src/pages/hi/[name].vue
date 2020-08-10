
<template>
  <div>
    <p class="text-4xl">
      <Icon class="iconify inline-block" icon="carbon:pedestrian" />
    </p>
    <p>
      {{ t('intro.hi', {name}) }}
    </p>
    <p class="text-sm opacity-50">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="back"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>

<script setup='props' lang='ts'>
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'

declare const props: {
  name: string
}

const router = useRouter()
export const back = () => router.push('/')

const { t } = useI18n()
export { t }
</script>
