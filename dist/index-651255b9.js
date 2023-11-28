import { P as p } from "./index-a33a360e.js";
import { defineComponent as s, openBlock as r, createBlock as n } from "vue";
import "@vuepic/vue-datepicker";
import "@vueuse/core";
import "@vueuse/integrations/useQRCode";
import "swiper/vue";
import "swiper/modules";
const C = s({ __name: "index", props: { bordered: { type: Boolean, default: !0 }, size: { default: "medium" }, page: { default: () => ({ currentPage: 1, pageSize: 10, pageSizes: [5, 10, 20, 30, 50], total: 0 }) } }, emits: ["currentChange", "sizeChange"], setup(g, { emit: a }) {
  const t = (e) => {
    a("currentChange", e);
  }, o = (e) => {
    a("sizeChange", e);
  };
  return (e, m) => {
    const i = p;
    return r(), n(i, { total: e.page.total, "page-size": e.page.pageSize, "page-size-options": e.page.pageSizes, "buffer-size": 2, "active-page-item-style": { border: "1px solid #175CFF" }, size: e.size, "show-total": "", "show-jumper": "", "show-page-size": "", onChange: t, onPageSizeChange: o }, null, 8, ["total", "page-size", "page-size-options", "size"]);
  };
} });
export {
  C as default
};
