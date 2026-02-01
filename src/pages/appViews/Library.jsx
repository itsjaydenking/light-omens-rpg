import React from "react";
import { Link } from "react-router-dom";

export default function Library() {
  return (
    <div className="page">
      <h1>Library</h1>
      <p className="muted">
        This is where your saved characters, bookmarks, and downloads will live.
      </p>

      <div className="card" style={{ marginTop: "16px" }}>
        <h2>Coming Soon</h2>
        <p className="muted">
          Sprint 2–3 will introduce content bookmarking and your personal
          library.
        </p>
        <Link className="btn btn--ghost" to="/roadmap">
          View Roadmap
        </Link>
      </div>
    </div>
  );
}
