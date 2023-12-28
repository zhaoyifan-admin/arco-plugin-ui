import {
  Zl,
  _e
} from "./chunk-KZHBUNAO.js";
import "./chunk-C5DBZGYV.js";
import "./chunk-BDXATM4V.js";
import "./chunk-2HXSZBOA.js";
import "./chunk-4NAX6VIJ.js";
import "./chunk-O7NL36PV.js";
import "./chunk-5BCG5FEI.js";
import "./chunk-W6TZYUAE.js";
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

// node_modules/.pnpm/vue-arco-ui@0.2.0_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-f8ed88c7.js
var n = (o) => (pushScopeId("data-v-84956520"), o = o(), popScopeId(), o);
var v = { class: "arco-compontent-page-button d-flex a-center" };
var x = { class: "arco-compontent-page-left-button" };
var y = n(() => createBaseVNode("i", { class: "rtdp xinzeng" }, null, -1));
var k = { class: "arco-compontent-page-right-button d-flex a-center j-end" };
var B = n(() => createBaseVNode("i", { class: "rtdp refresh" }, null, -1));
var C = n(() => createBaseVNode("i", { class: "rtdp peizhi" }, null, -1));
var O = _e(defineComponent({ __name: "index", props: { columns: { default: () => [] }, loading: { type: Boolean, default: false }, size: { default: "medium" } }, emits: ["handleOpenModel", "handleRefresh"], setup(o, { emit: l }) {
  const p = () => {
    l("handleOpenModel", "add");
  }, r = () => {
    l("handleRefresh");
  };
  return (e, b) => {
    const a = Zl;
    return openBlock(), createElementBlock("div", v, [createBaseVNode("div", x, [createVNode(a, { type: "primary", size: e.size, onClick: p }, { icon: withCtx(() => [y]), default: withCtx(() => [createTextVNode(" 新 增 ")]), _: 1 }, 8, ["size"]), renderSlot(e.$slots, "menuLeft", { size: e.size }, void 0, true)]), createBaseVNode("div", k, [renderSlot(e.$slots, "menuRight", {}, void 0, true), createVNode(a, { type: "outline", shape: "circle", size: e.size, onClick: r }, { icon: withCtx(() => [B]), _: 1 }, 8, ["size"]), createVNode(a, { type: "outline", shape: "circle", size: e.size }, { icon: withCtx(() => [C]), _: 1 }, 8, ["size"])])]);
  };
} }), [["__scopeId", "data-v-84956520"]]);
export {
  O as default
};
//# sourceMappingURL=index-f8ed88c7-EJ6GPKUJ.js.map
