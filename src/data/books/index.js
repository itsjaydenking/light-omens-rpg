import { coreBook } from "./coreBook.js";

export const books = [
  coreBook,
  {
    id: "lore-primer",
    title: "Lore Primer",
    subtitle: "Ashcan Supplement",
    description:
      "A quick setting guide for factions, places, and the Grim Light.",
    version: "0.1",
    updatedAt: "2026-02-01",
    chapters: [
      {
        id: "overview",
        title: "Overview",
        sections: [
          {
            id: "what-you-need-to-know",
            title: "What You Need to Know",
            blocks: [
              {
                type: "p",
                text: "This is a stub book to prove multi-book support.",
              },
              {
                type: "p",
                text: "In Sprint 4+ this becomes the real lore guide.",
              },
            ],
          },
        ],
      },
    ],
  },
];

export function getBookById(bookId) {
  return books.find((b) => b.id === bookId) || null;
}
