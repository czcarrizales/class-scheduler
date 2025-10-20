const KEY = "classes";

const storage = {
  get: () => localStorage.getItem(KEY),
  set: (v) => localStorage.setItem(KEY, v),
  remove: () => localStorage.removeItem(KEY),
};

const parse = (raw) => { try { return raw ? JSON.parse(raw) : []; } catch { return []; } };
const readAll = () => parse(storage.get());
const writeAll = (arr) => storage.set(JSON.stringify(arr));

// Dummy catalog (read-only)
const defaultClasses = [
  {
    id: "bio101",
    name: "Biology 101",
    dates: ["Monday", "Wednesday"],
    time: "9:00–10:15 AM",
  },
  {
    id: "cs201",
    name: "Intro to Programming",
    dates: ["Tuesday", "Thursday"],
    time: "10:30–11:45 AM",
  },
  {
    id: "math120",
    name: "Calculus I",
    dates: ["Friday"],
    time: "1:00–4:15 PM",
  },
];

export const ClassModel = {
  // Seed once if empty; keeps LocalStorage in sync with your helpers above
  seed() {
    const existing = readAll();
    if (existing.length === 0) writeAll(defaultClasses);
    return readAll();
  },

  // Read operations (no create/update/delete by design)
  list() { return readAll(); },
  get(id) { return readAll().find(c => c.id === id) || null; },
  clearAll() { storage.remove(); },
  // Optional dev helper to restore defaults quickly
  reset() { storage.remove(); writeAll(defaultClasses); },
};

export default ClassModel;