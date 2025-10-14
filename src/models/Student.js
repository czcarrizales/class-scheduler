const KEY = "students_v1";

const storage = {
  get: () => localStorage.getItem(KEY),
  set: (v) => localStorage.setItem(KEY, v),
  remove: () => localStorage.removeItem(KEY),
};

const parse = (raw) => { try { return raw ? JSON.parse(raw) : []; } catch { return []; } };
const readAll = () => parse(storage.get());
const writeAll = (arr) => storage.set(JSON.stringify(arr));
const genId = () => (crypto?.randomUUID?.().replace(/-/g, "").slice(0, 10) ?? Math.random().toString(36).slice(2, 12));

export const StudentModel = {
  create({ name, email, classes = [] }) {
    const s = { id: genId(), name, email, classes };
    const all = readAll(); all.push(s); writeAll(all); return s;
  },
  list() { return readAll(); },
  get(id) { return readAll().find(s => s.id === id) || null; },
  update(id, patch) {
    const all = readAll(); const i = all.findIndex(s => s.id === id);
    if (i < 0) return null; all[i] = { ...all[i], ...patch, id }; writeAll(all); return all[i];
  },
  remove(id) { writeAll(readAll().filter(s => s.id !== id)); },
  clearAll() { storage.remove(); },
};
