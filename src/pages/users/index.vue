<script setup lang="ts">
</script>

<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank">
        Users Index
      </a>
    </p>
    <p>
      <router-link to="/users/profile">
        Go to Users Profile (show nested layout)
      </router-link>
    </p>
  </div>
</template>
