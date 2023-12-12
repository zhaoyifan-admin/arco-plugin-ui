import {
  Ce,
  Ut
} from "./chunk-4576TRBC.js";
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

// node_modules/.pnpm/vue-arco-ui@0.1.52_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-1e5ce2f8.js
var n = (o) => (pushScopeId("data-v-cdab3d17"), o = o(), popScopeId(), o);
var g = { class: "arco-compontent-page-button d-flex a-center" };
var v = { class: "arco-compontent-page-left-button" };
var x = n(() => createBaseVNode("i", { class: "rtdp xinzeng" }, null, -1));
var b = { class: "arco-compontent-page-right-button d-flex a-center j-end" };
var y = n(() => createBaseVNode("i", { class: "rtdp refresh" }, null, -1));
var B = n(() => createBaseVNode("i", { class: "rtdp peizhi" }, null, -1));
var O = Ce(defineComponent({ __name: "index", props: { columns: { default: () => [] }, loading: { type: Boolean, default: false }, size: { default: "medium" } }, emits: ["handleOpenModel"], setup(o, { emit: l }) {
  const c = () => {
    l("handleOpenModel", "add");
  };
  return (e, k) => {
    const a = Ut;
    return openBlock(), createElementBlock("div", g, [createBaseVNode("div", v, [createVNode(a, { type: "primary", size: e.size, onClick: c }, { icon: withCtx(() => [x]), default: withCtx(() => [createTextVNode(" 新 增 ")]), _: 1 }, 8, ["size"]), renderSlot(e.$slots, "menuLeft", { size: e.size }, void 0, true)]), createBaseVNode("div", b, [renderSlot(e.$slots, "menuRight", {}, void 0, true), createVNode(a, { type: "outline", shape: "circle", size: e.size }, { icon: withCtx(() => [y]), _: 1 }, 8, ["size"]), createVNode(a, { type: "outline", shape: "circle", size: e.size }, { icon: withCtx(() => [B]), _: 1 }, 8, ["size"])])]);
  };
} }), [["__scopeId", "data-v-cdab3d17"]]);
export {
  O as default
};
//# sourceMappingURL=index-1e5ce2f8-VY26E2TK.js.map
