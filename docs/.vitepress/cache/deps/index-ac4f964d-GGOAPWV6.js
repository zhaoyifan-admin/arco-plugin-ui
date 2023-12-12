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
  Le,
  Ln,
  Mp,
  N0,
  R0,
  Sp,
  U4,
  Ue,
  Ut,
  Y4,
  Yl,
  Yr,
  Z4,
  he,
  ht,
  ia,
  oa,
  pe,
  q4,
  xl
} from "./chunk-4576TRBC.js";
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

// node_modules/.pnpm/vue-arco-ui@0.1.52_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/index-ac4f964d.js
var rt = defineComponent({ name: "IconInfoCircleFill", props: { size: { type: [Number, String] }, strokeWidth: { type: Number, default: 4 }, strokeLinecap: { type: String, default: "butt", validator: (e) => ["butt", "round", "square"].includes(e) }, strokeLinejoin: { type: String, default: "miter", validator: (e) => ["arcs", "bevel", "miter", "miter-clip", "round"].includes(e) }, rotate: Number, spin: Boolean }, emits: { click: (e) => true }, setup(e, { emit: t }) {
  const l = pe("icon");
  return { cls: computed(() => [l, `${l}-info-circle-fill`, { [`${l}-spin`]: e.spin }]), innerStyle: computed(() => {
    const o = {};
    return e.size && (o.fontSize = he(e.size) ? `${e.size}px` : e.size), e.rotate && (o.transform = `rotate(${e.rotate}deg)`), o;
  }), onClick: (o) => {
    t("click", o);
  } };
} });
var ct = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
var dt = [createBaseVNode("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z", fill: "currentColor", stroke: "none" }, null, -1)];
var ie = Le(rt, [["render", function(e, t, l, o, r, s) {
  return openBlock(), createElementBlock("svg", { viewBox: "0 0 48 48", fill: "none", xmlns: "http://www.w3.org/2000/svg", stroke: "currentColor", class: normalizeClass(e.cls), style: normalizeStyle(e.innerStyle), "stroke-width": e.strokeWidth, "stroke-linecap": e.strokeLinecap, "stroke-linejoin": e.strokeLinejoin, onClick: t[0] || (t[0] = (...c) => e.onClick && e.onClick(...c)) }, dt, 14, ct);
}]]);
var ut = Object.assign(ie, { install: (e, t) => {
  var l;
  const o = (l = t == null ? void 0 : t.iconPrefix) != null ? l : "";
  e.component(o + ie.name, ie);
} });
var pt = ({ modalRef: e, wrapperRef: t, draggable: l, alignCenter: o }) => {
  const r = ref(false), s = ref([0, 0]), c = ref([0, 0]), O = ref(), h = ref([0, 0]), n = ref([0, 0]), d = (C) => {
    if (r.value) {
      const p = C.x - s.value[0], m = C.y - s.value[1];
      let w = c.value[0] + p, S = c.value[1] + m;
      w < h.value[0] && (w = h.value[0]), w > n.value[0] && (w = n.value[0]), S < h.value[1] && (S = h.value[1]), S > n.value[1] && (S = n.value[1]), O.value = [w, S];
    }
  }, f = () => {
    r.value = false, ht(window, "mousemove", d), ht(window, "mouseup", f);
  };
  return { position: O, handleMoveDown: (C) => {
    l.value && (C.preventDefault(), r.value = true, (() => {
      var p, m, w;
      if (t.value && e.value) {
        const { top: S, left: X } = t.value.getBoundingClientRect(), { clientWidth: H, clientHeight: U } = t.value, { top: Y, left: E, width: R, height: N } = e.value.getBoundingClientRect(), A = o.value ? 0 : (p = e.value) == null ? void 0 : p.offsetTop, L = E - X, B = Y - S - A;
        L === ((m = c.value) == null ? void 0 : m[0]) && B === ((w = c.value) == null ? void 0 : w[1]) || (c.value = [L, B]);
        const Z = H > R ? H - R : 0, V = U > N ? U - N - A : 0;
        Z === n.value[0] && V === n.value[1] || (n.value = [Z, V]), A && (h.value = [0, 0 - A]);
      }
    })(), s.value = [C.x, C.y], Yl(window, "mousemove", d), Yl(window, "mouseup", f), Yl(window, "contextmenu", f));
  } };
};
var vt = Object.defineProperty;
var we = Object.getOwnPropertySymbols;
var ft = Object.prototype.hasOwnProperty;
var mt = Object.prototype.propertyIsEnumerable;
var xe = (e, t, l) => t in e ? vt(e, t, { enumerable: true, configurable: true, writable: true, value: l }) : e[t] = l;
var yt = defineComponent({ name: "Modal", components: { ClientOnly: $p, ArcoButton: Ut, IconHover: Dl, IconClose: An, IconInfoCircleFill: ut, IconCheckCircleFill: R0, IconExclamationCircleFill: N0, IconCloseCircleFill: K0 }, inheritAttrs: false, props: { visible: { type: Boolean, default: void 0 }, defaultVisible: { type: Boolean, default: false }, width: { type: [Number, String] }, top: { type: [Number, String] }, mask: { type: Boolean, default: true }, title: { type: String }, titleAlign: { type: String, default: "center" }, alignCenter: { type: Boolean, default: true }, unmountOnClose: Boolean, maskClosable: { type: Boolean, default: true }, hideCancel: { type: Boolean, default: false }, simple: { type: Boolean, default: (e) => e.notice }, closable: { type: Boolean, default: true }, okText: String, cancelText: String, okLoading: { type: Boolean, default: false }, okButtonProps: { type: Object }, cancelButtonProps: { type: Object }, footer: { type: Boolean, default: true }, renderToBody: { type: Boolean, default: true }, popupContainer: { type: [String, Object], default: "body" }, maskStyle: { type: Object }, modalClass: { type: [String, Array] }, modalStyle: { type: Object }, onBeforeOk: { type: Function }, onBeforeCancel: { type: Function }, escToClose: { type: Boolean, default: true }, draggable: { type: Boolean, default: false }, fullscreen: { type: Boolean, default: false }, maskAnimationName: { type: String, default: (e) => e.fullscreen ? "fade-in-standard" : "fade-modal" }, modalAnimationName: { type: String, default: (e) => e.fullscreen ? "zoom-in" : "zoom-modal" }, bodyClass: { type: [String, Array] }, bodyStyle: { type: [String, Object, Array] }, messageType: { type: String }, hideTitle: { type: Boolean, default: false } }, emits: { "update:visible": (e) => true, ok: (e) => true, cancel: (e) => true, open: () => true, close: () => true, beforeOpen: () => true, beforeClose: () => true }, setup(e, { emit: t }) {
  const { fullscreen: l, popupContainer: o, alignCenter: r } = toRefs(e), s = pe("modal"), { t: c } = oa(), O = ref(), h = ref(), n = ref(e.defaultVisible), d = computed(() => {
    var i;
    return (i = e.visible) != null ? i : n.value;
  }), f = ref(false), C = computed(() => e.okLoading || f.value), p = computed(() => e.draggable && !e.fullscreen), { teleportContainer: m, containerRef: w } = Mp({ popupContainer: o, visible: d }), S = ref(d.value), X = computed(() => e.okText || c("modal.okText")), H = computed(() => e.cancelText || c("modal.cancelText")), { zIndex: U, isLastDialog: Y } = Sp("dialog", { visible: d });
  let E = false;
  const R = (i) => {
    e.escToClose && i.key === $t.ESC && Y() && ee(i);
  }, N = () => {
    e.escToClose && !E && (E = true, Yl(document.documentElement, "keydown", R));
  }, A = () => {
    E = false, ht(document.documentElement, "keydown", R);
  };
  let L = 0;
  const { position: B, handleMoveDown: Z } = pt({ wrapperRef: O, modalRef: h, draggable: p, alignCenter: r }), V = () => {
    L++, f.value && (f.value = false), n.value = false, t("update:visible", false);
  }, ee = (i) => {
    var b;
    let y = true;
    Ue(e.onBeforeCancel) && (y = (b = e.onBeforeCancel()) != null && b), y && (t("cancel", i), V());
  }, te = ref(false), { setOverflowHidden: ve, resetOverflow: fe } = ((i) => {
    const b = ref(false), y = { overflow: "", width: "", boxSizing: "" };
    return { setOverflowHidden: () => {
      if (i.value) {
        const a = i.value;
        if (!b.value && a.style.overflow !== "hidden") {
          const k = Z4(a);
          (k > 0 || G4(a)) && (y.overflow = a.style.overflow, y.width = a.style.width, y.boxSizing = a.style.boxSizing, a.style.overflow = "hidden", a.style.width = a.offsetWidth - k + "px", a.style.boxSizing = "border-box", b.value = true);
        }
      }
    }, resetOverflow: () => {
      if (i.value && b.value) {
        const a = i.value;
        a.style.overflow = y.overflow, a.style.width = y.width, a.style.boxSizing = y.boxSizing, b.value = false;
      }
    } };
  })(w);
  onMounted(() => {
    w.value = Yr(e.popupContainer), d.value && (ve(), e.escToClose && N());
  }), onBeforeUnmount(() => {
    fe(), A();
  }), watch(d, (i) => {
    n.value !== i && (n.value = i), i ? (t("beforeOpen"), S.value = true, te.value = false, ve(), N()) : (t("beforeClose"), A());
  }), watch(l, () => {
    B.value && (B.value = void 0);
  });
  const Me = computed(() => [`${s}-wrapper`, { [`${s}-wrapper-align-center`]: e.alignCenter && !e.fullscreen, [`${s}-wrapper-moved`]: !!B.value }]), je = computed(() => [`${s}`, e.modalClass, { [`${s}-simple`]: e.simple, [`${s}-draggable`]: p.value, [`${s}-fullscreen`]: e.fullscreen }]), De = computed(() => {
    var i;
    const b = ((y, a) => {
      for (var k in a || (a = {}))
        ft.call(a, k) && xe(y, k, a[k]);
      if (we)
        for (var k of we(a))
          mt.call(a, k) && xe(y, k, a[k]);
      return y;
    })({}, (i = e.modalStyle) != null ? i : {});
    return e.width && !e.fullscreen && (b.width = he(e.width) ? `${e.width}px` : e.width), !e.alignCenter && e.top && (b.top = he(e.top) ? `${e.top}px` : e.top), B.value && (b.transform = `translate(${B.value[0]}px, ${B.value[1]}px)`), b;
  });
  return { prefixCls: s, mounted: S, computedVisible: d, containerRef: w, wrapperRef: O, mergedModalStyle: De, okDisplayText: X, cancelDisplayText: H, zIndex: U, handleOk: async (i) => {
    const b = L, y = await new Promise(async (a) => {
      var k;
      if (Ue(e.onBeforeOk)) {
        let M = e.onBeforeOk((me = true) => a(me));
        if (!D4(M) && Ln(M) || (f.value = true), D4(M))
          try {
            M = (k = await M) == null || k;
          } catch {
            M = false;
          }
        Ln(M) && a(M);
      } else
        a(true);
    });
    b === L && (y ? (t("ok", i), V()) : f.value && (f.value = false));
  }, handleCancel: ee, handleMaskClick: (i) => {
    e.mask && e.maskClosable && te.value && ee(i);
  }, handleMaskMouseDown: (i) => {
    i.target === O.value && (te.value = true);
  }, handleOpen: () => {
    d.value && (!q4(O.value, document.activeElement) && document.activeElement instanceof HTMLElement && document.activeElement.blur(), t("open"));
  }, handleClose: () => {
    d.value || (p.value && (B.value = void 0), S.value = false, fe(), t("close"));
  }, mergedOkLoading: C, modalRef: h, wrapperCls: Me, modalCls: je, teleportContainer: m, handleMoveDown: Z };
} });
var Q = Le(yt, [["render", function(e, t, l, o, r, s) {
  const c = resolveComponent("icon-info-circle-fill"), O = resolveComponent("icon-check-circle-fill"), h = resolveComponent("icon-exclamation-circle-fill"), n = resolveComponent("icon-close-circle-fill"), d = resolveComponent("icon-close"), f = resolveComponent("icon-hover"), C = resolveComponent("arco-button"), p = resolveComponent("client-only");
  return openBlock(), createBlock(p, null, { default: withCtx(() => [(openBlock(), createBlock(Teleport, { to: e.teleportContainer, disabled: !e.renderToBody }, [!e.unmountOnClose || e.computedVisible || e.mounted ? withDirectives((openBlock(), createElementBlock("div", mergeProps({ key: 0, class: `${e.prefixCls}-container`, style: { zIndex: e.zIndex } }, e.$attrs), [createVNode(Transition, { name: e.maskAnimationName, appear: "" }, { default: withCtx(() => [e.mask ? withDirectives((openBlock(), createElementBlock("div", { key: 0, ref: "maskRef", class: normalizeClass(`${e.prefixCls}-mask`), style: normalizeStyle(e.maskStyle) }, null, 6)), [[vShow, e.computedVisible]]) : createCommentVNode("v-if", true)]), _: 1 }, 8, ["name"]), createBaseVNode("div", { ref: "wrapperRef", class: normalizeClass(e.wrapperCls), onClick: t[2] || (t[2] = withModifiers((...m) => e.handleMaskClick && e.handleMaskClick(...m), ["self"])), onMousedown: t[3] || (t[3] = withModifiers((...m) => e.handleMaskMouseDown && e.handleMaskMouseDown(...m), ["self"])) }, [createVNode(Transition, { name: e.modalAnimationName, appear: "", onAfterEnter: e.handleOpen, onAfterLeave: e.handleClose }, { default: withCtx(() => [withDirectives(createBaseVNode("div", { ref: "modalRef", class: normalizeClass(e.modalCls), style: normalizeStyle(e.mergedModalStyle) }, [!e.hideTitle && (e.$slots.title || e.title || e.closable) ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(`${e.prefixCls}-header`), onMousedown: t[1] || (t[1] = (...m) => e.handleMoveDown && e.handleMoveDown(...m)) }, [e.$slots.title || e.title ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass([`${e.prefixCls}-title`, `${e.prefixCls}-title-align-${e.titleAlign}`]) }, [e.messageType ? (openBlock(), createElementBlock("div", { key: 0, class: normalizeClass(`${e.prefixCls}-title-icon`) }, [e.messageType === "info" ? (openBlock(), createBlock(c, { key: 0 })) : createCommentVNode("v-if", true), e.messageType === "success" ? (openBlock(), createBlock(O, { key: 1 })) : createCommentVNode("v-if", true), e.messageType === "warning" ? (openBlock(), createBlock(h, { key: 2 })) : createCommentVNode("v-if", true), e.messageType === "error" ? (openBlock(), createBlock(n, { key: 3 })) : createCommentVNode("v-if", true)], 2)) : createCommentVNode("v-if", true), renderSlot(e.$slots, "title", {}, () => [createTextVNode(toDisplayString(e.title), 1)])], 2)) : createCommentVNode("v-if", true), !e.simple && e.closable ? (openBlock(), createElementBlock("div", { key: 1, tabindex: "-1", role: "button", "aria-label": "Close", class: normalizeClass(`${e.prefixCls}-close-btn`), onClick: t[0] || (t[0] = (...m) => e.handleCancel && e.handleCancel(...m)) }, [createVNode(f, null, { default: withCtx(() => [createVNode(d)]), _: 1 })], 2)) : createCommentVNode("v-if", true)], 34)) : createCommentVNode("v-if", true), createBaseVNode("div", { class: normalizeClass([`${e.prefixCls}-body`, e.bodyClass]), style: normalizeStyle(e.bodyStyle) }, [renderSlot(e.$slots, "default")], 6), e.footer ? (openBlock(), createElementBlock("div", { key: 1, class: normalizeClass(`${e.prefixCls}-footer`) }, [renderSlot(e.$slots, "footer", {}, () => [e.hideCancel ? createCommentVNode("v-if", true) : (openBlock(), createBlock(C, mergeProps({ key: 0 }, e.cancelButtonProps, { onClick: e.handleCancel }), { default: withCtx(() => [createTextVNode(toDisplayString(e.cancelDisplayText), 1)]), _: 1 }, 16, ["onClick"])), createVNode(C, mergeProps({ type: "primary" }, e.okButtonProps, { loading: e.mergedOkLoading, onClick: e.handleOk }), { default: withCtx(() => [createTextVNode(toDisplayString(e.okDisplayText), 1)]), _: 1 }, 16, ["loading", "onClick"])])], 2)) : createCommentVNode("v-if", true)], 6), [[vShow, e.computedVisible]])]), _: 3 }, 8, ["name", "onAfterEnter", "onAfterLeave"])], 34)], 16)), [[vShow, e.computedVisible || e.mounted]]) : createCommentVNode("v-if", true)], 8, ["to", "disabled"]))]), _: 3 });
}]]);
var bt = Object.defineProperty;
var Ct = Object.defineProperties;
var kt = Object.getOwnPropertyDescriptors;
var Oe = Object.getOwnPropertySymbols;
var gt = Object.prototype.hasOwnProperty;
var ht2 = Object.prototype.propertyIsEnumerable;
var Se = (e, t, l) => t in e ? bt(e, t, { enumerable: true, configurable: true, writable: true, value: l }) : e[t] = l;
var _ = (e, t) => {
  for (var l in t || (t = {}))
    gt.call(t, l) && Se(e, l, t[l]);
  if (Oe)
    for (var l of Oe(t))
      ht2.call(t, l) && Se(e, l, t[l]);
  return e;
};
var se = (e, t) => {
  let l = Y4("modal");
  const o = createVNode(Q, _(_(_({}, { visible: true, renderToBody: false, unmountOnClose: true, onOk: () => {
    o.component && (o.component.props.visible = false), Ue(e.onOk) && e.onOk();
  }, onCancel: () => {
    o.component && (o.component.props.visible = false), Ue(e.onCancel) && e.onCancel();
  }, onClose: async () => {
    await nextTick(), l && (render(null, l), document.body.removeChild(l)), l = null, Ue(e.onClose) && e.onClose();
  } }), ia(e, ["content", "title", "footer", "visible", "unmountOnClose", "onOk", "onCancel", "onClose"])), { footer: typeof e.footer == "boolean" ? e.footer : void 0 }), { default: K4(e.content), title: K4(e.title), footer: typeof e.footer != "boolean" ? K4(e.footer) : void 0 });
  return (t ?? ue._context) && (o.appContext = t ?? ue._context), render(o, l), document.body.appendChild(l), { close: () => {
    o.component && (o.component.props.visible = false);
  }, update: (r) => {
    o.component && Object.entries(r).forEach(([s, c]) => {
      o.component.props[s] = c;
    });
  } };
};
var re = _({ open: se, confirm: (e, t) => {
  const l = _({ simple: true, messageType: "warning" }, e);
  return se(l, t);
} }, U4.reduce((e, t) => (e[t] = (l, o) => {
  const r = _({ simple: true, hideCancel: true, messageType: t }, l);
  return se(r, o);
}, e), {}));
var ue = Object.assign(Q, (Be = _({}, re), Ct(Be, kt({ install: (e, t) => {
  Cl(e, t);
  const l = xl(t);
  e.component(l + Q.name, Q);
  const o = {};
  for (const r of Object.keys(re))
    o[r] = (s, c = e._context) => re[r](s, c);
  e.config.globalProperties.$modal = o;
}, _context: null }))));
var Be;
var wt = createBaseVNode("i", { class: "rtdp xinzeng" }, null, -1);
var Mt = defineComponent({ __name: "index", props: { disabled: { type: Boolean, default: false }, loading: { type: Boolean, default: false }, size: { default: "small" }, options: { default: () => ({ maskClosable: false, loading: false, index: false, indexWidth: 60, columns: [], menuWidth: 245, search: false, searchSpan: 6, searchBtnSpan: 6 }) } }, setup(e, { expose: t }) {
  const l = defineAsyncComponent(() => import("./index-9672ce30-B75QX5QH.js")), o = ref(null), r = ref(false), s = ref(""), c = () => {
    r.value = false;
  }, O = () => {
    r.value = false;
  }, h = () => {
    o.value.handleSave();
  };
  return t({ handleOpenModel: (n) => {
    n === "add" && (s.value = "新增"), n === "edit" && (s.value = "编辑"), n === "see" && (s.value = "查看"), r.value = true;
  } }), (n, d) => {
    const f = Ut, C = ue;
    return openBlock(), createBlock(C, { visible: r.value, "onUpdate:visible": d[1] || (d[1] = (p) => r.value = p), "align-center": false, "mask-closable": n.options.maskClosable, top: "20vh", width: "65%", onCancel: O, onOk: c }, { title: withCtx(() => [createTextVNode(toDisplayString(s.value), 1)]), footer: withCtx(() => [createVNode(f, { size: n.size, onClick: d[0] || (d[0] = (p) => r.value = false) }, { default: withCtx(() => [createTextVNode("取消")]), _: 1 }, 8, ["size"]), createVNode(f, { type: "primary", size: n.size, onClick: h }, { icon: withCtx(() => [wt]), default: withCtx(() => [createTextVNode(" 保存 ")]), _: 1 }, 8, ["size"])]), default: withCtx(() => [(openBlock(), createBlock(resolveDynamicComponent(unref(l)), { ref_key: "modalRef", ref: o, size: n.size, options: n.options }, createSlots({ _: 2 }, [renderList(n.options.columns, (p, m) => ({ name: p.dataIndex + "Label", fn: withCtx(() => [renderSlot(n.$slots, p.dataIndex + "Label")]) }))]), 1032, ["size", "options"]))]), _: 3 }, 8, ["visible", "mask-closable"]);
  };
} });
export {
  Mt as default
};
//# sourceMappingURL=index-ac4f964d-GGOAPWV6.js.map
