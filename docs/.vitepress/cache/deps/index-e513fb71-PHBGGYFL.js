import {
  kv
} from "./chunk-I6ZBQRAN.js";
import "./chunk-W6TZYUAE.js";
import "./chunk-O7NL36PV.js";
import "./chunk-FVN67OAP.js";
import "./chunk-5BCG5FEI.js";
import "./chunk-2HXSZBOA.js";
import "./chunk-BDXATM4V.js";
import "./chunk-4NAX6VIJ.js";
import {
  createBlock,
  defineComponent,
  openBlock
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.1.55_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-e513fb71.js
var C = defineComponent({ __name: "index", props: { bordered: { type: Boolean, default: true }, size: { default: "medium" }, page: { default: () => ({ currentPage: 1, pageSize: 10, pageSizes: [5, 10, 20, 30, 50], total: 0 }) } }, emits: ["currentChange", "sizeChange"], setup(g, { emit: a }) {
  const t = (e) => {
    a("currentChange", e);
  }, o = (e) => {
    a("sizeChange", e);
  };
  return (e, m) => {
    const i = kv;
    return openBlock(), createBlock(i, { current: e.page.currentPage, total: e.page.total, "page-size": e.page.pageSize, "page-size-options": e.page.pageSizes, "buffer-size": 2, "active-page-item-style": { border: "1px solid #175CFF" }, size: e.size, "show-total": "", "show-jumper": "", "show-page-size": "", onChange: t, onPageSizeChange: o }, null, 8, ["current", "total", "page-size", "page-size-options", "size"]);
  };
} });
export {
  C as default
};
//# sourceMappingURL=index-e513fb71-PHBGGYFL.js.map
