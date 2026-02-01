import React from "react";
import { Link } from "react-router-dom";
import { books } from "../../data/books/index.js";

export default function Books() {
  return (
    <div className="page">
      <h1>Rulebooks</h1>
      <p className="lead">
        Browse the Light Omens rules and supplements. This library grows during
        Early Access.
      </p>

      <div className="grid">
        {books.map((book) => (
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
