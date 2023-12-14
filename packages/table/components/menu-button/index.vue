<script setup lang="ts">
const emit = defineEmits(['handleOpenModel','handleRefresh'])

interface Props {
  columns?: TableColumnData[]
  loading?: boolean,
  size?: 'mini' | 'small' | 'medium' | 'large',
}

withDefaults(defineProps<Props>(), {
  columns: () => [],
  loading: false,
  size: 'medium',
})
const handleClick = () => {
  emit('handleOpenModel','add')
}
const handleRefresh = () => {
  emit('handleRefresh')
}
</script>

<template>
  <div class="arco-compontent-page-button d-flex a-center">
    <div class="arco-compontent-page-left-button">
      <a-button type="primary" :size="size" @click="handleClick">
        <template #icon>
          <i class="rtdp xinzeng"></i>
        </template>
        新 增
      </a-button>
      <slot name="menuLeft" :size="size"></slot>
    </div>
    <div class="arco-compontent-page-right-button d-flex a-center j-end">
      <slot name="menuRight"></slot>
      <a-button type="outline" shape="circle" :size="size" @click="handleRefresh">
        <template #icon>
          <i class="rtdp refresh"></i>
        </template>
      </a-button>
      <a-button type="outline" shape="circle" :size="size">
        <template #icon>
          <i class="rtdp peizhi"></i>
        </template>
      </a-button>
    </div>
  </div>
</template>

<style scoped lang="less">
@import '../../styles/index';

.arco-compontent-page-button {
  margin-bottom: 10px;

  .arco-compontent-page-left-button,
  .arco-compontent-page-right-button {
    flex: 1;
  }

  .arco-compontent-page-left-button {
    button {
      margin-right: 10px;
    }
  }

  .arco-compontent-page-right-button {
    button {
      margin-left: 10px;
    }
  }
}
</style>