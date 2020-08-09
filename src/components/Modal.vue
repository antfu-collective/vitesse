<template>
  <div
    class="fixed top-0 bottom-0 left-0 right-0 z-40"
    :class="value ? '': 'pointer-events-none'"
  >
    <div
      class="bg-white bg-opacity-85 bottom-0 left-0 right-0 top-0 absolute transition-opacity duration-500 ease-out"
      :class="value ? '': 'opacity-0'"
      @click="$emit('update:value', false)"
    />
    <div
      class="bg-white absolute transition-all duration-200 ease-out border-gray-200"
      :class="positionClass"
      :style="value ? {}: {transform}"
    >
      <slot />
    </div>
  </div>
</template>

<script setup="props" lang="ts">
import { computed } from 'vue'

declare const props: {
  value?: boolean
  direction?: 'bottom' | 'top' | 'left' | 'right'
}

const defaultDirection = 'bottom'

export const positionClass = computed(() => {
  switch (props.direction || defaultDirection) {
    case 'bottom':
      return 'bottom-0 left-0 right-0 border-t'
    case 'top':
      return 'top-0 left-0 right-0 border-b'
    case 'left':
      return 'bottom-0 left-0 top-0 border-r'
    case 'right':
      return 'bottom-0 top-0 right-0 border-l'
  }
})

export const transform = computed(() => {
  switch (props.direction || defaultDirection) {
    case 'bottom':
      return 'translateY(100%)'
    case 'top':
      return 'translateY(-100%)'
    case 'left':
      return 'translateX(-100%)'
    case 'right':
      return 'translateX(100%)'
  }
})
</script>
