import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  function handleSignup(e) {
    e.preventDefault();
    localStorage.setItem("ttrpg_authed", "true");
    navigate("/app", { replace: true });
  }

  return (
    <div className="page">
      <h1>Early Access Signup</h1>
      <p className="muted">Mock signup for Sprint 1 (no backend yet).</p>

      <form className="form" onSubmit={handleSignup}>
        <label>
          Email
          <input type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" required />
        </label>
        <button className="btn" type="submit">
          Create account
        </button>
      </form>

      <p className="muted">
        Already have an account? <Link to="/auth/login">Sign in</Link>
      </p>
    </div>
  );
}
