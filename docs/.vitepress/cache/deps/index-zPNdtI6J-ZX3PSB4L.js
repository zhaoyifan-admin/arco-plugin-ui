import {
  C
} from "./chunk-SRCGH6OO.js";
import {
  Ce,
  De,
  Go,
  It,
  J2,
  K2,
  Ks,
  No,
  Pt,
  Xo,
  Yl,
  Z8,
  _a,
  _e,
  a3,
  el,
  l3,
  lt,
  n3,
  o0,
  o3,
  on,
  pa,
  q2,
  r3,
  sn,
  t3,
  u0,
  v0,
  vl
} from "./chunk-FOSXQ56G.js";
import "./chunk-W6TZYUAE.js";
import "./chunk-O7NL36PV.js";
import "./chunk-5THIMN62.js";
import "./chunk-5BCG5FEI.js";
import "./chunk-2HXSZBOA.js";
import "./chunk-BDXATM4V.js";
import "./chunk-4NAX6VIJ.js";
import {
  Teleport,
  Transition,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createSlots,
  createTextVNode,
  createVNode,
  defineAsyncComponent,
  defineComponent,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onBeforeUnmount,
  onMounted,
  openBlock,
  ref,
  render,
  renderList,
  renderSlot,
  resolveComponent,
  resolveDynamicComponent,
  toDisplayString,
  toRefs,
  unref,
  vShow,
  watch,
  withCtx,
  withDirectives,
  withModifiers
} from "./chunk-67UUJLDS.js";
import "./chunk-UXIASGQL.js";

// node_modules/.pnpm/vue-arco-ui@0.2.25_@arco-design+web-vue@2.53.3_typescript@5.2.2/node_modules/vue-arco-ui/dist/index-zPNdtI6J.js
var cl = defineComponent({ name: "IconInfoCircleFill", props: { size: { type: [Number, String] }, strokeWidth: { type: Number, default: 4 }, strokeLinecap: { type: String, default: "butt", validator: (e) => ["butt", "round", "square"].includes(e) }, strokeLinejoin: { type: String, default: "miter", validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e) }, rotate: Number, spin: Boolean }, emits: { click: (e) => true }, setup(e, { emit: l }) {
  const a = _e("icon");
  return { cls: computed(() => [a, `${a}-info-circle-fill`, { [`${a}-spin`]: e.spin }]), innerStyle: computed(() => {
    const o = {};
    return e.size && (o.fontSize = Ce(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
  }), onClick: (o) => {
    l("click", o);
  } };
} });
var ul = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
var pl = [createBaseVNode("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z", fill: "currentColor", stroke: "none" }, null, -1)];
var re = De(cl, [["render", function(e, l, a, o, d, i) {
  return openBlock(), createElementBlock("svg", { viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", class: normalizeClass(e.cls), style: normalizeStyle(e.innerStyle), "stroke-width": e.strokeWidth, "stroke-linecap": e.strokeLinecap, "stroke-linejoin": e.strokeLinejoin, onClick: l[0] || (l[0] = (...c) => e.onClick && e.onClick(...c)) }, pl, 14, ul);
}]]);
var vl2 = Object.assign(re, { install: (e, l) => {
  var a;
  const o = (a = l == null ? void 0 : l.iconPrefix) != null ? a : "";
  e.component(o + re.name, re);
} });
var fl = ({ modalRef: e, wrapperRef: l, draggable: a, alignCenter: o }) => {
  const d = ref(false), i = ref([0, 0]), c = ref([0, 0]), C2 = ref(), f = ref([0, 0]), m = ref([0, 0]), y = (O) => {
    if (d.value) {
      const B = O.x - i.value[0], t = O.y - i.value[1];
      let n = c.value[0] + B, u = c.value[1] + t;
      n < f.value[0] && (n = f.value[0]), n > m.value[0] && (n = m.value[0]), u < f.value[1] && (u = f.value[1]), u > m.value[1] && (u = m.value[1]), C2.value = [n, u];
    }
  }, g = () => {
    d.value = false, el(window, "mousemove", y), el(window, "mouseup", g);
  };
  return { position: C2, handleMoveDown: (O) => {
    a.value && (O.preventDefault(), d.value = true, (() => {
      var B, t, n;
      if (l.value && e.value) {
        const { top: u, left: H } = l.value.getBoundingClientRect(), { clientWidth: R, clientHeight: k } = l.value, { top: G, left: F, width: W, height: Z } = e.value.getBoundingClientRect(), _ = o.value ? 0 : (B = e.value) == null ? void 0 : B.offsetTop, V = F - H, z = G - u - _;
        V === ((t = c.value) == null ? void 0 : t[0]) && z === ((n = c.value) == null ? void 0 : n[1]) || (c.value = [V, z]);
        const J = R > W ? R - W : 0, q = k > Z ? k - Z - _ : 0;
        J === m.value[0] && q === m.value[1] || (m.value = [J, q]), _ && (f.value = [0, 0 - _]);
      }
    })(), i.value = [O.x, O.y], _a(window, "mousemove", y), _a(window, "mouseup", g), _a(window, "contextmenu", g));
  } };
};
var ml = Object.defineProperty;
var Oe = Object.getOwnPropertySymbols;
var yl = Object.prototype.hasOwnProperty;
var bl = Object.prototype.propertyIsEnumerable;
var Se = (e, l, a) => l in e ? ml(e, l, { enumerable: true, configurable: true, writable: true, value: a }) : e[l] = a;
var Cl = defineComponent({ name: "Modal", components: { ClientOnly: q2, ArcoButton: Yl, IconHover: pa, IconClose: Xo, IconInfoCircleFill: vl2, IconCheckCircleFill: o0, IconExclamationCircleFill: v0, IconCloseCircleFill: u0 }, inheritAttrs: false, props: { visible: { type: Boolean, default: void 0 }, defaultVisible: { type: Boolean, default: false }, width: { type: [Number, String] }, top: { type: [Number, String] }, mask: { type: Boolean, default: true }, title: { type: String }, titleAlign: { type: String, default: "center" }, alignCenter: { type: Boolean, default: true }, unmountOnClose: Boolean, maskClosable: { type: Boolean, default: true }, hideCancel: { type: Boolean, default: false }, simple: { type: Boolean, default: (e) => e.notice }, closable: { type: Boolean, default: true }, okText: String, cancelText: String, okLoading: { type: Boolean, default: false }, okButtonProps: { type: Object }, cancelButtonProps: { type: Object }, footer: { type: Boolean, default: true }, renderToBody: { type: Boolean, default: true }, popupContainer: { type: [String, Object], default: "body" }, maskStyle: { type: Object }, modalClass: { type: [String, Array] }, modalStyle: { type: Object }, onBeforeOk: { type: Function }, onBeforeCancel: { type: Function }, escToClose: { type: Boolean, default: true }, draggable: { type: Boolean, default: false }, fullscreen: { type: Boolean, default: false }, maskAnimationName: { type: String, default: (e) => e.fullscreen ? "fade-in-standard" : "fade-modal" }, modalAnimationName: { type: String, default: (e) => e.fullscreen ? "zoom-in" : "zoom-modal" }, bodyClass: { type: [String, Array] }, bodyStyle: { type: [String, Object, Array] }, messageType: { type: String }, hideTitle: { type: Boolean, default: false } }, emits: { "update:visible": (e) => true, ok: (e) => true, cancel: (e) => true, open: () => true, close: () => true, beforeOpen: () => true, beforeClose: () => true }, setup(e, { emit: l }) {
  const { fullscreen: a, popupContainer: o, alignCenter: d } = toRefs(e), i = _e("modal"), { t: c } = on(), C2 = ref(), f = ref(), m = ref(e.defaultVisible), y = computed(() => {
    var r;
    return (r = e.visible) != null ? r : m.value;
  }), g = ref(false), O = computed(() => e.okLoading || g.value), B = computed(() => e.draggable && !e.fullscreen), { teleportContainer: t, containerRef: n } = J2({ popupContainer: o, visible: y }), u = ref(y.value), H = computed(() => e.okText || c("modal.okText")), R = computed(() => e.cancelText || c("modal.cancelText")), { zIndex: k, isLastDialog: G } = K2("dialog", { visible: y });
  let F = false;
  const W = (r) => {
    e.escToClose && r.key === vl.ESC && G() && ae(r);
  }, Z = () => {
    e.escToClose && !F && (F = true, _a(document.documentElement, "keydown", W));
  }, _ = () => {
    F = false, el(document.documentElement, "keydown", W);
  };
  let V = 0;
  const { position: z, handleMoveDown: J } = fl({ wrapperRef: C2, modalRef: f, draggable: B, alignCenter: d }), q = () => {
    V++, g.value && (g.value = false), m.value = false, l("update:visible", false);
  }, ae = (r) => {
    var w;
    let h = true;
    lt(e.onBeforeCancel) && (h = (w = e.onBeforeCancel()) != null && w), h && (l("cancel", r), q());
  }, te = ref(false), { setOverflowHidden: me, resetOverflow: ye } = ((r) => {
    const w = ref(false), h = { overflow: "", width: "", boxSizing: "" };
    return { setOverflowHidden: () => {
      if (r.value) {
        const s = r.value;
        if (!w.value && s.style.overflow !== "hidden") {
          const S = o3(s);
          (S > 0 || n3(s)) && (h.overflow = s.style.overflow, h.width = s.style.width, h.boxSizing = s.style.boxSizing, s.style.overflow = "hidden", s.style.width = s.offsetWidth - S + "px", s.style.boxSizing = "border-box", w.value = true);
        }
      }
    }, resetOverflow: () => {
      if (r.value && w.value) {
        const s = r.value;
        s.style.overflow = h.overflow, s.style.width = h.width, s.style.boxSizing = h.boxSizing, w.value = false;
      }
    } };
  })(n);
  onMounted(() => {
    n.value = Ks(e.popupContainer), y.value && (me(), e.escToClose && Z());
  }), onBeforeUnmount(() => {
    ye(), _();
  }), watch(y, (r) => {
    m.value !== r && (m.value = r), r ? (l("beforeOpen"), u.value = true, te.value = false, me(), Z()) : (l("beforeClose"), _());
  }), watch(a, () => {
    z.value && (z.value = void 0);
  });
  const De2 = computed(() => [`${i}-wrapper`, { [`${i}-wrapper-align-center`]: e.alignCenter && !e.fullscreen, [`${i}-wrapper-moved`]: !!z.value }]), Ie = computed(() => [`${i}`, e.modalClass, { [`${i}-simple`]: e.simple, [`${i}-draggable`]: B.value, [`${i}-fullscreen`]: e.fullscreen }]), Le = computed(() => {
    var r;
    const w = ((h, s) => {
      for (var S in s || (s = {}))
        yl.call(s, S) && Se(h, S, s[S]);
      if (Oe)
        for (var S of Oe(s))
          bl.call(s, S) && Se(h, S, s[S]);
      return h;
    })({}, (r = e.modalStyle) != null ? r : {});
    return e.width && !e.fullscreen && (w.width = Ce(e.width) ? `${e.width}px` : e.width), !e.alignCenter && e.top && (w.top = Ce(e.top) ? `${e.top}px` : e.top), z.value && (w.transform = `translate(${z.value[0]}px, ${z.value[1]}px)`), w;
  });
  return { prefixCls: i, mounted: u, computedVisible: y, containerRef: n, wrapperRef: C2, mergedModalStyle: Le, okDisplayText: H, cancelDisplayText: R, zIndex: k, handleOk: async (r) => {
    const w = V, h = await new Promise(async (s) => {
      var S;
      if (lt(e.onBeforeOk)) {
        let M = e.onBeforeOk((be = true) => s(be));
        if (!Z8(M) && Go(M) || (g.value = true), Z8(M))
          try {
            M = (S = await M) == null || S;
          } catch {
            M = false;
          }
        Go(M) && s(M);
      } else
        s(true);
    });
    w === V && (h ? (l("ok", r), q()) : g.value && (g.value = false));
  }, handleCancel: ae, handleMaskClick: (r) => {
    e.mask && e.maskClosable && te.value && ae(r);
  }, handleMaskMouseDown: (r) => {
    r.target === C2.value && (te.value = true);
  }, handleOpen: () => {
    y.value && (!a3(C2.value, document.activeElement) && document.activeElement instanceof HTMLElement && document.activeElement.blur(), l("open"));
  }, handleClose: () => {
    y.value || (B.value && (z.value = void 0), u.value = false, ye(), l("close"));
  }, mergedOkLoading: O, modalRef: f, wrapperCls: De2, modalCls: Ie, teleportContainer: t, handleMoveDown: J };
} });
var le = De(Cl, [["render", function(e, l, a, o, d, i) {
  const c = resolveComponent("icon-info-circle-fill"), C2 = resolveComponent("icon-check-circle-fill"), f = resolveComponent("icon-exclamation-circle-fill"), m = resolveComponent("icon-close-circle-fill"), y = resolveComponent("icon-close"), g = resolveComponent("icon-hover"), O = resolveComponent("arco-button"), B = resolveComponent("client-only");
  return openBlock(), createBlock(B, null, { default: withCtx(() => [(openBlock(), createBlock(Teleport, { to: e.teleportContainer, disabled: !e.renderToBody }, [!e.unmountOnClose || e.computedVisible || e.mounted ? withDirectives((openBlock(), createElementBlock("div", mergeProps({ key: 0, class: `${e.prefixCls}-container`, style: { zIndex: e.zIndex } }, e.$attrs), [createVNode(Transition, { name: e.maskAnimationName, appear: "" }, { default: withCtx(() => [e.mask ? withDirectives((openBlock(), createElementBlock("div", { key: 0, ref: "maskRef", class: normalizeClass(`${e.prefixCls}-mask`), style: normalizeStyle(e.maskStyle) }, null, 6)), [[vShow, e.computedVisible]]) : createCommentVNode("v-if", true)]), _: 1 }, 8, ["name"]), createBaseVNode("div", { ref: "wrapperRef", class: normalizeClass(e.wrapperCls), onClick: l[2] || (l[2] = withModifiers((...t) => e.handleMaskClick && e.handleMaskClick(...t), ["self"])), onMousedown: l[3] || (l[3] = withModifiers((...t) => e.handleMaskMouseDown && e.handleMaskMouseDown(...t), ["self"])) }, [createVNode(Transition, { name: e.modalAnimationName, appear: "", onAfterEnter: e.handleOpen, onAfterLeave: e.handleClose }, { default: withCtx(() => [withDirectives(createBaseVNode("div", { ref: "modalRef", class: normalizeClass(e.modalCls), style: normalizeStyle(e.mergedModalStyle) }, [!e.hideTitle && (e.$slots.title || e.title || e.closable) ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(`${e.prefixCls}-header`), onMousedown: l[1] || (l[1] = (...t) => e.handleMoveDown && e.handleMoveDown(...t)) }, [e.$slots.title || e.title ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass([`${e.prefixCls}-title`, `${e.prefixCls}-title-align-${e.titleAlign}`]) }, [e.messageType ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(`${e.prefixCls}-title-icon`) }, [e.messageType === "info" ? (openBlock(), createBlock(c, { key: 0 })) : createCommentVNode("v-if", true), e.messageType === "success" ? (openBlock(), createBlock(C2, { key: 1 })) : createCommentVNode("v-if", true), e.messageType === "warning" ? (openBlock(), createBlock(f, { key: 2 })) : createCommentVNode("v-if", true), e.messageType === "error" ? (openBlock(), createBlock(m, { key: 3 })) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), renderSlot(e.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])], 2)) : createCommentVNode("v-if", true), !e.simple && e.closable ? (openBlock(), createElementBlock("div", { key: 1, tabindex: "-1", role: "button", "aria-label": "Close", class: normalizeClass(`${e.prefixCls}-close-btn`), onClick: l[0] || (l[0] = (...t) => e.handleCancel && e.handleCancel(...t)) }, [createVNode(g, null, { default: withCtx(() => [createVNode(y)]), _: 1 })], 2)) : createCommentVNode("v-if", true)], 34)) : createCommentVNode("v-if", true), createBaseVNode("div", { class: normalizeClass([`${e.prefixCls}-body`, e.bodyClass]), style: normalizeStyle(e.bodyStyle) }, [renderSlot(e.$slots, "default")], 6), e.footer ? (openBlock(), createElementBlock("div", { key: 1, class: normalizeClass(`${e.prefixCls}-footer`) }, [renderSlot(e.$slots, "footer", {}, () => [e.hideCancel ? createCommentVNode("v-if", true) : (openBlock(), createBlock(O, mergeProps({ key: 0 }, e.cancelButtonProps, { onClick: e.handleCancel }), { default: withCtx(() => [createTextVNode(toDisplayString(e.cancelDisplayText), 1)]), _: 1 }, 16, ["onClick"])), createVNode(O, mergeProps({ type: "primary" }, e.okButtonProps, { loading: e.mergedOkLoading, onClick: e.handleOk }), { default: withCtx(() => [createTextVNode(toDisplayString(e.okDisplayText), 1)]), _: 1 }, 16, ["loading", "onClick"])])], 2)) : createCommentVNode("v-if", true)], 6), [[vShow, e.computedVisible]])]), _: 3 }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 34)], 16)), [[vShow, e.computedVisible || e.mounted]]) : createCommentVNode("v-if", true)], 8, ["to", "disabled"]))]), _: 3 });
}]]);
var gl = Object.defineProperty;
var kl = Object.defineProperties;
var hl = Object.getOwnPropertyDescriptors;
var Be = Object.getOwnPropertySymbols;
var wl = Object.prototype.hasOwnProperty;
var xl = Object.prototype.propertyIsEnumerable;
var Te = (e, l, a) => l in e ? gl(e, l, { enumerable: true, configurable: true, writable: true, value: a }) : e[l] = a;
var E = (e, l) => {
  for (var a in l || (l = {}))
    wl.call(l, a) && Te(e, a, l[a]);
  if (Be)
    for (var a of Be(l))
      xl.call(l, a) && Te(e, a, l[a]);
  return e;
};
var de = (e, l) => {
  let a = l3("modal");
  const o = createVNode(le, E(E(E({}, { visible: true, renderToBody: false, unmountOnClose: true, onOk: () => {
    o.component && (o.component.props.visible = false), lt(e.onOk) && e.onOk();
  }, onCancel: () => {
    o.component && (o.component.props.visible = false), lt(e.onCancel) && e.onCancel();
  }, onClose: async () => {
    await nextTick(), a && (render(null, a), document.body.removeChild(a)), a = null, lt(e.onClose) && e.onClose();
  } }), sn(e, ["content", "title", "footer", "visible", "unmountOnClose", "onOk", "onCancel", "onClose"])), { footer: typeof e.footer == "boolean" ? e.footer : void 0 }), { default: t3(e.content), title: t3(e.title), footer: typeof e.footer != "boolean" ? t3(e.footer) : void 0 });
  return (l ?? ve._context) && (o.appContext = l ?? ve._context), render(o, a), document.body.appendChild(a), { close: () => {
    o.component && (o.component.props.visible = false);
  }, update: (d) => {
    o.component && Object.entries(d).forEach(([i, c]) => {
      o.component.props[i] = c;
    });
  } };
};
var ce = E({ open: de, confirm: (e, l) => {
  const a = E({ simple: true, messageType: "warning" }, e);
  return de(a, l);
} }, r3.reduce((e, l) => (e[l] = (a, o) => {
  const d = E({ simple: true, hideCancel: true, messageType: l }, a);
  return de(d, o);
}, e), {}));
var ve = Object.assign(le, (ze = E({}, ce), kl(ze, hl({ install: (e, l) => {
  Pt(e, l);
  const a = It(l);
  e.component(a + le.name, le);
  const o = {};
  for (const d of Object.keys(ce))
    o[d] = (i, c = e._context) => ce[d](i, c);
  e.config.globalProperties.$modal = o;
}, _context: null }))));
var ze;
var Ol = createBaseVNode("i", { class: "rtdp xinzeng" }, null, -1);
var Sl = createBaseVNode("i", { class: "rtdp caozuo-bianji" }, null, -1);
var Ll = defineComponent({ __name: "index", props: { disabled: { type: Boolean, default: false }, loading: { type: Boolean, default: false }, size: { default: "small" }, options: { default: () => ({ maskClosable: false, loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 245, search: false, searchSpan: 6, searchBtnSpan: 6 }) } }, emits: ["handleSave", "handleUpdate"], setup(e, { expose: l, emit: a }) {
  const o = defineAsyncComponent(() => import("./index-kBNHnPns-BLT4JX4P.js")), d = ref(null), i = ref(false), c = ref(""), C2 = ref(false), f = ref(""), m = () => {
    i.value = false;
  }, y = () => {
    i.value = false, d.value.done();
  }, g = (t) => {
    C2.value = true, t === "add" && d.value.handleSave(), t === "edit" && d.value.handleUpdate();
  }, O = (t, n, u) => {
    a("handleSave", t, n, u);
  }, B = (t, n, u) => {
    a("handleUpdate", t, n, u);
  };
  return l({ handleOpenModel: (t, n) => {
    f.value = t, t === "add" && (c.value = No.global.t("modal.addTitle")), t === "edit" && (c.value = No.global.t("modal.editTitle"), d.value.deepClone(n)), t === "see" && (c.value = No.global.t("modal.viewTitle"), d.value.deepClone(n)), i.value = true;
  } }), (t, n) => {
    const u = Yl, H = C, R = ve;
    return openBlock(), createBlock(R, { visible: i.value, "onUpdate:visible": n[4] || (n[4] = (k) => i.value = k), "align-center": false, footer: f.value !== "see", "mask-closable": t.options.maskClosable, top: "20vh", width: "65%", onCancel: y, onOk: m }, { title: withCtx(() => [createTextVNode(toDisplayString(c.value), 1)]), footer: withCtx(() => [createVNode(H, null, { default: withCtx(() => [createVNode(u, { size: t.size, onClick: y }, { default: withCtx(() => [createTextVNode(toDisplayString(unref(No).global.t("arcomodals.cancelBtn")), 1)]), _: 1 }, 8, ["size"]), f.value === "add" ? (openBlock(), createBlock(u, { key: 0, loading: C2.value, size: t.size, type: "primary", onClick: n[2] || (n[2] = (k) => g("add")) }, { icon: withCtx(() => [Ol]), default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(No).global.t("arcomodals.saveBtn")), 1)]), _: 1 }, 8, ["loading", "size"])) : createCommentVNode("", true), f.value === "edit" ? (openBlock(), createBlock(u, { key: 1, loading: C2.value, size: t.size, type: "primary", onClick: n[3] || (n[3] = (k) => g("edit")) }, { icon: withCtx(() => [Sl]), default: withCtx(() => [createTextVNode(" " + toDisplayString(unref(No).global.t("arcomodals.updateBtn")), 1)]), _: 1 }, 8, ["loading", "size"])) : createCommentVNode("", true)]), _: 1 })]), default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(o)), { ref_key: "modalRef", ref: d, Loading: C2.value, "onUpdate:Loading": n[0] || (n[0] = (k) => C2.value = k), Visible: i.value, "onUpdate:Visible": n[1] || (n[1] = (k) => i.value = k), modelType: f.value, options: t.options, size: t.size, onHandleSave: O, onHandleUpdate: B }, createSlots({ _: 2 }, [renderList(t.options.columns, (k, G) => ({ name: k.dataIndex + "Label", fn: withCtx(() => [renderSlot(t.$slots, k.dataIndex + "Label")]) }))]), 1064, ["Loading", "Visible", "modelType", "options", "size"]))]), _: 3 }, 8, ["visible", "footer", "mask-closable"]);
  };
} });
export {
  Ll as default
};
//# sourceMappingURL=index-zPNdtI6J-ZX3PSB4L.js.map
