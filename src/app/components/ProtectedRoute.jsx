import React from "react";
import { Navigate, useLocation } from "react-router-dom";

function isAuthed() {
  return localStorage.getItem("ttrpg_authed") === "true";
}

export default function ProtectedRoute({ children }) {
  const location = useLocation();

  if (!isAuthed()) {
    return (
      <Navigate to="/auth/login" replace state={{ from: location.pathname }} />
    );
  }

  return children;
}
