<script setup lang="ts">
import { defineProps } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const props = defineProps({
  name: {
    required: true,
    type: String,
  },
})

const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      {{ t('intro.hi', { name: props.name }) }}
    </p>
    <p class="text-sm opacity-50">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>
    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
