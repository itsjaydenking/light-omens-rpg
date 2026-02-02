import { stories } from "./entries.js";

export { stories };

export function getStoryById(id) {
  return stories.find((s) => s.id === id) || null;
}

export function getAllStoryTags() {
  const set = new Set();
  stories.forEach((s) => (s.tags || []).forEach((t) => set.add(t)));
  return Array.from(set).sort((a, b) => a.localeCompare(b));
}

export function filterStories({ query = "", tag = "" }) {
  const q = query.trim().toLowerCase();

  return stories.filter((s) => {
    const haystack = [s.title, s.blurb, ...(s.tags || [])]
      .join(" ")
      .toLowerCase();
    const matchesQuery = q ? haystack.includes(q) : true;
    const matchesTag = tag ? (s.tags || []).includes(tag) : true;
    return matchesQuery && matchesTag;
  });
}
