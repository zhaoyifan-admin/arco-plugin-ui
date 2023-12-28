import {
  $i,
  De,
  Fn,
  Ie,
  Jl,
  Ue,
  Ut,
  Vt,
  ap,
  ar,
  dt,
  kt,
  nv,
  oa,
  sn,
  tf,
  ve,
  xe,
  xt
} from "./chunk-KZHBUNAO.js";
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

// node_modules/.pnpm/vue-arco-ui@0.2.0_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-67f15859.js
function tt(e) {
  return typeof e == "object" && e != null && e.nodeType === 1;
}
function rt(e, t) {
  return (!t || e !== "hidden") && e !== "visible" && e !== "clip";
}
function Le(e, t) {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    var i = getComputedStyle(e, null);
    return rt(i.overflowY, t) || rt(i.overflowX, t) || function(r) {
      var o = function(a) {
        if (!a.ownerDocument || !a.ownerDocument.defaultView)
          return null;
        try {
          return a.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      }(r);
      return !!o && (o.clientHeight < r.scrollHeight || o.clientWidth < r.scrollWidth);
    }(e);
  }
  return false;
}
function he(e, t, i, r, o, a, l, c) {
  return a < e && l > t || a > e && l < t ? 0 : a <= e && c <= i || l >= t && c >= i ? a - e - r : l > t && c < i || a < e && c > i ? l - t + o : 0;
}
var it = function(e, t) {
  var i = window, r = t.scrollMode, o = t.block, a = t.inline, l = t.boundary, c = t.skipOverflowHiddenElements, d = typeof l == "function" ? l : function(wt) {
    return wt !== l;
  };
  if (!tt(e))
    throw new TypeError("Invalid target");
  for (var $, b, f = document.scrollingElement || document.documentElement, E = [], m = e; tt(m) && d(m); ) {
    if ((m = (b = ($ = m).parentElement) == null ? $.getRootNode().host || null : b) === f) {
      E.push(m);
      break;
    }
    m != null && m === document.body && Le(m) && !Le(document.documentElement) || m != null && Le(m, c) && E.push(m);
  }
  for (var x = i.visualViewport ? i.visualViewport.width : innerWidth, p = i.visualViewport ? i.visualViewport.height : innerHeight, v = window.scrollX || pageXOffset, k = window.scrollY || pageYOffset, V = e.getBoundingClientRect(), q = V.height, M = V.width, L = V.top, F = V.right, s = V.bottom, u = V.left, y = o === "start" || o === "nearest" ? L : o === "end" ? s : L + q / 2, g = a === "center" ? u + M / 2 : a === "end" ? F : u, C = [], S = 0; S < E.length; S++) {
    var w = E[S], T = w.getBoundingClientRect(), se = T.height, ue = T.width, ce = T.top, n = T.right, j = T.bottom, O = T.left;
    if (r === "if-needed" && L >= 0 && u >= 0 && s <= p && F <= x && L >= ce && s <= j && u >= O && F <= n)
      return C;
    var _ = getComputedStyle(w), X = parseInt(_.borderLeftWidth, 10), H = parseInt(_.borderTopWidth, 10), P = parseInt(_.borderRightWidth, 10), B = parseInt(_.borderBottomWidth, 10), R = 0, N = 0, z = "offsetWidth" in w ? w.offsetWidth - w.clientWidth - X - P : 0, fe = "offsetHeight" in w ? w.offsetHeight - w.clientHeight - H - B : 0, De2 = "offsetWidth" in w ? w.offsetWidth === 0 ? 0 : ue / w.offsetWidth : 0, Ke = "offsetHeight" in w ? w.offsetHeight === 0 ? 0 : se / w.offsetHeight : 0;
    if (f === w)
      R = o === "start" ? y : o === "end" ? y - p : o === "nearest" ? he(k, k + p, p, H, B, k + y, k + y + q, q) : y - p / 2, N = a === "start" ? g : a === "center" ? g - x / 2 : a === "end" ? g - x : he(v, v + x, x, X, P, v + g, v + g + M, M), R = Math.max(0, R + k), N = Math.max(0, N + v);
    else {
      R = o === "start" ? y - ce - H : o === "end" ? y - j + B + fe : o === "nearest" ? he(ce, j, se, H, B + fe, y, y + q, q) : y - (ce + se / 2) + fe / 2, N = a === "start" ? g - O - X : a === "center" ? g - (O + ue / 2) + z / 2 : a === "end" ? g - n + P + z : he(O, n, ue, X, P + z, g, g + M, M);
      var Ge = w.scrollLeft, Ue2 = w.scrollTop;
      y += Ue2 - (R = Math.max(0, Math.min(Ue2 + R / Ke, w.scrollHeight - se / Ke + fe))), g += Ge - (N = Math.max(0, Math.min(Ge + N / De2, w.scrollWidth - ue / De2 + z)));
    }
    C.push({ el: w, top: R, left: N });
  }
  return C;
};
var At = Object.defineProperty;
var Tt = Object.defineProperties;
var It = Object.getOwnPropertyDescriptors;
var ot = Object.getOwnPropertySymbols;
var Ht = Object.prototype.hasOwnProperty;
var Dt = Object.prototype.propertyIsEnumerable;
var at = (e, t, i) => t in e ? At(e, t, { enumerable: true, configurable: true, writable: true, value: i }) : e[t] = i;
var we = ["xxl", "xl", "lg", "md", "sm", "xs"];
var be = { xs: "(max-width: 575px)", sm: "(min-width: 576px)", md: "(min-width: 768px)", lg: "(min-width: 992px)", xl: "(min-width: 1200px)", xxl: "(min-width: 1600px)" };
var ee = [];
var Kt = -1;
var ge = {};
var lt = { matchHandlers: {}, dispatch: (e, t) => (ge = e, !(ee.length < 1) && (ee.forEach((i) => {
  i.func(ge, t);
}), true)), subscribe(e) {
  ee.length === 0 && this.register();
  const t = (++Kt).toString();
  return ee.push({ token: t, func: e }), e(ge, null), t;
}, unsubscribe(e) {
  ee = ee.filter((t) => t.token !== e), ee.length === 0 && this.unregister();
}, unregister() {
  Object.keys(be).forEach((e) => {
    const t = be[e];
    if (!t)
      return;
    const i = this.matchHandlers[t];
    i && i.mql && i.listener && (i.mql.removeEventListener ? i.mql.removeEventListener("change", i.listener) : i.mql.removeListener(i.listener));
  });
}, register() {
  Object.keys(be).forEach((e) => {
    const t = be[e];
    if (!t)
      return;
    const i = ({ matches: o }) => {
      var a;
      this.dispatch((a = ((l, c) => {
        for (var d in c || (c = {}))
          Ht.call(c, d) && at(l, d, c[d]);
        if (ot)
          for (var d of ot(c))
            Dt.call(c, d) && at(l, d, c[d]);
        return l;
      })({}, ge), Tt(a, It({ [e]: o }))), e);
    }, r = window.matchMedia(t);
    r.addEventListener ? r.addEventListener("change", i) : r.addListener(i), this.matchHandlers[t] = { mql: r, listener: i }, i(r);
  });
} };
function nt(e) {
  return De(e);
}
function _e(e, t, i = false) {
  const r = ref({ xs: true, sm: true, md: true, lg: true, xl: true, xxl: true }), o = computed(() => {
    let l = t;
    if (nt(e.value))
      for (let c = 0; c < we.length; c++) {
        const d = we[c];
        if ((r.value[d] || d === "xs" && i) && e.value[d] !== void 0) {
          l = e.value[d];
          break;
        }
      }
    else
      l = e.value;
    return l;
  });
  let a = "";
  return onMounted(() => {
    a = lt.subscribe((l) => {
      nt(e.value) && (r.value = l);
    });
  }), onUnmounted(() => {
    a && lt.unsubscribe(a);
  }), o;
}
function st(e) {
  return e === Object(e) && Object.keys(e).length !== 0;
}
function Gt(e, t) {
  var i = e.isConnected || e.ownerDocument.documentElement.contains(e);
  if (st(t) && typeof t.behavior == "function")
    return t.behavior(i ? it(e, t) : []);
  if (i) {
    var r = function(o) {
      return o === false ? { block: "end", inline: "nearest" } : st(o) ? o : { block: "start", inline: "nearest" };
    }(t);
    return function(o, a) {
      a === void 0 && (a = "auto");
      var l = "scrollBehavior" in document.body.style;
      o.forEach(function(c) {
        var d = c.el, $ = c.top, b = c.left;
        d.scroll && l ? d.scroll({ top: $, left: b, behavior: a }) : (d.scrollTop = $, d.scrollLeft = b);
      });
    }(it(e, r), r.behavior);
  }
}
var ut = ["success", "warning", "error", "validating"];
var vt = (e, t) => {
  const i = t.replace(/[[.]/g, "_").replace(/\]/g, "");
  return e ? `${e}-${i}` : `${i}`;
};
var Ut2 = Object.defineProperty;
var ct = Object.getOwnPropertySymbols;
var Qt = Object.prototype.hasOwnProperty;
var Xt = Object.prototype.propertyIsEnumerable;
var dt2 = (e, t, i) => t in e ? Ut2(e, t, { enumerable: true, configurable: true, writable: true, value: i }) : e[t] = i;
var Yt = defineComponent({ name: "Form", props: { model: { type: Object, required: true }, layout: { type: String, default: "horizontal" }, size: { type: String }, labelColProps: { type: Object, default: () => ({ span: 5, offset: 0 }) }, wrapperColProps: { type: Object, default: () => ({ span: 19, offset: 0 }) }, labelColStyle: Object, wrapperColStyle: Object, labelAlign: { type: String, default: "right" }, disabled: { type: Boolean, default: void 0 }, rules: { type: Object }, autoLabelWidth: { type: Boolean, default: false }, id: { type: String }, scrollToFirstError: { type: Boolean, default: false } }, emits: { submit: (e, t) => true, submitSuccess: (e, t) => true, submitFailed: (e, t) => true }, setup(e, { emit: t }) {
  const i = ve("form"), r = ref(), { id: o, model: a, layout: l, disabled: c, labelAlign: d, labelColProps: $, wrapperColProps: b, labelColStyle: f, wrapperColStyle: E, size: m, rules: x } = toRefs(e), { mergedSize: p } = Ut(m), v = computed(() => e.layout === "horizontal" && e.autoLabelWidth), k = [], V = reactive({}), q = computed(() => Math.max(...Object.values(V))), M = (s, u) => {
    const y = (r.value || document.body).querySelector(`#${vt(e.id, s)}`);
    y && Gt(y, ((g, C) => {
      for (var S in C || (C = {}))
        Qt.call(C, S) && dt2(g, S, C[S]);
      if (ct)
        for (var S of ct(C))
          Xt.call(C, S) && dt2(g, S, C[S]);
      return g;
    })({ behavior: "smooth", block: "nearest", scrollMode: "if-needed" }, u));
  }, L = (s) => {
    const u = Fn(e.scrollToFirstError) ? void 0 : e.scrollToFirstError;
    M(s, u);
  }, F = (s, u) => {
    const y = [];
    for (const g of k)
      (dt(s) && s.includes(g.field) || s === g.field) && y.push(g.validate());
    return Promise.all(y).then((g) => {
      const C = {};
      let S = false;
      return g.forEach((w) => {
        w && (S = true, C[w.field] = w);
      }), S && e.scrollToFirstError && L(Object.keys(C)[0]), Ue(u) && u(S ? C : void 0), S ? C : void 0;
    });
  };
  return provide(tf, reactive({ id: o, layout: l, disabled: c, labelAlign: d, labelColProps: $, wrapperColProps: b, labelColStyle: f, wrapperColStyle: E, model: a, size: p, rules: x, fields: k, touchedFields: [], addField: (s) => {
    s && s.field && k.push(s);
  }, removeField: (s) => {
    s && s.field && k.splice(k.indexOf(s), 1);
  }, validateField: F, setLabelWidth: (s, u) => {
    u && V[u] !== s && (V[u] = s);
  }, removeLabelWidth: (s) => {
    s && delete V[s];
  }, maxLabelWidth: q, autoLabelWidth: v })), { cls: computed(() => [i, `${i}-layout-${e.layout}`, `${i}-size-${p.value}`, { [`${i}-auto-label-width`]: e.autoLabelWidth }]), formRef: r, handleSubmit: (s) => {
    const u = [];
    k.forEach((y) => {
      u.push(y.validate());
    }), Promise.all(u).then((y) => {
      const g = {};
      let C = false;
      y.forEach((S) => {
        S && (C = true, g[S.field] = S);
      }), C ? (e.scrollToFirstError && L(Object.keys(g)[0]), t("submitFailed", { values: a.value, errors: g }, s)) : t("submitSuccess", a.value, s), t("submit", { values: a.value, errors: C ? g : void 0 }, s);
    });
  }, innerValidate: (s) => {
    const u = [];
    return k.forEach((y) => {
      u.push(y.validate());
    }), Promise.all(u).then((y) => {
      const g = {};
      let C = false;
      return y.forEach((S) => {
        S && (C = true, g[S.field] = S);
      }), C && e.scrollToFirstError && L(Object.keys(g)[0]), Ue(s) && s(C ? g : void 0), C ? g : void 0;
    });
  }, innerValidateField: F, innerResetFields: (s) => {
    const u = s ? [].concat(s) : [];
    k.forEach((y) => {
      (u.length === 0 || u.includes(y.field)) && y.resetField();
    });
  }, innerClearValidate: (s) => {
    const u = s ? [].concat(s) : [];
    k.forEach((y) => {
      (u.length === 0 || u.includes(y.field)) && y.clearValidate();
    });
  }, innerSetFields: (s) => {
    k.forEach((u) => {
      s[u.field] && u.setField(s[u.field]);
    });
  }, innerScrollToField: M };
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
var Me = Ie(Yt, [["render", function(e, t, i, r, o, a) {
  return openBlock(), createElementBlock("form", { ref: "formRef", class: normalizeClass(e.cls), onSubmit: t[0] || (t[0] = withModifiers((...l) => e.handleSubmit && e.handleSubmit(...l), ["prevent"])) }, [renderSlot(e.$slots, "default")], 34);
}]]);
var de = Object.prototype.toString;
function ke(e) {
  return de.call(e) === "[object Array]";
}
function Q(e) {
  return de.call(e) === "[object Object]";
}
function We(e) {
  return de.call(e) === "[object String]";
}
function Be(e) {
  return de.call(e) === "[object Function]";
}
function te(e) {
  return e == null || e === "";
}
function mt(e) {
  return ke(e) && !e.length;
}
var Ie2 = function(e, t) {
  if (typeof e != "object" || typeof t != "object")
    return e === t;
  if (Be(e) && Be(t))
    return e === t || e.toString() === t.toString();
  if (Object.keys(e).length !== Object.keys(t).length)
    return false;
  for (var i in e)
    if (!Ie2(e[i], t[i]))
      return false;
  return true;
};
var He = function(e, t) {
  var i = Object.assign({}, e);
  return Object.keys(t || {}).forEach(function(r) {
    var o = i[r], a = t == null ? void 0 : t[r];
    i[r] = Q(o) ? Object.assign(Object.assign({}, o), a) : a || o;
  }), i;
};
var Y = "#{field} is not a #{type} type";
var Zt = { required: "#{field} is required", type: { ip: Y, email: Y, url: Y, string: Y, number: Y, array: Y, object: Y, boolean: Y }, number: { min: "`#{value}` is not greater than `#{min}`", max: "`#{value}` is not less than `#{max}`", equal: "`#{value}` is not equal to `#{equal}`", range: "`#{value}` is not in range `#{min} ~ #{max}`", positive: "`#{value}` is not a positive number", negative: "`#{value}` is not a negative number" }, string: { maxLength: "#{field} cannot be longer than #{maxLength} characters", minLength: "#{field} must be at least #{minLength} characters", length: "#{field} must be exactly #{length} characters", match: "`#{value}` does not match pattern #{pattern}", uppercase: "`#{value}` must be all uppercase", lowercase: "`#{value}` must be all lowercased" }, array: { length: "#{field} must be exactly #{length} in length", minLength: "#{field} cannot be less than #{minLength} in length", maxLength: "#{field} cannot be greater than #{maxLength} in length", includes: "#{field} is not includes #{includes}", deepEqual: "#{field} is not deep equal with #{deepEqual}", empty: "#{field} is not an empty array" }, object: { deepEqual: "#{field} is not deep equal to expected value", hasKeys: "#{field} does not contain required fields", empty: "#{field} is not an empty object" }, boolean: { true: "Expect true but got `#{value}`", false: "Expect false but got `#{value}`" } };
var I = function(e, t) {
  var i = this;
  this.getValidateMsg = function(r, o) {
    o === void 0 && (o = {});
    var a = Object.assign(Object.assign({}, o), { value: i.obj, field: i.field, type: i.type }), l = function(c, d) {
      for (var $ = d.split("."), b = c, f = 0; f < $.length; f++)
        if ((b = b && b[$[f]]) === void 0)
          return b;
      return b;
    }(i.validateMessages, r);
    return Be(l) ? l(a) : We(l) ? l.replace(/\#\{.+?\}/g, function(c) {
      var d = c.slice(2, -1);
      if (d in a) {
        if (Q(a[d]) || ke(a[d]))
          try {
            return JSON.stringify(a[d]);
          } catch {
            return a[d];
          }
        return String(a[d]);
      }
      return c;
    }) : l;
  }, Q(t) && We(e) && t.trim ? this.obj = e.trim() : Q(t) && t.ignoreEmptyString && e === "" ? this.obj = void 0 : this.obj = e, this.message = t.message, this.type = t.type, this.error = null, this.field = t.field || t.type, this.validateMessages = He(Zt, t.validateMessages);
};
var ve2 = { not: { configurable: true }, isRequired: { configurable: true }, end: { configurable: true } };
ve2.not.get = function() {
  return this._not = !this._not, this;
}, ve2.isRequired.get = function() {
  if (te(this.obj) || mt(this.obj)) {
    var e = this.getValidateMsg("required");
    this.error = { value: this.obj, type: this.type, requiredError: true, message: this.message || (Q(e) ? e : (this._not ? "[NOT MODE]:" : "") + e) };
  }
  return this;
}, ve2.end.get = function() {
  return this.error;
}, I.prototype.addError = function(e) {
  !this.error && e && (this.error = { value: this.obj, type: this.type, message: this.message || (Q(e) ? e : (this._not ? "[NOT MODE]:" : "") + e) });
}, I.prototype.validate = function(e, t) {
  return (this._not ? e : !e) && this.addError(t), this;
}, I.prototype.collect = function(e) {
  e && e(this.error);
}, Object.defineProperties(I.prototype, ve2);
var Jt = function(e) {
  function t(r, o) {
    e.call(this, r, Object.assign(Object.assign({}, o), { type: "string" })), this.validate(!o || !o.strict || We(this.obj), this.getValidateMsg("type.string"));
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
    var o = r instanceof RegExp;
    return o && (r.lastIndex = 0), this.validate(this.obj === void 0 || o && r.test(this.obj), this.getValidateMsg("string.match", { pattern: r }));
  }, i.uppercase.get = function() {
    return this.obj ? this.validate(this.obj.toUpperCase() === this.obj, this.getValidateMsg("string.uppercase")) : this;
  }, i.lowercase.get = function() {
    return this.obj ? this.validate(this.obj.toLowerCase() === this.obj, this.getValidateMsg("string.lowercase")) : this;
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var er = function(e) {
  function t(r, o) {
    e.call(this, r, Object.assign(Object.assign({}, o), { type: "number" })), this.validate(!o || !o.strict || function(a) {
      return de.call(a) === "[object Number]" && a == a;
    }(this.obj), this.getValidateMsg("type.number"));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var i = { positive: { configurable: true }, negative: { configurable: true } };
  return t.prototype.min = function(r) {
    return te(this.obj) ? this : this.validate(this.obj >= r, this.getValidateMsg("number.min", { min: r }));
  }, t.prototype.max = function(r) {
    return te(this.obj) ? this : this.validate(this.obj <= r, this.getValidateMsg("number.max", { max: r }));
  }, t.prototype.equal = function(r) {
    return te(this.obj) ? this : this.validate(this.obj === r, this.getValidateMsg("number.equal", { equal: r }));
  }, t.prototype.range = function(r, o) {
    return te(this.obj) ? this : this.validate(this.obj >= r && this.obj <= o, this.getValidateMsg("number.range", { min: r, max: o }));
  }, i.positive.get = function() {
    return te(this.obj) ? this : this.validate(this.obj > 0, this.getValidateMsg("number.positive"));
  }, i.negative.get = function() {
    return te(this.obj) ? this : this.validate(this.obj < 0, this.getValidateMsg("number.negative"));
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var tr = function(e) {
  function t(r, o) {
    e.call(this, r, Object.assign(Object.assign({}, o), { type: "array" })), this.validate(!o || !o.strict || ke(this.obj), this.getValidateMsg("type.array", { value: this.obj, type: this.type }));
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
    var o = this;
    return this.obj ? this.validate(r.every(function(a) {
      return o.obj.indexOf(a) !== -1;
    }), this.getValidateMsg("array.includes", { value: this.obj, includes: r })) : this;
  }, t.prototype.deepEqual = function(r) {
    return this.obj ? this.validate(Ie2(this.obj, r), this.getValidateMsg("array.deepEqual", { value: this.obj, deepEqual: r })) : this;
  }, i.empty.get = function() {
    return this.validate(mt(this.obj), this.getValidateMsg("array.empty", { value: this.obj }));
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var rr = function(e) {
  function t(r, o) {
    e.call(this, r, Object.assign(Object.assign({}, o), { type: "object" })), this.validate(!o || !o.strict || Q(this.obj), this.getValidateMsg("type.object"));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var i = { empty: { configurable: true } };
  return t.prototype.deepEqual = function(r) {
    return this.obj ? this.validate(Ie2(this.obj, r), this.getValidateMsg("object.deepEqual", { deepEqual: r })) : this;
  }, t.prototype.hasKeys = function(r) {
    var o = this;
    return this.obj ? this.validate(r.every(function(a) {
      return o.obj[a];
    }), this.getValidateMsg("object.hasKeys", { keys: r })) : this;
  }, i.empty.get = function() {
    return this.validate(Q(r = this.obj) && Object.keys(r).length === 0, this.getValidateMsg("object.empty"));
    var r;
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var ir = function(e) {
  function t(r, o) {
    e.call(this, r, Object.assign(Object.assign({}, o), { type: "boolean" })), this.validate(!o || !o.strict || function(a) {
      return de.call(a) === "[object Boolean]";
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
var or = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var ar2 = new RegExp("^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$", "i");
var lr = /^(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})(\.(2(5[0-5]{1}|[0-4]\d{1})|[0-1]?\d{1,2})){3}$/;
var nr = function(e) {
  function t(r, o) {
    e.call(this, r, Object.assign(Object.assign({}, o), { type: "type" }));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var i = { email: { configurable: true }, url: { configurable: true }, ip: { configurable: true } };
  return i.email.get = function() {
    return this.type = "email", this.validate(this.obj === void 0 || or.test(this.obj), this.getValidateMsg("type.email"));
  }, i.url.get = function() {
    return this.type = "url", this.validate(this.obj === void 0 || ar2.test(this.obj), this.getValidateMsg("type.url"));
  }, i.ip.get = function() {
    return this.type = "ip", this.validate(this.obj === void 0 || lr.test(this.obj), this.getValidateMsg("type.ip"));
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var sr = function(e) {
  function t(r, o) {
    e.call(this, r, Object.assign(Object.assign({}, o), { type: "custom" }));
  }
  e && (t.__proto__ = e), t.prototype = Object.create(e && e.prototype), t.prototype.constructor = t;
  var i = { validate: { configurable: true } };
  return i.validate.get = function() {
    var r = this;
    return function(o, a) {
      var l;
      if (o)
        return (l = o(r.obj, r.addError.bind(r))) && l.then ? (a && l.then(function() {
          a && a(r.error);
        }, function(c) {
          console.error(c);
        }), [l, r]) : (a && a(r.error), r.error);
    };
  }, Object.defineProperties(t.prototype, i), t;
}(I);
var ye = function(e, t) {
  return new yt(e, Object.assign({ field: "value" }, t));
};
ye.globalConfig = {}, ye.setGlobalConfig = function(e) {
  ye.globalConfig = e || {};
};
var yt = function(e, t) {
  var i = ye.globalConfig, r = Object.assign(Object.assign(Object.assign({}, i), t), { validateMessages: He(i.validateMessages, t.validateMessages) });
  this.string = new Jt(e, r), this.number = new er(e, r), this.array = new tr(e, r), this.object = new rr(e, r), this.boolean = new ir(e, r), this.type = new nr(e, r), this.custom = new sr(e, r);
};
var ze = function(e, t) {
  t === void 0 && (t = {}), this.schema = e, this.options = t;
};
ze.prototype.messages = function(e) {
  this.options = Object.assign(Object.assign({}, this.options), { validateMessages: He(this.options.validateMessages, e) });
}, ze.prototype.validate = function(e, t) {
  var i = this;
  if (Q(e)) {
    var r = [], o = null;
    this.schema && Object.keys(this.schema).forEach(function(l) {
      if (ke(i.schema[l]))
        for (var c = function($) {
          var b = i.schema[l][$], f = b.type, E = b.message;
          if (!f && !b.validator)
            throw "You must specify a type to field " + l + "!";
          var m = Object.assign(Object.assign({}, i.options), { message: E, field: l });
          "ignoreEmptyString" in b && (m.ignoreEmptyString = b.ignoreEmptyString), "strict" in b && (m.strict = b.strict);
          var x = new yt(e[l], m), p = x.type[f] || null;
          if (!p) {
            if (b.validator)
              return p = x.custom.validate(b.validator), void (Object.prototype.toString.call(p) === "[object Array]" && p[0].then ? r.push({ function: p[0], _this: p[1], key: l }) : p && a(l, p));
            p = x[f];
          }
          if (Object.keys(b).forEach(function(v) {
            b.required && (p = p.isRequired), v !== "message" && p[v] && b[v] && typeof p[v] == "object" && (p = p[v]), p[v] && b[v] !== void 0 && typeof p[v] == "function" && (p = p[v](b[v]));
          }), p.collect(function(v) {
            v && a(l, v);
          }), o)
            return "break";
        }, d = 0; d < i.schema[l].length && c(d) !== "break"; d++)
          ;
    }), r.length > 0 ? Promise.all(r.map(function(l) {
      return l.function;
    })).then(function() {
      r.forEach(function(l) {
        l._this.error && a(l.key, l._this.error);
      }), t && t(o);
    }) : t && t(o);
  }
  function a(l, c) {
    o || (o = {}), o[l] && !c.requiredError || (o[l] = c);
  }
};
var jt = Symbol("RowContextInjectionKey");
var Sr = Symbol("GridContextInjectionKey");
var kr = Symbol("GridDataCollectorInjectionKey");
var ur = Ie(defineComponent({ name: "Row", props: { gutter: { type: [Number, Object, Array], default: 0 }, justify: { type: String, default: "start" }, align: { type: String, default: "start" }, div: { type: Boolean }, wrap: { type: Boolean, default: true } }, setup(e) {
  const { gutter: t, align: i, justify: r, div: o, wrap: a } = toRefs(e), l = ve("row"), c = computed(() => ({ [`${l}`]: !o.value, [`${l}-nowrap`]: !a.value, [`${l}-align-${i.value}`]: i.value, [`${l}-justify-${r.value}`]: r.value })), d = computed(() => Array.isArray(t.value) ? t.value[0] : t.value), $ = computed(() => Array.isArray(t.value) ? t.value[1] : 0), b = _e(d, 0), f = _e($, 0), E = computed(() => {
    const x = {};
    if ((b.value || f.value) && !o.value) {
      const p = -b.value / 2, v = -f.value / 2;
      p && (x.marginLeft = `${p}px`, x.marginRight = `${p}px`), v && (x.marginTop = `${v}px`, x.marginBottom = `${v}px`);
    }
    return x;
  }), m = computed(() => [b.value, f.value]);
  return provide(jt, reactive({ gutter: m, div: o })), { classNames: c, styles: E };
} }), [["render", function(e, t, i, r, o, a) {
  return openBlock(), createElementBlock("div", { class: normalizeClass(e.classNames), style: normalizeStyle(e.styles) }, [renderSlot(e.$slots, "default")], 6);
}]]);
var cr = Object.defineProperty;
var pt = Object.getOwnPropertySymbols;
var dr = Object.prototype.hasOwnProperty;
var pr = Object.prototype.propertyIsEnumerable;
var ft = (e, t, i) => t in e ? cr(e, t, { enumerable: true, configurable: true, writable: true, value: i }) : e[t] = i;
var Ee = (e, t) => {
  for (var i in t || (t = {}))
    dr.call(t, i) && ft(e, i, t[i]);
  if (pt)
    for (var i of pt(t))
      pr.call(t, i) && ft(e, i, t[i]);
  return e;
};
var fr = Ie(defineComponent({ name: "Col", props: { span: { type: Number, default: 24 }, offset: { type: Number }, order: { type: Number }, xs: { type: [Number, Object] }, sm: { type: [Number, Object] }, md: { type: [Number, Object] }, lg: { type: [Number, Object] }, xl: { type: [Number, Object] }, xxl: { type: [Number, Object] }, flex: { type: [Number, String] } }, setup(e) {
  const t = ve("col"), i = inject(jt, {}), r = computed(() => function(f) {
    return Vt(f) && (["initial", "auto", "none"].includes(f) || /^\d+$/.test(f)) || xe(f) ? f : Vt(f) && /^\d+(px|em|rem|%)$/.test(f) ? `0 0 ${f}` : void 0;
  }(e.flex)), o = computed(() => {
    const { div: f } = i, { span: E, offset: m, order: x, xs: p, sm: v, md: k, lg: V, xl: q, xxl: M } = e, L = { [`${t}`]: !f, [`${t}-order-${x}`]: x, [`${t}-${E}`]: !(f || p || v || k || V || q || M), [`${t}-offset-${m}`]: m && m > 0 }, F = { xs: p, sm: v, md: k, lg: V, xl: q, xxl: M };
    return Object.keys(F).forEach((s) => {
      const u = F[s];
      u && xe(u) ? L[`${t}-${s}-${u}`] = true : u && De(u) && (L[`${t}-${s}-${u.span}`] = u.span, L[`${t}-${s}-offset-${u.offset}`] = u.offset, L[`${t}-${s}-order-${u.order}`] = u.order);
    }), L;
  }), a = computed(() => r.value ? t : o.value), l = computed(() => {
    const { gutter: f, div: E } = i, m = {};
    if (Array.isArray(f) && !E) {
      const x = f[0] && f[0] / 2 || 0, p = f[1] && f[1] / 2 || 0;
      x && (m.paddingLeft = `${x}px`, m.paddingRight = `${x}px`), p && (m.paddingTop = `${p}px`, m.paddingBottom = `${p}px`);
    }
    return m;
  }), c = computed(() => r.value ? { flex: r.value } : {}), d = computed(() => ar(e, we)), $ = function(f) {
    return computed(() => {
      const { val: E, key: m, xs: x, sm: p, md: v, lg: k, xl: V, xxl: q } = f.value;
      if (!(x || p || v || k || V || q))
        return E;
      const M = {};
      return we.forEach((L) => {
        const F = f.value[L];
        xe(F) ? M[L] = F : De(F) && xe(F[m]) && (M[L] = F[m]);
      }), M;
    });
  }(computed(() => Ee({ val: e.span, key: "span" }, d.value))), b = _e($, 24, true);
  return { visible: computed(() => !!b.value), classNames: a, styles: computed(() => Ee(Ee({}, l.value), c.value)) };
} }), [["render", function(e, t, i, r, o, a) {
  return e.visible ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(e.classNames), style: normalizeStyle(e.styles) }, [renderSlot(e.$slots, "default")], 6)) : createCommentVNode("v-if", true);
}]]);
var hr = defineComponent({ name: "IconQuestionCircle", props: { size: { type: [Number, String] }, strokeWidth: { type: Number, default: 4 }, strokeLinecap: { type: String, default: "butt", validator: (e) => ["butt", "round", "square"].includes(e) }, strokeLinejoin: { type: String, default: "miter", validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e) }, rotate: Number, spin: Boolean }, emits: { click: (e) => true }, setup(e, { emit: t }) {
  const i = ve("icon");
  return { cls: computed(() => [i, `${i}-question-circle`, { [`${i}-spin`]: e.spin }]), innerStyle: computed(() => {
    const r = {};
    return e.size && (r.fontSize = xe(e.size) ? `${e.size}px` : e.size), e.rotate && (r.transform = `rotate(${e.rotate}deg)`), r;
  }), onClick: (r) => {
    t("click", r);
  } };
} });
var br = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
var gr = [createBaseVNode("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z" }, null, -1), createBaseVNode("path", { d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465" }, null, -1)];
var Ve = Ie(hr, [["render", function(e, t, i, r, o, a) {
  return openBlock(), createElementBlock("svg", { viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", class: normalizeClass(e.cls), style: normalizeStyle(e.innerStyle), "stroke-width": e.strokeWidth, "stroke-linecap": e.strokeLinecap, "stroke-linejoin": e.strokeLinejoin, onClick: t[0] || (t[0] = (...l) => e.onClick && e.onClick(...l)) }, gr, 14, br);
}]]);
var vr = defineComponent({ name: "FormItemLabel", components: { ResizeObserver: Jl, Tooltip: nv, IconQuestionCircle: Object.assign(Ve, { install: (e, t) => {
  var i;
  const r = (i = t == null ? void 0 : t.iconPrefix) != null ? i : "";
  e.component(r + Ve.name, Ve);
} }) }, props: { required: { type: Boolean, default: false }, showColon: { type: Boolean, default: false }, component: { type: String, default: "label" }, asteriskPosition: { type: String, default: "start" }, tooltip: { type: String }, attrs: Object }, setup() {
  const e = ve("form-item-label"), t = inject(tf, void 0), i = getCurrentInstance(), r = ref();
  return onMounted(() => {
    r.value && xe(r.value.offsetWidth) && (t == null || t.setLabelWidth(r.value.offsetWidth, i == null ? void 0 : i.uid));
  }), onBeforeUnmount(() => {
    t == null || t.removeLabelWidth(i == null ? void 0 : i.uid);
  }), { prefixCls: e, labelRef: r, handleResize: () => {
    r.value && xe(r.value.offsetWidth) && (t == null || t.setLabelWidth(r.value.offsetWidth, i == null ? void 0 : i.uid));
  } };
} });
var mr = [createBaseVNode("svg", { fill: "currentColor", viewBox: "0 0 1024 1024", width: "1em", height: "1em" }, [createBaseVNode("path", { d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z" })], -1)];
var yr = [createBaseVNode("svg", { fill: "currentColor", viewBox: "0 0 1024 1024", width: "1em", height: "1em" }, [createBaseVNode("path", { d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z" })], -1)];
var jr = Ie(vr, [["render", function(e, t, i, r, o, a) {
  const l = resolveComponent("icon-question-circle"), c = resolveComponent("Tooltip"), d = resolveComponent("ResizeObserver");
  return openBlock(), createBlock(d, { onResize: e.handleResize }, { default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(e.component), mergeProps({ ref: "labelRef", class: e.prefixCls }, e.attrs), { default: withCtx(() => [e.required && e.asteriskPosition === "start" ? (openBlock(), createElementBlock("strong", { key: 0, class: normalizeClass(`${e.prefixCls}-required-symbol`) }, mr, 2)) : createCommentVNode("v-if", true), renderSlot(e.$slots, "default"), e.tooltip ? (openBlock(), createBlock(c, { key: 1, content: e.tooltip }, { default: withCtx(() => [createVNode(l, { class: normalizeClass(`${e.prefixCls}-tooltip`) }, null, 8, ["class"])]), _: 1 }, 8, ["content"])) : createCommentVNode("v-if", true), e.required && e.asteriskPosition === "end" ? (openBlock(), createElementBlock("strong", { key: 2, class: normalizeClass(`${e.prefixCls}-required-symbol`) }, yr, 2)) : createCommentVNode("v-if", true), createTextVNode(" " + toDisplayString(e.showColon ? ":" : ""), 1)]), _: 3 }, 16, ["class"]))]), _: 3 }, 8, ["onResize"]);
}]]);
var xr = Ie(defineComponent({ name: "FormItemMessage", props: { error: { type: Array, default: () => [] }, help: String }, setup: () => ({ prefixCls: ve("form-item-message") }) }), [["render", function(e, t, i, r, o, a) {
  return e.error.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(e.error, (l) => (openBlock(), createBlock(Transition, { key: l, name: "form-blink", appear: "" }, { default: withCtx(() => [createBaseVNode("div", { role: "alert", class: normalizeClass([e.prefixCls]) }, toDisplayString(l), 3)]), _: 2 }, 1024))), 128)) : e.help || e.$slots.help ? (openBlock(), createBlock(Transition, { key: 1, name: "form-blink", appear: "" }, { default: withCtx(() => [createBaseVNode("div", { class: normalizeClass([e.prefixCls, `${e.prefixCls}-help`]) }, [renderSlot(e.$slots, "help", {}, () => [createTextVNode(toDisplayString(e.help), 1)])], 2)]), _: 3 })) : createCommentVNode("v-if", true);
}]]);
var Or = Object.defineProperty;
var Ce = Object.getOwnPropertySymbols;
var xt2 = Object.prototype.hasOwnProperty;
var Ot = Object.prototype.propertyIsEnumerable;
var ht = (e, t, i) => t in e ? Or(e, t, { enumerable: true, configurable: true, writable: true, value: i }) : e[t] = i;
var bt = (e, t) => {
  for (var i in t || (t = {}))
    xt2.call(t, i) && ht(e, i, t[i]);
  if (Ce)
    for (var i of Ce(t))
      Ot.call(t, i) && ht(e, i, t[i]);
  return e;
};
var qe = Ie(defineComponent({ name: "FormItem", components: { ArcoRow: ur, ArcoCol: fr, FormItemLabel: jr, FormItemMessage: xr }, props: { field: { type: String, default: "" }, label: String, tooltip: { type: String }, showColon: { type: Boolean, default: false }, noStyle: { type: Boolean, default: false }, disabled: { type: Boolean, default: void 0 }, help: String, extra: String, required: { type: Boolean, default: false }, asteriskPosition: { type: String, default: "start" }, rules: { type: [Object, Array] }, validateStatus: { type: String }, validateTrigger: { type: [String, Array], default: "change" }, labelColProps: Object, wrapperColProps: Object, hideLabel: { type: Boolean, default: false }, hideAsterisk: { type: Boolean, default: false }, labelColStyle: Object, wrapperColStyle: Object, rowProps: Object, rowClass: [String, Array, Object], contentClass: [String, Array, Object], contentFlex: { type: Boolean, default: true }, mergeProps: { type: [Boolean, Function], default: true }, labelColFlex: { type: [Number, String] }, feedback: { type: Boolean, default: false }, labelComponent: { type: String, default: "label" }, labelAttrs: Object }, setup(e) {
  const t = ve("form-item"), { field: i } = toRefs(e), r = inject(tf, {}), { autoLabelWidth: o, layout: a } = toRefs(r), { i18nMessage: l } = oa(), c = computed(() => {
    var n;
    const j = bt({}, (n = e.labelColProps) != null ? n : r.labelColProps);
    return e.labelColFlex ? j.flex = e.labelColFlex : r.autoLabelWidth && (j.flex = `${r.maxLabelWidth}px`), j;
  }), d = computed(() => {
    var n;
    const j = bt({}, (n = e.wrapperColProps) != null ? n : r.wrapperColProps);
    return i.value && (j.id = vt(r.id, i.value)), (e.labelColFlex || r.autoLabelWidth) && (j.flex = "auto"), j;
  }), $ = computed(() => {
    var n;
    return (n = e.labelColStyle) != null ? n : r.labelColStyle;
  }), b = computed(() => {
    var n;
    return (n = e.wrapperColStyle) != null ? n : r.wrapperColStyle;
  }), f = sn(r.model, e.field), E = reactive({}), m = reactive({}), x = computed(() => ((n) => {
    let j = "";
    for (const O of Object.keys(n)) {
      const _ = n[O];
      _ && (!j || ut.indexOf(_) > ut.indexOf(j)) && (j = n[O]);
    }
    return j;
  })(E)), p = computed(() => ((n) => {
    const j = [];
    for (const O of Object.keys(n)) {
      const _ = n[O];
      _ && j.push(_);
    }
    return j;
  })(m)), v = ref(false), k = computed(() => sn(r.model, e.field)), V = computed(() => {
    var n;
    return !!((n = e.disabled) != null ? n : r != null && r.disabled);
  }), q = computed(() => {
    var n;
    return (n = e.validateStatus) != null ? n : x.value;
  }), M = computed(() => q.value === "error"), L = computed(() => {
    var n, j, O;
    const _ = [].concat((O = (j = e.rules) != null ? j : (n = r == null ? void 0 : r.rules) == null ? void 0 : n[e.field]) != null ? O : []), X = _.some((H) => H.required);
    return e.required && !X ? [{ required: true }].concat(_) : _;
  }), F = computed(() => L.value.some((n) => n.required)), s = e.noStyle ? inject(ap, void 0) : void 0, u = (n, { status: j, message: O }) => {
    E[n] = j, m[n] = O, e.noStyle && (s == null || s.updateValidateState(n, { status: j, message: O }));
  }, y = computed(() => e.feedback && q.value ? q.value : void 0), g = () => {
    var n;
    if (v.value)
      return Promise.resolve();
    const j = L.value;
    if (!i.value || j.length === 0)
      return x.value && w(), Promise.resolve();
    const O = i.value, _ = k.value;
    u(O, { status: "", message: "" });
    const X = new ze({ [O]: j.map((H) => {
      var P = ((B, R) => {
        var N = {};
        for (var z in B)
          xt2.call(B, z) && R.indexOf(z) < 0 && (N[z] = B[z]);
        if (B != null && Ce)
          for (var z of Ce(B))
            R.indexOf(z) < 0 && Ot.call(B, z) && (N[z] = B[z]);
        return N;
      })(H, []);
      return P.type || P.validator || (P.type = "string"), P;
    }) }, { ignoreEmptyString: true, validateMessages: (n = l.value.form) == null ? void 0 : n.validateMessages });
    return new Promise((H) => {
      X.validate({ [O]: _ }, (P) => {
        var B;
        const R = !!(P != null && P[O]);
        u(O, { status: R ? "error" : "", message: (B = P == null ? void 0 : P[O].message) != null ? B : "" });
        const N = R ? { label: e.label, field: i.value, value: P[O].value, type: P[O].type, isRequiredError: !!P[O].requiredError, message: P[O].message } : void 0;
        H(N);
      });
    });
  }, C = computed(() => [].concat(e.validateTrigger)), S = computed(() => C.value.reduce((n, j) => {
    switch (j) {
      case "change":
        return n.onChange = () => {
          g();
        }, n;
      case "input":
        return n.onInput = () => {
          nextTick(() => {
            g();
          });
        }, n;
      case "focus":
        return n.onFocus = () => {
          g();
        }, n;
      case "blur":
        return n.onBlur = () => {
          g();
        }, n;
      default:
        return n;
    }
  }, {}));
  provide(ap, reactive({ eventHandlers: S, size: r && toRef(r, "size"), disabled: V, error: M, feedback: y, updateValidateState: u }));
  const w = () => {
    i.value && u(i.value, { status: "", message: "" });
  }, T = reactive({ field: i, disabled: V, error: M, validate: g, clearValidate: w, resetField: () => {
    w(), v.value = true, r != null && r.model && i.value && $i(r.model, i.value, f), nextTick(() => {
      v.value = false;
    });
  }, setField: (n) => {
    var j, O;
    i.value && (v.value = true, "value" in n && (r != null && r.model) && i.value && $i(r.model, i.value, n.value), (n.status || n.message) && u(i.value, { status: (j = n.status) != null ? j : "", message: (O = n.message) != null ? O : "" }), nextTick(() => {
      v.value = false;
    }));
  } });
  onMounted(() => {
    var n;
    T.field && ((n = r.addField) == null || n.call(r, T));
  }), onBeforeUnmount(() => {
    var n;
    T.field && ((n = r.removeField) == null || n.call(r, T));
  });
  const se = computed(() => [t, `${t}-layout-${r.layout}`, { [`${t}-error`]: M.value, [`${t}-status-${q.value}`]: !!q.value }, e.rowClass]), ue = computed(() => [`${t}-label-col`, { [`${t}-label-col-left`]: r.labelAlign === "left", [`${t}-label-col-flex`]: r.autoLabelWidth || e.labelColFlex }]), ce = computed(() => [`${t}-wrapper-col`, { [`${t}-wrapper-col-flex`]: !d.value }]);
  return { prefixCls: t, cls: se, isRequired: F, isError: M, finalMessage: p, mergedLabelCol: c, mergedWrapperCol: d, labelColCls: ue, autoLabelWidth: o, layout: a, mergedLabelStyle: $, wrapperColCls: ce, mergedWrapperStyle: b };
} }), [["render", function(e, t, i, r, o, a) {
  var l;
  const c = resolveComponent("FormItemLabel"), d = resolveComponent("ArcoCol"), $ = resolveComponent("FormItemMessage"), b = resolveComponent("ArcoRow");
  return e.noStyle ? renderSlot(e.$slots, "default", { key: 0 }) : (openBlock(), createBlock(b, mergeProps({ key: 1, class: [e.cls, { [`${e.prefixCls}-has-help`]: !!((l = e.$slots.help) != null ? l : e.help) }], wrap: !(e.labelColFlex || e.autoLabelWidth), div: e.layout !== "horizontal" || e.hideLabel }, e.rowProps), { default: withCtx(() => [e.hideLabel ? createCommentVNode("v-if", true) : (openBlock(), createBlock(d, mergeProps({ key: 0, class: e.labelColCls, style: e.mergedLabelStyle }, e.mergedLabelCol), { default: withCtx(() => [createVNode(c, { required: !e.hideAsterisk && e.isRequired, "show-colon": e.showColon, "asterisk-position": e.asteriskPosition, component: e.labelComponent, attrs: e.labelAttrs, tooltip: e.tooltip }, { default: withCtx(() => [e.$slots.label || e.label ? renderSlot(e.$slots, "label", { key: 0 }, () => [createTextVNode(toDisplayString(e.label), 1)]) : createCommentVNode("v-if", true)]), _: 3 }, 8, ["required", "show-colon", "asterisk-position", "component", "attrs", "tooltip"])]), _: 3 }, 16, ["class", "style"])), createVNode(d, mergeProps({ class: e.wrapperColCls, style: e.mergedWrapperStyle }, e.mergedWrapperCol), { default: withCtx(() => [createBaseVNode("div", { class: normalizeClass(`${e.prefixCls}-content-wrapper`) }, [createBaseVNode("div", { class: normalizeClass([`${e.prefixCls}-content`, { [`${e.prefixCls}-content-flex`]: e.contentFlex }, e.contentClass]) }, [renderSlot(e.$slots, "default")], 2)], 2), e.isError || e.$slots.help || e.help ? (openBlock(), createBlock($, { key: 0, error: e.finalMessage, help: e.help }, createSlots({ _: 2 }, [e.$slots.help ? { name: "help", fn: withCtx(() => [renderSlot(e.$slots, "help")]) } : void 0]), 1032, ["error", "help"])) : createCommentVNode("v-if", true), e.$slots.extra || e.extra ? (openBlock(), createElementBlock("div", { key: 1, class: normalizeClass(`${e.prefixCls}-extra`) }, [renderSlot(e.$slots, "extra", {}, () => [createTextVNode(toDisplayString(e.extra), 1)])], 2)) : createCommentVNode("v-if", true)]), _: 3 }, 16, ["class", "style"])]), _: 3 }, 16, ["class", "wrap", "div"]));
}]]);
var $r = Object.assign(Me, { Item: qe, install: (e, t) => {
  xt(e, t);
  const i = kt(t);
  e.component(i + Me.name, Me), e.component(i + qe.name, qe);
} });

export {
  _e,
  Sr,
  kr,
  ur,
  fr,
  qe,
  $r
};
//# sourceMappingURL=chunk-FE6UGA2Q.js.map
