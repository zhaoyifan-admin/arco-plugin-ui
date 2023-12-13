import {
  N
} from "./chunk-FELUJIQ6.js";
import {
  F,
  m
} from "./chunk-SMNQWRBS.js";
import {
  Sr,
  qe
} from "./chunk-DMJDBT7V.js";
import {
  An,
  Cl,
  Cp,
  Dl,
  K2,
  Ln,
  Ls,
  Os,
  Se,
  To,
  U2,
  Ze,
  Zl,
  Zt,
  _s,
  bt,
  he,
  ia,
  ir,
  je,
  jv,
  mp,
  mv,
  pe,
  qr,
  ul,
  wl,
  x2,
  xl,
  xs,
  zt
} from "./chunk-I6ZBQRAN.js";
import "./chunk-W6TZYUAE.js";
import "./chunk-O7NL36PV.js";
import "./chunk-FVN67OAP.js";
import "./chunk-5BCG5FEI.js";
import "./chunk-2HXSZBOA.js";
import "./chunk-BDXATM4V.js";
import "./chunk-4NAX6VIJ.js";
import {
  Fragment,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineComponent,
  getCurrentInstance,
  h,
  inject,
  isVNode,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeProps,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUpdated,
  openBlock,
  popScopeId,
  provide,
  pushScopeId,
  reactive,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  toDisplayString,
  toRefs,
  watch,
  watchEffect,
  withCtx,
  withModifiers
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.1.55_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-917a1812.js
var _e = defineComponent({ name: "Divider", props: { direction: { type: String, default: "horizontal" }, orientation: { type: String, default: "center" }, type: { type: String }, size: { type: Number }, margin: { type: [Number, String] } }, setup(e, { slots: t }) {
  const a = pe("divider"), l = computed(() => e.direction === "horizontal"), r = computed(() => {
    const c = {};
    if (e.size && (c[l.value ? "border-bottom-width" : "border-left-width"] = he(e.size) ? `${e.size}px` : e.size), e.type && (c[l.value ? "border-bottom-style" : "border-left-style"] = e.type), !wl(e.margin)) {
      const n = he(e.margin) ? `${e.margin}px` : e.margin;
      c.margin = l.value ? `${n} 0` : `0 ${n}`;
    }
    return c;
  });
  return () => {
    var c;
    const n = (c = t.default) == null ? void 0 : c.call(t), i = [a, `${a}-${e.direction}`, { [`${a}-with-text`]: n }];
    return createVNode("div", { role: "separator", class: i, style: r.value }, [n && e.direction === "horizontal" && createVNode("span", { class: [`${a}-text`, `${a}-text-${e.orientation}`] }, [n])]);
  };
} });
var va = Object.assign(_e, { install: (e, t) => {
  Cl(e, t);
  const a = xl(t);
  e.component(a + _e.name, _e);
} });
var et = Symbol("ArcoTabs");
var pa = je(defineComponent({ name: "TabsTab", components: { IconHover: Dl, IconClose: An }, props: { tab: { type: Object, required: true }, active: Boolean, editable: Boolean }, emits: ["click", "delete"], setup(e, { emit: t }) {
  const a = pe("tabs-tab"), l = inject(et, {}), r = (o) => {
    e.tab.disabled || t("click", e.tab.key, o);
  }, c = (o) => {
    o.key === "Enter" && r(o);
  }, n = computed(() => Object.assign(l.trigger === "click" ? { onClick: r } : { onMouseover: r }, { onKeydown: c })), i = computed(() => [a, { [`${a}-active`]: e.active, [`${a}-closable`]: e.editable && e.tab.closable, [`${a}-disabled`]: e.tab.disabled }]);
  return { prefixCls: a, cls: i, eventHandlers: n, handleDelete: (o) => {
    e.tab.disabled || t("delete", e.tab.key, o);
  } };
} }), [["render", function(e, t, a, l, r, c) {
  const n = resolveComponent("icon-close"), i = resolveComponent("icon-hover");
  return openBlock(), createElementBlock("div", mergeProps({ tabindex: "0", class: e.cls }, e.eventHandlers), [createBaseVNode("span", { class: normalizeClass(`${e.prefixCls}-title`) }, [renderSlot(e.$slots, "default")], 2), e.editable && e.tab.closable ? (openBlock(), createBlock(i, { key: 0, class: normalizeClass(`${e.prefixCls}-close-btn`), onClick: withModifiers(e.handleDelete, ["stop"]) }, { default: withCtx(() => [createVNode(n)]), _: 1 }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)], 16);
}]]);
var vt = defineComponent({ name: "TabsButton", props: { type: { type: String, default: "next" }, direction: { type: String, default: "horizontal" }, disabled: { type: Boolean, default: false }, onClick: { type: Function } }, emits: ["click"], setup(e, { emit: t }) {
  const a = pe("tabs-nav-button"), l = (c) => {
    e.disabled || t("click", e.type, c);
  }, r = computed(() => [a, { [`${a}-disabled`]: e.disabled, [`${a}-left`]: e.direction === "horizontal" && e.type === "previous", [`${a}-right`]: e.direction === "horizontal" && e.type === "next", [`${a}-up`]: e.direction === "vertical" && e.type === "previous", [`${a}-down`]: e.direction === "vertical" && e.type === "next" }]);
  return () => {
    let c;
    return createVNode("div", { class: r.value, onClick: l }, [createVNode(Dl, { disabled: e.disabled }, (n = c = e.direction === "horizontal" ? e.type === "next" ? createVNode(x2, null, null) : createVNode(K2, null, null) : e.type === "next" ? createVNode(Os, null, null) : createVNode(U2, null, null), typeof n == "function" || Object.prototype.toString.call(n) === "[object Object]" && !isVNode(n) ? c : { default: () => [c] }))]);
    var n;
  };
} });
var ya = je(defineComponent({ name: "TabsNavInk", props: { activeTabRef: { type: Object }, direction: { type: String }, disabled: Boolean, animation: Boolean }, setup(e) {
  const { activeTabRef: t } = toRefs(e), a = pe("tabs-nav-ink"), l = ref(0), r = ref(0), c = computed(() => e.direction === "vertical" ? { top: `${l.value}px`, height: `${r.value}px` } : { left: `${l.value}px`, width: `${r.value}px` }), n = () => {
    if (t.value) {
      const o = e.direction === "vertical" ? t.value.offsetTop : t.value.offsetLeft, u = e.direction === "vertical" ? t.value.offsetHeight : t.value.offsetWidth;
      o === l.value && u === r.value || (l.value = o, r.value = u);
    }
  };
  onMounted(() => {
    nextTick(() => n());
  }), onUpdated(() => {
    n();
  });
  const i = computed(() => [a, { [`${a}-animation`]: e.animation, [`${a}-disabled`]: e.disabled }]);
  return { prefixCls: a, cls: i, style: c };
} }), [["render", function(e, t, a, l, r, c) {
  return openBlock(), createElementBlock("div", { class: normalizeClass(e.cls), style: normalizeStyle(e.style) }, null, 6);
}]]);
var fa = defineComponent({ name: "TabsNav", props: { tabs: { type: Array, required: true }, direction: { type: String, required: true }, type: { type: String, required: true }, activeKey: { type: [String, Number] }, activeIndex: { type: Number, required: true }, position: { type: String, required: true }, size: { type: String, required: true }, showAddButton: { type: Boolean, default: false }, editable: { type: Boolean, default: false }, animation: { type: Boolean, required: true }, headerPadding: { type: Boolean, default: true } }, emits: ["click", "add", "delete"], setup(e, { emit: t, slots: a }) {
  const { tabs: l, activeKey: r, activeIndex: c, direction: n } = toRefs(e), i = pe("tabs-nav"), o = ref(), u = ref(), p = ref({}), C = computed(() => {
    if (!wl(r.value))
      return p.value[r.value];
  }), b = ref(), S = computed(() => e.editable && ["line", "card", "card-gutter"].includes(e.type)), k = ref(false), N2 = ref(0), w = ref(0), B = ref([]), K = ref(0), A = () => {
    var E, I, s;
    k.value = j(), k.value ? (N2.value = (s = n.value === "vertical" ? (E = o.value) == null ? void 0 : E.offsetHeight : (I = o.value) == null ? void 0 : I.offsetWidth) != null ? s : 0, w.value = u.value && o.value ? n.value === "vertical" ? u.value.offsetHeight - o.value.offsetHeight : u.value.offsetWidth - o.value.offsetWidth : 0, B.value = l.value.map((h2) => {
      const z = p.value[h2.key];
      return n.value === "vertical" ? z.offsetTop + z.offsetHeight : z.offsetLeft + z.offsetWidth;
    }), K.value > w.value && (K.value = w.value)) : K.value = 0;
  }, j = () => !(!o.value || !u.value) && (e.direction === "vertical" ? u.value.offsetHeight > o.value.offsetHeight : u.value.offsetWidth > o.value.offsetWidth), H = (E) => {
    var I;
    return ((I = B.value[E - 1]) != null ? I : 0) >= K.value && B.value[E] <= K.value + N2.value;
  }, U = (E, I) => {
    t("click", E, I);
  }, _ = (E, I) => {
    t("delete", E, I);
  }, G = (E) => {
    var I;
    K.value = (I = ((s) => o.value ? s === "previous" ? K.value - N2.value : K.value + N2.value : 0)(E), !o.value || !u.value || I < 0 ? 0 : I > w.value ? w.value : I);
  }, m2 = () => {
    A(), b.value && b.value.$forceUpdate();
  };
  watch(l, () => {
    nextTick(() => {
      A();
    });
  }), watch(c, (E, I) => {
    nextTick(() => {
      var s;
      if (k.value)
        if (E >= I) {
          const h2 = E < B.value.length - 1 ? E + 1 : E;
          H(h2) || (K.value = B.value[h2] - N2.value);
        } else {
          const h2 = E > 0 ? E - 1 : E;
          H(h2) || (K.value = (s = B.value[h2 - 1]) != null ? s : 0);
        }
    });
  }), onMounted(() => {
    A();
  });
  const P = () => S.value && e.showAddButton ? createVNode("div", { class: `${i}-add-btn`, onClick: (E) => t("add", E) }, [createVNode(Dl, null, { default: () => [createVNode(ir, null, null)] })]) : null, de = computed(() => [i, `${i}-${e.direction}`, `${i}-${e.position}`, `${i}-size-${e.size}`, `${i}-type-${e.type}`]), Se2 = computed(() => [`${i}-tab-list`, { [`${i}-tab-list-no-padding`]: !e.headerPadding && ["line", "text"].includes(e.type) && e.direction === "horizontal" }]), ke = computed(() => (({ direction: E, type: I, offset: s }) => E === "vertical" ? { transform: `translateY(${-s}px)` } : { transform: `translateX(${-s}px)` })({ direction: e.direction, type: e.type, offset: K.value })), ae = computed(() => [`${i}-tab`, { [`${i}-tab-scroll`]: k.value }]);
  return () => {
    var E;
    return createVNode("div", { class: de.value }, [k.value && createVNode(vt, { type: "previous", direction: e.direction, disabled: K.value <= 0, onClick: G }, null), createVNode(To, { onResize: () => A() }, { default: () => [createVNode("div", { class: ae.value, ref: o }, [createVNode(To, { onResize: m2 }, { default: () => [createVNode("div", { ref: u, class: Se2.value, style: ke.value }, [e.tabs.map((I, s) => createVNode(pa, { key: I.key, ref: (h2) => {
      h2 != null && h2.$el && (p.value[I.key] = h2.$el);
    }, active: I.key === r.value, tab: I, editable: e.editable, onClick: U, onDelete: _ }, { default: () => {
      var h2, z, M;
      return [(M = (z = (h2 = I.slots).title) == null ? void 0 : z.call(h2)) != null ? M : I.title];
    } })), e.type === "line" && C.value && createVNode(ya, { ref: b, activeTabRef: C.value, direction: e.direction, disabled: false, animation: e.animation }, null)])] }), !k.value && P()])] }), k.value && createVNode(vt, { type: "next", direction: e.direction, disabled: K.value >= w.value, onClick: G }, null), createVNode("div", { class: `${i}-extra` }, [k.value && P(), (E = a.extra) == null ? void 0 : E.call(a)])]);
  };
} });
var Fe = defineComponent({ name: "Tabs", props: { activeKey: { type: [String, Number], default: void 0 }, defaultActiveKey: { type: [String, Number], default: void 0 }, position: { type: String, default: "top" }, size: { type: String }, type: { type: String, default: "line" }, direction: { type: String, default: "horizontal" }, editable: { type: Boolean, default: false }, showAddButton: { type: Boolean, default: false }, destroyOnHide: { type: Boolean, default: false }, lazyLoad: { type: Boolean, default: false }, justify: { type: Boolean, default: false }, animation: { type: Boolean, default: false }, headerPadding: { type: Boolean, default: true }, autoSwitch: { type: Boolean, default: false }, hideContent: { type: Boolean, default: false }, trigger: { type: String, default: "click" } }, emits: { "update:activeKey": (e) => true, change: (e) => true, tabClick: (e, t) => true, add: (e) => true, delete: (e, t) => true }, setup(e, { emit: t, slots: a }) {
  const { size: l, lazyLoad: r, destroyOnHide: c, trigger: n } = toRefs(e), i = pe("tabs"), { mergedSize: o } = Zl(l), u = computed(() => e.direction === "vertical" ? "left" : e.position), p = computed(() => ["left", "right"].includes(u.value) ? "vertical" : "horizontal"), { children: C, components: b } = Ls("TabPane"), S = reactive(/* @__PURE__ */ new Map()), k = computed(() => {
    const m2 = [];
    return b.value.forEach((P) => {
      const de = S.get(P);
      de && m2.push(de);
    }), m2;
  }), N2 = computed(() => k.value.map((m2) => m2.key)), w = ref(e.defaultActiveKey), B = computed(() => {
    var m2;
    const P = (m2 = e.activeKey) != null ? m2 : w.value;
    return wl(P) ? N2.value[0] : P;
  }), K = computed(() => {
    const m2 = N2.value.indexOf(B.value);
    return m2 === -1 ? 0 : m2;
  });
  provide(et, reactive({ lazyLoad: r, destroyOnHide: c, activeKey: B, addItem: (m2, P) => {
    S.set(m2, P);
  }, removeItem: (m2) => {
    S.delete(m2);
  }, trigger: n }));
  const A = (m2) => {
    m2 !== B.value && (w.value = m2, t("update:activeKey", m2), t("change", m2));
  }, j = (m2, P) => {
    A(m2), t("tabClick", m2, P);
  }, H = (m2) => {
    t("add", m2), e.autoSwitch && nextTick(() => {
      const P = N2.value[N2.value.length - 1];
      A(P);
    });
  }, U = (m2, P) => {
    t("delete", m2, P);
  }, _ = () => createVNode("div", { class: [`${i}-content`, { [`${i}-content-hide`]: e.hideContent }] }, [createVNode("div", { class: [`${i}-content-list`, { [`${i}-content-animation`]: e.animation }], style: { marginLeft: `-${100 * K.value}%` } }, [C.value])]), G = computed(() => [i, `${i}-${p.value}`, `${i}-${u.value}`, `${i}-type-${e.type}`, `${i}-size-${o.value}`, { [`${i}-justify`]: e.justify }]);
  return () => {
    var m2;
    return C.value = (m2 = a.default) == null ? void 0 : m2.call(a), createVNode("div", { class: G.value }, [u.value === "bottom" && _(), createVNode(fa, { tabs: k.value, activeKey: B.value, activeIndex: K.value, direction: p.value, position: u.value, editable: e.editable, animation: e.animation, showAddButton: e.showAddButton, headerPadding: e.headerPadding, size: o.value, type: e.type, onClick: j, onAdd: H, onDelete: U }, { extra: a.extra }), u.value !== "bottom" && _()]);
  };
} });
var ha = Object.defineProperty;
var pt = Object.getOwnPropertySymbols;
var ga = Object.prototype.hasOwnProperty;
var ka = Object.prototype.propertyIsEnumerable;
var yt = (e, t, a) => t in e ? ha(e, t, { enumerable: true, configurable: true, writable: true, value: a }) : e[t] = a;
var Ee = je(defineComponent({ name: "TabPane", props: { title: String, disabled: { type: Boolean, default: false }, closable: { type: Boolean, default: true }, destroyOnHide: { type: Boolean, default: false } }, setup(e, { slots: t }) {
  var a;
  const { title: l, disabled: r, closable: c } = toRefs(e), n = getCurrentInstance(), i = pe("tabs"), o = inject(et, {}), u = ref(), p = computed(() => n == null ? void 0 : n.vnode.key), C = computed(() => p.value === o.activeKey), b = ref(!o.lazyLoad || C.value), S = reactive({ key: p, title: l, disabled: r, closable: c, slots: t });
  return n != null && n.uid && ((a = o.addItem) == null || a.call(o, n.uid, S)), onBeforeUnmount(() => {
    var k;
    n != null && n.uid && ((k = o.removeItem) == null || k.call(o, n.uid));
  }), watch(C, (k) => {
    k ? b.value || (b.value = true) : (e.destroyOnHide || o.destroyOnHide) && (b.value = false);
  }), onUpdated(() => {
    S.slots = ((k, N2) => {
      for (var w in N2 || (N2 = {}))
        ga.call(N2, w) && yt(k, w, N2[w]);
      if (pt)
        for (var w of pt(N2))
          ka.call(N2, w) && yt(k, w, N2[w]);
      return k;
    })({}, t);
  }), { prefixCls: i, active: C, itemRef: u, mounted: b };
} }), [["render", function(e, t, a, l, r, c) {
  return openBlock(), createElementBlock("div", { ref: "itemRef", class: normalizeClass([`${e.prefixCls}-content-item`, { [`${e.prefixCls}-content-item-active`]: e.active }]) }, [e.mounted ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(`${e.prefixCls}-pane`) }, [renderSlot(e.$slots, "default")], 2)) : createCommentVNode("v-if", true)], 2);
}]]);
var ba = Object.assign(Fe, { TabPane: Ee, install: (e, t) => {
  Cl(e, t);
  const a = xl(t);
  e.component(a + Fe.name, Fe), e.component(a + Ee.name, Ee);
} });
var Tt = Symbol("TreeInjectionKey");
function ft(e) {
  return e.selectable && !e.disabled;
}
function ht(e) {
  return !e.isLeaf && e.children;
}
function Ue(e) {
  return Set.prototype.add.bind(e);
}
function Ye(e) {
  return Set.prototype.delete.bind(e);
}
function xe(e) {
  return !e.disabled && !e.disableCheckbox && !!e.checkable;
}
function tt(e) {
  var t;
  const a = [];
  return (t = e.children) == null || t.forEach((l) => {
    xe(l) && a.push(l.key, ...tt(l));
  }), a;
}
function Lt(e) {
  var t;
  const { node: a, checkedKeySet: l, indeterminateKeySet: r } = e;
  let c = a.parent;
  for (; c; ) {
    if (xe(c)) {
      const n = c.key, i = ((t = c.children) == null ? void 0 : t.filter(xe)) || [];
      let o = 0;
      const u = i.length;
      i.some(({ key: p }) => {
        if (l.has(p))
          o += 1;
        else if (r.has(p))
          return o += 0.5, true;
        return false;
      }), o && o !== u ? r.add(n) : r.delete(n), o && o === u ? l.add(n) : l.delete(n);
    }
    c = c.parent;
  }
}
function gt(e) {
  const { node: t, checked: a, checkedKeys: l, indeterminateKeys: r, checkStrictly: c = false } = e, { key: n } = t, i = new Set(l), o = new Set(r);
  if (a ? i.add(n) : i.delete(n), o.delete(n), !c) {
    const u = tt(t);
    a ? u.forEach(Ue(i)) : u.forEach(Ye(i)), u.forEach(Ye(o)), Lt({ node: t, checkedKeySet: i, indeterminateKeySet: o });
  }
  return [[...i], [...o]];
}
function Be() {
  return inject(Tt) || {};
}
var ma = defineComponent({ name: "IconFile", props: { size: { type: [Number, String] }, strokeWidth: { type: Number, default: 4 }, strokeLinecap: { type: String, default: "butt", validator: (e) => ["butt", "round", "square"].includes(e) }, strokeLinejoin: { type: String, default: "miter", validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e) }, rotate: Number, spin: Boolean }, emits: { click: (e) => true }, setup(e, { emit: t }) {
  const a = pe("icon");
  return { cls: computed(() => [a, `${a}-file`, { [`${a}-spin`]: e.spin }]), innerStyle: computed(() => {
    const l = {};
    return e.size && (l.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (l.transform = `rotate(${e.rotate}deg)`), l;
  }), onClick: (l) => {
    t("click", l);
  } };
} });
var xa = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
var Sa = [createBaseVNode("path", { d: "M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z" }, null, -1)];
var Re = je(ma, [["render", function(e, t, a, l, r, c) {
  return openBlock(), createElementBlock("svg", { viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", class: normalizeClass(e.cls), style: normalizeStyle(e.innerStyle), "stroke-width": e.strokeWidth, "stroke-linecap": e.strokeLinecap, "stroke-linejoin": e.strokeLinejoin, onClick: t[0] || (t[0] = (...n) => e.onClick && e.onClick(...n)) }, Sa, 14, xa);
}]]);
var Na = Object.assign(Re, { install: (e, t) => {
  var a;
  const l = (a = t == null ? void 0 : t.iconPrefix) != null ? a : "";
  e.component(l + Re.name, Re);
} });
var Ca = defineComponent({ name: "TreeNodeSwitcher", components: { IconLoading: bt, RenderFunction: m }, props: { prefixCls: String, loading: Boolean, showLine: Boolean, treeNodeData: { type: Object }, icons: { type: Object }, nodeStatus: { type: Object } }, emits: ["click"], setup(e, { slots: t, emit: a }) {
  const { icons: l, nodeStatus: r, treeNodeData: c } = toRefs(e), n = Be(), i = Cp(t, "switcher-icon"), o = Cp(t, "loading-icon");
  return { getSwitcherIcon: () => {
    var u, p, C;
    const b = (p = (u = l == null ? void 0 : l.value) == null ? void 0 : u.switcherIcon) != null ? p : i.value;
    return b ? b(r.value) : (C = n.switcherIcon) == null ? void 0 : C.call(n, c.value, r.value);
  }, getLoadingIcon: () => {
    var u, p, C;
    const b = (p = (u = l == null ? void 0 : l.value) == null ? void 0 : u.loadingIcon) != null ? p : o.value;
    return b ? b(r.value) : (C = n.loadingIcon) == null ? void 0 : C.call(n, c.value, r.value);
  }, onClick(u) {
    a("click", u);
  } };
}, render() {
  var e, t, a;
  const { prefixCls: l, getSwitcherIcon: r, getLoadingIcon: c, onClick: n, nodeStatus: i = {}, loading: o, showLine: u } = this, { expanded: p, isLeaf: C } = i;
  if (o)
    return (e = c()) != null ? e : h(bt);
  let b = null, S = false;
  if (C)
    u && (b = (a = r()) != null ? a : h(Na));
  else {
    const N2 = u ? h("span", { class: `${l}-${p ? "minus" : "plus"}-icon` }) : h(jv);
    b = (t = r()) != null ? t : N2, S = !u;
  }
  if (!b)
    return null;
  const k = h("span", { class: `${l}-switcher-icon`, onClick: n }, b);
  return S ? h(Dl, { class: `${l}-icon-hover` }, () => k) : k;
} });
var Ka = Object.defineProperty;
var wa = Object.defineProperties;
var $a = Object.getOwnPropertyDescriptors;
var kt = Object.getOwnPropertySymbols;
var Da = Object.prototype.hasOwnProperty;
var Ea = Object.prototype.propertyIsEnumerable;
var bt2 = (e, t, a) => t in e ? Ka(e, t, { enumerable: true, configurable: true, writable: true, value: a }) : e[t] = a;
var Ve = (e, t) => {
  for (var a in t || (t = {}))
    Da.call(t, a) && bt2(e, a, t[a]);
  if (kt)
    for (var a of kt(t))
      Ea.call(t, a) && bt2(e, a, t[a]);
  return e;
};
var mt = (e, t) => wa(e, $a(t));
var Bt = (() => {
  let e = 0;
  return () => (e += 1, `__arco_tree${e}`);
})();
function xt({ subEnable: e, superEnable: t, isLeaf: a, treeNodeData: l, level: r }) {
  return wl(e) ? Ze(t) ? t(l, { isLeaf: a, level: r }) : t != null && t : e;
}
function Ta(e) {
  var t, a;
  const { treeNodeData: l, parentNode: r, isTail: c = true, treeProps: n } = e, { fieldNames: i } = n || {}, o = function(k, N2) {
    const w = Ve({}, k);
    return N2 && Object.keys(N2).forEach((B) => {
      const K = N2[B];
      K !== B && (w[B] = k[K], delete w[K]);
    }), w;
  }(l, i), u = n.loadMore ? !!o.isLeaf : !((t = o.children) != null && t.length), p = r ? r.level + 1 : 0, C = mt(Ve({}, ia(o, ["children"])), { key: (a = o.key) != null ? a : Bt(), selectable: xt({ subEnable: o.selectable, superEnable: n == null ? void 0 : n.selectable, isLeaf: u, level: p, treeNodeData: l }), disabled: !!o.disabled, disableCheckbox: !!o.disableCheckbox, checkable: xt({ subEnable: o.checkable, superEnable: n == null ? void 0 : n.checkable, isLeaf: u, level: p, treeNodeData: l }), isLeaf: u, isTail: c, blockNode: !!(n != null && n.blockNode), showLine: !!(n != null && n.showLine), level: p, lineless: r ? [...r.lineless, r.isTail] : [], draggable: (b = o.draggable, S = n == null ? void 0 : n.draggable, !!(wl(b) ? S : b)) });
  var b, S;
  return mt(Ve({}, C), { treeNodeProps: C, treeNodeData: l, parent: r, parentKey: r == null ? void 0 : r.key, pathParentKeys: r ? [...r.pathParentKeys, r.key] : [] });
}
function It() {
  const e = getCurrentInstance(), t = () => {
    var l;
    return (l = e == null ? void 0 : e.vnode.key) != null ? l : Bt();
  }, a = ref(t());
  return onUpdated(() => {
    a.value = t();
  }), a;
}
var La = defineComponent({ name: "BaseTreeNode", components: { NodeSwitcher: Ca, Checkbox: zt, RenderFunction: m, IconDragDotVertical: mv }, props: { key: { type: [String, Number] }, title: { type: String }, selectable: { type: Boolean }, disabled: { type: Boolean }, disableCheckbox: { type: Boolean }, checkable: { type: Boolean }, draggable: { type: Boolean }, isLeaf: { type: Boolean }, icon: { type: Function }, switcherIcon: { type: Function }, loadingIcon: { type: Function }, dragIcon: { type: Function }, isTail: { type: Boolean }, blockNode: { type: Boolean }, showLine: { type: Boolean }, level: { type: Number, default: 0 }, lineless: { type: Array, default: () => [] } }, setup(e) {
  const t = It(), a = pe("tree-node"), l = Be(), r = computed(() => {
    var s;
    return (s = l.key2TreeNode) == null ? void 0 : s.get(t.value);
  }), c = computed(() => r.value.treeNodeData), n = computed(() => r.value.children), i = computed(() => {
    var s;
    const h2 = (s = l.treeProps) == null ? void 0 : s.actionOnNodeClick;
    return h2 ? ul(z = h2) ? z : [z] : [];
    var z;
  }), { isLeaf: o, isTail: u, selectable: p, disabled: C, disableCheckbox: b, draggable: S } = toRefs(e), k = computed(() => {
    var s;
    return [`${a}`, { [`${a}-selected`]: G.value, [`${a}-is-leaf`]: o.value, [`${a}-is-tail`]: u.value, [`${a}-expanded`]: m2.value, [`${a}-disabled-selectable`]: !p.value && !((s = l.treeProps) != null && s.disableSelectActionOnly), [`${a}-disabled`]: C.value }];
  }), N2 = ref(), { isDragOver: w, isDragging: B, isAllowDrop: K, dropPosition: A, setDragStatus: j } = function(s) {
    const { key: h2, refTitle: z } = toRefs(s), M = Be(), ye = ref(false), Ne = ref(false), be = ref(false), T = ref(0), Z = qr((se) => {
      if (!z.value)
        return;
      const J = z.value.getBoundingClientRect(), fe = window.pageYOffset + J.top, { pageY: Ce } = se, le = J.height / 4, ie = Ce - fe;
      T.value = ie < le ? -1 : ie < J.height - le ? 0 : 1, be.value = !M.allowDrop || M.allowDrop(h2.value, T.value);
    });
    return { isDragOver: ye, isDragging: Ne, isAllowDrop: be, dropPosition: T, setDragStatus(se, J) {
      switch (se) {
        case "dragStart":
          Ne.value = true, T.value = 0, M.onDragStart && M.onDragStart(h2.value, J);
          break;
        case "dragEnd":
          Ne.value = false, ye.value = false, T.value = 0, Z.cancel(), M.onDragEnd && M.onDragEnd(h2.value, J);
          break;
        case "dragOver":
          ye.value = true, Z(J), M.onDragOver && M.onDragOver(h2.value, J);
          break;
        case "dragLeave":
          ye.value = false, T.value = 0, Z.cancel(), M.onDragLeave && M.onDragLeave(h2.value, J);
          break;
        case "drop":
          M.onDrop && M.onDrop(h2.value, T.value, J), ye.value = false, T.value = 0, Z.cancel();
      }
    } };
  }(reactive({ key: t, refTitle: N2 })), H = computed(() => [`${a}-title`, { [`${a}-title-draggable`]: S.value, [`${a}-title-gap-top`]: w.value && K.value && A.value < 0, [`${a}-title-gap-bottom`]: w.value && K.value && A.value > 0, [`${a}-title-highlight`]: !B.value && w.value && K.value && A.value === 0, [`${a}-title-dragging`]: B.value, [`${a}-title-block`]: r.value.blockNode }]), U = computed(() => {
    var s, h2;
    return (h2 = (s = l.checkedKeys) == null ? void 0 : s.includes) == null ? void 0 : h2.call(s, t.value);
  }), _ = computed(() => {
    var s, h2;
    return (h2 = (s = l.indeterminateKeys) == null ? void 0 : s.includes) == null ? void 0 : h2.call(s, t.value);
  }), G = computed(() => {
    var s, h2;
    return (h2 = (s = l.selectedKeys) == null ? void 0 : s.includes) == null ? void 0 : h2.call(s, t.value);
  }), m2 = computed(() => {
    var s, h2;
    return (h2 = (s = l.expandedKeys) == null ? void 0 : s.includes) == null ? void 0 : h2.call(s, t.value);
  }), P = computed(() => {
    var s, h2;
    return (h2 = (s = l.loadingKeys) == null ? void 0 : s.includes) == null ? void 0 : h2.call(s, t.value);
  }), de = computed(() => l.dragIcon), Se2 = computed(() => l.nodeIcon);
  function ke(s) {
    var h2, z;
    o.value || (!((h2 = n.value) != null && h2.length) && Ze(l.onLoadMore) ? l.onLoadMore(t.value) : (z = l == null ? void 0 : l.onExpand) == null || z.call(l, !m2.value, t.value, s));
  }
  const ae = reactive({ loading: P, checked: U, selected: G, indeterminate: _, expanded: m2, isLeaf: o }), E = computed(() => l.nodeTitle ? () => {
    var s;
    return (s = l.nodeTitle) == null ? void 0 : s.call(l, c.value, ae);
  } : void 0), I = computed(() => l.nodeExtra ? () => {
    var s;
    return (s = l.nodeExtra) == null ? void 0 : s.call(l, c.value, ae);
  } : void 0);
  return { nodekey: t, refTitle: N2, prefixCls: a, classNames: k, titleClassNames: H, indeterminate: _, checked: U, expanded: m2, selected: G, treeTitle: E, treeNodeData: c, loading: P, treeDragIcon: de, treeNodeIcon: Se2, extra: I, nodeStatus: ae, onCheckboxChange(s, h2) {
    var z;
    b.value || C.value || (z = l.onCheck) == null || z.call(l, s, t.value, h2);
  }, onTitleClick(s) {
    var h2;
    i.value.includes("expand") && ke(s), p.value && !C.value && ((h2 = l.onSelect) == null || h2.call(l, t.value, s));
  }, onSwitcherClick: ke, onDragStart(s) {
    var h2;
    if (S.value) {
      s.stopPropagation(), j("dragStart", s);
      try {
        (h2 = s.dataTransfer) == null || h2.setData("text/plain", "");
      } catch {
      }
    }
  }, onDragEnd(s) {
    S.value && (s.stopPropagation(), j("dragEnd", s));
  }, onDragOver(s) {
    S && (s.stopPropagation(), s.preventDefault(), j("dragOver", s));
  }, onDragLeave(s) {
    S.value && (s.stopPropagation(), j("dragLeave", s));
  }, onDrop(s) {
    S.value && K.value && (s.stopPropagation(), s.preventDefault(), j("drop", s));
  } };
} });
var Ba = ["data-level", "data-key"];
var Ia = ["draggable"];
var Ge = je(La, [["render", function(e, t, a, l, r, c) {
  const n = resolveComponent("NodeSwitcher"), i = resolveComponent("Checkbox"), o = resolveComponent("RenderFunction"), u = resolveComponent("IconDragDotVertical");
  return openBlock(), createElementBlock("div", { class: normalizeClass(e.classNames), "data-level": e.level, "data-key": e.nodekey }, [createCommentVNode(" 缩进 "), createBaseVNode("span", { class: normalizeClass(`${e.prefixCls}-indent`) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(e.level, (p) => (openBlock(), createElementBlock("span", { key: p, class: normalizeClass([`${e.prefixCls}-indent-block`, { [`${e.prefixCls}-indent-block-lineless`]: e.lineless[p - 1] }]) }, null, 2))), 128))], 2), createCommentVNode(" switcher "), createBaseVNode("span", { class: normalizeClass([`${e.prefixCls}-switcher`, { [`${e.prefixCls}-switcher-expanded`]: e.expanded }]) }, [createVNode(n, { "prefix-cls": e.prefixCls, loading: e.loading, "show-line": e.showLine, "tree-node-data": e.treeNodeData, icons: { switcherIcon: e.switcherIcon, loadingIcon: e.loadingIcon }, "node-status": e.nodeStatus, onClick: e.onSwitcherClick }, createSlots({ _: 2 }, [e.$slots["switcher-icon"] ? { name: "switcher-icon", fn: withCtx(() => [createCommentVNode(" @slot 定制 switcher 图标，会覆盖 Tree 的配置 "), renderSlot(e.$slots, "switcher-icon")]) } : void 0, e.$slots["loading-icon"] ? { name: "loading-icon", fn: withCtx(() => [createCommentVNode(" @slot 定制 loading 图标，会覆盖 Tree 的配置 "), renderSlot(e.$slots, "loading-icon")]) } : void 0]), 1032, ["prefix-cls", "loading", "show-line", "tree-node-data", "icons", "node-status", "onClick"])], 2), createCommentVNode(" checkbox "), e.checkable ? (openBlock(), createBlock(i, { key: 0, disabled: e.disableCheckbox || e.disabled, "model-value": e.checked, indeterminate: e.indeterminate, "uninject-group-context": "", onChange: e.onCheckboxChange }, null, 8, ["disabled", "model-value", "indeterminate", "onChange"])) : createCommentVNode("v-if", true), createCommentVNode(" 内容 "), createBaseVNode("span", { ref: "refTitle", class: normalizeClass(e.titleClassNames), draggable: e.draggable, onDragstart: t[0] || (t[0] = (...p) => e.onDragStart && e.onDragStart(...p)), onDragend: t[1] || (t[1] = (...p) => e.onDragEnd && e.onDragEnd(...p)), onDragover: t[2] || (t[2] = (...p) => e.onDragOver && e.onDragOver(...p)), onDragleave: t[3] || (t[3] = (...p) => e.onDragLeave && e.onDragLeave(...p)), onDrop: t[4] || (t[4] = (...p) => e.onDrop && e.onDrop(...p)), onClick: t[5] || (t[5] = (...p) => e.onTitleClick && e.onTitleClick(...p)) }, [e.$slots.icon || e.icon || e.treeNodeIcon ? (openBlock(), createElementBlock("span", { key: 0, class: normalizeClass([`${e.prefixCls}-icon`, `${e.prefixCls}-custom-icon`]) }, [createCommentVNode(" 节点图标 "), e.$slots.icon ? renderSlot(e.$slots, "icon", normalizeProps(mergeProps({ key: 0 }, e.nodeStatus))) : e.icon ? (openBlock(), createBlock(o, mergeProps({ key: 1, "render-func": e.icon }, e.nodeStatus), null, 16, ["render-func"])) : e.treeNodeIcon ? (openBlock(), createBlock(o, mergeProps({ key: 2, "render-func": e.treeNodeIcon, node: e.treeNodeData }, e.nodeStatus), null, 16, ["render-func", "node"])) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), createBaseVNode("span", { class: normalizeClass(`${e.prefixCls}-title-text`) }, [e.treeTitle ? (openBlock(), createBlock(o, { key: 0, "render-func": e.treeTitle }, null, 8, ["render-func"])) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [createCommentVNode(" 标题，treeTitle 优先级高于节点的 title "), renderSlot(e.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])], 2112)), e.draggable ? (openBlock(), createElementBlock("span", { key: 2, class: normalizeClass([`${e.prefixCls}-icon`, `${e.prefixCls}-drag-icon`]) }, [createCommentVNode(" 拖拽图标 "), e.$slots["drag-icon"] ? renderSlot(e.$slots, "drag-icon", normalizeProps(mergeProps({ key: 0 }, e.nodeStatus))) : e.dragIcon ? (openBlock(), createBlock(o, mergeProps({ key: 1, "render-func": e.dragIcon }, e.nodeStatus), null, 16, ["render-func"])) : e.treeDragIcon ? (openBlock(), createBlock(o, mergeProps({ key: 2, "render-func": e.treeDragIcon, node: e.treeNodeData }, e.nodeStatus), null, 16, ["render-func", "node"])) : (openBlock(), createBlock(u, { key: 3 }))], 2)) : createCommentVNode("v-if", true)], 2)], 42, Ia), createCommentVNode(" 额外 "), e.extra ? (openBlock(), createBlock(o, { key: 1, "render-func": e.extra }, null, 8, ["render-func"])) : createCommentVNode("v-if", true)], 10, Ba);
}]]);
var Oa = defineComponent({ name: "ExpandTransition", props: { expanded: Boolean }, emits: ["end"], setup: (e, { emit: t }) => ({ onBeforeEnter(a) {
  a.style.height = e.expanded ? "0" : `${a.scrollHeight}px`;
}, onEnter(a) {
  a.style.height = e.expanded ? `${a.scrollHeight}px` : "0";
}, onAfterEnter(a) {
  a.style.height = e.expanded ? "" : "0", t("end");
}, onBeforeLeave(a) {
  a.style.display = "none";
} }) });
var Pa = defineComponent({ name: "TransitionNodeList", components: { ExpandTransition: je(Oa, [["render", function(e, t, a, l, r, c) {
  return openBlock(), createBlock(Transition, { onBeforeEnter: e.onBeforeEnter, onEnter: e.onEnter, onAfterEnter: e.onAfterEnter, onBeforeLeave: e.onBeforeLeave }, { default: withCtx(() => [renderSlot(e.$slots, "default")]), _: 3 }, 8, ["onBeforeEnter", "onEnter", "onAfterEnter", "onBeforeLeave"]);
}]]), BaseTreeNode: Ge }, props: { nodeKey: { type: [String, Number], required: true } }, setup(e) {
  const t = [`${pe("tree")}-node-list`], a = Be(), { nodeKey: l } = toRefs(e), r = computed(() => {
    var i, o;
    return (o = (i = a.expandedKeys) == null ? void 0 : i.includes) == null ? void 0 : o.call(i, l.value);
  }), c = computed(() => {
    var i;
    const o = new Set(a.expandedKeys || []), u = (i = a.flattenTreeData) == null ? void 0 : i.filter((p) => {
      var C, b;
      return !!((C = p.pathParentKeys) != null && C.includes(l.value)) && (!a.filterTreeNode || ((b = a.filterTreeNode) == null ? void 0 : b.call(a, p.treeNodeData)));
    });
    return u == null ? void 0 : u.filter((p) => {
      var C;
      if (r.value)
        return (C = p.pathParentKeys) == null ? void 0 : C.every((S) => o.has(S));
      const b = p.pathParentKeys.indexOf(l.value);
      return p.pathParentKeys.slice(b + 1).every((S) => o.has(S));
    });
  }), n = computed(() => {
    var i, o;
    return ((i = a.currentExpandKeys) == null ? void 0 : i.includes(l.value)) && ((o = c.value) == null ? void 0 : o.length);
  });
  return { classNames: t, visibleNodeList: c, show: n, expanded: r, onTransitionEnd() {
    var i;
    (i = a.onExpandEnd) == null || i.call(a, l.value);
  } };
} });
var za = je(Pa, [["render", function(e, t, a, l, r, c) {
  const n = resolveComponent("BaseTreeNode"), i = resolveComponent("ExpandTransition");
  return openBlock(), createBlock(i, { expanded: e.expanded, onEnd: e.onTransitionEnd }, { default: withCtx(() => [e.show ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(e.classNames) }, [(openBlock(true), createElementBlock(Fragment, null, renderList(e.visibleNodeList, (o) => (openBlock(), createBlock(n, mergeProps({ key: o.key }, o.treeNodeProps), null, 16))), 128))], 2)) : createCommentVNode("v-if", true)]), _: 1 }, 8, ["expanded", "onEnd"]);
}]]);
var ja = Object.defineProperty;
var St = Object.getOwnPropertySymbols;
var Aa = Object.prototype.hasOwnProperty;
var Ha = Object.prototype.propertyIsEnumerable;
var Nt = (e, t, a) => t in e ? ja(e, t, { enumerable: true, configurable: true, writable: true, value: a }) : e[t] = a;
var _a = defineComponent({ name: "TreeNode", inheritAttrs: false, props: ((e, t) => {
  for (var a in t || (t = {}))
    Aa.call(t, a) && Nt(e, a, t[a]);
  if (St)
    for (var a of St(t))
      Ha.call(t, a) && Nt(e, a, t[a]);
  return e;
})({}, Ge.props), setup(e, { slots: t, attrs: a }) {
  const l = It();
  return () => createVNode(Fragment, null, [createVNode(Ge, mergeProps(e, a, { key: l.value }), t), createVNode(za, { key: l.value, nodeKey: l.value }, null)]);
} });
function Fa(e) {
  const { defaultCheckedKeys: t, checkedKeys: a, key2TreeNode: l, checkStrictly: r, halfCheckedKeys: c, onlyCheckLeaf: n } = toRefs(e), i = ref(false), o = ref([]), u = ref([]), p = ref(), C = ref(), b = (k) => function(N2) {
    const { initCheckedKeys: w, key2TreeNode: B, checkStrictly: K, onlyCheckLeaf: A } = N2, j = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set(), U = /* @__PURE__ */ new Set();
    return K ? w.forEach(Ue(j)) : w.forEach((_) => {
      var G;
      const m2 = B.get(_);
      if (!m2 || H.has(_) || A && ((G = m2.children) != null && G.length))
        return;
      const P = tt(m2);
      P.forEach(Ue(H)), P.forEach(Ye(U)), j.add(_), U.delete(_), Lt({ node: m2, checkedKeySet: j, indeterminateKeySet: U });
    }), [[...j, ...H], [...U]];
  }({ initCheckedKeys: k, key2TreeNode: l.value, checkStrictly: r.value, onlyCheckLeaf: n.value }), S = (k) => {
    const N2 = b(k);
    [o.value, u.value] = N2;
  };
  return S(a.value || (t == null ? void 0 : t.value) || []), watchEffect(() => {
    a.value ? [p.value, C.value] = b(a.value) : i.value && (p.value = void 0, C.value = void 0, o.value = [], u.value = []), i.value || (i.value = true);
  }), { checkedKeys: computed(() => p.value || o.value), indeterminateKeys: computed(() => r.value && c.value ? c.value : C.value || u.value), setCheckedState: (k, N2, w = false) => (w ? S(k) : (o.value = k, u.value = N2), [o.value, u.value]) };
}
function Ra(e) {
  const { treeData: t, fieldNames: a, selectable: l, showLine: r, blockNode: c, checkable: n, loadMore: i, draggable: o } = toRefs(e), u = ref([]);
  watchEffect(() => {
    var b, S;
    u.value = function(k, N2) {
      return function w(B, K) {
        if (!B)
          return;
        const { fieldNames: A } = N2, j = [];
        return B.forEach((H, U) => {
          const _ = Ta({ treeNodeData: H, treeProps: N2, parentNode: K, isTail: U === B.length - 1 });
          _.children = w(H[(A == null ? void 0 : A.children) || "children"], _), j.push(_);
        }), j;
      }(k);
    }(t.value || [], { selectable: (b = l == null ? void 0 : l.value) != null && b, showLine: !!(r != null && r.value), blockNode: !!(c != null && c.value), checkable: (S = n == null ? void 0 : n.value) != null && S, fieldNames: a == null ? void 0 : a.value, loadMore: !!(i != null && i.value), draggable: !!(o != null && o.value) });
  });
  const p = computed(() => function(b) {
    const S = [];
    return function k(N2) {
      N2 && N2.forEach((w) => {
        S.push(w), k(w.children);
      });
    }(b), S;
  }(u.value)), C = computed(() => function(b) {
    const S = /* @__PURE__ */ new Map();
    return b.forEach((k) => {
      S.set(k.key, k);
    }), S;
  }(p.value));
  return { treeData: u, flattenTreeData: p, key2TreeNode: C };
}
var Va = defineComponent({ name: "Tree", components: { VirtualList: _s, TreeNode: _a }, props: { size: { type: String, default: "medium" }, blockNode: { type: Boolean }, defaultExpandAll: { type: Boolean, default: true }, multiple: { type: Boolean }, checkable: { type: [Boolean, String, Function], default: false }, selectable: { type: [Boolean, Function], default: true }, checkStrictly: { type: Boolean }, checkedStrategy: { type: String, default: "all" }, defaultSelectedKeys: { type: Array }, selectedKeys: { type: Array }, defaultCheckedKeys: { type: Array }, checkedKeys: { type: Array }, defaultExpandedKeys: { type: Array }, expandedKeys: { type: Array }, data: { type: Array, default: () => [] }, fieldNames: { type: Object }, showLine: { type: Boolean }, loadMore: { type: Function }, draggable: { type: Boolean }, allowDrop: { type: Function }, filterTreeNode: { type: Function }, searchValue: { type: String, default: "" }, virtualListProps: { type: Object }, defaultExpandSelected: { type: Boolean }, defaultExpandChecked: { type: Boolean }, autoExpandParent: { type: Boolean, default: true }, halfCheckedKeys: { type: Array }, onlyCheckLeaf: { type: Boolean, default: false }, animation: { type: Boolean, default: true }, actionOnNodeClick: { type: String }, disableSelectActionOnly: { type: Boolean, default: false } }, emits: { select: (e, t) => true, "update:selectedKeys": (e) => true, check: (e, t) => true, "update:checkedKeys": (e) => true, "update:halfCheckedKeys": (e) => true, expand: (e, t) => true, "update:expandedKeys": (e) => true, dragStart: (e, t) => true, dragEnd: (e, t) => true, dragOver: (e, t) => true, dragLeave: (e, t) => true, drop: (e) => true }, setup(e, { emit: t, slots: a }) {
  const { data: l, showLine: r, multiple: c, loadMore: n, checkStrictly: i, checkedKeys: o, defaultCheckedKeys: u, selectedKeys: p, defaultSelectedKeys: C, expandedKeys: b, defaultExpandedKeys: S, checkedStrategy: k, selectable: N2, checkable: w, blockNode: B, fieldNames: K, size: A, defaultExpandAll: j, filterTreeNode: H, draggable: U, allowDrop: _, defaultExpandSelected: G, defaultExpandChecked: m2, autoExpandParent: P, halfCheckedKeys: de, onlyCheckLeaf: Se2, animation: ke } = toRefs(e), ae = pe("tree"), E = computed(() => [`${ae}`, { [`${ae}-checkable`]: w.value, [`${ae}-show-line`]: r.value }, `${ae}-size-${A.value}`]), I = Cp(a, "switcher-icon"), s = Cp(a, "loading-icon"), h2 = Cp(a, "drag-icon"), z = Cp(a, "icon"), M = Cp(a, "title"), ye = Cp(a, "extra"), { treeData: Ne, flattenTreeData: be, key2TreeNode: T } = Ra(reactive({ treeData: l, selectable: N2, showLine: r, blockNode: B, checkable: w, fieldNames: K, loadMore: n, draggable: U })), { checkedKeys: Z, indeterminateKeys: se, setCheckedState: J } = Fa(reactive({ defaultCheckedKeys: u, checkedKeys: o, checkStrictly: i, key2TreeNode: T, halfCheckedKeys: de, onlyCheckLeaf: Se2 })), [fe, Ce] = F((C == null ? void 0 : C.value) || [], reactive({ value: p })), le = ref([]), ie = ref(), [Ke, Pe] = F(function() {
    if (S != null && S.value) {
      const d = /* @__PURE__ */ new Set([]);
      return S.value.forEach((v) => {
        if (d.has(v))
          return;
        const y = T.value.get(v);
        y && [...P.value ? y.pathParentKeys : [], v].forEach((f) => d.add(f));
      }), [...d];
    }
    if (j.value)
      return be.value.filter((d) => d.children && d.children.length).map((d) => d.key);
    if (G.value || m2.value) {
      const d = /* @__PURE__ */ new Set([]), v = (y) => {
        y.forEach((f) => {
          const x = T.value.get(f);
          x && (x.pathParentKeys || []).forEach((O) => d.add(O));
        });
      };
      return G.value && v(fe.value), m2.value && v(Z.value), [...d];
    }
    return [];
  }(), reactive({ value: b })), he2 = ref([]), Ot = computed(() => {
    const d = new Set(Ke.value), v = new Set(he2.value);
    return be.value.filter((y) => {
      var f;
      if (!(!H || !H.value || H != null && H.value(y.treeNodeData)))
        return false;
      const x = wl(y.parentKey), O = (f = y.pathParentKeys) == null ? void 0 : f.every((ce) => d.has(ce) && !v.has(ce));
      return x || O;
    });
  });
  function lt(d, v = k.value) {
    let y = [...d];
    return v === "parent" ? y = d.filter((f) => {
      const x = T.value.get(f);
      return x && !(!wl(x.parentKey) && d.includes(x.parentKey));
    }) : v === "child" && (y = d.filter((f) => {
      var x, O;
      return !((O = (x = T.value.get(f)) == null ? void 0 : x.children) != null && O.length);
    })), y;
  }
  function we(d) {
    return d.map((v) => {
      var y;
      return ((y = T.value.get(v)) == null ? void 0 : y.treeNodeData) || void 0;
    }).filter(Boolean);
  }
  function ze(d) {
    const { targetKey: v, targetChecked: y, newCheckedKeys: f, newIndeterminateKeys: x, event: O } = d, ce = v ? T.value.get(v) : void 0, He = lt(f);
    t("update:checkedKeys", He), t("update:halfCheckedKeys", x), t("check", He, { checked: y, node: ce == null ? void 0 : ce.treeNodeData, checkedNodes: we(He), halfCheckedKeys: x, halfCheckedNodes: we(x), e: O });
  }
  function je2(d) {
    const { targetKey: v, targetSelected: y, newSelectedKeys: f, event: x } = d, O = v ? T.value.get(v) : void 0;
    t("update:selectedKeys", f), t("select", f, { selected: y, node: O == null ? void 0 : O.treeNodeData, selectedNodes: we(f), e: x });
  }
  function Ae(d) {
    const { targetKey: v, targetExpanded: y, newExpandedKeys: f, event: x } = d, O = v ? T.value.get(v) : void 0;
    t("expand", f, { expanded: y, node: O == null ? void 0 : O.treeNodeData, expandedNodes: we(f), e: x }), t("update:expandedKeys", f);
  }
  function nt(d, v, y) {
    const f = T.value.get(v);
    if (!f)
      return;
    const [x, O] = gt({ node: f, checked: d, checkedKeys: Z.value, indeterminateKeys: se.value, checkStrictly: i.value });
    J(x, O), ze({ targetKey: v, targetChecked: d, newCheckedKeys: x, newIndeterminateKeys: O, event: y });
  }
  function ot(d, v, y) {
    if (he2.value.includes(v) || !T.value.get(v))
      return;
    const f = new Set(Ke.value);
    d ? f.add(v) : f.delete(v);
    const x = [...f];
    Pe(x), ke.value && he2.value.push(v), Ae({ targetKey: v, targetExpanded: d, newExpandedKeys: x, event: y });
  }
  function rt(d) {
    const v = he2.value.indexOf(d);
    he2.value.splice(v, 1);
  }
  const Pt = computed(() => n != null && n.value ? async (d) => {
    if (!Ze(n.value))
      return;
    const v = T.value.get(d);
    if (!v)
      return;
    const { treeNodeData: y } = v;
    le.value = [.../* @__PURE__ */ new Set([...le.value, d])];
    try {
      await n.value(y), le.value = le.value.filter((f) => f !== d), ot(true, d), Z.value.includes(d) && nt(true, d);
    } catch (f) {
      le.value = le.value.filter((x) => x !== d), console.error("[tree]load data error: ", f);
    }
  } : void 0), it = reactive({ treeProps: e, switcherIcon: I, loadingIcon: s, dragIcon: h2, nodeIcon: z, nodeTitle: M, nodeExtra: ye, treeData: Ne, flattenTreeData: be, key2TreeNode: T, checkedKeys: Z, indeterminateKeys: se, selectedKeys: fe, expandedKeys: Ke, loadingKeys: le, currentExpandKeys: he2, onLoadMore: Pt, filterTreeNode: H, onCheck: nt, onSelect: function(d, v) {
    if (!T.value.get(d))
      return;
    let y, f;
    if (c.value) {
      const x = new Set(fe.value);
      f = !x.has(d), f ? x.add(d) : x.delete(d), y = [...x];
    } else
      f = true, y = [d];
    Ce(y), je2({ targetKey: d, targetSelected: f, newSelectedKeys: y, event: v });
  }, onExpand: ot, onExpandEnd: rt, allowDrop(d, v) {
    const y = T.value.get(d);
    return !y || !Ze(_.value) || !!_.value({ dropNode: y.treeNodeData, dropPosition: v });
  }, onDragStart(d, v) {
    const y = T.value.get(d);
    ie.value = y, y && t("dragStart", v, y.treeNodeData);
  }, onDragEnd(d, v) {
    const y = T.value.get(d);
    ie.value = void 0, y && t("dragEnd", v, y.treeNodeData);
  }, onDragOver(d, v) {
    const y = T.value.get(d);
    y && t("dragOver", v, y.treeNodeData);
  }, onDragLeave(d, v) {
    const y = T.value.get(d);
    y && t("dragLeave", v, y.treeNodeData);
  }, onDrop(d, v, y) {
    const f = T.value.get(d);
    ie.value && f && f.key !== ie.value.key && !f.pathParentKeys.includes(ie.value.key || "") && t("drop", { e: y, dragNode: ie.value.treeNodeData, dropNode: f.treeNodeData, dropPosition: v });
  } });
  return provide(Tt, it), { classNames: E, visibleTreeNodeList: Ot, treeContext: it, virtualListRef: ref(), computedSelectedKeys: fe, computedExpandedKeys: Ke, computedCheckedKeys: Z, computedIndeterminateKeys: se, getPublicCheckedKeys: lt, getNodes: we, internalCheckNodes: function(d, v, y) {
    if (!d.length)
      return;
    let f = [...Z.value], x = [...se.value];
    d.forEach((O) => {
      const ce = T.value.get(O);
      ce && ([f, x] = gt({ node: ce, checked: v, checkedKeys: [...f], indeterminateKeys: [...x], checkStrictly: i.value }));
    }), J(f, x), ze({ targetKey: y, targetChecked: wl(y) ? void 0 : v, newCheckedKeys: f, newIndeterminateKeys: x });
  }, internalSetCheckedKeys: function(d) {
    const [v, y] = J(d, [], true);
    ze({ newCheckedKeys: v, newIndeterminateKeys: y });
  }, internalSelectNodes: function(d, v, y) {
    if (!d.length)
      return;
    let f;
    if (c.value) {
      const x = new Set(fe.value);
      d.forEach((O) => {
        v ? x.add(O) : x.delete(O);
      }), f = [...x];
    } else
      f = v ? [d[0]] : [];
    Ce(f), je2({ targetKey: y, targetSelected: wl(y) ? void 0 : v, newSelectedKeys: f });
  }, internalSetSelectedKeys: function(d) {
    let v = d;
    !c.value && d.length > 1 && (v = [d[0]]), Ce(v), je2({ newSelectedKeys: v });
  }, internalExpandNodes: function(d, v, y) {
    const f = new Set(Ke.value);
    d.forEach((O) => {
      v ? f.add(O) : f.delete(O), rt(O);
    });
    const x = [...f];
    Pe(x), Ae({ targetKey: y, targetExpanded: wl(y) ? void 0 : v, newExpandedKeys: x });
  }, internalSetExpandedKeys: function(d) {
    he2.value = [], Pe(d), Ae({ newExpandedKeys: d });
  } };
}, methods: { toggleCheck(e, t) {
  const { key2TreeNode: a, onCheck: l, checkedKeys: r } = this.treeContext, c = !r.includes(e), n = a.get(e);
  n && xe(n) && l(c, e, t);
}, scrollIntoView(e) {
  this.virtualListRef && this.virtualListRef.scrollTo(e);
}, getSelectedNodes() {
  return this.getNodes(this.computedSelectedKeys);
}, getCheckedNodes(e = {}) {
  const { checkedStrategy: t, includeHalfChecked: a } = e, l = this.getPublicCheckedKeys(this.computedCheckedKeys, t);
  return [...this.getNodes(l), ...a ? this.getHalfCheckedNodes() : []];
}, getHalfCheckedNodes() {
  return this.getNodes(this.computedIndeterminateKeys);
}, getExpandedNodes() {
  return this.getNodes(this.computedExpandedKeys);
}, checkAll(e = true) {
  const { key2TreeNode: t } = this.treeContext, a = e ? [...t.keys()].filter((l) => {
    const r = t.get(l);
    return r && xe(r);
  }) : [];
  this.internalSetCheckedKeys(a);
}, checkNode(e, t = true, a = false) {
  const { checkStrictly: l, treeContext: r } = this, { key2TreeNode: c } = r, n = ul(e), i = (n ? e : [e]).filter((o) => {
    const u = c.get(o);
    return u && xe(u) && (l || !a || function(p) {
      return Ln(p.isLeaf) ? p.isLeaf : !p.children;
    }(u));
  });
  this.internalCheckNodes(i, t, n ? void 0 : e);
}, selectAll(e = true) {
  const { key2TreeNode: t } = this.treeContext, a = e ? [...t.keys()].filter((l) => {
    const r = t.get(l);
    return r && ft(r);
  }) : [];
  this.internalSetSelectedKeys(a);
}, selectNode(e, t = true) {
  const { key2TreeNode: a } = this.treeContext, l = ul(e), r = (l ? e : [e]).filter((c) => {
    const n = a.get(c);
    return n && ft(n);
  });
  this.internalSelectNodes(r, t, l ? void 0 : e);
}, expandAll(e = true) {
  const { key2TreeNode: t } = this.treeContext, a = e ? [...t.keys()].filter((l) => {
    const r = t.get(l);
    return r && ht(r);
  }) : [];
  this.internalSetExpandedKeys(a);
}, expandNode(e, t = true) {
  const { key2TreeNode: a } = this.treeContext, l = ul(e), r = (l ? e : [e]).filter((c) => {
    const n = a.get(c);
    return n && ht(n);
  });
  this.internalExpandNodes(r, t, l ? void 0 : e);
} } });
var Me = je(Va, [["render", function(e, t, a, l, r, c) {
  const n = resolveComponent("TreeNode"), i = resolveComponent("VirtualList");
  return openBlock(), createElementBlock("div", { class: normalizeClass(e.classNames) }, [e.virtualListProps ? (openBlock(), createBlock(i, mergeProps({ key: 0, ref: "virtualListRef" }, e.virtualListProps, { data: e.visibleTreeNodeList }), { item: withCtx(({ item: o }) => [createVNode(n, mergeProps({ key: `${e.searchValue}-${o.key}` }, o.treeNodeProps), null, 16)]), _: 1 }, 16, ["data"])) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(e.visibleTreeNodeList, (o) => (openBlock(), createBlock(n, mergeProps({ key: o.key }, o.treeNodeProps), null, 16))), 128))], 2);
}]]);
var Ma = Object.assign(Me, { install: (e, t) => {
  Cl(e, t);
  const a = xl(t);
  e.component(a + Me.name, Me);
} });
var at = (e) => (pushScopeId("data-v-6060aa38"), e = e(), popScopeId(), e);
var qa = at(() => createBaseVNode("i", { class: "rtdp sousuo" }, null, -1));
var Wa = { class: "arco-compontent-page-tab-search-box d-flex flex-column" };
var Ua = { class: "arco-compontent-page-tab-search-form" };
var Ya = { class: "arco-compontent-page-tab-search-btns" };
var Ga = at(() => createBaseVNode("i", { class: "rtdp sousuo" }, null, -1));
var Ja = at(() => createBaseVNode("i", { class: "rtdp refresh" }, null, -1));
var Qa = defineComponent({ __name: "index", props: { data: { default: () => [] }, disabled: { type: Boolean, default: false }, loading: { type: Boolean, default: false }, searchForm: { default: () => ({}) }, size: { default: "small" }, tip: { default: "加载中..." }, searchTabs: { type: Boolean, default: false }, options: { default: () => ({ index: false }) } }, emits: ["update:searchForm"], setup(e, { emit: t }) {
  const a = e, l = computed({ get: () => a.searchForm, set(n) {
    t("update:searchForm", n);
  } }), r = () => {
  }, c = () => {
  };
  return (n, i) => {
    const o = mp, u = qe, p = Sr, C = va, b = Zt, S = N, k = Ee, N2 = Ma, w = xs, B = ba;
    return openBlock(), createBlock(B, { position: "left", size: n.size, style: { height: "100%" } }, { default: withCtx(() => [createVNode(k, { key: "1" }, { title: withCtx(() => [qa, createTextVNode(" 查询 ")]), default: withCtx(() => [createBaseVNode("div", Wa, [createBaseVNode("div", Ua, [createVNode(p, { model: l.value, size: n.size, layout: "vertical", disabled: n.disabled }, { default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(n.options.columns, (K, A) => (openBlock(), createElementBlock(Fragment, { key: A }, [K.search ? (openBlock(), createBlock(u, { key: 0, field: K.title, label: K.title }, { default: withCtx(() => [createVNode(o, { modelValue: l.value[K.dataIndex], "onUpdate:modelValue": (j) => l.value[K.dataIndex] = j, placeholder: `请输入 ${K.title}`, "allow-clear": "" }, null, 8, ["modelValue", "onUpdate:modelValue", "placeholder"])]), _: 2 }, 1032, ["field", "label"])) : createCommentVNode("", true)], 64))), 128))]), _: 1 }, 8, ["model", "size", "disabled"])]), createVNode(C, { margin: 10 }), createBaseVNode("div", Ya, [createVNode(S, null, { default: withCtx(() => [createVNode(b, { type: "primary", size: n.size, onClick: r }, { icon: withCtx(() => [Ga]), default: withCtx(() => [createTextVNode(" 查询 ")]), _: 1 }, 8, ["size"]), createVNode(b, { size: n.size, onClick: c }, { icon: withCtx(() => [Ja]), default: withCtx(() => [createTextVNode(" 重置 ")]), _: 1 }, 8, ["size"])]), _: 1 })])])]), _: 1 }), createVNode(k, { key: "2", title: "分类" }, { default: withCtx(() => {
      var K;
      return [n.options.columns && ((K = n.options.columns) == null ? void 0 : K.length) > 0 ? (openBlock(), createBlock(N2, { key: 0, data: n.options.columns }, null, 8, ["data"])) : (openBlock(), createBlock(w, { key: 1 }))];
    }), _: 1 }), createVNode(k, { key: "3", title: "其他" }, { default: withCtx(() => [createTextVNode(" Content of Tab Panel 3")]), _: 1 })]), _: 1 }, 8, ["size"]);
  };
} });
var dl = Se(Qa, [["__scopeId", "data-v-6060aa38"]]);
export {
  dl as default
};
//# sourceMappingURL=index-917a1812-NGXATNJ4.js.map
