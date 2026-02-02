export const CODEX_CATEGORIES = {
  ALL: "all",
  NPC: "npc",
  LOCATIONS: "locations",
  ITEMS: "items",
};

export const CATEGORY_LABELS = {
  [CODEX_CATEGORIES.ALL]: "All",
  [CODEX_CATEGORIES.NPC]: "People & Creatures",
  [CODEX_CATEGORIES.LOCATIONS]: "Locations",
  [CODEX_CATEGORIES.ITEMS]: "Items",
};

export const codexEntries = [
  // People & Creatures
  {
    id: "light-eaters",
    title: "Light Eaters",
    category: CODEX_CATEGORIES.NPC,
    subtype: "Creature",
    summary:
      "Entities that consume light in all forms, including joy and certainty.",
    tags: ["shadow", "hunger", "omen"],
    content: [{ type: "p", text: "Stub entry. Expand in Sprint 3+." }],
  },
  {
    id: "omen-seekers",
    title: "Omen Seekers",
    category: CODEX_CATEGORIES.NPC,
    subtype: "Faction",
    summary:
      "Those who act when institutions fail, pursuing truths and surviving consequences.",
    tags: ["seekers", "hope", "truths"],
    content: [{ type: "p", text: "Stub entry. Expand in Sprint 3+." }],
  },
  {
    id: "ebonmane-ink",
    title: "Ebonmane Ink",
    category: CODEX_CATEGORIES.NPC,
    subtype: "Faction",
    summary:
      "A network of storytellers, record-keepers, and quiet brokers of forbidden knowledge.",
    tags: ["knowledge", "ink", "rumor"],
    content: [{ type: "p", text: "Stub entry. Expand in Sprint 3+." }],
  },

  // Locations
  {
    id: "grim-gateway",
    title: "The Grim Gateway",
    category: CODEX_CATEGORIES.LOCATIONS,
    subtype: "Landmark",
    summary:
      "A threshold where ancient mechanisms and old magic grind against reality.",
    tags: ["ruins", "portal", "machines"],
    content: [{ type: "p", text: "Stub entry. Expand in Sprint 3+." }],
  },
  {
    id: "hollow-ward",
    title: "Hollow Ward",
    category: CODEX_CATEGORIES.LOCATIONS,
    subtype: "District",
    summary:
      "A half-lit quarter where lanterns burn cold and memories feel borrowed.",
    tags: ["city", "shadow", "survival"],
    content: [{ type: "p", text: "Stub entry. Expand in Sprint 3+." }],
  },
  {
    id: "sable-ruins",
    title: "The Sable Ruins",
    category: CODEX_CATEGORIES.LOCATIONS,
    subtype: "Ruin",
    summary:
      "Broken towers and half-buried engines that still hum when no one is listening.",
    tags: ["ancient", "machines", "danger"],
    content: [{ type: "p", text: "Stub entry. Expand in Sprint 3+." }],
  },

  // Items
  {
    id: "grim-light",
    title: "The Grim Light",
    category: CODEX_CATEGORIES.ITEMS,
    subtype: "Artifact",
    summary:
      "A miracle-force that heals, powers machines, and leaves scars on the world.",
    tags: ["power", "consequence", "miracle-tech"],
    content: [{ type: "p", text: "Stub entry. Expand in Sprint 3+." }],
  },
  {
    id: "ashen-sigil",
    title: "Ashen Sigil",
    category: CODEX_CATEGORIES.ITEMS,
    subtype: "Relic",
    summary:
      "A seal that binds promises. It strengthens oaths, and punishes betrayal.",
    tags: ["oaths", "binding", "truths"],
    content: [{ type: "p", text: "Stub entry. Expand in Sprint 3+." }],
  },
  {
    id: "lantern-of-echoes",
    title: "Lantern of Echoes",
    category: CODEX_CATEGORIES.ITEMS,
    subtype: "Tool",
    summary:
      "A lantern that reveals what a place remembers, not what it hides.",
    tags: ["light", "memory", "investigation"],
    content: [{ type: "p", text: "Stub entry. Expand in Sprint 3+." }],
  },
];
