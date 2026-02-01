import React from "react";
import { Outlet } from "react-router-dom";
import TopNav from "../components/TopNav.jsx";
import Footer from "../components/Footer.jsx";

export default function MarketingLayout() {
  return (
    <div className="site">
      <TopNav />
      <main className="container">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
