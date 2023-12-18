<script setup lang="ts">
import type {TableOptions} from "../index";

const emit = defineEmits(['handleMenuClick'])

interface Props {
  record: object,
  size?: 'mini' | 'small' | 'medium' | 'large',
  options?: TableOptions,
}

withDefaults(defineProps<Props>(), {
  record: () => {
    return {}
  },
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

const handleMenuClick = (type: string, params: object) => {
  emit('handleMenuClick',type, params)
}
</script>

<template>
  <div class="text-icon-btn" v-if="options.menuBtnStyle === 'text'">
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
  </div>
  <div class="icon-btn" v-if="options.menuBtnStyle === 'icon'">
    <a-tooltip content="查看">
      <a-button
          :size="size"
          type="text"
          @click="handleMenuClick('see', record)"
      >
        <template #icon>
          <i class="rtdp chakan"></i>
        </template>
      </a-button>
    </a-tooltip>
    <a-tooltip content="编 辑">
      <a-button
          :size="size"
          type="text"
          @click="handleMenuClick('edit', record)"
      >
        <template #icon>
          <i class="rtdp caozuo-bianji"></i>
        </template>
      </a-button>
    </a-tooltip>
    <a-tooltip content="查看视频">
      <a-button
          :size="size"
          type="text"
          @click="handleMenuClick('seeVedio', record)"
      >
        <template #icon>
          <i class="rtdp shipin"></i>
        </template>
      </a-button>
    </a-tooltip>
    <a-tooltip content="删 除">
      <a-button type="text" :size="size" status="danger">
        <template #icon>
          <i class="rtdp deletebtn"></i>
        </template>
      </a-button>
    </a-tooltip>
  </div>
</template>

<style scoped lang="less">

</style>