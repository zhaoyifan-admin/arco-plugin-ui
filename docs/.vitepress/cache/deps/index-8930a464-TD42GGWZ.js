import {
  $p,
  $t,
  An,
  Cl,
  D4,
  Dl,
  G4,
  K0,
  K4,
  Ln,
  Mp,
  N0,
  R0,
  Sp,
  U4,
  Y4,
  Yl,
  Yr,
  Z4,
  Ze,
  Zt,
  he,
  ht,
  ia,
  je,
  oa,
  pe,
  q4,
  xl
} from "./chunk-I6ZBQRAN.js";
import "./chunk-W6TZYUAE.js";
import "./chunk-O7NL36PV.js";
import "./chunk-FVN67OAP.js";
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

// node_modules/.pnpm/vue-arco-ui@0.1.55_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-8930a464.js
var rl = defineComponent({ name: "IconInfoCircleFill", props: { size: { type: [Number, String] }, strokeWidth: { type: Number, default: 4 }, strokeLinecap: { type: String, default: "butt", validator: (e) => ["butt", "round", "square"].includes(e) }, strokeLinejoin: { type: String, default: "miter", validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e) }, rotate: Number, spin: Boolean }, emits: { click: (e) => true }, setup(e, { emit: l }) {
  const t = pe("icon");
  return { cls: computed(() => [t, `${t}-info-circle-fill`, { [`${t}-spin`]: e.spin }]), innerStyle: computed(() => {
    const a = {};
    return e.size && (a.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (a.transform = `rotate(${e.rotate}deg)`), a;
  }), onClick: (a) => {
    l("click", a);
  } };
} });
var dl = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
var cl = [createBaseVNode("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z", fill: "currentColor", stroke: "none" }, null, -1)];
var ie = je(rl, [["render", function(e, l, t, a, d, i) {
  return openBlock(), createElementBlock("svg", { viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", class: normalizeClass(e.cls), style: normalizeStyle(e.innerStyle), "stroke-width": e.strokeWidth, "stroke-linecap": e.strokeLinecap, "stroke-linejoin": e.strokeLinejoin, onClick: l[0] || (l[0] = (...c) => e.onClick && e.onClick(...c)) }, cl, 14, dl);
}]]);
var ul = Object.assign(ie, { install: (e, l) => {
  var t;
  const a = (t = l == null ? void 0 : l.iconPrefix) != null ? t : "";
  e.component(a + ie.name, ie);
} });
var pl = ({ modalRef: e, wrapperRef: l, draggable: t, alignCenter: a }) => {
  const d = ref(false), i = ref([0, 0]), c = ref([0, 0]), b = ref(), f = ref([0, 0]), m = ref([0, 0]), y = (O) => {
    if (d.value) {
      const B = O.x - i.value[0], o = O.y - i.value[1];
      let n = c.value[0] + B, u = c.value[1] + o;
      n < f.value[0] && (n = f.value[0]), n > m.value[0] && (n = m.value[0]), u < f.value[1] && (u = f.value[1]), u > m.value[1] && (u = m.value[1]), b.value = [n, u];
    }
  }, C = () => {
    d.value = false, ht(window, "mousemove", y), ht(window, "mouseup", C);
  };
  return { position: b, handleMoveDown: (O) => {
    t.value && (O.preventDefault(), d.value = true, (() => {
      var B, o, n;
      if (l.value && e.value) {
        const { top: u, left: V } = l.value.getBoundingClientRect(), { clientWidth: k, clientHeight: N } = l.value, { top: Y, left: U, width: F, height: H } = e.value.getBoundingClientRect(), _ = a.value ? 0 : (B = e.value) == null ? void 0 : B.offsetTop, E = U - V, T = Y - u - _;
        E === ((o = c.value) == null ? void 0 : o[0]) && T === ((n = c.value) == null ? void 0 : n[1]) || (c.value = [E, T]);
        const q = k > F ? k - F : 0, W = N > H ? N - H - _ : 0;
        q === m.value[0] && W === m.value[1] || (m.value = [q, W]), _ && (f.value = [0, 0 - _]);
      }
    })(), i.value = [O.x, O.y], Yl(window, "mousemove", y), Yl(window, "mouseup", C), Yl(window, "contextmenu", C));
  } };
};
var vl = Object.defineProperty;
var we = Object.getOwnPropertySymbols;
var fl = Object.prototype.hasOwnProperty;
var ml = Object.prototype.propertyIsEnumerable;
var xe = (e, l, t) => l in e ? vl(e, l, { enumerable: true, configurable: true, writable: true, value: t }) : e[l] = t;
var yl = defineComponent({ name: "Modal", components: { ClientOnly: $p, ArcoButton: Zt, IconHover: Dl, IconClose: An, IconInfoCircleFill: ul, IconCheckCircleFill: R0, IconExclamationCircleFill: N0, IconCloseCircleFill: K0 }, inheritAttrs: false, props: { visible: { type: Boolean, default: void 0 }, defaultVisible: { type: Boolean, default: false }, width: { type: [Number, String] }, top: { type: [Number, String] }, mask: { type: Boolean, default: true }, title: { type: String }, titleAlign: { type: String, default: "center" }, alignCenter: { type: Boolean, default: true }, unmountOnClose: Boolean, maskClosable: { type: Boolean, default: true }, hideCancel: { type: Boolean, default: false }, simple: { type: Boolean, default: (e) => e.notice }, closable: { type: Boolean, default: true }, okText: String, cancelText: String, okLoading: { type: Boolean, default: false }, okButtonProps: { type: Object }, cancelButtonProps: { type: Object }, footer: { type: Boolean, default: true }, renderToBody: { type: Boolean, default: true }, popupContainer: { type: [String, Object], default: "body" }, maskStyle: { type: Object }, modalClass: { type: [String, Array] }, modalStyle: { type: Object }, onBeforeOk: { type: Function }, onBeforeCancel: { type: Function }, escToClose: { type: Boolean, default: true }, draggable: { type: Boolean, default: false }, fullscreen: { type: Boolean, default: false }, maskAnimationName: { type: String, default: (e) => e.fullscreen ? "fade-in-standard" : "fade-modal" }, modalAnimationName: { type: String, default: (e) => e.fullscreen ? "zoom-in" : "zoom-modal" }, bodyClass: { type: [String, Array] }, bodyStyle: { type: [String, Object, Array] }, messageType: { type: String }, hideTitle: { type: Boolean, default: false } }, emits: { "update:visible": (e) => true, ok: (e) => true, cancel: (e) => true, open: () => true, close: () => true, beforeOpen: () => true, beforeClose: () => true }, setup(e, { emit: l }) {
  const { fullscreen: t, popupContainer: a, alignCenter: d } = toRefs(e), i = pe("modal"), { t: c } = oa(), b = ref(), f = ref(), m = ref(e.defaultVisible), y = computed(() => {
    var r;
    return (r = e.visible) != null ? r : m.value;
  }), C = ref(false), O = computed(() => e.okLoading || C.value), B = computed(() => e.draggable && !e.fullscreen), { teleportContainer: o, containerRef: n } = Mp({ popupContainer: a, visible: y }), u = ref(y.value), V = computed(() => e.okText || c("modal.okText")), k = computed(() => e.cancelText || c("modal.cancelText")), { zIndex: N, isLastDialog: Y } = Sp("dialog", { visible: y });
  let U = false;
  const F = (r) => {
    e.escToClose && r.key === $t.ESC && Y() && ee(r);
  }, H = () => {
    e.escToClose && !U && (U = true, Yl(document.documentElement, "keydown", F));
  }, _ = () => {
    U = false, ht(document.documentElement, "keydown", F);
  };
  let E = 0;
  const { position: T, handleMoveDown: q } = pl({ wrapperRef: b, modalRef: f, draggable: B, alignCenter: d }), W = () => {
    E++, C.value && (C.value = false), m.value = false, l("update:visible", false);
  }, ee = (r) => {
    var w;
    let g = true;
    Ze(e.onBeforeCancel) && (g = (w = e.onBeforeCancel()) != null && w), g && (l("cancel", r), W());
  }, le = ref(false), { setOverflowHidden: ve, resetOverflow: fe } = ((r) => {
    const w = ref(false), g = { overflow: "", width: "", boxSizing: "" };
    return { setOverflowHidden: () => {
      if (r.value) {
        const s = r.value;
        if (!w.value && s.style.overflow !== "hidden") {
          const S = U4(s);
          (S > 0 || G4(s)) && (g.overflow = s.style.overflow, g.width = s.style.width, g.boxSizing = s.style.boxSizing, s.style.overflow = "hidden", s.style.width = s.offsetWidth - S + "px", s.style.boxSizing = "border-box", w.value = true);
        }
      }
    }, resetOverflow: () => {
      if (r.value && w.value) {
        const s = r.value;
        s.style.overflow = g.overflow, s.style.width = g.width, s.style.boxSizing = g.boxSizing, w.value = false;
      }
    } };
  })(n);
  onMounted(() => {
    n.value = Yr(e.popupContainer), y.value && (ve(), e.escToClose && H());
  }), onBeforeUnmount(() => {
    fe(), _();
  }), watch(y, (r) => {
    m.value !== r && (m.value = r), r ? (l("beforeOpen"), u.value = true, le.value = false, ve(), H()) : (l("beforeClose"), _());
  }), watch(t, () => {
    T.value && (T.value = void 0);
  });
  const Me = computed(() => [`${i}-wrapper`, { [`${i}-wrapper-align-center`]: e.alignCenter && !e.fullscreen, [`${i}-wrapper-moved`]: !!T.value }]), je2 = computed(() => [`${i}`, e.modalClass, { [`${i}-simple`]: e.simple, [`${i}-draggable`]: B.value, [`${i}-fullscreen`]: e.fullscreen }]), Le = computed(() => {
    var r;
    const w = ((g, s) => {
      for (var S in s || (s = {}))
        fl.call(s, S) && xe(g, S, s[S]);
      if (we)
        for (var S of we(s))
          ml.call(s, S) && xe(g, S, s[S]);
      return g;
    })({}, (r = e.modalStyle) != null ? r : {});
    return e.width && !e.fullscreen && (w.width = he(e.width) ? `${e.width}px` : e.width), !e.alignCenter && e.top && (w.top = he(e.top) ? `${e.top}px` : e.top), T.value && (w.transform = `translate(${T.value[0]}px, ${T.value[1]}px)`), w;
  });
  return { prefixCls: i, mounted: u, computedVisible: y, containerRef: n, wrapperRef: b, mergedModalStyle: Le, okDisplayText: V, cancelDisplayText: k, zIndex: N, handleOk: async (r) => {
    const w = E, g = await new Promise(async (s) => {
      var S;
      if (Ze(e.onBeforeOk)) {
        let j = e.onBeforeOk((me = true) => s(me));
        if (!D4(j) && Ln(j) || (C.value = true), D4(j))
          try {
            j = (S = await j) == null || S;
          } catch {
            j = false;
          }
        Ln(j) && s(j);
      } else
        s(true);
    });
    w === E && (g ? (l("ok", r), W()) : C.value && (C.value = false));
  }, handleCancel: ee, handleMaskClick: (r) => {
    e.mask && e.maskClosable && le.value && ee(r);
  }, handleMaskMouseDown: (r) => {
    r.target === b.value && (le.value = true);
  }, handleOpen: () => {
    y.value && (!q4(b.value, document.activeElement) && document.activeElement instanceof HTMLElement && document.activeElement.blur(), l("open"));
  }, handleClose: () => {
    y.value || (B.value && (T.value = void 0), u.value = false, fe(), l("close"));
  }, mergedOkLoading: O, modalRef: f, wrapperCls: Me, modalCls: je2, teleportContainer: o, handleMoveDown: q };
} });
var X = je(yl, [["render", function(e, l, t, a, d, i) {
  const c = resolveComponent("icon-info-circle-fill"), b = resolveComponent("icon-check-circle-fill"), f = resolveComponent("icon-exclamation-circle-fill"), m = resolveComponent("icon-close-circle-fill"), y = resolveComponent("icon-close"), C = resolveComponent("icon-hover"), O = resolveComponent("arco-button"), B = resolveComponent("client-only");
  return openBlock(), createBlock(B, null, { default: withCtx(() => [(openBlock(), createBlock(Teleport, { to: e.teleportContainer, disabled: !e.renderToBody }, [!e.unmountOnClose || e.computedVisible || e.mounted ? withDirectives((openBlock(), createElementBlock("div", mergeProps({ key: 0, class: `${e.prefixCls}-container`, style: { zIndex: e.zIndex } }, e.$attrs), [createVNode(Transition, { name: e.maskAnimationName, appear: "" }, { default: withCtx(() => [e.mask ? withDirectives((openBlock(), createElementBlock("div", { key: 0, ref: "maskRef", class: normalizeClass(`${e.prefixCls}-mask`), style: normalizeStyle(e.maskStyle) }, null, 6)), [[vShow, e.computedVisible]]) : createCommentVNode("v-if", true)]), _: 1 }, 8, ["name"]), createBaseVNode("div", { ref: "wrapperRef", class: normalizeClass(e.wrapperCls), onClick: l[2] || (l[2] = withModifiers((...o) => e.handleMaskClick && e.handleMaskClick(...o), ["self"])), onMousedown: l[3] || (l[3] = withModifiers((...o) => e.handleMaskMouseDown && e.handleMaskMouseDown(...o), ["self"])) }, [createVNode(Transition, { name: e.modalAnimationName, appear: "", onAfterEnter: e.handleOpen, onAfterLeave: e.handleClose }, { default: withCtx(() => [withDirectives(createBaseVNode("div", { ref: "modalRef", class: normalizeClass(e.modalCls), style: normalizeStyle(e.mergedModalStyle) }, [!e.hideTitle && (e.$slots.title || e.title || e.closable) ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(`${e.prefixCls}-header`), onMousedown: l[1] || (l[1] = (...o) => e.handleMoveDown && e.handleMoveDown(...o)) }, [e.$slots.title || e.title ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass([`${e.prefixCls}-title`, `${e.prefixCls}-title-align-${e.titleAlign}`]) }, [e.messageType ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(`${e.prefixCls}-title-icon`) }, [e.messageType === "info" ? (openBlock(), createBlock(c, { key: 0 })) : createCommentVNode("v-if", true), e.messageType === "success" ? (openBlock(), createBlock(b, { key: 1 })) : createCommentVNode("v-if", true), e.messageType === "warning" ? (openBlock(), createBlock(f, { key: 2 })) : createCommentVNode("v-if", true), e.messageType === "error" ? (openBlock(), createBlock(m, { key: 3 })) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), renderSlot(e.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])], 2)) : createCommentVNode("v-if", true), !e.simple && e.closable ? (openBlock(), createElementBlock("div", { key: 1, tabindex: "-1", role: "button", "aria-label": "Close", class: normalizeClass(`${e.prefixCls}-close-btn`), onClick: l[0] || (l[0] = (...o) => e.handleCancel && e.handleCancel(...o)) }, [createVNode(C, null, { default: withCtx(() => [createVNode(y)]), _: 1 })], 2)) : createCommentVNode("v-if", true)], 34)) : createCommentVNode("v-if", true), createBaseVNode("div", { class: normalizeClass([`${e.prefixCls}-body`, e.bodyClass]), style: normalizeStyle(e.bodyStyle) }, [renderSlot(e.$slots, "default")], 6), e.footer ? (openBlock(), createElementBlock("div", { key: 1, class: normalizeClass(`${e.prefixCls}-footer`) }, [renderSlot(e.$slots, "footer", {}, () => [e.hideCancel ? createCommentVNode("v-if", true) : (openBlock(), createBlock(O, mergeProps({ key: 0 }, e.cancelButtonProps, { onClick: e.handleCancel }), { default: withCtx(() => [createTextVNode(toDisplayString(e.cancelDisplayText), 1)]), _: 1 }, 16, ["onClick"])), createVNode(O, mergeProps({ type: "primary" }, e.okButtonProps, { loading: e.mergedOkLoading, onClick: e.handleOk }), { default: withCtx(() => [createTextVNode(toDisplayString(e.okDisplayText), 1)]), _: 1 }, 16, ["loading", "onClick"])])], 2)) : createCommentVNode("v-if", true)], 6), [[vShow, e.computedVisible]])]), _: 3 }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 34)], 16)), [[vShow, e.computedVisible || e.mounted]]) : createCommentVNode("v-if", true)], 8, ["to", "disabled"]))]), _: 3 });
}]]);
var bl = Object.defineProperty;
var Cl2 = Object.defineProperties;
var kl = Object.getOwnPropertyDescriptors;
var Oe = Object.getOwnPropertySymbols;
var gl = Object.prototype.hasOwnProperty;
var hl = Object.prototype.propertyIsEnumerable;
var Se = (e, l, t) => l in e ? bl(e, l, { enumerable: true, configurable: true, writable: true, value: t }) : e[l] = t;
var P = (e, l) => {
  for (var t in l || (l = {}))
    gl.call(l, t) && Se(e, t, l[t]);
  if (Oe)
    for (var t of Oe(l))
      hl.call(l, t) && Se(e, t, l[t]);
  return e;
};
var se = (e, l) => {
  let t = Y4("modal");
  const a = createVNode(X, P(P(P({}, { visible: true, renderToBody: false, unmountOnClose: true, onOk: () => {
    a.component && (a.component.props.visible = false), Ze(e.onOk) && e.onOk();
  }, onCancel: () => {
    a.component && (a.component.props.visible = false), Ze(e.onCancel) && e.onCancel();
  }, onClose: async () => {
    await nextTick(), t && (render(null, t), document.body.removeChild(t)), t = null, Ze(e.onClose) && e.onClose();
  } }), ia(e, ["content", "title", "footer", "visible", "unmountOnClose", "onOk", "onCancel", "onClose"])), { footer: typeof e.footer == "boolean" ? e.footer : void 0 }), { default: K4(e.content), title: K4(e.title), footer: typeof e.footer != "boolean" ? K4(e.footer) : void 0 });
  return (l ?? ue._context) && (a.appContext = l ?? ue._context), render(a, t), document.body.appendChild(t), { close: () => {
    a.component && (a.component.props.visible = false);
  }, update: (d) => {
    a.component && Object.entries(d).forEach(([i, c]) => {
      a.component.props[i] = c;
    });
  } };
};
var re = P({ open: se, confirm: (e, l) => {
  const t = P({ simple: true, messageType: "warning" }, e);
  return se(t, l);
} }, Z4.reduce((e, l) => (e[l] = (t, a) => {
  const d = P({ simple: true, hideCancel: true, messageType: l }, t);
  return se(d, a);
}, e), {}));
var ue = Object.assign(X, (Be = P({}, re), Cl2(Be, kl({ install: (e, l) => {
  Cl(e, l);
  const t = xl(l);
  e.component(t + X.name, X);
  const a = {};
  for (const d of Object.keys(re))
    a[d] = (i, c = e._context) => re[d](i, c);
  e.config.globalProperties.$modal = a;
}, _context: null }))));
var Be;
var wl = createBaseVNode("i", { class: "rtdp xinzeng" }, null, -1);
var xl2 = createBaseVNode("i", { class: "rtdp caozuo-bianji" }, null, -1);
var jl = defineComponent({ __name: "index", props: { disabled: { type: Boolean, default: false }, loading: { type: Boolean, default: false }, size: { default: "small" }, options: { default: () => ({ maskClosable: false, loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 245, search: false, searchSpan: 6, searchBtnSpan: 6 }) } }, emits: ["handleSave", "handleUpdate"], setup(e, { expose: l, emit: t }) {
  const a = defineAsyncComponent(() => import("./index-6be97c20-GNFCYEWS.js")), d = ref(null), i = ref(false), c = ref(""), b = ref(false), f = ref(""), m = () => {
    i.value = false;
  }, y = () => {
    i.value = false, d.value.done();
  }, C = (o) => {
    b.value = true, o === "add" && d.value.handleSave(), o === "edit" && d.value.handleUpdate();
  }, O = (o, n, u) => {
    t("handleSave", o, n, u);
  }, B = (o, n, u) => {
    t("handleUpdate", o, n, u);
  };
  return l({ handleOpenModel: (o, n) => {
    f.value = o, o === "add" && (c.value = "新增"), o === "edit" && (c.value = "编辑", d.value.deepClone(n)), o === "see" && (c.value = "查看", d.value.deepClone(n)), i.value = true;
  } }), (o, n) => {
    const u = Zt, V = ue;
    return openBlock(), createBlock(V, { visible: i.value, "onUpdate:visible": n[4] || (n[4] = (k) => i.value = k), "align-center": false, footer: f.value !== "see", "mask-closable": o.options.maskClosable, top: "20vh", width: "65%", onCancel: y, onOk: m }, { title: withCtx(() => [createTextVNode(toDisplayString(c.value), 1)]), footer: withCtx(() => [createVNode(u, { size: o.size, onClick: y }, { default: withCtx(() => [createTextVNode("取消")]), _: 1 }, 8, ["size"]), f.value === "add" ? (openBlock(), createBlock(u, { key: 0, type: "primary", size: o.size, loading: b.value, onClick: n[2] || (n[2] = (k) => C("add")) }, { icon: withCtx(() => [wl]), default: withCtx(() => [createTextVNode(" 保存 ")]), _: 1 }, 8, ["size", "loading"])) : createCommentVNode("", true), f.value === "edit" ? (openBlock(), createBlock(u, { key: 1, type: "primary", size: o.size, loading: b.value, onClick: n[3] || (n[3] = (k) => C("edit")) }, { icon: withCtx(() => [xl2]), default: withCtx(() => [createTextVNode(" 修改 ")]), _: 1 }, 8, ["size", "loading"])) : createCommentVNode("", true)]), default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(a)), { ref_key: "modalRef", ref: d, Loading: b.value, "onUpdate:Loading": n[0] || (n[0] = (k) => b.value = k), Visible: i.value, "onUpdate:Visible": n[1] || (n[1] = (k) => i.value = k), modelType: f.value, options: o.options, size: o.size, onHandleSave: O, onHandleUpdate: B }, createSlots({ _: 2 }, [renderList(o.options.columns, (k, N) => ({ name: k.dataIndex + "Label", fn: withCtx(() => [renderSlot(o.$slots, k.dataIndex + "Label")]) }))]), 1064, ["Loading", "Visible", "modelType", "options", "size"]))]), _: 3 }, 8, ["visible", "footer", "mask-closable"]);
  };
} });
export {
  jl as default
};
//# sourceMappingURL=index-8930a464-TD42GGWZ.js.map
