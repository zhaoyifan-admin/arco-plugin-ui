import {
  Sl,
  Xd,
  ap,
  ep,
  fa,
  ia,
  ip,
  lp,
  np,
  oa,
  op,
  pa,
  rp,
  sa,
  sp,
  tp,
  ua
} from "./chunk-TH7ISBDA.js";
import {
  $r,
  fr,
  qe,
  ur
} from "./chunk-FE6UGA2Q.js";
import {
  $l,
  T2,
  gv,
  ko,
  kp,
  nn,
  q2,
  vo
} from "./chunk-KZHBUNAO.js";
import "./chunk-C5DBZGYV.js";
import "./chunk-BDXATM4V.js";
import "./chunk-2HXSZBOA.js";
import "./chunk-4NAX6VIJ.js";
import "./chunk-O7NL36PV.js";
import "./chunk-5BCG5FEI.js";
import "./chunk-W6TZYUAE.js";
import {
  Fragment,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  openBlock,
  reactive,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  withCtx
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.2.0_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-94f00340.js
var qe2 = defineComponent({ __name: "index", props: { modelType: { default: "" }, Visible: { type: Boolean, default: false }, Loading: { type: Boolean, default: false }, options: { default: () => ({ loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 245, search: false, searchSpan: 6, searchBtnSpan: 6 }) }, size: { default: "small" } }, emits: ["handleSave", "handleUpdate", "update:Loading", "update:Visible"], setup(Be, { expose: V, emit: s }) {
  const u = ref(false), n = ref(null);
  let a = reactive({});
  const m = () => {
    s("update:Loading", false), s("update:Visible", false), n.value.resetFields(), n.value.clearValidate(), a = reactive({}), u.value = false;
  }, p = () => {
    s("update:Loading", false), u.value = false;
  };
  return V({ done: m, deepClone: (d) => {
    Object.assign(a, d);
  }, handleSave: () => {
    u.value = true, n.value.validate((d) => {
      if (d)
        return p(), false;
      s("handleSave", a, p, m);
    });
  }, handleUpdate: () => {
    u.value = true, n.value.validate((d) => {
      if (d)
        return p(), false;
      s("handleUpdate", a, p, m);
    });
  } }), (d, _e) => {
    const x = kp, g = gv, z = ko, v = vo, I = $l, U = fa, P = Sl, T = op, S = ap, D = rp, B = np, _ = nn, F = q2, $ = T2, L = Xd, W = tp, A = ia, G = sa, O = ua, R = oa, N = pa, q = ep, j = lp, C = ip, H = sp, J = qe, K = fr, M = ur, Q = $r;
    return openBlock(), createBlock(Q, { ref_key: "formRef", ref: n, disabled: u.value || d.modelType === "see", model: unref(a), size: d.size, "auto-label-width": "" }, { default: withCtx(() => [createVNode(M, { gutter: 16 }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(d.options.columns, (e, Y) => (openBlock(), createBlock(K, { key: Y, span: e.span || d.options.searchSpan || 6 }, { default: withCtx(() => [createVNode(J, { field: e.dataIndex, label: e.title, rules: e.rules, "validate-trigger": ["change", "input"], feedback: "" }, { label: withCtx(() => [renderSlot(d.$slots, e.dataIndex + "Label")]), default: withCtx(() => [e.type === "input" || e.type === void 0 ? (openBlock(), createBlock(x, { key: 0, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, "default-value": e.defaultValue, disabled: e.disabled, "max-length": e.maxLength, placeholder: `请输入 ${e.title}`, readonly: e.readonly, "show-word-limit": e.showLimit, size: d.size, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "default-value", "disabled", "max-length", "placeholder", "readonly", "show-word-limit", "size"])) : e.type === "number" ? (openBlock(), createBlock(g, { key: 1, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, "default-value": e.defaultValue, disabled: e.disabled, error: e.error, formatter: e.formatter, "hide-button": e.hideButton, max: e.max, min: e.min, mode: e.mode, placeholder: `请输入 ${e.title}`, precision: e.precision, "read-only": e.readonly, size: d.size, step: e.step, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "default-value", "disabled", "error", "formatter", "hide-button", "max", "min", "mode", "placeholder", "precision", "read-only", "size", "step"])) : e.type === "radio" ? (openBlock(), createBlock(z, { key: 2, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, options: e.options }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : e.type === "checkbox" && e.options !== void 0 ? (openBlock(), createBlock(v, { key: 3, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, "default-value": e.defaultValue, direction: e.direction, disabled: e.disabled, max: e.max, options: e.options, size: d.size, type: e.type }, null, 8, ["modelValue", "onUpdate:modelValue", "default-value", "direction", "disabled", "max", "options", "size", "type"])) : e.type === "checkbox" && e.dicData !== void 0 ? (openBlock(), createBlock(v, { key: 4, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l }, { default: withCtx(() => [createVNode(P, { colGap: 24, cols: 3, rowGap: 16 }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(e.dicData, (l, h) => (openBlock(), createBlock(U, { key: h }, { default: withCtx(() => [createVNode(I, { disabled: l.disabled, value: l.value }, { default: withCtx(() => [createTextVNode(toDisplayString(l.label), 1)]), _: 2 }, 1032, ["disabled", "value"])]), _: 2 }, 1024))), 128))]), _: 2 }, 1024)]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"])) : e.type === "switch" ? (openBlock(), createBlock(T, { key: 5, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, "checked-color": e.checkedColor, "checked-text": e.checkedText, "checked-value": e.checkedValue, "default-checked": e.defaultValue, disabled: e.disabled, loading: e.loading, size: d.size, type: e.type, "unchecked-color": e.uncheckedColor, "unchecked-text": e.uncheckedText, "unchecked-value": e.uncheckedValue }, null, 8, ["modelValue", "onUpdate:modelValue", "checked-color", "checked-text", "checked-value", "default-checked", "disabled", "loading", "size", "type", "unchecked-color", "unchecked-text", "unchecked-value"])) : e.type === "progress" ? (openBlock(), createBlock(S, { key: 6, animation: e.animation, color: e.color, percent: unref(a)[e.dataIndex], "show-text": e.showText, size: d.size, status: e.status, steps: e.steps, "stroke-width": e.strokeWidth, "track-color": e.trackColor, type: e.type, width: e.width }, null, 8, ["animation", "color", "percent", "show-text", "size", "status", "steps", "stroke-width", "track-color", "type", "width"])) : e.type === "slider" ? (openBlock(), createBlock(D, { key: 7, "default-value": e.defaultValue, direction: e.direction, disabled: e.disabled, marks: e.marks, max: e.max, min: e.min, range: e.range, "show-input": e.showInput, "show-ticks": e.showTicks, "show-tooltip": e.showTooltip, size: d.size, step: e.step, "v-model": unref(a)[e.dataIndex] }, null, 8, ["default-value", "direction", "disabled", "marks", "max", "min", "range", "show-input", "show-ticks", "show-tooltip", "size", "step", "v-model"])) : e.type === "rate" ? (openBlock(), createBlock(B, { key: 8, "default-value": e.defaultValue, disabled: e.disabled, grading: e.grading, readonly: e.readonly, size: d.size, "v-model": unref(a)[e.dataIndex], "allow-clear": "", "allow-half": "" }, null, 8, ["default-value", "disabled", "grading", "readonly", "size", "v-model"])) : e.type === "select" ? (openBlock(), createBlock(F, { key: 9, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, "allow-create": e.allowCreate, "allow-search": e.allowSearch, bordered: e.bordered, "default-active-first-option": e.defaultActiveFirstOption, "default-input-value": e.defaultValue, disabled: e.disabled, error: e.error, limit: e.limit, loading: e.loading, "max-tag-count": e.maxTagCount, multiple: e.multiple, placeholder: `请选择 ${e.title}`, scrollbar: e.scrollbar, size: d.size, "allow-clear": "" }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(e.dicData, (l, h) => (openBlock(), createBlock(_, { key: h, disabled: l.disabled, label: l.label, "tag-props": e.tagProps, value: l.value }, null, 8, ["disabled", "label", "tag-props", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue", "allow-create", "allow-search", "bordered", "default-active-first-option", "default-input-value", "disabled", "error", "limit", "loading", "max-tag-count", "multiple", "placeholder", "scrollbar", "size"])) : e.type === "inputTag" ? (openBlock(), createBlock($, { key: 10, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, "default-value": e.defaultValue, disabled: e.disabled, error: e.error, "max-tag-count": e.maxTagCount, placeholder: `请输入 ${e.title}`, readonly: e.readonly, size: d.size, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "default-value", "disabled", "error", "max-tag-count", "placeholder", "readonly", "size"])) : e.type === "avatar" ? (openBlock(), createBlock(L, { key: 11, imageUrl: unref(a)[e.dataIndex], size: e.size }, null, 8, ["imageUrl", "size"])) : e.type === "date" ? (openBlock(), createBlock(W, { key: 12, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, abbreviation: e.abbreviation, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, "picker-value": e.pickerValue, placeholder: `请选择 ${e.title}`, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: d.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "picker-value", "placeholder", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "month" ? (openBlock(), createBlock(A, { key: 13, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, abbreviation: e.abbreviation, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, "picker-value": e.pickerValue, placeholder: `请选择 ${e.title}`, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: d.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "picker-value", "placeholder", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "year" ? (openBlock(), createBlock(G, { key: 14, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, abbreviation: e.abbreviation, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, "picker-value": e.pickerValue, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: d.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "picker-value", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "quarter" ? (openBlock(), createBlock(O, { key: 15, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, abbreviation: e.abbreviation, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, "picker-value": e.pickerValue, placeholder: `请选择 ${e.title}`, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: d.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "picker-value", "placeholder", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "week" ? (openBlock(), createBlock(R, { key: 16, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, abbreviation: e.abbreviation, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, "picker-value": e.pickerValue, placeholder: `请选择 ${e.title}`, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: d.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "picker-value", "placeholder", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "range" ? (openBlock(), createBlock(N, { key: 17, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, abbreviation: e.abbreviation, "day-start-of-week": e.dayStartOfWeek, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, mode: e.mode, "picker-value": e.pickerValue, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: d.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "day-start-of-week", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "mode", "picker-value", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "cascader" ? (openBlock(), createBlock(q, { key: 18, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, "allow-search": e.allowSearch, "check-strictly": e.checkStrictly, "default-value": e.defaultValue, disabled: e.disabled, error: e.error, loading: e.loading, "max-tag-count": e.maxTagCount, multiple: e.multiple, options: e.options, placeholder: `请选择 ${e.title}`, size: d.size, "value-key": e.valueKey, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "allow-search", "check-strictly", "default-value", "disabled", "error", "loading", "max-tag-count", "multiple", "options", "placeholder", "size", "value-key"])) : e.type === "textarea" ? (openBlock(), createBlock(j, { key: 19, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, "auto-size": e.autoSize, "default-value": e.defaultValue, disabled: e.disabled, error: e.error, "max-length": e.maxLength, "show-word-limit": e.showWordLimit, size: d.size, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "auto-size", "default-value", "disabled", "error", "max-length", "show-word-limit", "size"])) : e.type === "transfer" ? (openBlock(), createBlock(C, { key: 20, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, data: e.data, "default-value": e.defaultValue, disabled: e.disabled, "one-way": e.oneWay, "show-search": e.showSearch, "show-select-all": e.showSelectAll, simple: e.simple, size: d.size, title: e.transferTitle }, null, 8, ["modelValue", "onUpdate:modelValue", "data", "default-value", "disabled", "one-way", "show-search", "show-select-all", "simple", "size", "title"])) : e.type === "treeSelect" ? (openBlock(), createBlock(H, { key: 21, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, "allow-search": e.allowSearch, border: e.bordered, data: e.treeData, "default-value": e.defaultValue, disabled: e.disabled, error: e.error, "label-in-value": e.labelInValue, loading: e.loading, "max-tag-count": e.maxTagCount, multiple: e.multiple, placeholder: `请选择 ${e.title}`, size: d.size, "tree-check-strictly": e.treeCheckStrictly, "tree-checkable": e.treeCheckable, "tree-checked-strategy": e.treeCheckedStrategy, "tree-props": e.treeProps, "trigger-props": e.triggerProps, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "allow-search", "border", "data", "default-value", "disabled", "error", "label-in-value", "loading", "max-tag-count", "multiple", "placeholder", "size", "tree-check-strictly", "tree-checkable", "tree-checked-strategy", "tree-props", "trigger-props"])) : createCommentVNode("", true)]), _: 2 }, 1032, ["field", "label", "rules"])]), _: 2 }, 1032, ["span"]))), 128))]), _: 3 })]), _: 3 }, 8, ["disabled", "model", "size"]);
  };
} });
export {
  qe2 as default
};
//# sourceMappingURL=index-94f00340-UKBYANHI.js.map