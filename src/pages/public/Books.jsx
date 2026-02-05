import React from "react";
import { Link } from "react-router-dom";
import { books } from "../../data/books/index.js";

export default function Books() {
  const sortedBooks = [...books].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="page">
      <h1>Rules</h1>
      <p className="lead">Explore the rules of Light Omens</p>

      <div className="grid">
        {sortedBooks.map((book) => (
          <div className="card" key={book.id}>
            <h2>{book.title}</h2>
            <p className="muted">{book.description}</p>

            <div className="muted" style={{ marginBottom: "12px" }}>
              {book.subtitle ? `${book.subtitle} · ` : ""}v{book.version} ·
              Updated {book.updatedAt}
            </div>

            <Link className="btn btn--ghost" to={`/books/${book.id}`}>
              Read
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
