<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useI18n } from 'vue-i18n'
import { useUserStore } from '~/stores/user'

const props = defineProps<{ name: string }>()
const router = useRouter()
const { t } = useI18n()
const user = useUserStore()

watch(() => props.name, (name) => {
  user.setNewName(name)
}, { immediate: true })

</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-pedestrian class="inline-block" />
    </p>
    <p>
      {{ t('intro.hi', { name: props.name }) }}
    </p>
    <template v-if="user.otherNames.length">
      <p class="text-sm">
        {{ t('intro.aka') }}:
        <ul>
          <li v-for="name in user.otherNames">
            {{ name }}
          </li>
        </ul>
      </p>
    </template>

    <p class="text-sm opacity-50">
      <em>{{ t('intro.dynamic-route') }}</em>
    </p>

    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="router.back()"
      >
        {{ t('button.back') }}
      </button>
    </div>
  </div>
</template>
