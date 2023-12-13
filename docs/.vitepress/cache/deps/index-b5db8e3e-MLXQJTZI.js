import {
  Q2,
  Zt
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

// node_modules/.pnpm/vue-arco-ui@0.1.55_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-b5db8e3e.js
var _ = { key: 0, class: "text-icon-btn" };
var h = createBaseVNode("i", { class: "rtdp chakan" }, null, -1);
var y = createBaseVNode("i", { class: "rtdp caozuo-bianji" }, null, -1);
var C = createBaseVNode("i", { class: "rtdp shipin" }, null, -1);
var b = createBaseVNode("i", { class: "rtdp deletebtn" }, null, -1);
var B = { key: 1, class: "icon-btn" };
var V = createBaseVNode("i", { class: "rtdp chakan" }, null, -1);
var g = createBaseVNode("i", { class: "rtdp caozuo-bianji" }, null, -1);
var N = createBaseVNode("i", { class: "rtdp shipin" }, null, -1);
var S = createBaseVNode("i", { class: "rtdp deletebtn" }, null, -1);
var q = defineComponent({ __name: "index", props: { record: { default: () => ({}) }, size: { default: "small" }, options: { default: () => ({ loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 120, search: false, searchSpan: 6, searchBtnSpan: 6 }) } }, emits: ["handleMenuClick"], setup(v, { emit: z }) {
  const a = (e, s) => {
    z("handleMenuClick", e, s);
  };
  return (e, s) => {
    const i = Zt, c = Q2;
    return openBlock(), createElementBlock(Fragment, null, [e.options.menuBtnStyle === "text" ? (openBlock(), createElementBlock("div", _, [createVNode(i, { size: e.size, type: "text", onClick: s[0] || (s[0] = (l) => a("see", e.record)) }, { icon: withCtx(() => [h]), default: withCtx(() => [createTextVNode(" 查 看 ")]), _: 1 }, 8, ["size"]), createVNode(i, { size: e.size, type: "text", onClick: s[1] || (s[1] = (l) => a("edit", e.record)) }, { icon: withCtx(() => [y]), default: withCtx(() => [createTextVNode(" 编 辑 ")]), _: 1 }, 8, ["size"]), createVNode(i, { size: e.size, type: "text", onClick: s[2] || (s[2] = (l) => a("seeVedio", e.record)) }, { icon: withCtx(() => [C]), default: withCtx(() => [createTextVNode(" 查看视频 ")]), _: 1 }, 8, ["size"]), createVNode(i, { type: "text", size: e.size, status: "danger" }, { icon: withCtx(() => [b]), default: withCtx(() => [createTextVNode(" 删 除 ")]), _: 1 }, 8, ["size"])])) : createCommentVNode("", true), e.options.menuBtnStyle === "icon" ? (openBlock(), createElementBlock("div", B, [createVNode(c, { content: "查看" }, { default: withCtx(() => [createVNode(i, { size: e.size, type: "text", onClick: s[3] || (s[3] = (l) => a("see", e.record)) }, { icon: withCtx(() => [V]), _: 1 }, 8, ["size"])]), _: 1 }), createVNode(c, { content: "编 辑" }, { default: withCtx(() => [createVNode(i, { size: e.size, type: "text", onClick: s[4] || (s[4] = (l) => a("edit", e.record)) }, { icon: withCtx(() => [g]), _: 1 }, 8, ["size"])]), _: 1 }), createVNode(c, { content: "查看视频" }, { default: withCtx(() => [createVNode(i, { size: e.size, type: "text", onClick: s[5] || (s[5] = (l) => a("seeVedio", e.record)) }, { icon: withCtx(() => [N]), _: 1 }, 8, ["size"])]), _: 1 }), createVNode(c, { content: "删 除" }, { default: withCtx(() => [createVNode(i, { type: "text", size: e.size, status: "danger" }, { icon: withCtx(() => [S]), _: 1 }, 8, ["size"])]), _: 1 })])) : createCommentVNode("", true)], 64);
  };
} });
export {
  q as default
};
//# sourceMappingURL=index-b5db8e3e-MLXQJTZI.js.map
