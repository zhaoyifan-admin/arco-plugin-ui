import {
  Q2,
  Ut
} from "./chunk-4576TRBC.js";
import {
  Fragment,
  createBaseVNode,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  openBlock,
  withCtx
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.1.52_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-3f02cd63.js
var _ = { key: 0, class: "text-icon-btn" };
var h = createBaseVNode("i", { class: "rtdp chakan" }, null, -1);
var y = createBaseVNode("i", { class: "rtdp caozuo-bianji" }, null, -1);
var C = createBaseVNode("i", { class: "rtdp shipin" }, null, -1);
var b = createBaseVNode("i", { class: "rtdp deletebtn" }, null, -1);
var B = { key: 1, class: "icon-btn" };
var g = createBaseVNode("i", { class: "rtdp chakan" }, null, -1);
var N = createBaseVNode("i", { class: "rtdp caozuo-bianji" }, null, -1);
var S = createBaseVNode("i", { class: "rtdp shipin" }, null, -1);
var V = createBaseVNode("i", { class: "rtdp deletebtn" }, null, -1);
var q = defineComponent({ __name: "index", props: { record: { default: () => {
} }, size: { default: "small" }, options: { default: () => ({ loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 120, search: false, searchSpan: 6, searchBtnSpan: 6 }) } }, emits: ["handleMenuClick"], setup(v, { emit: z }) {
  const a = (e, n) => {
    z("handleMenuClick", n);
  };
  return (e, n) => {
    const i = Ut, c = Q2;
    return openBlock(), createElementBlock(Fragment, null, [e.options.menuBtnStyle === "text" ? (openBlock(), createElementBlock("div", _, [createVNode(i, { size: e.size, type: "text", onClick: n[0] || (n[0] = (l) => a(0, e.record)) }, { icon: withCtx(() => [h]), default: withCtx(() => [createTextVNode(" 查 看 ")]), _: 1 }, 8, ["size"]), createVNode(i, { size: e.size, type: "text", onClick: n[1] || (n[1] = (l) => a(0, e.record)) }, { icon: withCtx(() => [y]), default: withCtx(() => [createTextVNode(" 编 辑 ")]), _: 1 }, 8, ["size"]), createVNode(i, { size: e.size, type: "text", onClick: n[2] || (n[2] = (l) => a(0, e.record)) }, { icon: withCtx(() => [C]), default: withCtx(() => [createTextVNode(" 查看视频 ")]), _: 1 }, 8, ["size"]), createVNode(i, { type: "text", size: e.size, status: "danger" }, { icon: withCtx(() => [b]), default: withCtx(() => [createTextVNode(" 删 除 ")]), _: 1 }, 8, ["size"])])) : createCommentVNode("", true), e.options.menuBtnStyle === "icon" ? (openBlock(), createElementBlock("div", B, [createVNode(c, { content: "查看" }, { default: withCtx(() => [createVNode(i, { size: e.size, type: "text", onClick: n[3] || (n[3] = (l) => a(0, e.record)) }, { icon: withCtx(() => [g]), _: 1 }, 8, ["size"])]), _: 1 }), createVNode(c, { content: "编 辑" }, { default: withCtx(() => [createVNode(i, { size: e.size, type: "text", onClick: n[4] || (n[4] = (l) => a(0, e.record)) }, { icon: withCtx(() => [N]), _: 1 }, 8, ["size"])]), _: 1 }), createVNode(c, { content: "查看视频" }, { default: withCtx(() => [createVNode(i, { size: e.size, type: "text", onClick: n[5] || (n[5] = (l) => a(0, e.record)) }, { icon: withCtx(() => [S]), _: 1 }, 8, ["size"])]), _: 1 }), createVNode(c, { content: "删 除" }, { default: withCtx(() => [createVNode(i, { type: "text", size: e.size, status: "danger" }, { icon: withCtx(() => [V]), _: 1 }, 8, ["size"])]), _: 1 })])) : createCommentVNode("", true)], 64);
  };
} });
export {
  q as default
};
//# sourceMappingURL=index-3f02cd63-JRUXDY4C.js.map
