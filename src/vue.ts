import { inject, provide } from "vue";
import { createStorage } from "./storage";

const StoreSymbol = Symbol("VueStorage");

export function provideStore<T extends object>(initialState: T) {
  const store = createStorage(initialState);
  provide(StoreSymbol, store);
  return store;
}

export function useStore<T extends object>() {
  const store = inject(StoreSymbol) as ReturnType<typeof createStorage<T>>;
  if (!store) {
    throw new Error(
      "Store not found. Please ensure you have called provideStore."
    );
  }
  return store;
}
