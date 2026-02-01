import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <strong>Light Omens RPG</strong>
          <div className="muted">Rules • Lore • Characters • Play</div>
        </div>
        <div className="muted">
          © {new Date().getFullYear()} Ebonmane Ink Creative Studios • All
          rights reserved.
        </div>
      </div>
    </footer>
  );
}
