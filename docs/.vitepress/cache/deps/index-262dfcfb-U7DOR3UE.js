import {
  Mv
} from "./chunk-KZHBUNAO.js";
import "./chunk-C5DBZGYV.js";
import "./chunk-BDXATM4V.js";
import "./chunk-2HXSZBOA.js";
import "./chunk-4NAX6VIJ.js";
import "./chunk-O7NL36PV.js";
import "./chunk-5BCG5FEI.js";
import "./chunk-W6TZYUAE.js";
import {
  createBlock,
  defineComponent,
  openBlock
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.2.0_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-262dfcfb.js
var C = defineComponent({ __name: "index", props: { bordered: { type: Boolean, default: true }, size: { default: "medium" }, page: { default: () => ({ currentPage: 1, pageSize: 10, pageSizes: [5, 10, 20, 30, 50], total: 0 }) } }, emits: ["currentChange", "sizeChange"], setup(g, { emit: a }) {
  const t = (e) => {
    a("currentChange", e);
  }, o = (e) => {
    a("sizeChange", e);
  };
  return (e, m) => {
    const i = Mv;
    return openBlock(), createBlock(i, { "active-page-item-style": { border: "1px solid #175CFF" }, "buffer-size": 2, current: e.page.currentPage, "page-size": e.page.pageSize, "page-size-options": e.page.pageSizes, size: e.size, total: e.page.total, "show-jumper": "", "show-page-size": "", "show-total": "", onChange: t, onPageSizeChange: o }, null, 8, ["current", "page-size", "page-size-options", "size", "total"]);
  };
} });
export {
  C as default
};
//# sourceMappingURL=index-262dfcfb-U7DOR3UE.js.map
