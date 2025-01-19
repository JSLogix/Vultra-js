type Effect = () => void;
const effects = new Set<Effect>();

function triggerUpdate() {
  effects.forEach((effect) => effect());
}

export function reactive<T extends object>(target?: T): T {
  if (typeof target !== "object" || target === null) {
    throw new Error("Reaktiv qilish uchun obyekt kerak!");
  }

  return new Proxy(target, {
    get(obj, key) {
      return Reflect.get(obj, key);
    },
    set(obj, key, value) {
      const result = Reflect.set(obj, key, value);
      triggerUpdate();
      return result;
    },
  });
}
