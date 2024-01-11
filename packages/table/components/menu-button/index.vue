<script lang="ts" setup>
import type {TableColumnData} from "../types/TableColumnData";
import {defineEmits, defineProps, withDefaults} from 'vue';

const emit = defineEmits(['handleOpenModel', 'handleRefresh'])

interface Props {
  columns?: TableColumnData[]
  loading?: boolean,
  size?: 'mini' | 'small' | 'medium' | 'large',
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => [],
  loading: false,
  size: 'medium',
}), handleClick = () => {
  emit('handleOpenModel', 'add')
}, handleRefresh = () => {
  emit('handleRefresh')
};
</script>

<template>
  <div class="arco-compontent-page-button d-flex a-center">
    <div class="arco-compontent-page-left-button">
      <a-button :size="props.size" type="primary" @click="handleClick">
        <template #icon>
          <i class="rtdp xinzeng"></i>
        </template>
        {{$t('menu.addBtn')}}
      </a-button>
      <slot :size="props.size" name="menuLeft"></slot>
    </div>
    <div class="arco-compontent-page-right-button d-flex a-center j-end">
      <slot name="menuRight"></slot>
      <a-button :size="props.size" shape="circle" type="outline" @click="handleRefresh">
        <template #icon>
          <i class="rtdp refresh"></i>
        </template>
      </a-button>
      <a-button :size="props.size" shape="circle" type="outline">
        <template #icon>
          <i class="rtdp peizhi"></i>
        </template>
      </a-button>
    </div>
  </div>
</template>

<style lang="less" scoped>
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

::v-deep(.arco-progress-circle-wrapper) {
  width: 30px !important;
  height: 30px !important;
}
</style>