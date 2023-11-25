<script setup lang="ts">
import { ref } from 'vue'
const theme = ref({
  token: {
    colorPrimary: '#00b96b'
  }
})
</script>
<template>
  <arco-config-provider :theme="theme">
    <RouterView />
  </arco-config-provider>
</template>
