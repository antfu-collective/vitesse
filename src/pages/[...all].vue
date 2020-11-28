<template>
  <div>
    {{ t('not-found') }}
  </div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
