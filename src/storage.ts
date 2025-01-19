import { reactive, readonly } from "./core";

export function createStorage<T extends object>(initialState: T) {
  const state = reactive(initialState);
  return {
    getState: () => readonly(state),
    setState: (key: keyof T, value: T[keyof T]) => {
      state[key] = value;
    },
    updateState: (newState: Partial<T>) => {
      Object.assign(state, newState);
    },
    resetState: () => {
      Object.assign(state, initialState);
    },
  };
}
