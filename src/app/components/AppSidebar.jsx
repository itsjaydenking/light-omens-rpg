import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function AppSidebar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.setItem("ttrpg_authed", "false");
    navigate("/", { replace: true });
  }

  return (
    <aside className="sidebar">
      <button
        className="sidebar__brand"
        onClick={() => navigate("/app/library")}
      >
        Grim Gateway
        <span className="sidebar__brandSub">Light Omens RPG</span>
      </button>

      <nav className="sidebar__nav">
        <NavLink to="/app/library">Library</NavLink>
        <NavLink to="/app/characters">Characters</NavLink>
        <NavLink to="/app/characters/new">New Character</NavLink>
        <NavLink to="/app/settings">Settings</NavLink>
      </nav>

      <div className="sidebar__footer">
        <button className="btn btn--ghost full" onClick={logout}>
          Log out
        </button>
      </div>
    </aside>
  );
}
