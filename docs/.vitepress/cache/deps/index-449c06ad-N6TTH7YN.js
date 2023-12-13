import {
  Ii,
  Oa,
  Sa,
  ji,
  wa,
  xa
} from "./chunk-6CMB6FS2.js";
import "./chunk-SMNQWRBS.js";
import {
  fr,
  qe
} from "./chunk-DMJDBT7V.js";
import {
  N2,
  mp,
  nn
} from "./chunk-I6ZBQRAN.js";
import "./chunk-W6TZYUAE.js";
import "./chunk-O7NL36PV.js";
import "./chunk-FVN67OAP.js";
import "./chunk-5BCG5FEI.js";
import "./chunk-2HXSZBOA.js";
import "./chunk-BDXATM4V.js";
import "./chunk-4NAX6VIJ.js";
import {
  Fragment,
  computed,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  openBlock,
  renderList,
  renderSlot,
  withCtx
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.1.55_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-449c06ad.js
var ae = defineComponent({ __name: "index", props: { disabledForm: { type: Boolean, default: false }, data: { default: () => [] }, searchForm: { default: () => ({}) }, size: { default: "small" }, options: { default: () => ({ loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 245, search: false, searchSpan: 6, searchBtnSpan: 6 }) } }, emits: ["update:searchForm"], setup(r, { expose: i, emit: c }) {
  const V = r, l = computed({ get: () => V.searchForm, set(o) {
    c("update:searchForm", o);
  } }), x = () => {
  };
  return i({ searchReset: () => {
    l.value = {};
  } }), (o, Z) => {
    const y = mp, v = Ii, h = ji, I = Sa, f = xa, k = Oa, U = wa, b = nn, F = N2, B = qe, C = fr;
    return openBlock(true), createElementBlock(Fragment, null, renderList(o.options.columns, (e, S) => (openBlock(), createElementBlock(Fragment, { key: S }, [e.search ? (openBlock(), createBlock(C, { key: 0, span: e.span || o.options.searchSpan || 6 }, { default: withCtx(() => [createVNode(B, { field: e.title, label: e.title, feedback: "" }, { label: withCtx(() => [renderSlot(o.$slots, e.dataIndex + "SearchLabel")]), default: withCtx(() => [e.type === "input" || e.type === void 0 ? (openBlock(), createBlock(y, { key: 0, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, placeholder: `请输入 ${e.title}`, disabled: o.disabledForm, "allow-clear": "", onInput: x }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "cascader" ? (openBlock(), createBlock(v, { key: 1, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a, options: e.options, placeholder: `请选择 ${e.title}`, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])) : e.type === "date" ? (openBlock(), createBlock(h, { key: 2, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a }, null, 8, ["modelValue", "onUpdate:modelValue"])) : e.type === "month" ? (openBlock(), createBlock(I, { key: 3, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a }, null, 8, ["modelValue", "onUpdate:modelValue"])) : e.type === "year" ? (openBlock(), createBlock(f, { key: 4, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a }, null, 8, ["modelValue", "onUpdate:modelValue"])) : e.type === "quarter" ? (openBlock(), createBlock(k, { key: 5, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a }, null, 8, ["modelValue", "onUpdate:modelValue"])) : e.type === "week" ? (openBlock(), createBlock(U, { key: 6, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a }, null, 8, ["modelValue", "onUpdate:modelValue"])) : e.type === "select" ? (openBlock(), createBlock(F, { key: 7, modelValue: l.value[e.dataIndex], "onUpdate:modelValue": (a) => l.value[e.dataIndex] = a }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(e.dicData, (a, _) => (openBlock(), createBlock(b, { key: _, label: a.label, value: a.value }, null, 8, ["label", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)]), _: 2 }, 1032, ["field", "label"])]), _: 2 }, 1032, ["span"])) : createCommentVNode("", true)], 64))), 128);
  };
} });
export {
  ae as default
};
//# sourceMappingURL=index-449c06ad-N6TTH7YN.js.map
