const KEY = "classes";

const storage = {
  get: () => localStorage.getItem(KEY),
  set: (v) => localStorage.setItem(KEY, v),
  remove: () => localStorage.removeItem(KEY),
};

const parse = (raw) => { try { return raw ? JSON.parse(raw) : []; } catch { return []; } };
const readAll = () => parse(storage.get());
const writeAll = (arr) => storage.set(JSON.stringify(arr));
const genId = () => (crypto?.randomUUID?.().replace(/-/g, "").slice(0, 10) ?? Math.random().toString(36).slice(2, 12));

export const ClassModel = {
  create({ name, dates = [], time }) {
    const c = { id: genId(), name, dates, time };
    const all = readAll(); all.push(c); writeAll(all); return c;
  },
  list() { return readAll(); },
  get(id) { return readAll().find(c => c.id === id) || null; },
  update(id, patch) {
    const all = readAll(); const i = all.findIndex(c => c.id === id);
    if (i < 0) return null; all[i] = { ...all[i], ...patch, id }; writeAll(all); return all[i];
  },
  remove(id) { writeAll(readAll().filter(c => c.id !== id)); },
  clearAll() { storage.remove(); },
};