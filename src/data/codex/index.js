import { codexEntries, CODEX_CATEGORIES } from "./entries.js";

export { codexEntries, CODEX_CATEGORIES };

export function getCodexEntryById(id) {
  return codexEntries.find((e) => e.id === id) || null;
}

export function getAllCodexTags(entries = codexEntries) {
  const set = new Set();
  entries.forEach((e) => (e.tags || []).forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function filterCodex({
  query = "",
  category = CODEX_CATEGORIES.ALL,
  tag = "",
}) {
  const q = query.trim().toLowerCase();

  return codexEntries.filter((e) => {
    const matchesCategory =
      category === CODEX_CATEGORIES.ALL ? true : e.category === category;

    const haystack = [e.title, e.summary, e.subtype || "", ...(e.tags || [])]
      .join(" ")
      .toLowerCase();

    const matchesQuery = q ? haystack.includes(q) : true;
    const matchesTag = tag ? (e.tags || []).includes(tag) : true;

    return matchesCategory && matchesQuery && matchesTag;
  });
}
