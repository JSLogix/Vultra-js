export function readonly<T extends object>(target: T): T {
  if (typeof target !== "object" || target === null) {
    throw new Error("Readonly qilish uchun obyekt kerak!");
  }

  return new Proxy(target, {
    get(obj, key) {
      console.log(`Get (readonly): ${String(key)}`);
      return Reflect.get(obj, key);
    },
    set(obj, key, value) {
      console.warn(
        `Set (readonly): ${String(key)} = ${value} - Ruxsat etilmaydi`
      );
      return false; // Yozishga ruxsat bermaymiz
    },
    deleteProperty(obj, key) {
      console.warn(`Delete (readonly): ${String(key)} - Ruxsat etilmaydi`);
      return false; // O'chirishga ruxsat bermaymiz
    },
  });
}
