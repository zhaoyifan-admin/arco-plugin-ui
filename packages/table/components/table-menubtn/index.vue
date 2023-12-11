<script setup lang="ts">
const emit = defineEmits(['handleMenuClick'])

interface Props {
  record: any,
  size?: 'mini' | 'small' | 'medium' | 'large',
  options?: TableOptions,
}

withDefaults(defineProps<Props>(), {
  record:() => {},
  size: 'small',
  options: () => {
    return {
      loading: false,
      index: false,
      indexWidth: 60,
      columns: [],
      menuWidth: 120,
      search: false,
      searchSpan: 6,
      searchBtnSpan: 6,
    }
  },
})

const handleMenuClick = (type: string, params: any) => {
  emit('handleMenuClick', params)
}
</script>

<template>
  <a-button
      :size="size"
      type="text"
      @click="handleMenuClick('see', record)"
  >
    <template #icon>
      <i class="rtdp chakan"></i>
    </template>
    查 看
  </a-button>
  <a-button
      :size="size"
      type="text"
      @click="handleMenuClick('edit', record)"
  >
    <template #icon>
      <i class="rtdp caozuo-bianji"></i>
    </template>
    编 辑
  </a-button>
  <a-button
      :size="size"
      type="text"
      @click="handleMenuClick('seeVedio', record)"
  >
    <template #icon>
      <i class="rtdp shipin"></i>
    </template>
    查看视频
  </a-button>
  <a-button type="text" :size="size" status="danger">
    <template #icon>
      <i class="rtdp deletebtn"></i>
    </template>
    删 除
  </a-button>
</template>

<style scoped lang="less">

</style>