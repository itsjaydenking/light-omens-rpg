import "./Header.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import LightOmensIcon from "../assets/LightOmensIcon.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img
          className="header__icon"
          src={LightOmensIcon}
          alt="Light Omens Logo"
        />
        Light Omens
      </div>

      <nav className="header__nav">
        <Link to="/" className="header__link">
          Home
        </Link>
        <Link to="/dice" className="header__link">
          Dice Roller
        </Link>
        <Link to="/character-sheet" className="header__link">
          Character Sheet
        </Link>
      </nav>
    </header>
  );
}

export default Header;
