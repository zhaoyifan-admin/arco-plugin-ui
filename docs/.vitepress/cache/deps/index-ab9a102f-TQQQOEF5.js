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
  fr,
  qe
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
  computed,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  openBlock,
  renderList,
  renderSlot,
  toDisplayString,
  withCtx
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.2.0_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-ab9a102f.js
var $e = defineComponent({ __name: "index", props: { disabledForm: { type: Boolean, default: false }, data: { default: () => [] }, searchForm: { default: () => ({}) }, size: { default: "small" }, options: { default: () => ({ loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 245, search: false, searchSpan: 6, searchBtnSpan: 6 }) } }, emits: ["update:searchForm"], setup(f, { expose: k, emit: y }) {
  const n = f, l = computed({ get() {
    var c;
    let o = {};
    return (c = n.options.columns) == null || c.forEach((r) => {
      r.defaultValue && (o[r.dataIndex] = r.defaultValue);
    }), Object.assign(n.searchForm, o), n.searchForm;
  }, set(o) {
    console.log(123123), console.log(o), y("update:searchForm", o);
  } });
  return k({ searchReset: () => {
    l.value = {};
  } }), (o, c) => {
    const r = kp, w = gv, V = ko, b = vo, x = $l, z = fa, g = Sl, I = op, U = ap, T = rp, C = np, S = nn, F = q2, D = T2, B = Xd, $ = tp, _ = ia, P = sa, W = ua, L = oa, G = pa, A = ep, O = lp, R = ip, E = sp, N = qe, j = fr;
    return openBlock(true), createElementBlock(Fragment, null, renderList(o.options.columns, (e, q) => (openBlock(), createElementBlock(Fragment, { key: q }, [e.search ? (openBlock(), createBlock(j, { key: 0, span: e.span || o.options.searchSpan || 6 }, { default: withCtx(() => [createVNode(N, { field: e.title, label: e.title, feedback: "" }, { label: withCtx(() => [renderSlot(o.$slots, e.dataIndex + "SearchLabel")]), default: withCtx(() => [e.type === "input" || e.type === void 0 ? (openBlock(), createBlock(r, { key: 0, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, "default-value": e.defaultValue, disabled: e.disabled, "max-length": e.maxLength, placeholder: `请输入 ${e.title}`, readonly: e.readonly, "show-word-limit": e.showLimit, size: o.size, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "default-value", "disabled", "max-length", "placeholder", "readonly", "show-word-limit", "size"])) : e.type === "number" ? (openBlock(), createBlock(w, { key: 1, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, "default-value": e.defaultValue, disabled: e.disabled, error: e.error, formatter: e.formatter, "hide-button": e.hideButton, max: e.max, min: e.min, mode: e.mode, placeholder: `请输入 ${e.title}`, precision: e.precision, "read-only": e.readonly, size: o.size, step: e.step, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "default-value", "disabled", "error", "formatter", "hide-button", "max", "min", "mode", "placeholder", "precision", "read-only", "size", "step"])) : e.type === "radio" ? (openBlock(), createBlock(V, { key: 2, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, options: e.options }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])) : e.type === "checkbox" && e.options !== void 0 ? (openBlock(), createBlock(b, { key: 3, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, "default-value": e.defaultValue, direction: e.direction, disabled: e.disabled, max: e.max, options: e.options, size: o.size, type: e.type }, null, 8, ["modelValue", "onUpdate:modelValue", "default-value", "direction", "disabled", "max", "options", "size", "type"])) : e.type === "checkbox" && e.dicData !== void 0 ? (openBlock(), createBlock(b, { key: 4, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a }, { default: withCtx(() => [createVNode(g, { colGap: 24, cols: 3, rowGap: 16 }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(e.dicData, (a, p) => (openBlock(), createBlock(z, { key: p }, { default: withCtx(() => [createVNode(x, { disabled: a.disabled, value: a.value }, { default: withCtx(() => [createTextVNode(toDisplayString(a.label), 1)]), _: 2 }, 1032, ["disabled", "value"])]), _: 2 }, 1024))), 128))]), _: 2 }, 1024)]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"])) : e.type === "switch" ? (openBlock(), createBlock(I, { key: 5, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, "checked-color": e.checkedColor, "checked-text": e.checkedText, "checked-value": e.checkedValue, "default-checked": e.defaultValue, disabled: e.disabled, loading: e.loading, size: o.size, type: e.type, "unchecked-color": e.uncheckedColor, "unchecked-text": e.uncheckedText, "unchecked-value": e.uncheckedValue }, null, 8, ["modelValue", "onUpdate:modelValue", "checked-color", "checked-text", "checked-value", "default-checked", "disabled", "loading", "size", "type", "unchecked-color", "unchecked-text", "unchecked-value"])) : e.type === "progress" ? (openBlock(), createBlock(U, { key: 6, animation: e.animation, color: e.color, percent: l.value[e.dataIndex], "show-text": e.showText, size: o.size, status: e.status, steps: e.steps, "stroke-width": e.strokeWidth, "track-color": e.trackColor, type: e.type, width: e.width }, null, 8, ["animation", "color", "percent", "show-text", "size", "status", "steps", "stroke-width", "track-color", "type", "width"])) : e.type === "slider" ? (openBlock(), createBlock(T, { key: 7, "default-value": e.defaultValue, direction: e.direction, disabled: e.disabled, marks: e.marks, max: e.max, min: e.min, range: e.range, "show-input": e.showInput, "show-ticks": e.showTicks, "show-tooltip": e.showTooltip, size: o.size, step: e.step, "v-model": l.value[e.dataIndex] }, null, 8, ["default-value", "direction", "disabled", "marks", "max", "min", "range", "show-input", "show-ticks", "show-tooltip", "size", "step", "v-model"])) : e.type === "rate" ? (openBlock(), createBlock(C, { key: 8, "default-value": e.defaultValue, disabled: e.disabled, grading: e.grading, readonly: e.readonly, size: o.size, "v-model": l.value[e.dataIndex], "allow-clear": "", "allow-half": "" }, null, 8, ["default-value", "disabled", "grading", "readonly", "size", "v-model"])) : e.type === "select" ? (openBlock(), createBlock(F, { key: 9, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, "allow-create": e.allowCreate, "allow-search": e.allowSearch, bordered: e.bordered, "default-active-first-option": e.defaultActiveFirstOption, "default-input-value": e.defaultValue, disabled: e.disabled, error: e.error, limit: e.limit, loading: e.loading, "max-tag-count": e.maxTagCount, multiple: e.multiple, placeholder: `请选择 ${e.title}`, scrollbar: e.scrollbar, size: o.size, "allow-clear": "" }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(e.dicData, (a, p) => (openBlock(), createBlock(S, { key: p, disabled: a.disabled, label: a.label, "tag-props": e.tagProps, value: a.value }, null, 8, ["disabled", "label", "tag-props", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue", "allow-create", "allow-search", "bordered", "default-active-first-option", "default-input-value", "disabled", "error", "limit", "loading", "max-tag-count", "multiple", "placeholder", "scrollbar", "size"])) : e.type === "inputTag" ? (openBlock(), createBlock(D, { key: 10, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, "default-value": e.defaultValue, disabled: e.disabled, error: e.error, "max-tag-count": e.maxTagCount, placeholder: `请输入 ${e.title}`, readonly: e.readonly, size: o.size, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "default-value", "disabled", "error", "max-tag-count", "placeholder", "readonly", "size"])) : e.type === "avatar" ? (openBlock(), createBlock(B, { key: 11, imageUrl: l.value[e.dataIndex], size: e.size }, null, 8, ["imageUrl", "size"])) : e.type === "date" ? (openBlock(), createBlock($, { key: 12, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, abbreviation: e.abbreviation, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, "picker-value": e.pickerValue, placeholder: `请选择 ${e.title}`, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: o.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "picker-value", "placeholder", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "month" ? (openBlock(), createBlock(_, { key: 13, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, abbreviation: e.abbreviation, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, "picker-value": e.pickerValue, placeholder: `请选择 ${e.title}`, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: o.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "picker-value", "placeholder", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "year" ? (openBlock(), createBlock(P, { key: 14, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, abbreviation: e.abbreviation, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, "picker-value": e.pickerValue, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: o.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "picker-value", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "quarter" ? (openBlock(), createBlock(W, { key: 15, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, abbreviation: e.abbreviation, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, "picker-value": e.pickerValue, placeholder: `请选择 ${e.title}`, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: o.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "picker-value", "placeholder", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "week" ? (openBlock(), createBlock(L, { key: 16, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, abbreviation: e.abbreviation, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, "picker-value": e.pickerValue, placeholder: `请选择 ${e.title}`, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: o.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "picker-value", "placeholder", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "range" ? (openBlock(), createBlock(G, { key: 17, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, abbreviation: e.abbreviation, "day-start-of-week": e.dayStartOfWeek, "default-picker-value": e.defaultPickerValue, disabled: e.disabled, "disabled-date": e.disabledDate, "disabled-input": e.disabledInput, "disabled-time": e.disabledTime, error: e.error, format: e.format, mode: e.mode, "picker-value": e.pickerValue, position: e.position, readonly: e.readonly, shortcuts: e.shortcuts, "shortcuts-position": e.shortcutsPosition, "show-confirm-btn": e.showConfirmBtn, "show-time": e.showTime, size: o.size, "time-picker-props": e.timePickerProps, "value-format": e.valueFormat, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "abbreviation", "day-start-of-week", "default-picker-value", "disabled", "disabled-date", "disabled-input", "disabled-time", "error", "format", "mode", "picker-value", "position", "readonly", "shortcuts", "shortcuts-position", "show-confirm-btn", "show-time", "size", "time-picker-props", "value-format"])) : e.type === "cascader" ? (openBlock(), createBlock(A, { key: 18, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, "allow-search": e.allowSearch, "check-strictly": e.checkStrictly, "default-value": e.defaultValue, disabled: e.disabled, error: e.error, loading: e.loading, "max-tag-count": e.maxTagCount, multiple: e.multiple, options: e.options, placeholder: `请选择 ${e.title}`, size: o.size, "value-key": e.valueKey, "allow-clear": "", style: { width: "100%" } }, null, 8, ["modelValue", "onUpdate:modelValue", "allow-search", "check-strictly", "default-value", "disabled", "error", "loading", "max-tag-count", "multiple", "options", "placeholder", "size", "value-key"])) : e.type === "textarea" ? (openBlock(), createBlock(O, { key: 19, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, "auto-size": e.autoSize, "default-value": e.defaultValue, disabled: e.disabled, error: e.error, "max-length": e.maxLength, "show-word-limit": e.showWordLimit, size: o.size, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "auto-size", "default-value", "disabled", "error", "max-length", "show-word-limit", "size"])) : e.type === "transfer" ? (openBlock(), createBlock(R, { key: 20, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, data: e.data, "default-value": e.defaultValue, disabled: e.disabled, "one-way": e.oneWay, "show-search": e.showSearch, "show-select-all": e.showSelectAll, simple: e.simple, size: o.size, title: e.transferTitle }, null, 8, ["modelValue", "onUpdate:modelValue", "data", "default-value", "disabled", "one-way", "show-search", "show-select-all", "simple", "size", "title"])) : e.type === "treeSelect" ? (openBlock(), createBlock(E, { key: 21, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, "allow-search": e.allowSearch, border: e.bordered, data: e.treeData, "default-value": e.defaultValue, disabled: e.disabled, error: e.error, "label-in-value": e.labelInValue, loading: e.loading, "max-tag-count": e.maxTagCount, multiple: e.multiple, placeholder: `请选择 ${e.title}`, size: o.size, "tree-check-strictly": e.treeCheckStrictly, "tree-checkable": e.treeCheckable, "tree-checked-strategy": e.treeCheckedStrategy, "tree-props": e.treeProps, "trigger-props": e.triggerProps, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "allow-search", "border", "data", "default-value", "disabled", "error", "label-in-value", "loading", "max-tag-count", "multiple", "placeholder", "size", "tree-check-strictly", "tree-checkable", "tree-checked-strategy", "tree-props", "trigger-props"])) : createCommentVNode("", true)]), _: 2 }, 1032, ["field", "label"])]), _: 2 }, 1032, ["span"])) : createCommentVNode("", true)], 64))), 128);
  };
} });
export {
  $e as default
};
//# sourceMappingURL=index-ab9a102f-TQQQOEF5.js.map