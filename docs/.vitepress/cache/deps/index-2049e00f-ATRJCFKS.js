import {
  Ht,
  ke
} from "./chunk-YU7EKNCJ.js";
import "./chunk-W6TZYUAE.js";
import "./chunk-O7NL36PV.js";
import "./chunk-FVN67OAP.js";
import "./chunk-5BCG5FEI.js";
import "./chunk-2HXSZBOA.js";
import "./chunk-BDXATM4V.js";
import "./chunk-4NAX6VIJ.js";
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

// node_modules/.pnpm/vue-arco-ui@0.1.33/node_modules/vue-arco-ui/dist/index-2049e00f.js
var p = (t) => (pushScopeId("data-v-3b3fed5b"), t = t(), popScopeId(), t);
var b = { class: "arco-compontent-page-button d-flex a-center" };
var g = { class: "arco-compontent-page-left-button" };
var v = p(() => createBaseVNode("i", { class: "rtdp xinzeng" }, null, -1));
var x = { class: "arco-compontent-page-right-button d-flex a-center j-end" };
var _ = p(() => createBaseVNode("i", { class: "rtdp refresh" }, null, -1));
var C = ke(defineComponent({ __name: "index", props: { columns: { default: () => [] }, loading: { type: Boolean, default: false }, size: { default: "medium" } }, setup: (t) => (e, h) => {
  const a = Ht;
  return openBlock(), createElementBlock("div", b, [createBaseVNode("div", g, [createVNode(a, { type: "primary", size: e.size }, { icon: withCtx(() => [v]), default: withCtx(() => [createTextVNode(" 新 增 ")]), _: 1 }, 8, ["size"]), renderSlot(e.$slots, "menuLeft", { size: e.size }, void 0, true)]), createBaseVNode("div", x, [renderSlot(e.$slots, "menuRight", {}, void 0, true), createVNode(a, { type: "outline", shape: "circle", size: e.size }, { icon: withCtx(() => [_]), _: 1 }, 8, ["size"])])]);
} }), [["__scopeId", "data-v-3b3fed5b"]]);
export {
  C as default
};
//# sourceMappingURL=index-2049e00f-ATRJCFKS.js.map