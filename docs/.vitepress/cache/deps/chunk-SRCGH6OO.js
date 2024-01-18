import {
  Ce,
  It,
  Pr,
  Pt,
  _e,
  wt
} from "./chunk-FOSXQ56G.js";
import {
  Comment,
  Fragment,
  computed,
  createVNode,
  defineComponent
} from "./chunk-67UUJLDS.js";

// node_modules/.pnpm/vue-arco-ui@0.2.25_@arco-design+web-vue@2.53.3_typescript@5.2.2/node_modules/vue-arco-ui/dist/index-iacJy0OG.js
var o = defineComponent({ name: "Space", props: { align: { type: String }, direction: { type: String, default: "horizontal" }, size: { type: [Number, String, Array], default: "small" }, wrap: { type: Boolean }, fill: { type: Boolean } }, setup(e, { slots: r }) {
  const i = _e("space"), c = computed(() => {
    var t;
    return (t = e.align) != null ? t : e.direction === "horizontal" ? "center" : "";
  }), v = computed(() => [i, { [`${i}-${e.direction}`]: e.direction, [`${i}-align-${c.value}`]: c.value, [`${i}-wrap`]: e.wrap, [`${i}-fill`]: e.fill }]);
  function m(t) {
    if (Ce(t))
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
    const n = {}, l = `${m(wt(e.size) ? e.size[0] : e.size)}px`, s = `${m(wt(e.size) ? e.size[1] : e.size)}px`;
    return t ? e.wrap ? { marginBottom: s } : {} : (e.direction === "horizontal" && (n.marginRight = l), (e.direction === "vertical" || e.wrap) && (n.marginBottom = s), n);
  };
  return () => {
    var t;
    const n = Pr((t = r.default) == null ? void 0 : t.call(r), true).filter((l) => l.type !== Comment);
    return createVNode("div", { class: v.value }, [n.map((l, s) => {
      var u, d;
      const y = r.split && s > 0;
      return createVNode(Fragment, { key: (u = l.key) != null ? u : `item-${s}` }, [y && createVNode("div", { class: `${i}-item-split`, style: p(false) }, [(d = r.split) == null ? void 0 : d.call(r)]), createVNode("div", { class: `${i}-item`, style: p(s === n.length - 1) }, [l])]);
    })]);
  };
} });
var C = Object.assign(o, { install: (e, r) => {
  Pt(e, r);
  const i = It(r);
  e.component(i + o.name, o);
} });

export {
  C
};
//# sourceMappingURL=chunk-SRCGH6OO.js.map
