
<template>
  <div>
    <p class="text-4xl">
      <Icon class="iconify inline-block" icon="carbon:pedestrian" />
    </p>
    <p>
      Hi, {{ name }}!
    </p>

    <div>
      <button
        class="btn m-3 text-sm mt-8"
        @click="back"
      >
        Back
      </button>
    </div>
  </div>
</template>

<script setup='props' lang='ts'>
import { useRouter } from 'vue-router'

declare const props: {
  name: string
}

const router = useRouter()
export const back = () => router.push('/')
</script>
