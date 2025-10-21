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
  { id: "bio101", name: "Biology 101", dates: ["Monday", "Wednesday"], time: "9:00–10:15 AM" },
  { id: "cs201", name: "Intro to Programming", dates: ["Tuesday", "Thursday"], time: "10:30–11:45 AM" },
  { id: "math120", name: "Calculus I", dates: ["Friday"], time: "1:00–4:15 PM" },
  { id: "chem110", name: "General Chemistry I", dates: ["Monday", "Wednesday"], time: "11:00–12:15 PM" },
  { id: "eng102", name: "English Composition II", dates: ["Tuesday", "Thursday"], time: "9:00–10:15 AM" },
  { id: "hist210", name: "World History", dates: ["Monday", "Wednesday"], time: "2:00–3:15 PM" },
  { id: "psy101", name: "Introduction to Psychology", dates: ["Tuesday", "Thursday"], time: "1:00–2:15 PM" },
  { id: "soc105", name: "Sociology and Society", dates: ["Monday", "Wednesday"], time: "10:30–11:45 AM" },
  { id: "art130", name: "Fundamentals of Drawing", dates: ["Friday"], time: "9:00–12:00 PM" },
  { id: "cs301", name: "Data Structures", dates: ["Tuesday", "Thursday"], time: "2:30–3:45 PM" },
  { id: "math220", name: "Linear Algebra", dates: ["Monday", "Wednesday"], time: "3:30–4:45 PM" },
  { id: "bio202", name: "Human Anatomy", dates: ["Tuesday", "Thursday"], time: "8:00–9:15 AM" },
  { id: "econ101", name: "Principles of Economics", dates: ["Monday", "Wednesday"], time: "1:00–2:15 PM" },
  { id: "phil110", name: "Introduction to Philosophy", dates: ["Tuesday", "Thursday"], time: "11:00–12:15 PM" },
  { id: "music150", name: "Music Appreciation", dates: ["Wednesday"], time: "3:00–5:30 PM" },
  { id: "phys150", name: "Physics I", dates: ["Monday", "Wednesday"], time: "9:00–10:15 AM" },
  { id: "cs330", name: "Web Development", dates: ["Tuesday", "Thursday"], time: "4:00–5:15 PM" },
  { id: "math230", name: "Discrete Mathematics", dates: ["Monday", "Wednesday"], time: "12:30–1:45 PM" },
  { id: "bio210", name: "Genetics", dates: ["Tuesday", "Thursday"], time: "9:30–10:45 AM" },
  { id: "chem220", name: "Organic Chemistry", dates: ["Monday", "Wednesday"], time: "8:00–9:15 AM" },
  { id: "lit205", name: "American Literature", dates: ["Tuesday", "Thursday"], time: "1:30–2:45 PM" },
  { id: "cs340", name: "Operating Systems", dates: ["Monday", "Wednesday"], time: "4:00–5:15 PM" },
  { id: "math250", name: "Statistics", dates: ["Tuesday", "Thursday"], time: "2:00–3:15 PM" },
  { id: "bio320", name: "Microbiology", dates: ["Monday", "Wednesday"], time: "10:00–11:15 AM" },
  { id: "art210", name: "Digital Photography", dates: ["Friday"], time: "10:00–1:00 PM" },
  { id: "cs410", name: "Software Engineering", dates: ["Tuesday", "Thursday"], time: "3:30–4:45 PM" },
  { id: "math310", name: "Differential Equations", dates: ["Monday", "Wednesday"], time: "2:00–3:15 PM" },
  { id: "bio350", name: "Ecology", dates: ["Tuesday", "Thursday"], time: "12:00–1:15 PM" },
  { id: "comm200", name: "Public Speaking", dates: ["Monday", "Wednesday"], time: "11:30–12:45 PM" },
  { id: "cs450", name: "Artificial Intelligence", dates: ["Tuesday", "Thursday"], time: "10:30–11:45 AM" }
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