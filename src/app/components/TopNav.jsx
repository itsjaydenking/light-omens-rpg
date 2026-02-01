import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function isAuthed() {
  return localStorage.getItem("ttrpg_authed") === "true";
}

export default function TopNav() {
  const navigate = useNavigate();
  const authed = isAuthed();

  return (
    <header className="topNav">
      <div className="topNav__inner">
        <NavLink className="brand" to="/">
          Light Omens RPG
        </NavLink>

        <nav className="topNav__links">
          <NavLink to="/books">Books</NavLink>
          <NavLink to="/codex">Codex</NavLink>
          <NavLink to="/stories">Stories</NavLink>
          <NavLink to="/roadmap">Roadmap</NavLink>
          <NavLink to="/support">Support</NavLink>
        </nav>

        <div className="topNav__cta">
          {!authed ? (
            <>
              <button
                className="btn btn--ghost"
                onClick={() => navigate("/auth/login")}
              >
                Sign in
              </button>
              <button className="btn" onClick={() => navigate("/auth/signup")}>
                Early Access
              </button>
            </>
          ) : (
            <button className="btn" onClick={() => navigate("/app")}>
              Open App
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
