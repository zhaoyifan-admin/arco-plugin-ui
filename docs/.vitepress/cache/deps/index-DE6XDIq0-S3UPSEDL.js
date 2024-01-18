import {
  No,
  Yl,
  c4
} from "./chunk-FOSXQ56G.js";
import "./chunk-W6TZYUAE.js";
import "./chunk-O7NL36PV.js";
import "./chunk-5THIMN62.js";
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
  toDisplayString,
  unref,
  withCtx
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.2.25_@arco-design+web-vue@2.53.3_typescript@5.2.2/node_modules/vue-arco-ui/dist/index-DE6XDIq0.js
var g = { key: 0, class: "text-icon-btn" };
var h = createBaseVNode("i", { class: "rtdp chakan" }, null, -1);
var y = createBaseVNode("i", { class: "rtdp caozuo-bianji" }, null, -1);
var C = createBaseVNode("i", { class: "rtdp shipin" }, null, -1);
var v = createBaseVNode("i", { class: "rtdp deletebtn" }, null, -1);
var V = { key: 1, class: "icon-btn" };
var w = createBaseVNode("i", { class: "rtdp chakan" }, null, -1);
var S = createBaseVNode("i", { class: "rtdp caozuo-bianji" }, null, -1);
var N = createBaseVNode("i", { class: "rtdp shipin" }, null, -1);
var j = createBaseVNode("i", { class: "rtdp deletebtn" }, null, -1);
var G = defineComponent({ __name: "index", props: { record: { default: () => ({}) }, size: { default: "small" }, options: { default: () => ({ loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 120, search: false, searchSpan: 6, searchBtnSpan: 6 }) } }, emits: ["handleMenuClick"], setup(E, { emit: z }) {
  const c = (e, n) => {
    z("handleMenuClick", e, n);
  };
  return (e, n) => {
    const s = Yl, d = c4;
    return openBlock(), createElementBlock(Fragment, null, [e.options.menuBtnStyle === "text" ? (openBlock(), createElementBlock("div", g, [createVNode(s, { size: e.size, type: "text", onClick: n[0] || (n[0] = (r) => c("see", e.record)) }, { icon: withCtx(() => [h]), default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(No).global.t("arcomenu.viewBtn")), 1)]), _: 1 }, 8, ["size"]), createVNode(s, { size: e.size, type: "text", onClick: n[1] || (n[1] = (r) => c("edit", e.record)) }, { icon: withCtx(() => [y]), default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(No).global.t("arcomenu.editBtn")), 1)]), _: 1 }, 8, ["size"]), createVNode(s, { size: e.size, type: "text", onClick: n[2] || (n[2] = (r) => c("seeVedio", e.record)) }, { icon: withCtx(() => [C]), default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(No).global.t("arcomenu.vedioBtn")), 1)]), _: 1 }, 8, ["size"]), createVNode(s, { size: e.size, status: "danger", type: "text" }, { icon: withCtx(() => [v]), default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(No).global.t("arcomenu.delBtn")), 1)]), _: 1 }, 8, ["size"])])) : createCommentVNode("", true), e.options.menuBtnStyle === "icon" ? (openBlock(), createElementBlock("div", V, [createVNode(d, { content: unref(No).global.t("arcomenu.viewBtn") }, { default: withCtx(() => [createVNode(s, { size: e.size, type: "text", onClick: n[3] || (n[3] = (r) => c("see", e.record)) }, { icon: withCtx(() => [w]), _: 1 }, 8, ["size"])]), _: 1 }, 8, ["content"]), createVNode(d, { content: unref(No).global.t("arcomenu.viewBtn") }, { default: withCtx(() => [createVNode(s, { size: e.size, type: "text", onClick: n[4] || (n[4] = (r) => c("edit", e.record)) }, { icon: withCtx(() => [S]), _: 1 }, 8, ["size"])]), _: 1 }, 8, ["content"]), createVNode(d, { content: unref(No).global.t("arcomenu.vedioBtn") }, { default: withCtx(() => [createVNode(s, { size: e.size, type: "text", onClick: n[5] || (n[5] = (r) => c("seeVedio", e.record)) }, { icon: withCtx(() => [N]), _: 1 }, 8, ["size"])]), _: 1 }, 8, ["content"]), createVNode(d, { content: unref(No).global.t("arcomenu.delBtn") }, { default: withCtx(() => [createVNode(s, { size: e.size, status: "danger", type: "text" }, { icon: withCtx(() => [j]), _: 1 }, 8, ["size"])]), _: 1 }, 8, ["content"])])) : createCommentVNode("", true)], 64);
  };
} });
export {
  G as default
};
//# sourceMappingURL=index-DE6XDIq0-S3UPSEDL.js.map
