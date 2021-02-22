import { useStorage } from '@vueuse/core'

import type { SchemaValue } from '~/types'

export const colorSchema = useStorage<SchemaValue>('color-schema', 'auto')
