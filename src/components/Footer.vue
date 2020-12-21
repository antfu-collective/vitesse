<template>
  <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <Icon icon="carbon:campsite" class="inline-block" />
    </router-link>

    <a class="icon-btn mx-2" @click="isDark = !isDark" :title="t('button.toggle_dark')">
      <Icon :icon="isDark ? 'carbon:moon' : 'carbon:sun'" class="inline-block" />
    </a>

    <a class="icon-btn mx-2" @click="toggleLocales" :title="t('button.toggle_langs')">
      <Icon icon="carbon:language" class="inline-block" />
    </a>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <Icon icon="carbon:dicom-overlay" class="inline-block" />
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank" title="GitHub">
      <Icon icon="carbon:logo-github" class="inline-block" />
    </a>
  </nav>
</template>

<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
import { locales } from '/~/messages'
import { isDark } from '/~/logics'

const i18n = useI18n()

const toggleLocales = () => {
  // change to some real logic
  i18n.locale.value = locales[(locales.indexOf(i18n.locale.value) + 1) % locales.length]
}
</script>
