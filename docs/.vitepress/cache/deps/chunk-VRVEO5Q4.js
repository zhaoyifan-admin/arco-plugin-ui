import {
  Cl,
  he,
  pe,
  qn,
  ul,
  xl
} from "./chunk-4576TRBC.js";
import {
  Comment,
  Fragment,
  computed,
  createVNode,
  defineComponent
} from "./chunk-67UUJLDS.js";

// node_modules/.pnpm/vue-arco-ui@0.1.52_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-f3ff7f62.js
var o = defineComponent({ name: "Space", props: { align: { type: String }, direction: { type: String, default: "horizontal" }, size: { type: [Number, String, Array], default: "small" }, wrap: { type: Boolean }, fill: { type: Boolean } }, setup(e, { slots: r }) {
  const i = pe("space"), c = computed(() => {
    var t;
    return (t = e.align) != null ? t : e.direction === "horizontal" ? "center" : "";
  }), f = computed(() => [i, { [`${i}-${e.direction}`]: e.direction, [`${i}-align-${c.value}`]: c.value, [`${i}-wrap`]: e.wrap, [`${i}-fill`]: e.fill }]);
  function m(t) {
    if (he(t))
      return t;
    switch (t) {
      case "mini":
        return 4;
      case "small":
      default:
        return 8;
      case "medium":
        return 16;
      case "large":
        return 24;
    }
  }
  const p = (t) => {
    const n = {}, s = `${m(ul(e.size) ? e.size[0] : e.size)}px`, l = `${m(ul(e.size) ? e.size[1] : e.size)}px`;
    return t ? e.wrap ? { marginBottom: l } : {} : (e.direction === "horizontal" && (n.marginRight = s), (e.direction === "vertical" || e.wrap) && (n.marginBottom = l), n);
  };
  return () => {
    var t;
    const n = qn((t = r.default) == null ? void 0 : t.call(r), true).filter((s) => s.type !== Comment);
    return createVNode("div", { class: f.value }, [n.map((s, l) => {
      var u, d;
      const y = r.split && l > 0;
      return createVNode(Fragment, { key: (u = s.key) != null ? u : `item-${l}` }, [y && createVNode("div", { class: `${i}-item-split`, style: p(false) }, [(d = r.split) == null ? void 0 : d.call(r)]), createVNode("div", { class: `${i}-item`, style: p(l === n.length - 1) }, [s])]);
    })]);
  };
} });
var N = Object.assign(o, { install: (e, r) => {
  Cl(e, r);
  const i = xl(r);
  e.component(i + o.name, o);
} });

export {
  N
};
//# sourceMappingURL=chunk-VRVEO5Q4.js.map
