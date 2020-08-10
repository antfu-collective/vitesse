import { watch, computed, Ref } from 'vue'
import { useStorage, usePreferredDark } from '@vueuse/core'

const preferredDark = usePreferredDark()
const schema = useStorage('vitesse-schema', 'auto') as Ref<'auto' | 'dark' | 'light'>

export const isDark = computed({
  get() {
    return schema.value === 'auto' ? preferredDark.value : schema.value === 'dark'
  },
  set(v: boolean) {
    if (v === preferredDark.value)
      schema.value = 'auto'
    else
      schema.value = v ? 'dark' : 'light'
  },
})

watch(
  isDark,
  v => document.documentElement.classList.toggle('schema-dark', v),
  { immediate: true },
)
