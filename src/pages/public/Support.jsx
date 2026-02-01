import React from "react";

export default function Support() {
  return (
    <div className="page">
      <h1>Support Light Omens RPG</h1>
      <p className="lead">
        Light Omens RPG is an independent project built with a focus on
        atmosphere, player agency, and long-term support. Community backing
        directly helps fund development, art, writing, and continued updates.
      </p>

      <div className="grid">
        <div className="card">
          <h2>Patreon</h2>
          <p className="muted">
            Support ongoing development and receive updates as the project
            grows.
          </p>
          <a
            className="btn btn--ghost"
            href="https://www.patreon.com/c/EbonmaneInk"
            target="_blank"
            rel="noreferrer"
          >
            Support on Patreon
          </a>
        </div>

        <div className="card">
          <h2>Ko-fi</h2>
          <p className="muted">
            Prefer a one-time contribution or a more casual way to help?
          </p>
          <a
            className="btn btn--ghost"
            href="https://ko-fi.com/ebonmane"
            target="_blank"
            rel="noreferrer"
          >
            Support on Ko-fi
          </a>
        </div>

        <div className="card">
          <h2>Join the Community</h2>
          <p className="muted">
            Talk development, lore, playtesting, and future plans with other
            players.
          </p>
          <a
            className="btn btn--ghost"
            href="https://discord.gg/9JgCtMznHe"
            target="_blank"
            rel="noreferrer"
          >
            Join the Discord
          </a>
        </div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <h2>Contact</h2>
        <p className="muted">For press, partnerships, or general inquiries:</p>
        <p>
          <a href="mailto:admin@ebonmane.com">admin@ebonmane.com</a>
        </p>
      </div>
    </div>
  );
}
