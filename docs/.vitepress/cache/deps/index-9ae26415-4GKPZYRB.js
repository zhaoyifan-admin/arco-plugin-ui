import {
  createBlock,
  defineComponent,
  openBlock,
  resolveComponent
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.1.30/node_modules/vue-arco-ui/dist/index-9ae26415.js
var c = defineComponent({ __name: "index", props: { bordered: { type: Boolean, default: true }, size: { default: "medium" }, page: { default: () => ({ currentPage: 1, pageSize: 10, pageSizes: [5, 10, 20, 30, 50], total: 0 }) } }, emits: ["changePage", "changePagesize"], setup(r, { emit: a }) {
  function o(e) {
    a("changePage", e);
  }
  function t(e) {
    a("changePagesize", e);
  }
  return (e, l) => {
    const i = resolveComponent("arco-pagination");
    return openBlock(), createBlock(i, { total: e.page.total, "page-size": e.page.pageSize, "page-size-options": e.page.pageSizes, "buffer-size": 2, "active-page-item-style": { border: "1px solid #175CFF" }, size: e.size, "show-total": "", "show-jumper": "", "show-page-size": "", onChange: o, onPageSizeChange: t }, null, 8, ["total", "page-size", "page-size-options", "size"]);
  };
} });
export {
  c as default
};
//# sourceMappingURL=index-9ae26415-4GKPZYRB.js.map
