<template>
  <div class="text-xl mt-6">
    <div class="icon-btn mx-2" @click="isDark = !isDark">
      <Icon :icon="isDark ? 'carbon:moon' : 'carbon:sun'" class="inline-block" />
    </div>

    <div class="icon-btn mx-2" @click="toggleLocales">
      <Icon icon="carbon:language" class="inline-block" />
    </div>

    <a class="icon-btn mx-2" href="https://github.com/antfu/vitesse" target="_blank">
      <Icon icon="carbon:code" class="inline-block" />
    </a>
  </div>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import { locales } from '/~/messages'
export { isDark } from '/~/utils'

const i18n = useI18n()

export const toggleLocales = () => {
  // change to some real logic
  i18n.locale.value = locales[(locales.indexOf(i18n.locale.value) + 1) % locales.length]
}
</script>
