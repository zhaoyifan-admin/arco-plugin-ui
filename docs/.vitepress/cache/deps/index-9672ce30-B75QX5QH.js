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
  Sr,
  fr,
  qe,
  ur
} from "./chunk-VRLKM3HQ.js";
import {
  mp
} from "./chunk-4576TRBC.js";
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
  withCtx
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.1.52_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-9672ce30.js
var ee = defineComponent({ __name: "index", props: { size: { default: "small" }, options: { default: () => ({ loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 245, search: false, searchSpan: 6, searchBtnSpan: 6 }) } }, setup(M, { expose: m }) {
  const s = ref(false), r = ref(null), o = reactive({});
  return m({ handleSave: () => {
    s.value = true, r.value.validate((t) => {
      console.log(t), setTimeout(() => {
        s.value = false;
      }, 1500);
    });
  } }), (t, T) => {
    const u = mp, c = Ii, f = Yi, y = Sa, h = xa, k = Oa, x = wa, V = qe, v = fr, b = ur, _ = Sr;
    return openBlock(), createBlock(_, { ref_key: "formRef", ref: r, model: o, size: t.size, disabled: s.value, "auto-label-width": "" }, { default: withCtx(() => [createVNode(b, { gutter: 16 }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(t.options.columns, (e, g) => (openBlock(), createBlock(v, { key: g, span: e.span || t.options.searchSpan || 6 }, { default: withCtx(() => [createVNode(V, { field: e.dataIndex, label: e.title, rules: e.rules, "validate-trigger": ["change", "input"], feedback: "" }, { label: withCtx(() => [renderSlot(t.$slots, e.dataIndex + "Label")]), default: withCtx(() => [e.type === "input" || e.type === void 0 ? (openBlock(), createBlock(u, { key: 0, modelValue: o[e.dataIndex], "onUpdate:modelValue": (n) => o[e.dataIndex] = n, placeholder: `请输入 ${e.title}`, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])) : e.type === "cascader" ? (openBlock(), createBlock(c, { key: 1, modelValue: o[e.dataIndex], "onUpdate:modelValue": (n) => o[e.dataIndex] = n, options: e.options, placeholder: `请选择 ${e.title}`, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "placeholder"])) : e.type === "date" ? (openBlock(), createBlock(f, { key: 2 })) : e.type === "month" ? (openBlock(), createBlock(y, { key: 3 })) : e.type === "year" ? (openBlock(), createBlock(h, { key: 4 })) : e.type === "quarter" ? (openBlock(), createBlock(k, { key: 5 })) : e.type === "week" ? (openBlock(), createBlock(x, { key: 6 })) : createCommentVNode("", true)]), _: 2 }, 1032, ["field", "label", "rules"])]), _: 2 }, 1032, ["span"]))), 128))]), _: 3 })]), _: 3 }, 8, ["model", "size", "disabled"]);
  };
} });
export {
  ee as default
};
//# sourceMappingURL=index-9672ce30-B75QX5QH.js.map
