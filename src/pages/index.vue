
<template>
  <div>
    <p class="text-4xl">
      <Icon class="iconify inline-block" icon="carbon:campsite" />
    </p>
    <p>
      Vitesse
    </p>

    <div class="py-4" />

    <input
      v-model="name"
      placeholder="What's your name?"
      class="px-4 py-2 border border-gray-200 rounded text-center outline-none active:outline-none bg-transparent dark:border-gray-700"
      @keydown.enter="go"
    >

    <div>
      <button
        class="btn m-3 text-sm"
        :disabled="!name"
        @click="go"
      >
        GO
      </button>
    </div>
  </div>
</template>

<script setup='props' lang='ts'>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export const name = ref('')

const router = useRouter()
export const go = () => {
  if (name.value)
    router.push(`/hi/${name.value}`)
}
</script>
