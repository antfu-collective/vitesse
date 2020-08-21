import { watch, computed } from 'vue'
import { usePreferredDark } from '@vueuse/core'
import { colorSchema } from '../store'

const preferredDark = usePreferredDark()

export const isDark = computed({
  get() {
    return colorSchema.value === 'auto' ? preferredDark.value : colorSchema.value === 'dark'
  },
  set(v: boolean) {
    if (v === preferredDark.value)
      colorSchema.value = 'auto'
    else
      colorSchema.value = v ? 'dark' : 'light'
  },
})

watch(
  isDark,
  v => document.documentElement.classList.toggle('schema-dark', v),
  { immediate: true },
)
