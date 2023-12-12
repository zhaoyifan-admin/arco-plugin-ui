import {
  Ii,
  Oa,
  Sa,
  Yi,
  wa,
  xa
} from "./chunk-U5MUAQUB.js";
import "./chunk-5HUZPXTA.js";
import {
  fr,
  qe
} from "./chunk-VRLKM3HQ.js";
import {
  mp
} from "./chunk-4576TRBC.js";
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

// node_modules/.pnpm/vue-arco-ui@0.1.52_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-9ac6007d.js
var P = defineComponent({ __name: "index", props: { disabledForm: { type: Boolean, default: false }, data: { default: () => [] }, searchForm: { default: () => ({}) }, size: { default: "small" }, options: { default: () => ({ loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 245, search: false, searchSpan: 6, searchBtnSpan: 6 }) } }, emits: ["update:searchForm"], setup(m, { expose: i, emit: u }) {
  const c = m, o = computed({ get: () => c.searchForm, set(l) {
    u("update:searchForm", l);
  } }), h = () => {
  };
  return i({ searchReset: () => {
    o.value = {};
  } }), (l, E) => {
    const y = mp, f = Ii, k = Yi, x = Sa, b = xa, V = Oa, F = wa, v = qe, I = fr;
    return openBlock(true), createElementBlock(Fragment, null, renderList(l.options.columns, (e, C) => (openBlock(), createElementBlock(Fragment, { key: C }, [e.search ? (openBlock(), createBlock(I, { key: 0, span: e.span || l.options.searchSpan || 6 }, { default: withCtx(() => [createVNode(v, { field: e.title, label: e.title, feedback: "" }, { label: withCtx(() => [renderSlot(l.$slots, e.dataIndex + "SearchLabel")]), default: withCtx(() => [e.type === "input" || e.type === void 0 ? (openBlock(), createBlock(y, { key: 0, modelValue: o.value[e.dataIndex], "onUpdate:modelValue": (d) => o.value[e.dataIndex] = d, placeholder: `请输入 ${e.title}`, disabled: l.disabledForm, "allow-clear": "", onInput: h }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder", "disabled"])) : e.type === "cascader" ? (openBlock(), createBlock(f, { key: 1, modelValue: o.value[e.dataIndex], "onUpdate:modelValue": (d) => o.value[e.dataIndex] = d, options: e.options, placeholder: `请选择 ${e.title}`, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])) : e.type === "date" ? (openBlock(), createBlock(k, { key: 2 })) : e.type === "month" ? (openBlock(), createBlock(x, { key: 3 })) : e.type === "year" ? (openBlock(), createBlock(b, { key: 4 })) : e.type === "quarter" ? (openBlock(), createBlock(V, { key: 5 })) : e.type === "week" ? (openBlock(), createBlock(F, { key: 6 })) : createCommentVNode("", true)]), _: 2 }, 1032, ["field", "label"])]), _: 2 }, 1032, ["span"])) : createCommentVNode("", true)], 64))), 128);
  };
} });
export {
  P as default
};
//# sourceMappingURL=index-9ac6007d-MH6UOMXL.js.map
