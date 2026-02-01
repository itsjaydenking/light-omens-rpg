import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="page">
      <h1>Light Omens RPG – Grim Gateway</h1>
      <p className="lead">
        Read the rules, explore the lore, build characters, and (soon) play in a
        text-based web RPG.
      </p>

      <div className="grid">
        <div className="card">
          <h2>Read</h2>
          <p className="muted">Books and quick reference.</p>
          <Link className="btn btn--ghost" to="/books">
            Browse Books
          </Link>
        </div>

        <div className="card">
          <h2>Explore</h2>
          <p className="muted">
            Discover factions, places, histories, and dark truths.
          </p>
          <Link className="btn btn--ghost" to="/codex">
            Explore the Lore
          </Link>
        </div>

        <div className="card">
          <h2>Create</h2>
          <p className="muted">Character builder and sheets.</p>
          <Link className="btn btn--ghost" to="/auth/signup">
            Join Early Access
          </Link>
        </div>
      </div>
    </div>
  );
}
