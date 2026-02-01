import React from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from "../components/AppSidebar.jsx";

export default function AppLayout() {
  return (
    <div className="appShell">
      <AppSidebar />
      <div className="appMain">
        <header className="appTopBar">
          <div className="appTopBar__left">
            <div className="appTitle">Light Omens RPG</div>
          </div>
          <div className="appTopBar__right">
            <div className="diceTrayPlaceholder">Dice Tray (Sprint 5)</div>
          </div>
        </header>

        <main className="appContent">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
