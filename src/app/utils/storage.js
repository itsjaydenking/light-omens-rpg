const KEY_CHARACTERS = "ttrpg_characters";
const KEY_DRAFT = "ttrpg_builder_draft";

function safeParse(json, fallback) {
  try {
    return JSON.parse(json);
  } catch {
    return fallback;
  }
}

export function loadCharacters() {
  const raw = localStorage.getItem(KEY_CHARACTERS);
  const list = raw ? safeParse(raw, []) : [];
  return Array.isArray(list) ? list : [];
}

export function saveCharacters(list) {
  localStorage.setItem(KEY_CHARACTERS, JSON.stringify(list || []));
}

export function loadDraft() {
  const raw = localStorage.getItem(KEY_DRAFT);
  return raw ? safeParse(raw, null) : null;
}

export function saveDraft(draft) {
  localStorage.setItem(KEY_DRAFT, JSON.stringify(draft));
}

export function clearDraft() {
  localStorage.removeItem(KEY_DRAFT);
}

export function createBlankCharacter() {
  const now = new Date().toISOString();
  return {
    id: `char_${Date.now()}`,
    name: "",
    concept: "",
    origin: "",
    archetype: "",
    stats: { might: 0, finesse: 0, mind: 0, spirit: 0 },
    skills: {}, // fill later
    gear: [],
    notes: "",
    createdAt: now,
    updatedAt: now,
  };
}

export function addCharacter(character) {
  const list = loadCharacters();
  list.unshift(character);
  saveCharacters(list);
  return character;
}

export function updateCharacter(id, patch) {
  const list = loadCharacters();
  const idx = list.findIndex((c) => c.id === id);
  if (idx === -1) return null;

  const updated = {
    ...list[idx],
    ...patch,
    updatedAt: new Date().toISOString(),
  };

  list[idx] = updated;
  saveCharacters(list);
  return updated;
}
