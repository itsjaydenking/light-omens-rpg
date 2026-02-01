import React from "react";
import { Link } from "react-router-dom";

export default function Characters() {
  return (
    <div className="page">
      <h1>Characters</h1>
      <p className="muted">
        Your characters will appear here. You’ll be able to create, edit, and
        launch them into play mode.
      </p>

      <div className="card" style={{ marginTop: "16px" }}>
        <h2>No characters yet</h2>
        <p className="muted">
          The character builder begins in Sprint 4. For now, this page confirms
          routing and app shell structure.
        </p>
        <Link className="btn btn--ghost" to="/app/characters/new">
          Start a new character
        </Link>
      </div>
    </div>
  );
}
