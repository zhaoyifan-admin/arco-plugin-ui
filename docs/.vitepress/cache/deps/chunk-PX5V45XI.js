import {
  $l,
  De,
  G4,
  Gn,
  Je,
  Mi,
  On,
  Q0,
  Sl,
  Tl,
  Ul,
  X2,
  ar,
  ea,
  je,
  me,
  on,
  pe,
  pl,
  qt
} from "./chunk-CIZOL3JV.js";
import {
  Comment,
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

// node_modules/.pnpm/vue-arco-ui@0.1.48_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-ac42e72f.js
function it(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function at(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function Me(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var i = getComputedStyle(e, null);
    return at(i.overflowY, t) || at(i.overflowX, t) || function(r) {
      var a = function(l) {
        if (!l.ownerDocument || !l.ownerDocument.defaultView)
          return null;
        try {
          return l.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(r);
      return !!a && (a.clientHeight < r.scrollHeight || a.clientWidth < r.scrollWidth);
    }(e);
  }
  return false;
}
function be(e, t, i, r, a, l, o, s) {
  return l < e && o > t || l > e && o < t ? 0 : l <= e && s <= i || o >= t && s >= i ? l - e - r : o > t && s < i || l < e && s > i ? o - t + a : 0;
}
var lt = function(e, t) {
  var i = window, r = t.scrollMode, a = t.block, l = t.inline, o = t.boundary, s = t.skipOverflowHiddenElements, u = typeof o == "function" ? o : function(Lt) {
    return Lt !== o;
  };
  if (!it(e))
    throw new TypeError("Invalid target");
  for (var w, p, h = document.scrollingElement || document.documentElement, L = [], g = e; it(g) && u(g); ) {
    if ((g = (p = (w = g).parentElement) == null ? w.getRootNode().host || null : p) === h) {
      L.push(g);
      break;
    }
    g != null && g === document.body && Me(g) && !Me(document.documentElement) || g != null && Me(g, s) && L.push(g);
  }
  for (var x = i.visualViewport ? i.visualViewport.width : innerWidth, f = i.visualViewport ? i.visualViewport.height : innerHeight, m = window.scrollX || pageXOffset, k = window.scrollY || pageYOffset, q = e.getBoundingClientRect(), V = q.height, E = q.width, M = q.top, P = q.right, c = q.bottom, d = q.left, y = a === "start" || a === "nearest" ? M : a === "end" ? c : M + V / 2, v = l === "center" ? d + E / 2 : l === "end" ? P : d, C = [], S = 0; S < L.length; S++) {
    var $ = L[S], T = $.getBoundingClientRect(), ue = T.height, ce = T.width, de = T.top, n = T.right, j = T.bottom, O = T.left;
    if (r === "if-needed" && M >= 0 && d >= 0 && c <= f && P <= x && M >= de && c <= j && d >= O && P <= n)
      return C;
    var _ = getComputedStyle($), J = parseInt(_.borderLeftWidth, 10), H = parseInt(_.borderTopWidth, 10), F = parseInt(_.borderRightWidth, 10), W = parseInt(_.borderBottomWidth, 10), R = 0, A = 0, B = "offsetWidth" in $ ? $.offsetWidth - $.clientWidth - J - F : 0, he = "offsetHeight" in $ ? $.offsetHeight - $.clientHeight - H - W : 0, Ye = "offsetWidth" in $ ? $.offsetWidth === 0 ? 0 : ce / $.offsetWidth : 0, Ue = "offsetHeight" in $ ? $.offsetHeight === 0 ? 0 : ue / $.offsetHeight : 0;
    if (h === $)
      R = a === "start" ? y : a === "end" ? y - f : a === "nearest" ? be(k, k + f, f, H, W, k + y, k + y + V, V) : y - f / 2, A = l === "start" ? v : l === "center" ? v - x / 2 : l === "end" ? v - x : be(m, m + x, x, J, F, m + v, m + v + E, E), R = Math.max(0, R + k), A = Math.max(0, A + m);
    else {
      R = a === "start" ? y - de - H : a === "end" ? y - j + W + he : a === "nearest" ? be(de, j, ue, H, W + he, y, y + V, V) : y - (de + ue / 2) + he / 2, A = l === "start" ? v - O - J : l === "center" ? v - (O + ce / 2) + B / 2 : l === "end" ? v - n + F + B : be(O, n, ce, J, F + B, v, v + E, E);
      var Ge = $.scrollLeft, Je2 = $.scrollTop;
      y += Je2 - (R = Math.max(0, Math.min(Je2 + R / Ue, $.scrollHeight - ue / Ue + he))), v += Ge - (A = Math.max(0, Math.min(Ge + A / Ye, $.scrollWidth - ce / Ye + B)));
    }
    C.push({ el: $, top: R, left: A });
  }
  return C;
};
var Ht = Object.defineProperty;
var Dt = Object.defineProperties;
var Kt = Object.getOwnPropertyDescriptors;
var ot = Object.getOwnPropertySymbols;
var Yt = Object.prototype.hasOwnProperty;
var Ut = Object.prototype.propertyIsEnumerable;
var nt = (e, t, i) => t in e ? Ht(e, t, { enumerable: true, configurable: true, writable: true, value: i }) : e[t] = i;
var $e = ["xxl", "xl", "lg", "md", "sm", "xs"];
var ge = { xs: "(max-width: 575px)", sm: "(min-width: 576px)", md: "(min-width: 768px)", lg: "(min-width: 992px)", xl: "(min-width: 1200px)", xxl: "(min-width: 1600px)" };
var ie = [];
var Gt = -1;
var ve = {};
var st = { matchHandlers: {}, dispatch: (e, t) => (ve = e, !(ie.length < 1) && (ie.forEach((i) => {
  i.func(ve, t);
}), true)), subscribe(e) {
  ie.length === 0 && this.register();
  const t = (++Gt).toString();
  return ie.push({ token: t, func: e }), e(ve, null), t;
}, unsubscribe(e) {
  ie = ie.filter((t) => t.token !== e), ie.length === 0 && this.unregister();
}, unregister() {
  Object.keys(ge).forEach((e) => {
    const t = ge[e];
    if (!t)
      return;
    const i = this.matchHandlers[t];
    i && i.mql && i.listener && (i.mql.removeEventListener ? i.mql.removeEventListener("change", i.listener) : i.mql.removeListener(i.listener));
  });
}, register() {
  Object.keys(ge).forEach((e) => {
    const t = ge[e];
    if (!t)
      return;
    const i = ({ matches: a }) => {
      var l;
      this.dispatch((l = ((o, s) => {
        for (var u in s || (s = {}))
          Yt.call(s, u) && nt(o, u, s[u]);
        if (ot)
          for (var u of ot(s))
            Ut.call(s, u) && nt(o, u, s[u]);
        return o;
      })({}, ve), Dt(l, Kt({ [e]: a }))), e);
    }, r = window.matchMedia(t);
    r.addEventListener ? r.addEventListener("change", i) : r.addListener(i), this.matchHandlers[t] = { mql: r, listener: i }, i(r);
  });
} };
function ut(e) {
  return De(e);
}
function We(e, t, i = false) {
  const r = ref({ xs: true, sm: true, md: true, lg: true, xl: true, xxl: true }), a = computed(() => {
    let o = t;
    if (ut(e.value))
      for (let s = 0; s < $e.length; s++) {
        const u = $e[s];
        if ((r.value[u] || u === "xs" && i) && e.value[u] !== void 0) {
          o = e.value[u];
          break;
        }
      }
    else
      o = e.value;
    return o;
  });
  let l = "";
  return onMounted(() => {
    l = st.subscribe((o) => {
      ut(e.value) && (r.value = o);
    });
  }), onUnmounted(() => {
    l && st.unsubscribe(l);
  }), a;
}
function ct(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function Jt(e, t) {
  var i = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (ct(t) && typeof t.behavior == "function")
    return t.behavior(i ? lt(e, t) : []);
  if (i) {
    var r = function(a) {
      return a === false ? { block: "end", inline: "nearest" } : ct(a) ? a : { block: "start", inline: "nearest" };
    }(t);
    return function(a, l) {
      l === void 0 && (l = "auto");
      var o = "scrollBehavior" in document.body.style;
      a.forEach(function(s) {
        var u = s.el, w = s.top, p = s.left;
        u.scroll && o ? u.scroll({ top: w, left: p, behavior: l }) : (u.scrollTop = w, u.scrollLeft = p);
      });
    }(lt(e, r), r.behavior);
  }
}
var dt = ["success", "warning", "error", "validating"];
var Ot = (e, t) => {
  const i = t.replace(/[[.]/g, "_").replace(/\]/g, "");
  return e ? `${e}-${i}` : `${i}`;
};
var Qt = Object.defineProperty;
var pt = Object.getOwnPropertySymbols;
var Xt = Object.prototype.hasOwnProperty;
var Zt = Object.prototype.propertyIsEnumerable;
var ft = (e, t, i) => t in e ? Qt(e, t, { enumerable: true, configurable: true, writable: true, value: i }) : e[t] = i;
var er = defineComponent({ name: "Form", props: { model: { type: Object, required: true }, layout: { type: String, default: "horizontal" }, size: { type: String }, labelColProps: { type: Object, default: () => ({ span: 5, offset: 0 }) }, wrapperColProps: { type: Object, default: () => ({ span: 19, offset: 0 }) }, labelColStyle: Object, wrapperColStyle: Object, labelAlign: { type: String, default: "right" }, disabled: { type: Boolean, default: void 0 }, rules: { type: Object }, autoLabelWidth: { type: Boolean, default: false }, id: { type: String }, scrollToFirstError: { type: Boolean, default: false } }, emits: { submit: (e, t) => true, submitSuccess: (e, t) => true, submitFailed: (e, t) => true }, setup(e, { emit: t }) {
  const i = pe("form"), r = ref(), { id: a, model: l, layout: o, disabled: s, labelAlign: u, labelColProps: w, wrapperColProps: p, labelColStyle: h, wrapperColStyle: L, size: g, rules: x } = toRefs(e), { mergedSize: f } = Ul(g), m = computed(() => e.layout === "horizontal" && e.autoLabelWidth), k = [], q = reactive({}), V = computed(() => Math.max(...Object.values(q))), E = (c, d) => {
    const y = (r.value || document.body).querySelector(`#${Ot(e.id, c)}`);
    y && Jt(y, ((v, C) => {
      for (var S in C || (C = {}))
        Xt.call(C, S) && ft(v, S, C[S]);
      if (pt)
        for (var S of pt(C))
          Zt.call(C, S) && ft(v, S, C[S]);
      return v;
    })({ behavior: "smooth", block: "nearest", scrollMode: "if-needed" }, d));
  }, M = (c) => {
    const d = On(e.scrollToFirstError) ? void 0 : e.scrollToFirstError;
    E(c, d);
  }, P = (c, d) => {
    const y = [];
    for (const v of k)
      (pl(c) && c.includes(v.field) || c === v.field) && y.push(v.validate());
    return Promise.all(y).then((v) => {
      const C = {};
      let S = false;
      return v.forEach(($) => {
        $ && (S = true, C[$.field] = $);
      }), S && e.scrollToFirstError && M(Object.keys(C)[0]), Je(d) && d(S ? C : void 0), S ? C : void 0;
    });
  };
  return provide(G4, reactive({ id: a, layout: o, disabled: s, labelAlign: u, labelColProps: w, wrapperColProps: p, labelColStyle: h, wrapperColStyle: L, model: l, size: f, rules: x, fields: k, touchedFields: [], addField: (c) => {
    c && c.field && k.push(c);
  }, removeField: (c) => {
    c && c.field && k.splice(k.indexOf(c), 1);
  }, validateField: P, setLabelWidth: (c, d) => {
    d && q[d] !== c && (q[d] = c);
  }, removeLabelWidth: (c) => {
    c && delete q[c];
  }, maxLabelWidth: V, autoLabelWidth: m })), { cls: computed(() => [i, `${i}-layout-${e.layout}`, `${i}-size-${f.value}`, { [`${i}-auto-label-width`]: e.autoLabelWidth }]), formRef: r, handleSubmit: (c) => {
    const d = [];
    k.forEach((y) => {
      d.push(y.validate());
    }), Promise.all(d).then((y) => {
      const v = {};
      let C = false;
      y.forEach((S) => {
        S && (C = true, v[S.field] = S);
      }), C ? (e.scrollToFirstError && M(Object.keys(v)[0]), t("submitFailed", { values: l.value, errors: v }, c)) : t("submitSuccess", l.value, c), t("submit", { values: l.value, errors: C ? v : void 0 }, c);
    });
  }, innerValidate: (c) => {
    const d = [];
    return k.forEach((y) => {
      d.push(y.validate());
    }), Promise.all(d).then((y) => {
      const v = {};
      let C = false;
      return y.forEach((S) => {
        S && (C = true, v[S.field] = S);
      }), C && e.scrollToFirstError && M(Object.keys(v)[0]), Je(c) && c(C ? v : void 0), C ? v : void 0;
    });
  }, innerValidateField: P, innerResetFields: (c) => {
    const d = c ? [].concat(c) : [];
    k.forEach((y) => {
      (d.length === 0 || d.includes(y.field)) && y.resetField();
    });
  }, innerClearValidate: (c) => {
    const d = c ? [].concat(c) : [];
    k.forEach((y) => {
      (d.length === 0 || d.includes(y.field)) && y.clearValidate();
    });
  }, innerSetFields: (c) => {
    k.forEach((d) => {
      c[d.field] && d.setField(c[d.field]);
    });
  }, innerScrollToField: E };
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
var Ee = je(er, [["render", function(e, t, i, r, a, l) {
  return openBlock(), createElementBlock("form", { ref: "formRef", class: normalizeClass(e.cls), onSubmit: t[0] || (t[0] = withModifiers((...o) => e.handleSubmit && e.handleSubmit(...o), ["prevent"])) }, [renderSlot(e.$slots, "default")], 34);
}]]);
var pe2 = Object.prototype.toString;
function ke(e) {
  return pe2.call(e) === "[object Array]";
}
function G(e) {
  return pe2.call(e) === "[object Object]";
}
function Be(e) {
  return pe2.call(e) === "[object String]";
}
function Re(e) {
  return pe2.call(e) === "[object Function]";
}
function ae(e) {
  return e == null || e === "";
}
function wt(e) {
  return ke(e) && !e.length;
}
var De2 = function(e, t) {
  if (typeof e != "object" || typeof t != "object")
    return e === t;
  if (Re(e) && Re(t))
    return e === t || e.toString() === t.toString();
  if (Object.keys(e).length !== Object.keys(t).length)
    return false;
  for (var i in e)
    if (!De2(e[i], t[i]))
      return false;
  return true;
};
var Ke = function(e, t) {
  var i = Object.assign({}, e);
  return Object.keys(t || {}).forEach(function(r) {
    var a = i[r], l = t == null ? void 0 : t[r];
    i[r] = G(a) ? Object.assign(Object.assign({}, a), l) : l || a;
  }), i;
};
var Q = "#{field} is not a #{type} type";
var tr = { required: "#{field} is required", type: { ip: Q, email: Q, url: Q, string: Q, number: Q, array: Q, object: Q, boolean: Q }, number: { min: "`#{value}` is not greater than `#{min}`", max: "`#{value}` is not less than `#{max}`", equal: "`#{value}` is not equal to `#{equal}`", range: "`#{value}` is not in range `#{min} ~ #{max}`", positive: "`#{value}` is not a positive number", negative: "`#{value}` is not a negative number" }, string: { maxLength: "#{field} cannot be longer than #{maxLength} characters", minLength: "#{field} must be at least #{minLength} characters", length: "#{field} must be exactly #{length} characters", match: "`#{value}` does not match pattern #{pattern}", uppercase: "`#{value}` must be all uppercase", lowercase: "`#{value}` must be all lowercased" }, array: { length: "#{field} must be exactly #{length} in length", minLength: "#{field} cannot be less than #{minLength} in length", maxLength: "#{field} cannot be greater than #{maxLength} in length", includes: "#{field} is not includes #{includes}", deepEqual: "#{field} is not deep equal with #{deepEqual}", empty: "#{field} is not an empty array" }, object: { deepEqual: "#{field} is not deep equal to expected value", hasKeys: "#{field} does not contain required fields", empty: "#{field} is not an empty object" }, boolean: { true: "Expect true but got `#{value}`", false: "Expect false but got `#{value}`" } };
var I = function(e, t) {
  var i = this;
  this.getValidateMsg = function(r, a) {
    a === void 0 && (a = {});
    var l = Object.assign(Object.assign({}, a), { value: i.obj, field: i.field, type: i.type }), o = function(s, u) {
      for (var w = u.split("."), p = s, h = 0; h < w.length; h++)
        if ((p = p && p[w[h]]) === void 0)
          return p;
      return p;
    }(i.validateMessages, r);
    return Re(o) ? o(l) : Be(o) ? o.replace(/\#\{.+?\}/g, function(s) {
      var u = s.slice(2, -1);
      if (u in l) {
        if (G(l[u]) || ke(l[u]))
          try {
            return JSON.stringify(l[u]);
          } catch {
            return l[u];
          }
        return String(l[u]);
      }
      return s;
    }) : o;
  }, G(t) && Be(e) && t.trim ? this.obj = e.trim() : G(t) && t.ignoreEmptyString && e === "" ? this.obj = void 0 : this.obj = e, this.message = t.message, this.type = t.type, this.error = null, this.field = t.field || t.type, this.validateMessages = Ke(tr, t.validateMessages);
};
var me2 = { not: { configurable: true }, isRequired: { configurable: true }, end: { configurable: true } };
me2.not.get = function() {
  return this._not = !this._not, this;
}, me2.isRequired.get = function() {
  if (ae(this.obj) || wt(this.obj)) {
    var e = this.getValidateMsg("required");
    this.error = { value: this.obj, type: this.type, requiredError: true, message: this.message || (G(e) ? e : (this._not ? "[NOT MODE]:" : "") + e) };
  }
  return this;
}, me2.end.get = function() {
  return this.error;
}, I.prototype.addError = function(e) {
  !this.error && e && (this.error = { value: this.obj, type: this.type, message: this.message || (G(e) ? e : (this._not ? "[NOT MODE]:" : "") + e) });
}, I.prototype.validate = function(e, t) {
  return (this._not ? e : !e) && this.addError(t), this;
}, I.prototype.collect = function(e) {
  e && e(this.error);
}, Object.defineProperties(I.prototype, me2);
var rr = function(e) {
  function t(r, a) {
    e.call(this, r, Object.assign(Object.assign({}, a), { type: "string" })), this.validate(!a || !a.strict || Be(this.obj), this.getValidateMsg("type.string"));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var i = { uppercase: { configurable: true }, lowercase: { configurable: true } };
  return t.prototype.maxLength = function(r) {
    return this.obj ? this.validate(this.obj.length <= r, this.getValidateMsg("string.maxLength", { maxLength: r })) : this;
  }, t.prototype.minLength = function(r) {
    return this.obj ? this.validate(this.obj.length >= r, this.getValidateMsg("string.minLength", { minLength: r })) : this;
  }, t.prototype.length = function(r) {
    return this.obj ? this.validate(this.obj.length === r, this.getValidateMsg("string.length", { length: r })) : this;
  }, t.prototype.match = function(r) {
    var a = r instanceof RegExp;
    return a && (r.lastIndex = 0), this.validate(this.obj === void 0 || a && r.test(this.obj), this.getValidateMsg("string.match", { pattern: r }));
  }, i.uppercase.get = function() {
    return this.obj ? this.validate(this.obj.toUpperCase() === this.obj, this.getValidateMsg("string.uppercase")) : this;
  }, i.lowercase.get = function() {
    return this.obj ? this.validate(this.obj.toLowerCase() === this.obj, this.getValidateMsg("string.lowercase")) : this;
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var ir = function(e) {
  function t(r, a) {
    e.call(this, r, Object.assign(Object.assign({}, a), { type: "number" })), this.validate(!a || !a.strict || function(l) {
      return pe2.call(l) === "[object Number]" && l == l;
    }(this.obj), this.getValidateMsg("type.number"));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var i = { positive: { configurable: true }, negative: { configurable: true } };
  return t.prototype.min = function(r) {
    return ae(this.obj) ? this : this.validate(this.obj >= r, this.getValidateMsg("number.min", { min: r }));
  }, t.prototype.max = function(r) {
    return ae(this.obj) ? this : this.validate(this.obj <= r, this.getValidateMsg("number.max", { max: r }));
  }, t.prototype.equal = function(r) {
    return ae(this.obj) ? this : this.validate(this.obj === r, this.getValidateMsg("number.equal", { equal: r }));
  }, t.prototype.range = function(r, a) {
    return ae(this.obj) ? this : this.validate(this.obj >= r && this.obj <= a, this.getValidateMsg("number.range", { min: r, max: a }));
  }, i.positive.get = function() {
    return ae(this.obj) ? this : this.validate(this.obj > 0, this.getValidateMsg("number.positive"));
  }, i.negative.get = function() {
    return ae(this.obj) ? this : this.validate(this.obj < 0, this.getValidateMsg("number.negative"));
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var ar2 = function(e) {
  function t(r, a) {
    e.call(this, r, Object.assign(Object.assign({}, a), { type: "array" })), this.validate(!a || !a.strict || ke(this.obj), this.getValidateMsg("type.array", { value: this.obj, type: this.type }));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var i = { empty: { configurable: true } };
  return t.prototype.length = function(r) {
    return this.obj ? this.validate(this.obj.length === r, this.getValidateMsg("array.length", { value: this.obj, length: r })) : this;
  }, t.prototype.minLength = function(r) {
    return this.obj ? this.validate(this.obj.length >= r, this.getValidateMsg("array.minLength", { value: this.obj, minLength: r })) : this;
  }, t.prototype.maxLength = function(r) {
    return this.obj ? this.validate(this.obj.length <= r, this.getValidateMsg("array.maxLength", { value: this.obj, maxLength: r })) : this;
  }, t.prototype.includes = function(r) {
    var a = this;
    return this.obj ? this.validate(r.every(function(l) {
      return a.obj.indexOf(l) !== -1;
    }), this.getValidateMsg("array.includes", { value: this.obj, includes: r })) : this;
  }, t.prototype.deepEqual = function(r) {
    return this.obj ? this.validate(De2(this.obj, r), this.getValidateMsg("array.deepEqual", { value: this.obj, deepEqual: r })) : this;
  }, i.empty.get = function() {
    return this.validate(wt(this.obj), this.getValidateMsg("array.empty", { value: this.obj }));
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var lr = function(e) {
  function t(r, a) {
    e.call(this, r, Object.assign(Object.assign({}, a), { type: "object" })), this.validate(!a || !a.strict || G(this.obj), this.getValidateMsg("type.object"));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var i = { empty: { configurable: true } };
  return t.prototype.deepEqual = function(r) {
    return this.obj ? this.validate(De2(this.obj, r), this.getValidateMsg("object.deepEqual", { deepEqual: r })) : this;
  }, t.prototype.hasKeys = function(r) {
    var a = this;
    return this.obj ? this.validate(r.every(function(l) {
      return a.obj[l];
    }), this.getValidateMsg("object.hasKeys", { keys: r })) : this;
  }, i.empty.get = function() {
    return this.validate(G(r = this.obj) && Object.keys(r).length === 0, this.getValidateMsg("object.empty"));
    var r;
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var or = function(e) {
  function t(r, a) {
    e.call(this, r, Object.assign(Object.assign({}, a), { type: "boolean" })), this.validate(!a || !a.strict || function(l) {
      return pe2.call(l) === "[object Boolean]";
    }(this.obj), this.getValidateMsg("type.boolean"));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var i = { true: { configurable: true }, false: { configurable: true } };
  return i.true.get = function() {
    return this.validate(this.obj === true, this.getValidateMsg("boolean.true"));
  }, i.false.get = function() {
    return this.validate(this.obj === false, this.getValidateMsg("boolean.false"));
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var nr = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var sr = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i");
var ur = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/;
var cr = function(e) {
  function t(r, a) {
    e.call(this, r, Object.assign(Object.assign({}, a), { type: "type" }));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var i = { email: { configurable: true }, url: { configurable: true }, ip: { configurable: true } };
  return i.email.get = function() {
    return this.type = "email", this.validate(this.obj === void 0 || nr.test(this.obj), this.getValidateMsg("type.email"));
  }, i.url.get = function() {
    return this.type = "url", this.validate(this.obj === void 0 || sr.test(this.obj), this.getValidateMsg("type.url"));
  }, i.ip.get = function() {
    return this.type = "ip", this.validate(this.obj === void 0 || ur.test(this.obj), this.getValidateMsg("type.ip"));
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var dr = function(e) {
  function t(r, a) {
    e.call(this, r, Object.assign(Object.assign({}, a), { type: "custom" }));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var i = { validate: { configurable: true } };
  return i.validate.get = function() {
    var r = this;
    return function(a, l) {
      var o;
      if (a)
        return (o = a(r.obj, r.addError.bind(r))) && o.then ? (l && o.then(function() {
          l && l(r.error);
        }, function(s) {
          console.error(s);
        }), [o, r]) : (l && l(r.error), r.error);
    };
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var je2 = function(e, t) {
  return new $t(e, Object.assign({ field: "value" }, t));
};
je2.globalConfig = {}, je2.setGlobalConfig = function(e) {
  je2.globalConfig = e || {};
};
var $t = function(e, t) {
  var i = je2.globalConfig, r = Object.assign(Object.assign(Object.assign({}, i), t), { validateMessages: Ke(i.validateMessages, t.validateMessages) });
  this.string = new rr(e, r), this.number = new ir(e, r), this.array = new ar2(e, r), this.object = new lr(e, r), this.boolean = new or(e, r), this.type = new cr(e, r), this.custom = new dr(e, r);
};
var Ae = function(e, t) {
  t === void 0 && (t = {}), this.schema = e, this.options = t;
};
Ae.prototype.messages = function(e) {
  this.options = Object.assign(Object.assign({}, this.options), { validateMessages: Ke(this.options.validateMessages, e) });
}, Ae.prototype.validate = function(e, t) {
  var i = this;
  if (G(e)) {
    var r = [], a = null;
    this.schema && Object.keys(this.schema).forEach(function(o) {
      if (ke(i.schema[o]))
        for (var s = function(w) {
          var p = i.schema[o][w], h = p.type, L = p.message;
          if (!h && !p.validator)
            throw "You must specify a type to field " + o + "!";
          var g = Object.assign(Object.assign({}, i.options), { message: L, field: o });
          "ignoreEmptyString" in p && (g.ignoreEmptyString = p.ignoreEmptyString), "strict" in p && (g.strict = p.strict);
          var x = new $t(e[o], g), f = x.type[h] || null;
          if (!f) {
            if (p.validator)
              return f = x.custom.validate(p.validator), void (Object.prototype.toString.call(f) === "[object Array]" && f[0].then ? r.push({ function: f[0], _this: f[1], key: o }) : f && l(o, f));
            f = x[h];
          }
          if (Object.keys(p).forEach(function(m) {
            p.required && (f = f.isRequired), m !== "message" && f[m] && p[m] && typeof f[m] == "object" && (f = f[m]), f[m] && p[m] !== void 0 && typeof f[m] == "function" && (f = f[m](p[m]));
          }), f.collect(function(m) {
            m && l(o, m);
          }), a)
            return "break";
        }, u = 0; u < i.schema[o].length && s(u) !== "break"; u++)
          ;
    }), r.length > 0 ? Promise.all(r.map(function(o) {
      return o.function;
    })).then(function() {
      r.forEach(function(o) {
        o._this.error && l(o.key, o._this.error);
      }), t && t(a);
    }) : t && t(a);
  }
  function l(o, s) {
    a || (a = {}), a[o] && !s.requiredError || (a[o] = s);
  }
};
var Ct = Symbol("RowContextInjectionKey");
var pr = je(defineComponent({ name: "Row", props: { gutter: { type: [Number, Object, Array], default: 0 }, justify: { type: String, default: "start" }, align: { type: String, default: "start" }, div: { type: Boolean }, wrap: { type: Boolean, default: true } }, setup(e) {
  const { gutter: t, align: i, justify: r, div: a, wrap: l } = toRefs(e), o = pe("row"), s = computed(() => ({ [`${o}`]: !a.value, [`${o}-nowrap`]: !l.value, [`${o}-align-${i.value}`]: i.value, [`${o}-justify-${r.value}`]: r.value })), u = computed(() => Array.isArray(t.value) ? t.value[0] : t.value), w = computed(() => Array.isArray(t.value) ? t.value[1] : 0), p = We(u, 0), h = We(w, 0), L = computed(() => {
    const x = {};
    if ((p.value || h.value) && !a.value) {
      const f = -p.value / 2, m = -h.value / 2;
      f && (x.marginLeft = `${f}px`, x.marginRight = `${f}px`), m && (x.marginTop = `${m}px`, x.marginBottom = `${m}px`);
    }
    return x;
  }), g = computed(() => [p.value, h.value]);
  return provide(Ct, reactive({ gutter: g, div: a })), { classNames: s, styles: L };
} }), [["render", function(e, t, i, r, a, l) {
  return openBlock(), createElementBlock("div", { class: normalizeClass(e.classNames), style: normalizeStyle(e.styles) }, [renderSlot(e.$slots, "default")], 6);
}]]);
var fr = Object.defineProperty;
var ht = Object.getOwnPropertySymbols;
var hr = Object.prototype.hasOwnProperty;
var br = Object.prototype.propertyIsEnumerable;
var bt = (e, t, i) => t in e ? fr(e, t, { enumerable: true, configurable: true, writable: true, value: i }) : e[t] = i;
var qe = (e, t) => {
  for (var i in t || (t = {}))
    hr.call(t, i) && bt(e, i, t[i]);
  if (ht)
    for (var i of ht(t))
      br.call(t, i) && bt(e, i, t[i]);
  return e;
};
var gr = je(defineComponent({ name: "Col", props: { span: { type: Number, default: 24 }, offset: { type: Number }, order: { type: Number }, xs: { type: [Number, Object] }, sm: { type: [Number, Object] }, md: { type: [Number, Object] }, lg: { type: [Number, Object] }, xl: { type: [Number, Object] }, xxl: { type: [Number, Object] }, flex: { type: [Number, String] } }, setup(e) {
  const t = pe("col"), i = inject(Ct, {}), r = computed(() => function(h) {
    return Tl(h) && (["initial", "auto", "none"].includes(h) || /^\d+$/.test(h)) || me(h) ? h : Tl(h) && /^\d+(px|em|rem|%)$/.test(h) ? `0 0 ${h}` : void 0;
  }(e.flex)), a = computed(() => {
    const { div: h } = i, { span: L, offset: g, order: x, xs: f, sm: m, md: k, lg: q, xl: V, xxl: E } = e, M = { [`${t}`]: !h, [`${t}-order-${x}`]: x, [`${t}-${L}`]: !(h || f || m || k || q || V || E), [`${t}-offset-${g}`]: g && g > 0 }, P = { xs: f, sm: m, md: k, lg: q, xl: V, xxl: E };
    return Object.keys(P).forEach((c) => {
      const d = P[c];
      d && me(d) ? M[`${t}-${c}-${d}`] = true : d && De(d) && (M[`${t}-${c}-${d.span}`] = d.span, M[`${t}-${c}-offset-${d.offset}`] = d.offset, M[`${t}-${c}-order-${d.order}`] = d.order);
    }), M;
  }), l = computed(() => r.value ? t : a.value), o = computed(() => {
    const { gutter: h, div: L } = i, g = {};
    if (Array.isArray(h) && !L) {
      const x = h[0] && h[0] / 2 || 0, f = h[1] && h[1] / 2 || 0;
      x && (g.paddingLeft = `${x}px`, g.paddingRight = `${x}px`), f && (g.paddingTop = `${f}px`, g.paddingBottom = `${f}px`);
    }
    return g;
  }), s = computed(() => r.value ? { flex: r.value } : {}), u = computed(() => ar(e, $e)), w = function(h) {
    return computed(() => {
      const { val: L, key: g, xs: x, sm: f, md: m, lg: k, xl: q, xxl: V } = h.value;
      if (!(x || f || m || k || q || V))
        return L;
      const E = {};
      return $e.forEach((M) => {
        const P = h.value[M];
        me(P) ? E[M] = P : De(P) && me(P[g]) && (E[M] = P[g]);
      }), E;
    });
  }(computed(() => qe({ val: e.span, key: "span" }, u.value))), p = We(w, 24, true);
  return { visible: computed(() => !!p.value), classNames: l, styles: computed(() => qe(qe({}, o.value), s.value)) };
} }), [["render", function(e, t, i, r, a, l) {
  return e.visible ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(e.classNames), style: normalizeStyle(e.styles) }, [renderSlot(e.$slots, "default")], 6)) : createCommentVNode("v-if", true);
}]]);
var vr = defineComponent({ name: "IconQuestionCircle", props: { size: { type: [Number, String] }, strokeWidth: { type: Number, default: 4 }, strokeLinecap: { type: String, default: "butt", validator: (e) => ["butt", "round", "square"].includes(e) }, strokeLinejoin: { type: String, default: "miter", validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e) }, rotate: Number, spin: Boolean }, emits: { click: (e) => true }, setup(e, { emit: t }) {
  const i = pe("icon");
  return { cls: computed(() => [i, `${i}-question-circle`, { [`${i}-spin`]: e.spin }]), innerStyle: computed(() => {
    const r = {};
    return e.size && (r.fontSize = me(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
  }), onClick: (r) => {
    t("click", r);
  } };
} });
var mr = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
var yr = [createBaseVNode("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z" }, null, -1), createBaseVNode("path", { d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465" }, null, -1)];
var Ve = je(vr, [["render", function(e, t, i, r, a, l) {
  return openBlock(), createElementBlock("svg", { viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", class: normalizeClass(e.cls), style: normalizeStyle(e.innerStyle), "stroke-width": e.strokeWidth, "stroke-linecap": e.strokeLinecap, "stroke-linejoin": e.strokeLinejoin, onClick: t[0] || (t[0] = (...o) => e.onClick && e.onClick(...o)) }, yr, 14, mr);
}]]);
var jr = defineComponent({ name: "FormItemLabel", components: { ResizeObserver: qt, Tooltip: X2, IconQuestionCircle: Object.assign(Ve, { install: (e, t) => {
  var i;
  const r = (i = t == null ? void 0 : t.iconPrefix) != null ? i : "";
  e.component(r + Ve.name, Ve);
} }) }, props: { required: { type: Boolean, default: false }, showColon: { type: Boolean, default: false }, component: { type: String, default: "label" }, asteriskPosition: { type: String, default: "start" }, tooltip: { type: String }, attrs: Object }, setup() {
  const e = pe("form-item-label"), t = inject(G4, void 0), i = getCurrentInstance(), r = ref();
  return onMounted(() => {
    r.value && me(r.value.offsetWidth) && (t == null || t.setLabelWidth(r.value.offsetWidth, i == null ? void 0 : i.uid));
  }), onBeforeUnmount(() => {
    t == null || t.removeLabelWidth(i == null ? void 0 : i.uid);
  }), { prefixCls: e, labelRef: r, handleResize: () => {
    r.value && me(r.value.offsetWidth) && (t == null || t.setLabelWidth(r.value.offsetWidth, i == null ? void 0 : i.uid));
  } };
} });
var xr = [createBaseVNode("svg", { fill: "currentColor", viewBox: "0 0 1024 1024", width: "1em", height: "1em" }, [createBaseVNode("path", { d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z" })], -1)];
var Or = [createBaseVNode("svg", { fill: "currentColor", viewBox: "0 0 1024 1024", width: "1em", height: "1em" }, [createBaseVNode("path", { d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z" })], -1)];
var wr = je(jr, [["render", function(e, t, i, r, a, l) {
  const o = resolveComponent("icon-question-circle"), s = resolveComponent("Tooltip"), u = resolveComponent("ResizeObserver");
  return openBlock(), createBlock(u, { onResize: e.handleResize }, { default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(e.component), mergeProps({ ref: "labelRef", class: e.prefixCls }, e.attrs), { default: withCtx(() => [e.required && e.asteriskPosition === "start" ? (openBlock(), createElementBlock("strong", { key: 0, class: normalizeClass(`${e.prefixCls}-required-symbol`) }, xr, 2)) : createCommentVNode("v-if", true), renderSlot(e.$slots, "default"), e.tooltip ? (openBlock(), createBlock(s, { key: 1, content: e.tooltip }, { default: withCtx(() => [createVNode(o, { class: normalizeClass(`${e.prefixCls}-tooltip`) }, null, 8, ["class"])]), _: 1 }, 8, ["content"])) : createCommentVNode("v-if", true), e.required && e.asteriskPosition === "end" ? (openBlock(), createElementBlock("strong", { key: 2, class: normalizeClass(`${e.prefixCls}-required-symbol`) }, Or, 2)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(e.showColon ? ":" : ""), 1)]), _: 3 }, 16, ["class"]))]), _: 3 }, 8, ["onResize"]);
}]]);
var $r = je(defineComponent({ name: "FormItemMessage", props: { error: { type: Array, default: () => [] }, help: String }, setup: () => ({ prefixCls: pe("form-item-message") }) }), [["render", function(e, t, i, r, a, l) {
  return e.error.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e.error, (o) => (openBlock(), createBlock(Transition, { key: o, name: "form-blink", appear: "" }, { default: withCtx(() => [createBaseVNode("div", { role: "alert", class: normalizeClass([e.prefixCls]) }, toDisplayString(o), 3)]), _: 2 }, 1024))), 128)) : e.help || e.$slots.help ? (openBlock(), createBlock(Transition, { key: 1, name: "form-blink", appear: "" }, { default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([e.prefixCls, `${e.prefixCls}-help`]) }, [renderSlot(e.$slots, "help", {}, () => [createTextVNode(toDisplayString(e.help), 1)])], 2)]), _: 3 })) : createCommentVNode("v-if", true);
}]]);
var Cr = Object.defineProperty;
var Ce = Object.getOwnPropertySymbols;
var St = Object.prototype.hasOwnProperty;
var kt = Object.prototype.propertyIsEnumerable;
var gt = (e, t, i) => t in e ? Cr(e, t, { enumerable: true, configurable: true, writable: true, value: i }) : e[t] = i;
var vt = (e, t) => {
  for (var i in t || (t = {}))
    St.call(t, i) && gt(e, i, t[i]);
  if (Ce)
    for (var i of Ce(t))
      kt.call(t, i) && gt(e, i, t[i]);
  return e;
};
var Fe = je(defineComponent({ name: "FormItem", components: { ArcoRow: pr, ArcoCol: gr, FormItemLabel: wr, FormItemMessage: $r }, props: { field: { type: String, default: "" }, label: String, tooltip: { type: String }, showColon: { type: Boolean, default: false }, noStyle: { type: Boolean, default: false }, disabled: { type: Boolean, default: void 0 }, help: String, extra: String, required: { type: Boolean, default: false }, asteriskPosition: { type: String, default: "start" }, rules: { type: [Object, Array] }, validateStatus: { type: String }, validateTrigger: { type: [String, Array], default: "change" }, labelColProps: Object, wrapperColProps: Object, hideLabel: { type: Boolean, default: false }, hideAsterisk: { type: Boolean, default: false }, labelColStyle: Object, wrapperColStyle: Object, rowProps: Object, rowClass: [String, Array, Object], contentClass: [String, Array, Object], contentFlex: { type: Boolean, default: true }, mergeProps: { type: [Boolean, Function], default: true }, labelColFlex: { type: [Number, String] }, feedback: { type: Boolean, default: false }, labelComponent: { type: String, default: "label" }, labelAttrs: Object }, setup(e) {
  const t = pe("form-item"), { field: i } = toRefs(e), r = inject(G4, {}), { autoLabelWidth: a, layout: l } = toRefs(r), { i18nMessage: o } = ea(), s = computed(() => {
    var n;
    const j = vt({}, (n = e.labelColProps) != null ? n : r.labelColProps);
    return e.labelColFlex ? j.flex = e.labelColFlex : r.autoLabelWidth && (j.flex = `${r.maxLabelWidth}px`), j;
  }), u = computed(() => {
    var n;
    const j = vt({}, (n = e.wrapperColProps) != null ? n : r.wrapperColProps);
    return i.value && (j.id = Ot(r.id, i.value)), (e.labelColFlex || r.autoLabelWidth) && (j.flex = "auto"), j;
  }), w = computed(() => {
    var n;
    return (n = e.labelColStyle) != null ? n : r.labelColStyle;
  }), p = computed(() => {
    var n;
    return (n = e.wrapperColStyle) != null ? n : r.wrapperColStyle;
  }), h = on(r.model, e.field), L = reactive({}), g = reactive({}), x = computed(() => ((n) => {
    let j = "";
    for (const O of Object.keys(n)) {
      const _ = n[O];
      _ && (!j || dt.indexOf(_) > dt.indexOf(j)) && (j = n[O]);
    }
    return j;
  })(L)), f = computed(() => ((n) => {
    const j = [];
    for (const O of Object.keys(n)) {
      const _ = n[O];
      _ && j.push(_);
    }
    return j;
  })(g)), m = ref(false), k = computed(() => on(r.model, e.field)), q = computed(() => {
    var n;
    return !!((n = e.disabled) != null ? n : r != null && r.disabled);
  }), V = computed(() => {
    var n;
    return (n = e.validateStatus) != null ? n : x.value;
  }), E = computed(() => V.value === "error"), M = computed(() => {
    var n, j, O;
    const _ = [].concat((O = (j = e.rules) != null ? j : (n = r == null ? void 0 : r.rules) == null ? void 0 : n[e.field]) != null ? O : []), J = _.some((H) => H.required);
    return e.required && !J ? [{ required: true }].concat(_) : _;
  }), P = computed(() => M.value.some((n) => n.required)), c = e.noStyle ? inject(Q0, void 0) : void 0, d = (n, { status: j, message: O }) => {
    L[n] = j, g[n] = O, e.noStyle && (c == null || c.updateValidateState(n, { status: j, message: O }));
  }, y = computed(() => e.feedback && V.value ? V.value : void 0), v = () => {
    var n;
    if (m.value)
      return Promise.resolve();
    const j = M.value;
    if (!i.value || j.length === 0)
      return x.value && $(), Promise.resolve();
    const O = i.value, _ = k.value;
    d(O, { status: "", message: "" });
    const J = new Ae({ [O]: j.map((H) => {
      var F = ((W, R) => {
        var A = {};
        for (var B in W)
          St.call(W, B) && R.indexOf(B) < 0 && (A[B] = W[B]);
        if (W != null && Ce)
          for (var B of Ce(W))
            R.indexOf(B) < 0 && kt.call(W, B) && (A[B] = W[B]);
        return A;
      })(H, []);
      return F.type || F.validator || (F.type = "string"), F;
    }) }, { ignoreEmptyString: true, validateMessages: (n = o.value.form) == null ? void 0 : n.validateMessages });
    return new Promise((H) => {
      J.validate({ [O]: _ }, (F) => {
        var W;
        const R = !!(F != null && F[O]);
        d(O, { status: R ? "error" : "", message: (W = F == null ? void 0 : F[O].message) != null ? W : "" });
        const A = R ? { label: e.label, field: i.value, value: F[O].value, type: F[O].type, isRequiredError: !!F[O].requiredError, message: F[O].message } : void 0;
        H(A);
      });
    });
  }, C = computed(() => [].concat(e.validateTrigger)), S = computed(() => C.value.reduce((n, j) => {
    switch (j) {
      case "change":
        return n.onChange = () => {
          v();
        }, n;
      case "input":
        return n.onInput = () => {
          nextTick(() => {
            v();
          });
        }, n;
      case "focus":
        return n.onFocus = () => {
          v();
        }, n;
      case "blur":
        return n.onBlur = () => {
          v();
        }, n;
      default:
        return n;
    }
  }, {}));
  provide(Q0, reactive({ eventHandlers: S, size: r && toRef(r, "size"), disabled: q, error: E, feedback: y, updateValidateState: d }));
  const $ = () => {
    i.value && d(i.value, { status: "", message: "" });
  }, T = reactive({ field: i, disabled: q, error: E, validate: v, clearValidate: $, resetField: () => {
    $(), m.value = true, r != null && r.model && i.value && Mi(r.model, i.value, h), nextTick(() => {
      m.value = false;
    });
  }, setField: (n) => {
    var j, O;
    i.value && (m.value = true, "value" in n && (r != null && r.model) && i.value && Mi(r.model, i.value, n.value), (n.status || n.message) && d(i.value, { status: (j = n.status) != null ? j : "", message: (O = n.message) != null ? O : "" }), nextTick(() => {
      m.value = false;
    }));
  } });
  onMounted(() => {
    var n;
    T.field && ((n = r.addField) == null || n.call(r, T));
  }), onBeforeUnmount(() => {
    var n;
    T.field && ((n = r.removeField) == null || n.call(r, T));
  });
  const ue = computed(() => [t, `${t}-layout-${r.layout}`, { [`${t}-error`]: E.value, [`${t}-status-${V.value}`]: !!V.value }, e.rowClass]), ce = computed(() => [`${t}-label-col`, { [`${t}-label-col-left`]: r.labelAlign === "left", [`${t}-label-col-flex`]: r.autoLabelWidth || e.labelColFlex }]), de = computed(() => [`${t}-wrapper-col`, { [`${t}-wrapper-col-flex`]: !u.value }]);
  return { prefixCls: t, cls: ue, isRequired: P, isError: E, finalMessage: f, mergedLabelCol: s, mergedWrapperCol: u, labelColCls: ce, autoLabelWidth: a, layout: l, mergedLabelStyle: w, wrapperColCls: de, mergedWrapperStyle: p };
} }), [["render", function(e, t, i, r, a, l) {
  var o;
  const s = resolveComponent("FormItemLabel"), u = resolveComponent("ArcoCol"), w = resolveComponent("FormItemMessage"), p = resolveComponent("ArcoRow");
  return e.noStyle ? renderSlot(e.$slots, "default", { key: 0 }) : (openBlock(), createBlock(p, mergeProps({ key: 1, class: [e.cls, { [`${e.prefixCls}-has-help`]: !!((o = e.$slots.help) != null ? o : e.help) }], wrap: !(e.labelColFlex || e.autoLabelWidth), div: e.layout !== "horizontal" || e.hideLabel }, e.rowProps), { default: withCtx(() => [e.hideLabel ? createCommentVNode("v-if", true) : (openBlock(), createBlock(u, mergeProps({ key: 0, class: e.labelColCls, style: e.mergedLabelStyle }, e.mergedLabelCol), { default: withCtx(() => [createVNode(s, { required: !e.hideAsterisk && e.isRequired, "show-colon": e.showColon, "asterisk-position": e.asteriskPosition, component: e.labelComponent, attrs: e.labelAttrs, tooltip: e.tooltip }, { default: withCtx(() => [e.$slots.label || e.label ? renderSlot(e.$slots, "label", { key: 0 }, () => [createTextVNode(toDisplayString(e.label), 1)]) : createCommentVNode("v-if", true)]), _: 3 }, 8, ["required", "show-colon", "asterisk-position", "component", "attrs", "tooltip"])]), _: 3 }, 16, ["class", "style"])), createVNode(u, mergeProps({ class: e.wrapperColCls, style: e.mergedWrapperStyle }, e.mergedWrapperCol), { default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(`${e.prefixCls}-content-wrapper`) }, [createBaseVNode("div", { class: normalizeClass([`${e.prefixCls}-content`, { [`${e.prefixCls}-content-flex`]: e.contentFlex }, e.contentClass]) }, [renderSlot(e.$slots, "default")], 2)], 2), e.isError || e.$slots.help || e.help ? (openBlock(), createBlock(w, { key: 0, error: e.finalMessage, help: e.help }, createSlots({ _: 2 }, [e.$slots.help ? { name: "help", fn: withCtx(() => [renderSlot(e.$slots, "help")]) } : void 0]), 1032, ["error", "help"])) : createCommentVNode("v-if", true), e.$slots.extra || e.extra ? (openBlock(), createElementBlock("div", { key: 1, class: normalizeClass(`${e.prefixCls}-extra`) }, [renderSlot(e.$slots, "extra", {}, () => [createTextVNode(toDisplayString(e.extra), 1)])], 2)) : createCommentVNode("v-if", true)]), _: 3 }, 16, ["class", "style"])]), _: 3 }, 16, ["class", "wrap", "div"]));
}]]);
var Lr = Object.assign(Ee, { Item: Fe, install: (e, t) => {
  $l(e, t);
  const i = Sl(t);
  e.component(i + Ee.name, Ee), e.component(i + Fe.name, Fe);
} });
var Pe = defineComponent({ name: "Space", props: { align: { type: String }, direction: { type: String, default: "horizontal" }, size: { type: [Number, String, Array], default: "small" }, wrap: { type: Boolean }, fill: { type: Boolean } }, setup(e, { slots: t }) {
  const i = pe("space"), r = computed(() => {
    var s;
    return (s = e.align) != null ? s : e.direction === "horizontal" ? "center" : "";
  }), a = computed(() => [i, { [`${i}-${e.direction}`]: e.direction, [`${i}-align-${r.value}`]: r.value, [`${i}-wrap`]: e.wrap, [`${i}-fill`]: e.fill }]);
  function l(s) {
    if (me(s))
      return s;
    switch (s) {
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
  const o = (s) => {
    const u = {}, w = `${l(pl(e.size) ? e.size[0] : e.size)}px`, p = `${l(pl(e.size) ? e.size[1] : e.size)}px`;
    return s ? e.wrap ? { marginBottom: p } : {} : (e.direction === "horizontal" && (u.marginRight = w), (e.direction === "vertical" || e.wrap) && (u.marginBottom = p), u);
  };
  return () => {
    var s;
    const u = Gn((s = t.default) == null ? void 0 : s.call(t), true).filter((w) => w.type !== Comment);
    return createVNode("div", { class: a.value }, [u.map((w, p) => {
      var h, L;
      const g = t.split && p > 0;
      return createVNode(Fragment, { key: (h = w.key) != null ? h : `item-${p}` }, [g && createVNode("div", { class: `${i}-item-split`, style: o(false) }, [(L = t.split) == null ? void 0 : L.call(t)]), createVNode("div", { class: `${i}-item`, style: o(p === u.length - 1) }, [w])]);
    })]);
  };
} });
var Mr = Object.assign(Pe, { install: (e, t) => {
  $l(e, t);
  const i = Sl(t);
  e.component(i + Pe.name, Pe);
} });

export {
  pr,
  gr,
  Fe,
  Lr,
  Mr
};
//# sourceMappingURL=chunk-PX5V45XI.js.map
