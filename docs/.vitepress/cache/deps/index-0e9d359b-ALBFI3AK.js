import {
  $t,
  Ce
} from "./chunk-CIZOL3JV.js";
import {
  createBaseVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  openBlock,
  popScopeId,
  pushScopeId,
  renderSlot,
  withCtx
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.1.48_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-0e9d359b.js
var p = (t) => (pushScopeId("data-v-3b3fed5b"), t = t(), popScopeId(), t);
var b = { class: "arco-compontent-page-button d-flex a-center" };
var g = { class: "arco-compontent-page-left-button" };
var v = p(() => createBaseVNode("i", { class: "rtdp xinzeng" }, null, -1));
var x = { class: "arco-compontent-page-right-button d-flex a-center j-end" };
var _ = p(() => createBaseVNode("i", { class: "rtdp refresh" }, null, -1));
var C = Ce(defineComponent({ __name: "index", props: { columns: { default: () => [] }, loading: { type: Boolean, default: false }, size: { default: "medium" } }, setup: (t) => (e, h) => {
  const a = $t;
  return openBlock(), createElementBlock("div", b, [createBaseVNode("div", g, [createVNode(a, { type: "primary", size: e.size }, { icon: withCtx(() => [v]), default: withCtx(() => [createTextVNode(" 新 增 ")]), _: 1 }, 8, ["size"]), renderSlot(e.$slots, "menuLeft", { size: e.size }, void 0, true)]), createBaseVNode("div", x, [renderSlot(e.$slots, "menuRight", {}, void 0, true), createVNode(a, { type: "outline", shape: "circle", size: e.size }, { icon: withCtx(() => [_]), _: 1 }, 8, ["size"])])]);
} }), [["__scopeId", "data-v-3b3fed5b"]]);
export {
  C as default
};
//# sourceMappingURL=index-0e9d359b-ALBFI3AK.js.map
