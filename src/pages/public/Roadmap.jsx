import React from "react";

export default function Roadmap() {
  return (
    <div className="page">
      <h1>Development Roadmap</h1>
      <p className="lead">
        Light Omens RPG is being developed in clear, playable stages. Each phase
        focuses on delivering usable features while expanding the world, tools,
        and play experience.
      </p>

      <div className="grid">
        <div className="card">
          <h2>MVP (Current Focus)</h2>
          <p className="muted">
            Establish the foundation: rules access, world lore, and character
            creation.
          </p>
          <ul className="muted">
            <li>Core rules reader</li>
            <li>Codex (lore archive)</li>
            <li>Character builder (foundational)</li>
            <li>Character sheets</li>
            <li>Dice roller</li>
            <li>Early play mode prototype (text-based)</li>
          </ul>
        </div>

        <div className="card">
          <h2>Early Access</h2>
          <p className="muted">
            Expand tools, content, and usability based on player feedback.
          </p>
          <ul className="muted">
            <li>Expanded lore and world content</li>
            <li>Improved character builder flow</li>
            <li>Persistent character data</li>
            <li>Play mode improvements</li>
            <li>Stories and narrative content drops</li>
          </ul>
        </div>

        <div className="card">
          <h2>Version 1.0</h2>
          <p className="muted">
            A complete, stable platform for long-term play and support.
          </p>
          <ul className="muted">
            <li>Full backend integration</li>
            <li>Account-based persistence</li>
            <li>Advanced play tools</li>
            <li>Expanded automation support</li>
            <li>Ongoing content updates</li>
          </ul>
        </div>
      </div>

      <div style={{ marginTop: "32px" }}>
        <p className="muted">
          Development priorities may shift based on testing and feedback during
          Early Access, but each phase builds directly on the previous one.
        </p>
      </div>
    </div>
  );
}
