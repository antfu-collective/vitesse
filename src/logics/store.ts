import { Ref } from 'vue'
import { useStorage } from '@vueuse/core'

export const colorSchema = useStorage('color-schema', 'auto') as Ref<'auto' | 'dark' | 'light'>
