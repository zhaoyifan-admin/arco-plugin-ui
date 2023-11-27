<script setup lang="ts">
import {onBeforeMount, ref} from 'vue'
import setIntroduction from '@/utils/setIconfont';
const theme = ref({
  token: {
    colorPrimary: '#00b96b'
  }
})
onBeforeMount(() => {
  // 设置批量第三方 icon 图标
  setIntroduction.cssCdn();
  // 设置批量第三方 js
  setIntroduction.jsCdn();
});
</script>
<template>
  <arco-config-provider :theme="theme">
    <RouterView />
  </arco-config-provider>
</template>
