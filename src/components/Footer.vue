
<template>
  <div
    class="text-xl mt-4"
  >
    <div
      class="inline-block mx-2 cursor-pointer select-none"
      @click="isDark = !isDark"
    >
      <Icon
        class="inline-block"
        :icon="isDark ? 'carbon:moon' : 'carbon:sun'"
      />
    </div>

    <a
      class="mx-2"
      href="https://github.com/antfu/vitesse"
      target="_blank"
    >
      <Icon
        class="inline-block"
        icon="carbon:code"
      />
    </a>
  </div>
</template>

<script setup lang='ts'>
export { isDark } from '../utils/dark'
</script>
