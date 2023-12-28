import {
  dt,
  kt,
  qn,
  ve,
  xe,
  xt
} from "./chunk-KZHBUNAO.js";
import {
  Comment,
  Fragment,
  computed,
  createVNode,
  defineComponent
} from "./chunk-67UUJLDS.js";

// node_modules/.pnpm/vue-arco-ui@0.2.0_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-80db9c32.js
var o = defineComponent({ name: "Space", props: { align: { type: String }, direction: { type: String, default: "horizontal" }, size: { type: [Number, String, Array], default: "small" }, wrap: { type: Boolean }, fill: { type: Boolean } }, setup(e, { slots: r }) {
  const i = ve("space"), c = computed(() => {
    var t;
    return (t = e.align) != null ? t : e.direction === "horizontal" ? "center" : "";
  }), v = computed(() => [i, { [`${i}-${e.direction}`]: e.direction, [`${i}-align-${c.value}`]: c.value, [`${i}-wrap`]: e.wrap, [`${i}-fill`]: e.fill }]);
  function m(t) {
    if (xe(t))
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
    const n = {}, l = `${m(dt(e.size) ? e.size[0] : e.size)}px`, s = `${m(dt(e.size) ? e.size[1] : e.size)}px`;
    return t ? e.wrap ? { marginBottom: s } : {} : (e.direction === "horizontal" && (n.marginRight = l), (e.direction === "vertical" || e.wrap) && (n.marginBottom = s), n);
  };
  return () => {
    var t;
    const n = qn((t = r.default) == null ? void 0 : t.call(r), true).filter((l) => l.type !== Comment);
    return createVNode("div", { class: v.value }, [n.map((l, s) => {
      var u, d;
      const y = r.split && s > 0;
      return createVNode(Fragment, { key: (u = l.key) != null ? u : `item-${s}` }, [y && createVNode("div", { class: `${i}-item-split`, style: p(false) }, [(d = r.split) == null ? void 0 : d.call(r)]), createVNode("div", { class: `${i}-item`, style: p(s === n.length - 1) }, [l])]);
    })]);
  };
} });
var N = Object.assign(o, { install: (e, r) => {
  xt(e, r);
  const i = kt(r);
  e.component(i + o.name, o);
} });

export {
  N
};
//# sourceMappingURL=chunk-EWJ3MC5W.js.map
