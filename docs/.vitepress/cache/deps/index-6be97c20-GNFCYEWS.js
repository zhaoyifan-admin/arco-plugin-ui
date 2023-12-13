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
  Sr,
  fr,
  qe,
  ur
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
  createBlock,
  createCommentVNode,
  createElementBlock,
  createVNode,
  defineComponent,
  openBlock,
  reactive,
  ref,
  renderList,
  renderSlot,
  unref,
  withCtx
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.1.55_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-6be97c20.js
var se = defineComponent({ __name: "index", props: { modelType: { default: "" }, Visible: { type: Boolean, default: false }, Loading: { type: Boolean, default: false }, options: { default: () => ({ loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 245, search: false, searchSpan: 6, searchBtnSpan: 6 }) }, size: { default: "small" } }, emits: ["handleSave", "handleUpdate", "update:Loading", "update:Visible"], setup(K, { expose: h, emit: p }) {
  const s = ref(false), m = ref(null);
  let a = reactive({});
  const r = () => {
    p("update:Loading", false), p("update:Visible", false), m.value.resetFields(), m.value.clearValidate(), s.value = false;
  }, i = () => {
    p("update:Loading", false), s.value = false;
  };
  return h({ done: r, deepClone: (o) => {
    Object.assign(a, o);
  }, handleSave: () => {
    s.value = true, m.value.validate((o) => {
      if (o)
        return i(), false;
      p("handleSave", a, i, r);
    });
  }, handleUpdate: () => {
    s.value = true, m.value.validate((o) => {
      if (o)
        return i(), false;
      p("handleUpdate", a, i, r);
    });
  } }), (o, P) => {
    const v = mp, U = Ii, I = ji, k = Sa, b = xa, g = Oa, _ = wa, C = nn, w = N2, B = qe, L = fr, $ = ur, z = Sr;
    return openBlock(), createBlock(z, { ref_key: "formRef", ref: m, model: unref(a), size: o.size, disabled: s.value || o.modelType === "see", "auto-label-width": "" }, { default: withCtx(() => [createVNode($, { gutter: 16 }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(o.options.columns, (e, F) => (openBlock(), createBlock(L, { key: F, span: e.span || o.options.searchSpan || 6 }, { default: withCtx(() => [createVNode(B, { field: e.dataIndex, label: e.title, rules: e.rules, "validate-trigger": ["change", "input"], feedback: "" }, { label: withCtx(() => [renderSlot(o.$slots, e.dataIndex + "Label")]), default: withCtx(() => [e.type === "input" || e.type === void 0 ? (openBlock(), createBlock(v, { key: 0, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, placeholder: `请输入 ${e.title}`, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : e.type === "cascader" ? (openBlock(), createBlock(U, { key: 1, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l, options: e.options, placeholder: `请选择 ${e.title}`, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])) : e.type === "date" ? (openBlock(), createBlock(I, { key: 2, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l }, null, 8, ["modelValue", "onUpdate:modelValue"])) : e.type === "month" ? (openBlock(), createBlock(k, { key: 3, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l }, null, 8, ["modelValue", "onUpdate:modelValue"])) : e.type === "year" ? (openBlock(), createBlock(b, { key: 4, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l }, null, 8, ["modelValue", "onUpdate:modelValue"])) : e.type === "quarter" ? (openBlock(), createBlock(g, { key: 5, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l }, null, 8, ["modelValue", "onUpdate:modelValue"])) : e.type === "week" ? (openBlock(), createBlock(_, { key: 6, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l }, null, 8, ["modelValue", "onUpdate:modelValue"])) : e.type === "select" ? (openBlock(), createBlock(w, { key: 7, modelValue: unref(a)[e.dataIndex], "onUpdate:modelValue": (l) => unref(a)[e.dataIndex] = l }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(e.dicData, (l, S) => (openBlock(), createBlock(C, { key: S, label: l.label, value: l.value }, null, 8, ["label", "value"]))), 128))]), _: 2 }, 1032, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)]), _: 2 }, 1032, ["field", "label", "rules"])]), _: 2 }, 1032, ["span"]))), 128))]), _: 3 })]), _: 3 }, 8, ["model", "size", "disabled"]);
  };
} });
export {
  se as default
};
//# sourceMappingURL=index-6be97c20-GNFCYEWS.js.map
