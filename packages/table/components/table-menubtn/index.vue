<script lang="ts" setup>
import type {TableOptions} from "../index";
import i18n from "../../../utils/local";

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
  <div v-if="options.menuBtnStyle === 'text'" class="text-icon-btn">
    <a-button
        :size="size"
        type="text"
        @click="handleMenuClick('see', record)"
    >
      <template #icon>
        <i class="rtdp chakan"></i>
      </template>
      {{ i18n.global.t('menu.viewBtn') }}
    </a-button>
    <a-button
        :size="size"
        type="text"
        @click="handleMenuClick('edit', record)"
    >
      <template #icon>
        <i class="rtdp caozuo-bianji"></i>
      </template>
      {{ i18n.global.t('menu.editBtn') }}
    </a-button>
    <a-button
        :size="size"
        type="text"
        @click="handleMenuClick('seeVedio', record)"
    >
      <template #icon>
        <i class="rtdp shipin"></i>
      </template>
      {{ i18n.global.t('menu.vedioBtn') }}
    </a-button>
    <a-button :size="size" status="danger" type="text">
      <template #icon>
        <i class="rtdp deletebtn"></i>
      </template>
      {{ i18n.global.t('menu.delBtn') }}
    </a-button>
  </div>
  <div v-if="options.menuBtnStyle === 'icon'" class="icon-btn">
    <a-tooltip :content="i18n.global.t('menu.viewBtn')">
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
    <a-tooltip :content="i18n.global.t('menu.viewBtn')">
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
    <a-tooltip :content="i18n.global.t('menu.vedioBtn')">
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
    <a-tooltip :content="i18n.global.t('menu.delBtn')">
      <a-button :size="size" status="danger" type="text">
        <template #icon>
          <i class="rtdp deletebtn"></i>
        </template>
      </a-button>
    </a-tooltip>
  </div>
</template>

<style lang="less" scoped>

</style>