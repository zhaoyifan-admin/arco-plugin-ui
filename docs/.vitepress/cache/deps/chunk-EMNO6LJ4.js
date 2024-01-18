import {
  Ca,
  Ce,
  Co,
  De,
  Eu,
  Ge,
  Go,
  It,
  Kl,
  Mu,
  N2,
  Pt,
  _e,
  c4,
  da,
  i3,
  lt,
  on,
  qi,
  wt
} from "./chunk-FOSXQ56G.js";
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
  inject,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  reactive,
  ref,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  toRef,
  toRefs,
  withCtx,
  withModifiers
} from "./chunk-67UUJLDS.js";

// node_modules/.pnpm/vue-arco-ui@0.2.25_@arco-design+web-vue@2.53.3_typescript@5.2.2/node_modules/vue-arco-ui/dist/index-4-HVnyZT.js
var jt = defineComponent({ name: "IconQuestionCircle", props: { size: { type: [Number, String] }, strokeWidth: { type: Number, default: 4 }, strokeLinecap: { type: String, default: "butt", validator: (e) => ["butt", "round", "square"].includes(e) }, strokeLinejoin: { type: String, default: "miter", validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e) }, rotate: Number, spin: Boolean }, emits: { click: (e) => true }, setup(e, { emit: t }) {
  const l = _e("icon");
  return { cls: computed(() => [l, `${l}-question-circle`, { [`${l}-spin`]: e.spin }]), innerStyle: computed(() => {
    const r = {};
    return e.size && (r.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
  }), onClick: (r) => {
    t("click", r);
  } };
} });
var Lt = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
var Et = [createBaseVNode("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z" }, null, -1), createBaseVNode("path", { d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465" }, null, -1)];
var xe = De(jt, [["render", function(e, t, l, r, u, n) {
  return openBlock(), createElementBlock("svg", { viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", class: normalizeClass(e.cls), style: normalizeStyle(e.innerStyle), "stroke-width": e.strokeWidth, "stroke-linecap": e.strokeLinecap, "stroke-linejoin": e.strokeLinejoin, onClick: t[0] || (t[0] = (...i) => e.onClick && e.onClick(...i)) }, Et, 14, Lt);
}]]);
var Pt2 = Object.assign(xe, { install: (e, t) => {
  var l;
  const r = (l = t == null ? void 0 : t.iconPrefix) != null ? l : "";
  e.component(r + xe.name, xe);
} });
function Ve(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function He(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function Ce2(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var l = getComputedStyle(e, null);
    return He(l.overflowY, t) || He(l.overflowX, t) || function(r) {
      var u = function(n) {
        if (!n.ownerDocument || !n.ownerDocument.defaultView)
          return null;
        try {
          return n.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(r);
      return !!u && (u.clientHeight < r.scrollHeight || u.clientWidth < r.scrollWidth);
    }(e);
  }
  return false;
}
function ue(e, t, l, r, u, n, i, p) {
  return n < e && i > t || n > e && i < t ? 0 : n <= e && p <= l || i >= t && p >= l ? n - e - r : i > t && p < l || n < e && p > l ? i - t + u : 0;
}
var _e2 = function(e, t) {
  var l = window, r = t.scrollMode, u = t.block, n = t.inline, i = t.boundary, p = t.skipOverflowHiddenElements, f = typeof i == "function" ? i : function(it) {
    return it !== i;
  };
  if (!Ve(e))
    throw new TypeError("Invalid target");
  for (var z, W, b = document.scrollingElement || document.documentElement, B = [], h = e; Ve(h) && f(h); ) {
    if ((h = (W = (z = h).parentElement) == null ? z.getRootNode().host || null : W) === b) {
      B.push(h);
      break;
    }
    h != null && h === document.body && Ce2(h) && !Ce2(document.documentElement) || h != null && Ce2(h, p) && B.push(h);
  }
  for (var w = l.visualViewport ? l.visualViewport.width : innerWidth, $ = l.visualViewport ? l.visualViewport.height : innerHeight, k = window.scrollX || pageXOffset, S = window.scrollY || pageYOffset, L = e.getBoundingClientRect(), E = L.height, j = L.width, O = L.top, F = L.right, a = L.bottom, s = L.left, v = u === "start" || u === "nearest" ? O : u === "end" ? a : O + E / 2, c = n === "center" ? s + j / 2 : n === "end" ? F : s, x = [], C = 0; C < B.length; C++) {
    var g = B[C], V = g.getBoundingClientRect(), oe = V.height, ae = V.width, se = V.top, o = V.right, m = V.bottom, y = V.left;
    if (r === "if-needed" && O >= 0 && s >= 0 && a <= $ && F <= w && O >= se && a <= m && s >= y && F <= o)
      return x;
    var R = getComputedStyle(g), G = parseInt(R.borderLeftWidth, 10), H = parseInt(R.borderTopWidth, 10), P = parseInt(R.borderRightWidth, 10), A = parseInt(R.borderBottomWidth, 10), M = 0, T = 0, N = "offsetWidth" in g ? g.offsetWidth - g.clientWidth - G - P : 0, ie = "offsetHeight" in g ? g.offsetHeight - g.clientHeight - H - A : 0, Be = "offsetWidth" in g ? g.offsetWidth === 0 ? 0 : ae / g.offsetWidth : 0, Fe = "offsetHeight" in g ? g.offsetHeight === 0 ? 0 : oe / g.offsetHeight : 0;
    if (b === g)
      M = u === "start" ? v : u === "end" ? v - $ : u === "nearest" ? ue(S, S + $, $, H, A, S + v, S + v + E, E) : v - $ / 2, T = n === "start" ? c : n === "center" ? c - w / 2 : n === "end" ? c - w : ue(k, k + w, w, G, P, k + c, k + c + j, j), M = Math.max(0, M + S), T = Math.max(0, T + k);
    else {
      M = u === "start" ? v - se - H : u === "end" ? v - m + A + ie : u === "nearest" ? ue(se, m, oe, H, A + ie, v, v + E, E) : v - (se + oe / 2) + ie / 2, T = n === "start" ? c - y - G : n === "center" ? c - (y + ae / 2) + N / 2 : n === "end" ? c - o + P + N : ue(y, o, ae, G, P + N, c, c + j, j);
      var Re = g.scrollLeft, qe = g.scrollTop;
      v += qe - (M = Math.max(0, Math.min(qe + M / Fe, g.scrollHeight - oe / Fe + ie))), c += Re - (T = Math.max(0, Math.min(Re + T / Be, g.scrollWidth - ae / Be + N)));
    }
    x.push({ el: g, top: M, left: T });
  }
  return x;
};
var Wt = Object.defineProperty;
var Bt = Object.defineProperties;
var Ft = Object.getOwnPropertyDescriptors;
var De2 = Object.getOwnPropertySymbols;
var Rt = Object.prototype.hasOwnProperty;
var qt = Object.prototype.propertyIsEnumerable;
var Xe = (e, t, l) => t in e ? Wt(e, t, { enumerable: true, configurable: true, writable: true, value: l }) : e[t] = l;
var be = ["xxl", "xl", "lg", "md", "sm", "xs"];
var de = { xs: "(max-width: 575px)", sm: "(min-width: 576px)", md: "(min-width: 768px)", lg: "(min-width: 992px)", xl: "(min-width: 1200px)", xxl: "(min-width: 1600px)" };
var K = [];
var zt = -1;
var ce = {};
var Ye = { matchHandlers: {}, dispatch: (e, t) => (ce = e, !(K.length < 1) && (K.forEach((l) => {
  l.func(ce, t);
}), true)), subscribe(e) {
  K.length === 0 && this.register();
  const t = (++zt).toString();
  return K.push({ token: t, func: e }), e(ce, null), t;
}, unsubscribe(e) {
  K = K.filter((t) => t.token !== e), K.length === 0 && this.unregister();
}, unregister() {
  Object.keys(de).forEach((e) => {
    const t = de[e];
    if (!t)
      return;
    const l = this.matchHandlers[t];
    l && l.mql && l.listener && (l.mql.removeEventListener ? l.mql.removeEventListener("change", l.listener) : l.mql.removeListener(l.listener));
  });
}, register() {
  Object.keys(de).forEach((e) => {
    const t = de[e];
    if (!t)
      return;
    const l = ({ matches: u }) => {
      var n;
      this.dispatch((n = ((i, p) => {
        for (var f in p || (p = {}))
          Rt.call(p, f) && Xe(i, f, p[f]);
        if (De2)
          for (var f of De2(p))
            qt.call(p, f) && Xe(i, f, p[f]);
        return i;
      })({}, ce), Bt(n, Ft({ [e]: u }))), e);
    }, r = window.matchMedia(t);
    r.addEventListener ? r.addEventListener("change", l) : r.addListener(l), this.matchHandlers[t] = { mql: r, listener: l }, l(r);
  });
} };
function Ge2(e) {
  return Ge(e);
}
function je(e, t, l = false) {
  const r = ref({ xs: true, sm: true, md: true, lg: true, xl: true, xxl: true }), u = computed(() => {
    let i = t;
    if (Ge2(e.value))
      for (let p = 0; p < be.length; p++) {
        const f = be[p];
        if ((r.value[f] || f === "xs" && l) && e.value[f] !== void 0) {
          i = e.value[f];
          break;
        }
      }
    else
      i = e.value;
    return i;
  });
  let n = "";
  return onMounted(() => {
    n = Ye.subscribe((i) => {
      Ge2(e.value) && (r.value = i);
    });
  }), onUnmounted(() => {
    n && Ye.unsubscribe(n);
  }), u;
}
function Qe(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function At(e, t) {
  var l = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (Qe(t) && typeof t.behavior == "function")
    return t.behavior(l ? _e2(e, t) : []);
  if (l) {
    var r = function(u) {
      return u === false ? { block: "end", inline: "nearest" } : Qe(u) ? u : { block: "start", inline: "nearest" };
    }(t);
    return function(u, n) {
      n === void 0 && (n = "auto");
      var i = "scrollBehavior" in document.body.style;
      u.forEach(function(p) {
        var f = p.el, z = p.top, W = p.left;
        f.scroll && i ? f.scroll({ top: z, left: W, behavior: n }) : (f.scrollTop = z, f.scrollLeft = W);
      });
    }(_e2(e, r), r.behavior);
  }
}
var Ue = ["success", "warning", "error", "validating"];
var ot = (e, t) => {
  const l = t.replace(/[[.]/g, "_").replace(/\]/g, "");
  return e ? `${e}-${l}` : `${l}`;
};
var Nt = Object.defineProperty;
var Ke = Object.getOwnPropertySymbols;
var Mt = Object.prototype.hasOwnProperty;
var Tt = Object.prototype.propertyIsEnumerable;
var Ze = (e, t, l) => t in e ? Nt(e, t, { enumerable: true, configurable: true, writable: true, value: l }) : e[t] = l;
var It2 = defineComponent({ name: "Form", props: { model: { type: Object, required: true }, layout: { type: String, default: "horizontal" }, size: { type: String }, labelColProps: { type: Object, default: () => ({ span: 5, offset: 0 }) }, wrapperColProps: { type: Object, default: () => ({ span: 19, offset: 0 }) }, labelColStyle: Object, wrapperColStyle: Object, labelAlign: { type: String, default: "right" }, disabled: { type: Boolean, default: void 0 }, rules: { type: Object }, autoLabelWidth: { type: Boolean, default: false }, id: { type: String }, scrollToFirstError: { type: Boolean, default: false } }, emits: { submit: (e, t) => true, submitSuccess: (e, t) => true, submitFailed: (e, t) => true }, setup(e, { emit: t }) {
  const l = _e("form"), r = ref(), { id: u, model: n, layout: i, disabled: p, labelAlign: f, labelColProps: z, wrapperColProps: W, labelColStyle: b, wrapperColStyle: B, size: h, rules: w } = toRefs(e), { mergedSize: $ } = Ca(h), k = computed(() => e.layout === "horizontal" && e.autoLabelWidth), S = [], L = reactive({}), E = computed(() => Math.max(...Object.values(L))), j = (a, s) => {
    const v = (r.value || document.body).querySelector(`#${ot(e.id, a)}`);
    v && At(v, ((c, x) => {
      for (var C in x || (x = {}))
        Mt.call(x, C) && Ze(c, C, x[C]);
      if (Ke)
        for (var C of Ke(x))
          Tt.call(x, C) && Ze(c, C, x[C]);
      return c;
    })({ behavior: "smooth", block: "nearest", scrollMode: "if-needed" }, s));
  }, O = (a) => {
    const s = Go(e.scrollToFirstError) ? void 0 : e.scrollToFirstError;
    j(a, s);
  }, F = (a, s) => {
    const v = [];
    for (const c of S)
      (wt(a) && a.includes(c.field) || a === c.field) && v.push(c.validate());
    return Promise.all(v).then((c) => {
      const x = {};
      let C = false;
      return c.forEach((g) => {
        g && (C = true, x[g.field] = g);
      }), C && e.scrollToFirstError && O(Object.keys(x)[0]), lt(s) && s(C ? x : void 0), C ? x : void 0;
    });
  };
  return provide(i3, reactive({ id: u, layout: i, disabled: p, labelAlign: f, labelColProps: z, wrapperColProps: W, labelColStyle: b, wrapperColStyle: B, model: n, size: $, rules: w, fields: S, touchedFields: [], addField: (a) => {
    a && a.field && S.push(a);
  }, removeField: (a) => {
    a && a.field && S.splice(S.indexOf(a), 1);
  }, validateField: F, setLabelWidth: (a, s) => {
    s && L[s] !== a && (L[s] = a);
  }, removeLabelWidth: (a) => {
    a && delete L[a];
  }, maxLabelWidth: E, autoLabelWidth: k })), { cls: computed(() => [l, `${l}-layout-${e.layout}`, `${l}-size-${$.value}`, { [`${l}-auto-label-width`]: e.autoLabelWidth }]), formRef: r, handleSubmit: (a) => {
    const s = [];
    S.forEach((v) => {
      s.push(v.validate());
    }), Promise.all(s).then((v) => {
      const c = {};
      let x = false;
      v.forEach((C) => {
        C && (x = true, c[C.field] = C);
      }), x ? (e.scrollToFirstError && O(Object.keys(c)[0]), t("submitFailed", { values: n.value, errors: c }, a)) : t("submitSuccess", n.value, a), t("submit", { values: n.value, errors: x ? c : void 0 }, a);
    });
  }, innerValidate: (a) => {
    const s = [];
    return S.forEach((v) => {
      s.push(v.validate());
    }), Promise.all(s).then((v) => {
      const c = {};
      let x = false;
      return v.forEach((C) => {
        C && (x = true, c[C.field] = C);
      }), x && e.scrollToFirstError && O(Object.keys(c)[0]), lt(a) && a(x ? c : void 0), x ? c : void 0;
    });
  }, innerValidateField: F, innerResetFields: (a) => {
    const s = a ? [].concat(a) : [];
    S.forEach((v) => {
      (s.length === 0 || s.includes(v.field)) && v.resetField();
    });
  }, innerClearValidate: (a) => {
    const s = a ? [].concat(a) : [];
    S.forEach((v) => {
      (s.length === 0 || s.includes(v.field)) && v.clearValidate();
    });
  }, innerSetFields: (a) => {
    S.forEach((s) => {
      a[s.field] && s.setField(a[s.field]);
    });
  }, innerScrollToField: j };
}, methods: { validate(e) {
  return this.innerValidate(e);
}, validateField(e, t) {
  return this.innerValidateField(e, t);
}, resetFields(e) {
  return this.innerResetFields(e);
}, clearValidate(e) {
  return this.innerClearValidate(e);
}, setFields(e) {
  return this.innerSetFields(e);
}, scrollToField(e) {
  return this.innerScrollToField(e);
} } });
var we = De(It2, [["render", function(e, t, l, r, u, n) {
  return openBlock(), createElementBlock("form", { ref: "formRef", class: normalizeClass(e.cls), onSubmit: t[0] || (t[0] = withModifiers((...i) => e.handleSubmit && e.handleSubmit(...i), ["prevent"])) }, [renderSlot(e.$slots, "default")], 34);
}]]);
var at = Symbol("RowContextInjectionKey");
var tl = Symbol("GridContextInjectionKey");
var ll = Symbol("GridDataCollectorInjectionKey");
var Vt = De(defineComponent({ name: "Row", props: { gutter: { type: [Number, Object, Array], default: 0 }, justify: { type: String, default: "start" }, align: { type: String, default: "start" }, div: { type: Boolean }, wrap: { type: Boolean, default: true } }, setup(e) {
  const { gutter: t, align: l, justify: r, div: u, wrap: n } = toRefs(e), i = _e("row"), p = computed(() => ({ [`${i}`]: !u.value, [`${i}-nowrap`]: !n.value, [`${i}-align-${l.value}`]: l.value, [`${i}-justify-${r.value}`]: r.value })), f = computed(() => Array.isArray(t.value) ? t.value[0] : t.value), z = computed(() => Array.isArray(t.value) ? t.value[1] : 0), W = je(f, 0), b = je(z, 0), B = computed(() => {
    const w = {};
    if ((W.value || b.value) && !u.value) {
      const $ = -W.value / 2, k = -b.value / 2;
      $ && (w.marginLeft = `${$}px`, w.marginRight = `${$}px`), k && (w.marginTop = `${k}px`, w.marginBottom = `${k}px`);
    }
    return w;
  }), h = computed(() => [W.value, b.value]);
  return provide(at, reactive({ gutter: h, div: u })), { classNames: p, styles: B };
} }), [["render", function(e, t, l, r, u, n) {
  return openBlock(), createElementBlock("div", { class: normalizeClass(e.classNames), style: normalizeStyle(e.styles) }, [renderSlot(e.$slots, "default")], 6);
}]]);
var Ht = Object.defineProperty;
var Je = Object.getOwnPropertySymbols;
var _t = Object.prototype.hasOwnProperty;
var Dt = Object.prototype.propertyIsEnumerable;
var et = (e, t, l) => t in e ? Ht(e, t, { enumerable: true, configurable: true, writable: true, value: l }) : e[t] = l;
var $e = (e, t) => {
  for (var l in t || (t = {}))
    _t.call(t, l) && et(e, l, t[l]);
  if (Je)
    for (var l of Je(t))
      Dt.call(t, l) && et(e, l, t[l]);
  return e;
};
var Xt = De(defineComponent({ name: "Col", props: { span: { type: Number, default: 24 }, offset: { type: Number }, order: { type: Number }, xs: { type: [Number, Object] }, sm: { type: [Number, Object] }, md: { type: [Number, Object] }, lg: { type: [Number, Object] }, xl: { type: [Number, Object] }, xxl: { type: [Number, Object] }, flex: { type: [Number, String] } }, setup(e) {
  const t = _e("col"), l = inject(at, {}), r = computed(() => function(b) {
    return da(b) && (["initial", "auto", "none"].includes(b) || /^\d+$/.test(b)) || Ce(b) ? b : da(b) && /^\d+(px|em|rem|%)$/.test(b) ? `0 0 ${b}` : void 0;
  }(e.flex)), u = computed(() => {
    const { div: b } = l, { span: B, offset: h, order: w, xs: $, sm: k, md: S, lg: L, xl: E, xxl: j } = e, O = { [`${t}`]: !b, [`${t}-order-${w}`]: w, [`${t}-${B}`]: !(b || $ || k || S || L || E || j), [`${t}-offset-${h}`]: h && h > 0 }, F = { xs: $, sm: k, md: S, lg: L, xl: E, xxl: j };
    return Object.keys(F).forEach((a) => {
      const s = F[a];
      s && Ce(s) ? O[`${t}-${a}-${s}`] = true : s && Ge(s) && (O[`${t}-${a}-${s.span}`] = s.span, O[`${t}-${a}-offset-${s.offset}`] = s.offset, O[`${t}-${a}-order-${s.order}`] = s.order);
    }), O;
  }), n = computed(() => r.value ? t : u.value), i = computed(() => {
    const { gutter: b, div: B } = l, h = {};
    if (Array.isArray(b) && !B) {
      const w = b[0] && b[0] / 2 || 0, $ = b[1] && b[1] / 2 || 0;
      w && (h.paddingLeft = `${w}px`, h.paddingRight = `${w}px`), $ && (h.paddingTop = `${$}px`, h.paddingBottom = `${$}px`);
    }
    return h;
  }), p = computed(() => r.value ? { flex: r.value } : {}), f = computed(() => qi(e, be)), z = function(b) {
    return computed(() => {
      const { val: B, key: h, xs: w, sm: $, md: k, lg: S, xl: L, xxl: E } = b.value;
      if (!(w || $ || k || S || L || E))
        return B;
      const j = {};
      return be.forEach((O) => {
        const F = b.value[O];
        Ce(F) ? j[O] = F : Ge(F) && Ce(F[h]) && (j[O] = F[h]);
      }), j;
    });
  }(computed(() => $e({ val: e.span, key: "span" }, f.value))), W = je(z, 24, true);
  return { visible: computed(() => !!W.value), classNames: n, styles: computed(() => $e($e({}, i.value), p.value)) };
} }), [["render", function(e, t, l, r, u, n) {
  return e.visible ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(e.classNames), style: normalizeStyle(e.styles) }, [renderSlot(e.$slots, "default")], 6)) : createCommentVNode("v-if", true);
}]]);
var Yt = defineComponent({ name: "FormItemLabel", components: { ResizeObserver: Kl, Tooltip: c4, IconQuestionCircle: Pt2 }, props: { required: { type: Boolean, default: false }, showColon: { type: Boolean, default: false }, component: { type: String, default: "label" }, asteriskPosition: { type: String, default: "start" }, tooltip: { type: String }, attrs: Object }, setup() {
  const e = _e("form-item-label"), t = inject(i3, void 0), l = getCurrentInstance(), r = ref();
  return onMounted(() => {
    r.value && Ce(r.value.offsetWidth) && (t == null || t.setLabelWidth(r.value.offsetWidth, l == null ? void 0 : l.uid));
  }), onBeforeUnmount(() => {
    t == null || t.removeLabelWidth(l == null ? void 0 : l.uid);
  }), { prefixCls: e, labelRef: r, handleResize: () => {
    r.value && Ce(r.value.offsetWidth) && (t == null || t.setLabelWidth(r.value.offsetWidth, l == null ? void 0 : l.uid));
  } };
} });
var Gt = [createBaseVNode("svg", { fill: "currentColor", viewBox: "0 0 1024 1024", width: "1em", height: "1em" }, [createBaseVNode("path", { d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z" })], -1)];
var Qt = [createBaseVNode("svg", { fill: "currentColor", viewBox: "0 0 1024 1024", width: "1em", height: "1em" }, [createBaseVNode("path", { d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z" })], -1)];
var Ut = De(Yt, [["render", function(e, t, l, r, u, n) {
  const i = resolveComponent("icon-question-circle"), p = resolveComponent("Tooltip"), f = resolveComponent("ResizeObserver");
  return openBlock(), createBlock(f, { onResize: e.handleResize }, { default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(e.component), mergeProps({ ref: "labelRef", class: e.prefixCls }, e.attrs), { default: withCtx(() => [e.required && e.asteriskPosition === "start" ? (openBlock(), createElementBlock("strong", { key: 0, class: normalizeClass(`${e.prefixCls}-required-symbol`) }, Gt, 2)) : createCommentVNode("v-if", true), renderSlot(e.$slots, "default"), e.tooltip ? (openBlock(), createBlock(p, { key: 1, content: e.tooltip }, { default: withCtx(() => [createVNode(i, { class: normalizeClass(`${e.prefixCls}-tooltip`) }, null, 8, ["class"])]), _: 1 }, 8, ["content"])) : createCommentVNode("v-if", true), e.required && e.asteriskPosition === "end" ? (openBlock(), createElementBlock("strong", { key: 2, class: normalizeClass(`${e.prefixCls}-required-symbol`) }, Qt, 2)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(e.showColon ? ":" : ""), 1)]), _: 3 }, 16, ["class"]))]), _: 3 }, 8, ["onResize"]);
}]]);
var Kt = De(defineComponent({ name: "FormItemMessage", props: { error: { type: Array, default: () => [] }, help: String }, setup: () => ({ prefixCls: _e("form-item-message") }) }), [["render", function(e, t, l, r, u, n) {
  return e.error.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e.error, (i) => (openBlock(), createBlock(Transition, { key: i, name: "form-blink", appear: "" }, { default: withCtx(() => [createBaseVNode("div", { role: "alert", class: normalizeClass([e.prefixCls]) }, toDisplayString(i), 3)]), _: 2 }, 1024))), 128)) : e.help || e.$slots.help ? (openBlock(), createBlock(Transition, { key: 1, name: "form-blink", appear: "" }, { default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([e.prefixCls, `${e.prefixCls}-help`]) }, [renderSlot(e.$slots, "help", {}, () => [createTextVNode(toDisplayString(e.help), 1)])], 2)]), _: 3 })) : createCommentVNode("v-if", true);
}]]);
var Zt = Object.defineProperty;
var he = Object.getOwnPropertySymbols;
var st = Object.prototype.hasOwnProperty;
var nt = Object.prototype.propertyIsEnumerable;
var tt = (e, t, l) => t in e ? Zt(e, t, { enumerable: true, configurable: true, writable: true, value: l }) : e[t] = l;
var lt2 = (e, t) => {
  for (var l in t || (t = {}))
    st.call(t, l) && tt(e, l, t[l]);
  if (he)
    for (var l of he(t))
      nt.call(t, l) && tt(e, l, t[l]);
  return e;
};
var Se = De(defineComponent({ name: "FormItem", components: { ArcoRow: Vt, ArcoCol: Xt, FormItemLabel: Ut, FormItemMessage: Kt }, props: { field: { type: String, default: "" }, label: String, tooltip: { type: String }, showColon: { type: Boolean, default: false }, noStyle: { type: Boolean, default: false }, disabled: { type: Boolean, default: void 0 }, help: String, extra: String, required: { type: Boolean, default: false }, asteriskPosition: { type: String, default: "start" }, rules: { type: [Object, Array] }, validateStatus: { type: String }, validateTrigger: { type: [String, Array], default: "change" }, labelColProps: Object, wrapperColProps: Object, hideLabel: { type: Boolean, default: false }, hideAsterisk: { type: Boolean, default: false }, labelColStyle: Object, wrapperColStyle: Object, rowProps: Object, rowClass: [String, Array, Object], contentClass: [String, Array, Object], contentFlex: { type: Boolean, default: true }, mergeProps: { type: [Boolean, Function], default: true }, labelColFlex: { type: [Number, String] }, feedback: { type: Boolean, default: false }, labelComponent: { type: String, default: "label" }, labelAttrs: Object }, setup(e) {
  const t = _e("form-item"), { field: l } = toRefs(e), r = inject(i3, {}), { autoLabelWidth: u, layout: n } = toRefs(r), { i18nMessage: i } = on(), p = computed(() => {
    var o;
    const m = lt2({}, (o = e.labelColProps) != null ? o : r.labelColProps);
    return e.labelColFlex ? m.flex = e.labelColFlex : r.autoLabelWidth && (m.flex = `${r.maxLabelWidth}px`), m;
  }), f = computed(() => {
    var o;
    const m = lt2({}, (o = e.wrapperColProps) != null ? o : r.wrapperColProps);
    return l.value && (m.id = ot(r.id, l.value)), (e.labelColFlex || r.autoLabelWidth) && (m.flex = "auto"), m;
  }), z = computed(() => {
    var o;
    return (o = e.labelColStyle) != null ? o : r.labelColStyle;
  }), W = computed(() => {
    var o;
    return (o = e.wrapperColStyle) != null ? o : r.wrapperColStyle;
  }), b = Co(r.model, e.field), B = reactive({}), h = reactive({}), w = computed(() => ((o) => {
    let m = "";
    for (const y of Object.keys(o)) {
      const R = o[y];
      R && (!m || Ue.indexOf(R) > Ue.indexOf(m)) && (m = o[y]);
    }
    return m;
  })(B)), $ = computed(() => ((o) => {
    const m = [];
    for (const y of Object.keys(o)) {
      const R = o[y];
      R && m.push(R);
    }
    return m;
  })(h)), k = ref(false), S = computed(() => Co(r.model, e.field)), L = computed(() => {
    var o;
    return !!((o = e.disabled) != null ? o : r != null && r.disabled);
  }), E = computed(() => {
    var o;
    return (o = e.validateStatus) != null ? o : w.value;
  }), j = computed(() => E.value === "error"), O = computed(() => {
    var o, m, y;
    const R = [].concat((y = (m = e.rules) != null ? m : (o = r == null ? void 0 : r.rules) == null ? void 0 : o[e.field]) != null ? y : []), G = R.some((H) => H.required);
    return e.required && !G ? [{ required: true }].concat(R) : R;
  }), F = computed(() => O.value.some((o) => o.required)), a = e.noStyle ? inject(N2, void 0) : void 0, s = (o, { status: m, message: y }) => {
    B[o] = m, h[o] = y, e.noStyle && (a == null || a.updateValidateState(o, { status: m, message: y }));
  }, v = computed(() => e.feedback && E.value ? E.value : void 0), c = () => {
    var o;
    if (k.value)
      return Promise.resolve();
    const m = O.value;
    if (!l.value || m.length === 0)
      return w.value && g(), Promise.resolve();
    const y = l.value, R = S.value;
    s(y, { status: "", message: "" });
    const G = new Eu({ [y]: m.map((H) => {
      var P = ((A, M) => {
        var T = {};
        for (var N in A)
          st.call(A, N) && M.indexOf(N) < 0 && (T[N] = A[N]);
        if (A != null && he)
          for (var N of he(A))
            M.indexOf(N) < 0 && nt.call(A, N) && (T[N] = A[N]);
        return T;
      })(H, []);
      return P.type || P.validator || (P.type = "string"), P;
    }) }, { ignoreEmptyString: true, validateMessages: (o = i.value.form) == null ? void 0 : o.validateMessages });
    return new Promise((H) => {
      G.validate({ [y]: R }, (P) => {
        var A;
        const M = !!(P != null && P[y]);
        s(y, { status: M ? "error" : "", message: (A = P == null ? void 0 : P[y].message) != null ? A : "" });
        const T = M ? { label: e.label, field: l.value, value: P[y].value, type: P[y].type, isRequiredError: !!P[y].requiredError, message: P[y].message } : void 0;
        H(T);
      });
    });
  }, x = computed(() => [].concat(e.validateTrigger)), C = computed(() => x.value.reduce((o, m) => {
    switch (m) {
      case "change":
        return o.onChange = () => {
          c();
        }, o;
      case "input":
        return o.onInput = () => {
          nextTick(() => {
            c();
          });
        }, o;
      case "focus":
        return o.onFocus = () => {
          c();
        }, o;
      case "blur":
        return o.onBlur = () => {
          c();
        }, o;
      default:
        return o;
    }
  }, {}));
  provide(N2, reactive({ eventHandlers: C, size: r && toRef(r, "size"), disabled: L, error: j, feedback: v, updateValidateState: s }));
  const g = () => {
    l.value && s(l.value, { status: "", message: "" });
  }, V = reactive({ field: l, disabled: L, error: j, validate: c, clearValidate: g, resetField: () => {
    g(), k.value = true, r != null && r.model && l.value && Mu(r.model, l.value, b), nextTick(() => {
      k.value = false;
    });
  }, setField: (o) => {
    var m, y;
    l.value && (k.value = true, "value" in o && (r != null && r.model) && l.value && Mu(r.model, l.value, o.value), (o.status || o.message) && s(l.value, { status: (m = o.status) != null ? m : "", message: (y = o.message) != null ? y : "" }), nextTick(() => {
      k.value = false;
    }));
  } });
  onMounted(() => {
    var o;
    V.field && ((o = r.addField) == null || o.call(r, V));
  }), onBeforeUnmount(() => {
    var o;
    V.field && ((o = r.removeField) == null || o.call(r, V));
  });
  const oe = computed(() => [t, `${t}-layout-${r.layout}`, { [`${t}-error`]: j.value, [`${t}-status-${E.value}`]: !!E.value }, e.rowClass]), ae = computed(() => [`${t}-label-col`, { [`${t}-label-col-left`]: r.labelAlign === "left", [`${t}-label-col-flex`]: r.autoLabelWidth || e.labelColFlex }]), se = computed(() => [`${t}-wrapper-col`, { [`${t}-wrapper-col-flex`]: !f.value }]);
  return { prefixCls: t, cls: oe, isRequired: F, isError: j, finalMessage: $, mergedLabelCol: p, mergedWrapperCol: f, labelColCls: ae, autoLabelWidth: u, layout: n, mergedLabelStyle: z, wrapperColCls: se, mergedWrapperStyle: W };
} }), [["render", function(e, t, l, r, u, n) {
  var i;
  const p = resolveComponent("FormItemLabel"), f = resolveComponent("ArcoCol"), z = resolveComponent("FormItemMessage"), W = resolveComponent("ArcoRow");
  return e.noStyle ? renderSlot(e.$slots, "default", { key: 0 }) : (openBlock(), createBlock(W, mergeProps({ key: 1, class: [e.cls, { [`${e.prefixCls}-has-help`]: !!((i = e.$slots.help) != null ? i : e.help) }], wrap: !(e.labelColFlex || e.autoLabelWidth), div: e.layout !== "horizontal" || e.hideLabel }, e.rowProps), { default: withCtx(() => [e.hideLabel ? createCommentVNode("v-if", true) : (openBlock(), createBlock(f, mergeProps({ key: 0, class: e.labelColCls, style: e.mergedLabelStyle }, e.mergedLabelCol), { default: withCtx(() => [createVNode(p, { required: !e.hideAsterisk && e.isRequired, "show-colon": e.showColon, "asterisk-position": e.asteriskPosition, component: e.labelComponent, attrs: e.labelAttrs, tooltip: e.tooltip }, { default: withCtx(() => [e.$slots.label || e.label ? renderSlot(e.$slots, "label", { key: 0 }, () => [createTextVNode(toDisplayString(e.label), 1)]) : createCommentVNode("v-if", true)]), _: 3 }, 8, ["required", "show-colon", "asterisk-position", "component", "attrs", "tooltip"])]), _: 3 }, 16, ["class", "style"])), createVNode(f, mergeProps({ class: e.wrapperColCls, style: e.mergedWrapperStyle }, e.mergedWrapperCol), { default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(`${e.prefixCls}-content-wrapper`) }, [createBaseVNode("div", { class: normalizeClass([`${e.prefixCls}-content`, { [`${e.prefixCls}-content-flex`]: e.contentFlex }, e.contentClass]) }, [renderSlot(e.$slots, "default")], 2)], 2), e.isError || e.$slots.help || e.help ? (openBlock(), createBlock(z, { key: 0, error: e.finalMessage, help: e.help }, createSlots({ _: 2 }, [e.$slots.help ? { name: "help", fn: withCtx(() => [renderSlot(e.$slots, "help")]) } : void 0]), 1032, ["error", "help"])) : createCommentVNode("v-if", true), e.$slots.extra || e.extra ? (openBlock(), createElementBlock("div", { key: 1, class: normalizeClass(`${e.prefixCls}-extra`) }, [renderSlot(e.$slots, "extra", {}, () => [createTextVNode(toDisplayString(e.extra), 1)])], 2)) : createCommentVNode("v-if", true)]), _: 3 }, 16, ["class", "style"])]), _: 3 }, 16, ["class", "wrap", "div"]));
}]]);
var rl = Object.assign(we, { Item: Se, install: (e, t) => {
  Pt(e, t);
  const l = It(t);
  e.component(l + we.name, we), e.component(l + Se.name, Se);
} });

export {
  je,
  tl,
  ll,
  Vt,
  Xt,
  Se,
  rl
};
//# sourceMappingURL=chunk-EMNO6LJ4.js.map
