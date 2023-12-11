import {
  xl
} from "./chunk-CIZOL3JV.js";
import {
  computed,
  defineComponent,
  ref,
  toRefs,
  watch
} from "./chunk-67UUJLDS.js";

// node_modules/.pnpm/vue-arco-ui@0.1.48_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/use-merge-state-75ece406.js
function p(r) {
  const n = ref(r);
  return [n, (e) => {
    n.value = e;
  }];
}
var m = defineComponent({ name: "RenderFunction", props: { renderFunc: { type: Function, required: true } }, render() {
  return this.renderFunc(this.$attrs);
} });
function F(r, n) {
  const { value: e } = toRefs(n), [a, u] = p(xl(e.value) ? r : e.value);
  return watch(e, (o) => {
    xl(o) && u(void 0);
  }), [computed(() => xl(e.value) ? a.value : e.value), u, a];
}

export {
  p,
  m,
  F
};
//# sourceMappingURL=chunk-BNEPGLAR.js.map
