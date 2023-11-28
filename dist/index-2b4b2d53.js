import { B as r, _ as d } from "./index-a33a360e.js";
import { defineComponent as c, openBlock as l, createElementBlock as m, createElementVNode as o, createVNode as i, withCtx as s, createTextVNode as u, renderSlot as n, pushScopeId as f, popScopeId as z } from "vue";
import "@vuepic/vue-datepicker";
import "@vueuse/core";
import "@vueuse/integrations/useQRCode";
import "swiper/vue";
import "swiper/modules";
const p = (t) => (f("data-v-3b3fed5b"), t = t(), z(), t), b = { class: "arco-compontent-page-button d-flex a-center" }, g = { class: "arco-compontent-page-left-button" }, v = p(() => o("i", { class: "rtdp xinzeng" }, null, -1)), x = { class: "arco-compontent-page-right-button d-flex a-center j-end" }, _ = p(() => o("i", { class: "rtdp refresh" }, null, -1)), C = d(c({ __name: "index", props: { columns: { default: () => [] }, loading: { type: Boolean, default: !1 }, size: { default: "medium" } }, setup: (t) => (e, h) => {
  const a = r;
  return l(), m("div", b, [o("div", g, [i(a, { type: "primary", size: e.size }, { icon: s(() => [v]), default: s(() => [u(" 新 增 ")]), _: 1 }, 8, ["size"]), n(e.$slots, "menuLeft", { size: e.size }, void 0, !0)]), o("div", x, [n(e.$slots, "menuRight", {}, void 0, !0), i(a, { type: "outline", shape: "circle", size: e.size }, { icon: s(() => [_]), _: 1 }, 8, ["size"])])]);
} }), [["__scopeId", "data-v-3b3fed5b"]]);
export {
  C as default
};
