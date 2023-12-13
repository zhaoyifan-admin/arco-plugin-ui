import {
  wl
} from "./chunk-I6ZBQRAN.js";
import {
  computed,
  defineComponent,
  ref,
  toRefs,
  watch
} from "./chunk-67UUJLDS.js";

// node_modules/.pnpm/vue-arco-ui@0.1.55_@arco-design+web-vue@2.53.3/node_modules/vue-arco-ui/dist/use-merge-state-b57afdbc.js
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
  const { value: e } = toRefs(n), [a, u] = p(wl(e.value) ? r : e.value);
  return watch(e, (o) => {
    wl(o) && u(void 0);
  }), [computed(() => wl(e.value) ? a.value : e.value), u, a];
}

export {
  p,
  m,
  F
};
//# sourceMappingURL=chunk-SMNQWRBS.js.map
