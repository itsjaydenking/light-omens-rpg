import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/app";

  function handleLogin(e) {
    e.preventDefault();
    localStorage.setItem("ttrpg_authed", "true");
    navigate(from, { replace: true });
  }

  return (
    <div className="page">
      <h1>Sign in</h1>
      <p className="muted">Mock login for Sprint 1 (no backend yet).</p>

      <form className="form" onSubmit={handleLogin}>
        <label>
          Email
          <input type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Password
          <input type="password" placeholder="••••••••" required />
        </label>
        <button className="btn" type="submit">
          Sign in
        </button>
      </form>

      <p className="muted">
        New here? <Link to="/auth/signup">Create an account</Link>
      </p>
    </div>
  );
}
