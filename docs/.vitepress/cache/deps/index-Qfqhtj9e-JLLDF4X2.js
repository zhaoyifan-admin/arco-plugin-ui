import {
  Ae,
  No,
  Yl
} from "./chunk-FOSXQ56G.js";
import "./chunk-W6TZYUAE.js";
import "./chunk-O7NL36PV.js";
import "./chunk-5THIMN62.js";
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
  toDisplayString,
  unref,
  withCtx
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.2.25_@arco-design+web-vue@2.53.3_typescript@5.2.2/node_modules/vue-arco-ui/dist/index-Qfqhtj9e.js
var i = (e) => (pushScopeId("data-v-7a6eb319"), e = e(), popScopeId(), e);
var B = { class: "arco-compontent-page-button d-flex a-center" };
var k = { class: "arco-compontent-page-left-button" };
var C = i(() => createBaseVNode("i", { class: "rtdp xinzeng" }, null, -1));
var S = { class: "arco-compontent-page-right-button d-flex a-center j-end" };
var I = i(() => createBaseVNode("i", { class: "rtdp refresh" }, null, -1));
var N = i(() => createBaseVNode("i", { class: "rtdp peizhi" }, null, -1));
var D = Ae(defineComponent({ __name: "index", props: { columns: { default: () => [] }, loading: { type: Boolean, default: false }, size: { default: "medium" } }, emits: ["handleOpenModel", "handleRefresh"], setup(e, { emit: l }) {
  const a = e, p = () => {
    l("handleOpenModel", "add");
  }, c = () => {
    l("handleRefresh");
  };
  return (r, R) => {
    const s = Yl;
    return openBlock(), createElementBlock("div", B, [createBaseVNode("div", k, [createVNode(s, { size: a.size, type: "primary", onClick: p }, { icon: withCtx(() => [C]), default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(No).global.t("arcomenu.addBtn")), 1)]), _: 1 }, 8, ["size"]), renderSlot(r.$slots, "menuLeft", { size: a.size }, void 0, true)]), createBaseVNode("div", S, [renderSlot(r.$slots, "menuRight", {}, void 0, true), createVNode(s, { size: a.size, shape: "circle", type: "outline", onClick: c }, { icon: withCtx(() => [I]), _: 1 }, 8, ["size"]), createVNode(s, { size: a.size, shape: "circle", type: "outline" }, { icon: withCtx(() => [N]), _: 1 }, 8, ["size"])])]);
  };
} }), [["__scopeId", "data-v-7a6eb319"]]);
export {
  D as default
};
//# sourceMappingURL=index-Qfqhtj9e-JLLDF4X2.js.map
