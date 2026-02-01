import React from "react";
import { Link } from "react-router-dom";

export default function Codex() {
  return (
    <div className="page">
      <h1>The Codex</h1>
      <p className="lead">
        The Codex is a living archive of the world of Light Omens — its
        factions, places, histories, and the forces that shape its grim fate.
      </p>

      <div className="grid">
        <div className="card">
          <h2>Factions</h2>
          <p className="muted">
            Orders, cults, syndicates, and powers that move in the shadows.
          </p>
          <span className="muted">Entries coming soon</span>
        </div>

        <div className="card">
          <h2>Places</h2>
          <p className="muted">
            Cities, regions, and forgotten locations scarred by history.
          </p>
          <span className="muted">Entries coming soon</span>
        </div>

        <div className="card">
          <h2>People & Creatures</h2>
          <p className="muted">
            Influential figures, horrors, and legends whispered about in
            taverns.
          </p>
          <span className="muted">Entries coming soon</span>
        </div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <p className="muted">
          New Codex entries will be added regularly during Early Access.
        </p>
        <Link className="btn btn--ghost" to="/roadmap">
          View the Roadmap
        </Link>
      </div>
    </div>
  );
}
