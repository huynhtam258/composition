import { inject, provide, computed } from "vue";
import store from "@/store";

export const StoreSymbol = Symbol();

export function provideStore() {
  provide(StoreSymbol, store);
}

export function useInjectedStore() {
  const store = inject(StoreSymbol);
  const awesomeness = computed(() => store.state.awesomeness);
  const toggle = () => store.commit("toggleAwesomeness");
  return { awesomeness, toggle };
}
