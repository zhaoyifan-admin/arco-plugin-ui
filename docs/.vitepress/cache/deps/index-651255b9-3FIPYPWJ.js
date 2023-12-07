import {
  rv
} from "./chunk-XD5FTO65.js";
import {
  createBlock,
  defineComponent,
  openBlock
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.1.36_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-651255b9.js
var C = defineComponent({ __name: "index", props: { bordered: { type: Boolean, default: true }, size: { default: "medium" }, page: { default: () => ({ currentPage: 1, pageSize: 10, pageSizes: [5, 10, 20, 30, 50], total: 0 }) } }, emits: ["currentChange", "sizeChange"], setup(g, { emit: a }) {
  const t = (e) => {
    a("currentChange", e);
  }, o = (e) => {
    a("sizeChange", e);
  };
  return (e, m) => {
    const i = rv;
    return openBlock(), createBlock(i, { total: e.page.total, "page-size": e.page.pageSize, "page-size-options": e.page.pageSizes, "buffer-size": 2, "active-page-item-style": { border: "1px solid #175CFF" }, size: e.size, "show-total": "", "show-jumper": "", "show-page-size": "", onChange: t, onPageSizeChange: o }, null, 8, ["total", "page-size", "page-size-options", "size"]);
  };
} });
export {
  C as default
};
//# sourceMappingURL=index-651255b9-3FIPYPWJ.js.map
