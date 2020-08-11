<template>
  <div ref="el" :class="$attrs.class" style="vertical-align: text-bottom" />
</template>

<script setup="props" lang="ts">
import { watch, ref, onMounted, nextTick } from 'vue'
import Iconify from '@purge-icons/generated'

declare const props: {
  icon: string
}

export const el = ref<HTMLElement | null>(null)

const update = async() => {
  if (el.value) {
    await nextTick()
    const svg = Iconify.renderSVG(props.icon, {})
    if (svg) {
      el.value.textContent = ''
      el.value.appendChild(svg)
    }
    else {
      const span = document.createElement('span')
      span.className = 'iconify'
      span.dataset.icon = props.icon
      el.value.textContent = ''
      el.value.appendChild(span)
    }
  }
}

watch(() => props.icon, update, { flush: 'post' })

onMounted(update)
</script>

<style>
span.iconify {
  background: #5551;
  border-radius: 100%;
  min-width: 1em;
  min-height: 1em;
  display: block;
}
</style>
