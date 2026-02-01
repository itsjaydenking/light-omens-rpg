import React from "react";
import { Link } from "react-router-dom";

export default function CharacterNew() {
  return (
    <div className="page">
      <h1>New Character</h1>
      <p className="muted">
        Character creation is planned for Sprint 4. This page is a placeholder
        for the step-by-step builder flow.
      </p>

      <div className="card" style={{ marginTop: "16px" }}>
        <h2>Builder Roadmap</h2>
        <p className="muted">
          Concept → Origin → Archetype → Stats → Talents → Gear → Review
        </p>
        <Link className="btn btn--ghost" to="/roadmap">
          View Roadmap
        </Link>
      </div>
    </div>
  );
}
