<script lang="ts" setup>
import {computed} from 'vue'

interface Query {
  [propName: string]: any // 添加一个字符串索引签名，用于包含带有任意数量的其他属性
}

interface Props {
  name?: string // 按钮文本 string | slot
  type?: 'default' | 'primary' | 'danger' | 'dashed' | 'text' // 按钮类型
  effect?: 'fade' | 'reverse' // 悬浮变化效果，只有 type 为 default 时，effect 才生效
  size?: 'mini' | 'small' | 'medium' | 'large' // 按钮尺寸
  shape?: string, // 按钮的形状
  status?: string, // 按钮的状态 'normal','warning','success','danger'
  disabled?: boolean // 是否禁用
  loading?: boolean // 是否加载中
}

const props = withDefaults(defineProps<Props>(), {
  name: '',
  type: 'default',
  effect: 'fade',
  size: 'medium',
  shape: '',
  status: '',
  disabled: false,
  loading: false
})
const emit = defineEmits(['click'])

const cls = computed(() => [
  `eh-btn-${props.type}`,
  `eh-btn-size-${props.size}`,
  `eh-btn-shape-${props.shape}`,
  {
    [`eh-btn-status-${props.status}`]: props.status,
    [`eh-btn-status-${props.shape}`]: props.shape,
    [`eh-btn-disabled`]: props.disabled,
    [`eh-btn-loading`]: props.loading,
    [`eh-btn-reverse`]: props.effect === 'reverse' && props.type === 'default',
  }
]);

function onClick(e: Event) {
  emit('click', e)
}

</script>
<template>
  <button
      :class="[cls, { [`eh-only-icon`]: $slots.icon && !$slots.default }, {[effect]: type === 'default'}]"
      :disabled="disabled"
      class="eh-btn"
      type="button"
      @click="onClick">
    <span v-if="loading || $slots.icon" class="eh-btn-icon">
      <icon-loading v-if="loading" spin="true"/>
      <slot v-else name="icon"/>
    </span>
    <span class="text">
      <slot>{{ name }}</slot>
    </span>
  </button>
</template>
<style lang="less" scoped>
@primary: @themeColor;
@danger: #FF4D4F;
.eh-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  line-height: 1.5714285714285714;
  color: rgba(0, 0, 0, .88);
  white-space: nowrap;
  text-align: center;
  background-color: transparent;
  border: 1px solid transparent;
  user-select: none;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);

  .loading-small, .loading-medium {
    width: 22px;
    opacity: 1;
  }

  .loading-large {
    width: 24px;
    opacity: 1;
  }

  .text {
    display: inline-flex;
    align-items: center;
    height: 100%;
  }
}

.eh-btn:not(.eh-only-icon) .eh-btn-icon {
  margin-right: 5px;
}

.eh-btn-loading {
  opacity: .65;
  pointer-events: none;
}

.fade {
  background-color: #ffffff;
  border-color: #d9d9d9;
  box-shadow: 0 2px 0 rgba(0, 0, 0, .02);

  &:hover {
    color: fade(@primary, 80%);
    border-color: fade(@primary, 80%);
  }

  &:active {
    color: shade(@primary, 12%);
    border-color: shade(@primary, 12%);
  }
}

.eh-btn-default {
  .fade();
}

.eh-btn-default.eh-btn-disabled {
  background-color: var(--color-secondary);
  border: 1px solid transparent;
  color: var(--color-text-2);
  cursor: not-allowed;
}
.eh-btn-default.eh-btn-status-danger {
  color: rgb(var(--danger-6));
  background-color: var(--color-danger-light-1);
  border-color: transparent
}

.eh-btn-default.eh-btn-status-danger:hover {
  color: rgb(var(--danger-6));
  background-color: var(--color-danger-light-2);
  border-color: transparent
}

.eh-btn-default.eh-btn-status-danger:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--danger-3))
}

.eh-btn-default.eh-btn-status-danger:active {
  color: rgb(var(--danger-6));
  background-color: var(--color-danger-light-3);
  border-color: transparent
}

.eh-btn-default.eh-btn-status-danger.eh-btn-loading {
  color: rgb(var(--danger-6));
  background-color: var(--color-danger-light-1);
  border-color: transparent
}

.eh-btn-default.eh-btn-status-danger.eh-btn-disabled {
  color: var(--color-danger-light-3);
  background-color: var(--color-danger-light-1);
  border: 1px solid transparent
}

.eh-btn-default.eh-btn-status-warning {
  color: rgb(var(--warning-6));
  background-color: var(--color-warning-light-1);
  border-color: transparent
}

.eh-btn-default.eh-btn-status-warning:hover {
  color: rgb(var(--warning-6));
  background-color: var(--color-warning-light-2);
  border-color: transparent
}

.eh-btn-default.eh-btn-status-warning:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--warning-3))
}

.eh-btn-default.eh-btn-status-warning:active {
  color: rgb(var(--warning-6));
  background-color: var(--color-warning-light-3);
  border-color: transparent
}

.eh-btn-default.eh-btn-status-warning.eh-btn-loading {
  color: rgb(var(--warning-6));
  background-color: var(--color-warning-light-1);
  border-color: transparent
}

.eh-btn-default.eh-btn-status-warning.eh-btn-disabled {
  color: var(--color-warning-light-3);
  background-color: var(--color-warning-light-1);
  border: 1px solid transparent
}

.eh-btn-default.eh-btn-status-success {
  color: rgb(var(--success-6));
  background-color: var(--color-success-light-1);
  border-color: transparent
}

.eh-btn-default.eh-btn-status-success:hover {
  color: rgb(var(--success-6));
  border-color: var(--color-success-light-2);
}

.eh-btn-default.eh-btn-status-success:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--success-3))
}

.eh-btn-default.eh-btn-status-success:active {
  color: rgb(var(--success-6));
  background-color: var(--color-success-light-3);
  border-color: transparent
}

.eh-btn-default.eh-btn-status-success.eh-btn-loading {
  color: rgb(var(--success-6));
  background-color: var(--color-success-light-1);
  border-color: transparent
}

.eh-btn-default.eh-btn-status-success.eh-btn-disabled {
  color: var(--color-success-light-3);
  background-color: var(--color-success-light-1);
  border: 1px solid transparent
}

.eh-btn-primary {
  color: #fff;
  background-color: @primary;
  box-shadow: 0 2px 0 rgba(5, 145, 255, .1);

  &:hover {
    background-color: fade(@primary, 80%);
    border-color: fade(@primary, 80%);
  }

  &:active {
    background-color: shade(@primary, 12%);
    border-color: shade(@primary, 12%);
  }
}

.eh-btn-primary.eh-btn-disabled {
  background-color: var(--color-primary-light-3);
  border: 1px solid transparent;
  color: #fff;
  cursor: not-allowed;
}

.eh-btn-primary.eh-btn-status-danger {
  color: #fff;
  background-color: rgb(var(--danger-6));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-danger:hover {
  color: #fff;
  background-color: rgb(var(--danger-5));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-danger:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--danger-3))
}

.eh-btn-primary.eh-btn-status-danger:active {
  color: #fff;
  background-color: rgb(var(--danger-7));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-danger.eh-btn-loading {
  color: #fff;
  background-color: rgb(var(--danger-6));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-danger.eh-btn-disabled {
  color: #fff;
  background-color: var(--color-danger-light-3);
  border: 1px solid transparent
}


.eh-btn-primary.eh-btn-status-warning {
  color: #fff;
  background-color: rgb(var(--warning-6));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-warning:hover {
  color: #fff;
  background-color: rgb(var(--warning-5));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-warning:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--warning-3))
}

.eh-btn-primary.eh-btn-status-warning:active {
  color: #fff;
  background-color: rgb(var(--warning-7));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-warning.eh-btn-loading {
  color: #fff;
  background-color: rgb(var(--warning-6));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-warning.eh-btn-disabled {
  color: #fff;
  background-color: var(--color-warning-light-3);
  border: 1px solid transparent
}

.eh-btn-primary.eh-btn-status-success {
  color: #fff;
  background-color: rgb(var(--success-6));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-success:hover {
  color: #fff;
  background-color: rgb(var(--success-5));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-success:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--success-3))
}

.eh-btn-primary.eh-btn-status-success:active {
  color: #fff;
  background-color: rgb(var(--success-7));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-success.eh-btn-loading {
  color: #fff;
  background-color: rgb(var(--success-6));
  border-color: transparent
}

.eh-btn-primary.eh-btn-status-success.eh-btn-disabled {
  color: #fff;
  background-color: var(--color-success-light-3);
  border: 1px solid transparent
}

.eh-btn-dashed {
  .fade();
  border-style: dashed;
}

.eh-btn-dashed.eh-btn-disabled {
  background-color: var(--color-dashed-light-3);
  border: 1px dashed var(--color-neutral-3);
  color: var(--color-text-4);
  cursor: not-allowed;
}

.eh-btn-dashed.eh-btn-status-danger {
  color: rgb(var(--danger-6));
  background-color: var(--color-danger-light-1);
  border-color: var(--color-danger-light-2)
}

.eh-btn-dashed.eh-btn-status-danger:hover {
  color: rgb(var(--danger-6));
  background-color: var(--color-danger-light-2);
  border-color: var(--color-danger-light-3)
}

.eh-btn-dashed.eh-btn-status-danger:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--danger-3))
}

.eh-btn-dashed.eh-btn-status-danger:active {
  color: rgb(var(--danger-6));
  background-color: var(--color-danger-light-3);
  border-color: var(--color-danger-light-4)
}

.eh-btn-dashed.eh-btn-status-danger.eh-btn-loading {
  color: rgb(var(--danger-6));
  background-color: var(--color-danger-light-1);
  border-color: var(--color-danger-light-2)
}

.eh-btn-dashed.eh-btn-status-danger.eh-btn-disabled {
  color: var(--color-danger-light-3);
  background-color: var(--color-danger-light-1);
  border: 1px dashed var(--color-danger-light-2)
}

.eh-btn-dashed.eh-btn-status-warning {
  color: rgb(var(--warning-6));
  background-color: var(--color-warning-light-1);
  border-color: var(--color-warning-light-2)
}

.eh-btn-dashed.eh-btn-status-warning:hover {
  color: rgb(var(--warning-6));
  background-color: var(--color-warning-light-2);
  border-color: var(--color-warning-light-3)
}

.eh-btn-dashed.eh-btn-status-warning:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--warning-3))
}

.eh-btn-dashed.eh-btn-status-warning:active {
  color: rgb(var(--warning-6));
  background-color: var(--color-warning-light-3);
  border-color: var(--color-warning-light-4)
}

.eh-btn-dashed.eh-btn-status-warning.eh-btn-loading {
  color: rgb(var(--warning-6));
  background-color: var(--color-warning-light-1);
  border-color: var(--color-warning-light-2)
}

.eh-btn-dashed.eh-btn-status-warning.eh-btn-disabled {
  color: var(--color-warning-light-3);
  background-color: var(--color-warning-light-1);
  border: 1px dashed var(--color-warning-light-2)
}

.eh-btn-dashed.eh-btn-status-success {
  color: rgb(var(--success-6));
  background-color: var(--color-success-light-1);
  border-color: var(--color-success-light-2)
}

.eh-btn-dashed.eh-btn-status-success:hover {
  color: rgb(var(--success-6));
  background-color: var(--color-success-light-2);
  border-color: var(--color-success-light-3)
}

.eh-btn-dashed.eh-btn-status-success:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--success-3))
}

.eh-btn-dashed.eh-btn-status-success:active {
  color: rgb(var(--success-6));
  background-color: var(--color-success-light-3);
  border-color: var(--color-success-light-4)
}

.eh-btn-dashed.eh-btn-status-success.eh-btn-loading {
  color: rgb(var(--success-6));
  background-color: var(--color-success-light-1);
  border-color: var(--color-success-light-2)
}

.eh-btn-dashed.eh-btn-status-success.eh-btn-disabled {
  color: var(--color-success-light-3);
  background-color: var(--color-success-light-1);
  border: 1px dashed var(--color-success-light-2)
}

.eh-btn-text {
  &:hover {
    background-color: rgba(0, 0, 0, .06);
  }

  &:active {
    background-color: rgba(0, 0, 0, .15);
  }
}

.eh-btn-text.eh-btn-disabled {
  color: var(--color-text-4);
  background-color: transparent;
  border: 1px solid transparent;
  cursor: not-allowed;
}

.eh-btn-text.eh-btn-status-danger {
  color: rgb(var(--danger-6));
  background-color: transparent;
  border-color: transparent
}

.eh-btn-text.eh-btn-status-danger:hover {
  color: rgb(var(--danger-6));
  background-color: var(--color-fill-2);
  border-color: transparent
}

.eh-btn-text.eh-btn-status-danger:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--danger-3))
}

.eh-btn-text.eh-btn-status-danger:active {
  color: rgb(var(--danger-6));
  background-color: var(--color-fill-3);
  border-color: transparent
}

.eh-btn-text.eh-btn-status-danger.eh-btn-loading {
  color: rgb(var(--danger-6));
  background-color: transparent;
  border-color: transparent
}

.eh-btn-text.eh-btn-status-danger.eh-btn-disabled {
  color: var(--color-danger-light-3);
  background-color: transparent;
  border: 1px solid transparent
}

.eh-btn-text.eh-btn-status-warning {
  color: rgb(var(--warning-6));
  background-color: transparent;
  border-color: transparent
}

.eh-btn-text.eh-btn-status-warning:hover {
  color: rgb(var(--warning-6));
  background-color: var(--color-fill-2);
  border-color: transparent
}

.eh-btn-text.eh-btn-status-warning:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--warning-3))
}

.eh-btn-text.eh-btn-status-warning:active {
  color: rgb(var(--warning-6));
  background-color: var(--color-fill-3);
  border-color: transparent
}

.eh-btn-text.eh-btn-status-warning.eh-btn-loading {
  color: rgb(var(--warning-6));
  background-color: transparent;
  border-color: transparent
}

.eh-btn-text.eh-btn-status-warning.eh-btn-disabled {
  color: var(--color-warning-light-3);
  background-color: transparent;
  border: 1px solid transparent
}

.eh-btn-text.eh-btn-status-success {
  color: rgb(var(--success-6));
  background-color: transparent;
  border-color: transparent
}

.eh-btn-text.eh-btn-status-success:hover {
  color: rgb(var(--success-6));
  background-color: var(--color-fill-2);
  border-color: transparent
}

.eh-btn-text.eh-btn-status-success:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--success-3))
}

.eh-btn-text.eh-btn-status-success:active {
  color: rgb(var(--success-6));
  background-color: var(--color-fill-3);
  border-color: transparent
}

.eh-btn-text.eh-btn-status-success.eh-btn-loading {
  color: rgb(var(--success-6));
  background-color: transparent;
  border-color: transparent
}

.eh-btn-text.eh-btn-status-success.eh-btn-disabled {
  color: var(--color-success-light-3);
  background-color: transparent;
  border: 1px solid transparent
}

.eh-btn-link {
  color: @primary;

  &:hover {
    color: fade(@primary, 80%);
  }

  &:active {
    color: shade(@primary, 12%);
  }
}

.eh-btn-reverse {
  &:hover {
    color: #fff;
    background-color: fade(@primary, 80%);
    border-color: fade(@primary, 80%);
  }

  &:active {
    color: #fff;
    background-color: shade(@primary, 12%);
    border-color: shade(@primary, 12%);
  }
}

.eh-btn-reverse.eh-btn-status-danger {
  color: rgb(var(--danger-6));
  background-color: var(--color-danger-light-1);
  border-color: var(--danger-6);
}

.eh-btn-reverse.eh-btn-status-danger:hover {
  color: #fff;
  background-color: rgb(var(--danger-6));
  border-color: transparent
}

.eh-btn-reverse.eh-btn-status-danger:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--danger-3))
}

.eh-btn-reverse.eh-btn-status-danger:active {
  color: rgb(var(--danger-6));
  background-color: var(--color-danger-light-3);
  border-color: transparent
}

.eh-btn-reverse.eh-btn-status-danger.eh-btn-loading {
  color: rgb(var(--danger-6));
  background-color: var(--color-danger-light-1);
  border-color: transparent
}

.eh-btn-reverse.eh-btn-status-danger.eh-btn-disabled {
  color: var(--color-danger-light-3);
  background-color: var(--color-danger-light-1);
  border: 1px solid transparent
}

.eh-btn-reverse.eh-btn-status-warning {
  color: rgb(var(--warning-6));
  background-color: var(--color-warning-light-1);
  border-color: var(--warning-6);
}

.eh-btn-reverse.eh-btn-status-warning:hover {
  color: #fff;
  background-color: rgb(var(--warning-6));
  border-color: transparent
}

.eh-btn-reverse.eh-btn-status-warning:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--warning-3))
}

.eh-btn-reverse.eh-btn-status-warning:active {
  color: rgb(var(--warning-6));
  background-color: var(--color-warning-light-3);
  border-color: transparent
}

.eh-btn-reverse.eh-btn-status-warning.eh-btn-loading {
  color: rgb(var(--warning-6));
  background-color: var(--color-warning-light-1);
  border-color: transparent
}

.eh-btn-reverse.eh-btn-status-warning.eh-btn-disabled {
  color: var(--color-warning-light-3);
  background-color: var(--color-warning-light-1);
  border: 1px solid transparent
}

.eh-btn-reverse.eh-btn-status-success {
  color: rgb(var(--success-6));
}

.eh-btn-reverse.eh-btn-disabled {
  background-color: var(--color-secondary);
  border: 1px solid transparent;
  color: var(--success-6);
  cursor: not-allowed;
}

.eh-btn-reverse.eh-btn-status-success {
  border-color: var(--success-5);
}

.eh-btn-reverse.eh-btn-status-success:hover {
  color: #fff;
  background-color: rgb(var(--success-5));
  border-color: transparent
}

.eh-btn-reverse.eh-btn-status-success:focus-visible {
  box-shadow: 0 0 0 .25em rgb(var(--success-3))
}

.eh-btn-reverse.eh-btn-status-success:active {
  color: #fff;
  background-color: rgb(var(--success-7));
  border-color: transparent
}

.eh-btn-reverse.eh-btn-status-success.eh-btn-loading {
  color: #fff;
  background-color: rgb(var(--success-6));
  border-color: transparent
}

.eh-btn-reverse.eh-btn-status-success.eh-btn-disabled {
  color: rgb(var(--success-6));
  background-color: var(--color-success-light-1);
  border-color: transparent
}

.eh-btn-size-mini {
  font-size: 14px;
  height: 24px;
  padding: 0 7px;
  border-radius: var(--border-radius-small);
}

.eh-btn-size-mini.eh-btn-shape-circle {
  width: 24px;
  height: 24px;
  padding: 0;
  text-align: center;
  border-radius: var(--border-radius-circle)
}

.eh-btn-size-mini.eh-btn-shape-round {
  border-radius: 12px;
}

.eh-btn-size-small {
  font-size: 14px;
  height: 28px;
  padding: 0 11px;
  border-radius: var(--border-radius-small);
}

.eh-btn-size-small.eh-btn-shape-circle {
  width: 28px;
  height: 28px;
  padding: 0;
  text-align: center;
  border-radius: var(--border-radius-circle)
}

.eh-btn-size-small.eh-btn-shape-round {
  border-radius: 14px;
}

.eh-btn-size-medium {
  font-size: 14px;
  height: 32px;
  padding: 4px 15px;
  border-radius: var(--border-radius-small);
}

.eh-btn-size-medium.eh-btn-shape-circle {
  width: 32px;
  height: 32px;
  padding: 0;
  text-align: center;
  border-radius: var(--border-radius-circle)
}

.eh-btn-size-medium.eh-btn-shape-round {
  border-radius: 16px;
}

.eh-btn-size-large {
  font-size: 16px;
  height: 40px;
  padding: 6.428571428571429px 15px;
  border-radius: var(--border-radius-small);
}

.eh-btn-size-large.eh-btn-shape-circle {
  width: 36px;
  height: 36px;
  padding: 0;
  text-align: center;
  border-radius: var(--border-radius-circle)
}

.eh-btn-size-small.eh-btn-shape-round {
  border-radius: 18px;
}
</style>
