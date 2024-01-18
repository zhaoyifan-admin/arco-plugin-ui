import {
  w4
} from "./chunk-FOSXQ56G.js";
import "./chunk-W6TZYUAE.js";
import "./chunk-O7NL36PV.js";
import "./chunk-5THIMN62.js";
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

// node_modules/.pnpm/vue-arco-ui@0.2.25_@arco-design+web-vue@2.53.3_typescript@5.2.2/node_modules/vue-arco-ui/dist/index-oQaH3c8L.js
var C = defineComponent({ __name: "index", props: { bordered: { type: Boolean, default: true }, size: { default: "medium" }, page: { default: () => ({ currentPage: 1, pageSize: 10, pageSizes: [5, 10, 20, 30, 50], total: 0 }) } }, emits: ["currentChange", "sizeChange"], setup(g, { emit: a }) {
  const t = (e) => {
    a("currentChange", e);
  }, o = (e) => {
    a("sizeChange", e);
  };
  return (e, m) => {
    const i = w4;
    return openBlock(), createBlock(i, { "active-page-item-style": { border: "1px solid #175CFF" }, "buffer-size": 2, current: e.page.currentPage, "page-size": e.page.pageSize, "page-size-options": e.page.pageSizes, size: e.size, total: e.page.total, "show-jumper": "", "show-page-size": "", "show-total": "", onChange: t, onPageSizeChange: o }, null, 8, ["current", "page-size", "page-size-options", "size", "total"]);
  };
} });
export {
  C as default
};
//# sourceMappingURL=index-oQaH3c8L-MA5B6DSK.js.map
