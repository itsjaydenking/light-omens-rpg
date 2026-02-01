import React from "react";

export default function Settings() {
  return (
    <div className="page">
      <h1>Settings</h1>
      <p className="muted">
        Account settings, theme options, and preferences will live here once the
        backend is added.
      </p>

      <div className="grid" style={{ marginTop: "16px" }}>
        <div className="card">
          <h2>Profile</h2>
          <p className="muted">Coming soon.</p>
        </div>
        <div className="card">
          <h2>Preferences</h2>
          <p className="muted">Coming soon.</p>
        </div>
        <div className="card">
          <h2>Security</h2>
          <p className="muted">Coming soon.</p>
        </div>
      </div>
    </div>
  );
}
