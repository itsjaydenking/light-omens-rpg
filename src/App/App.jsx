import React from "react";
import "../vendors/normalize.css";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home.jsx";
import DiceRoller from "../pages/DiceRoller/DiceRoller.jsx";
import CharacterSheet from "../pages/CharacterSheet/CharacterSheet.jsx";

import Header from "../Header/Header.jsx";

import "./App.css";
import Footer from "../Footer/Footer.jsx";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dice" element={<DiceRoller />} />
          <Route
            path="/character-sheet"
            element={
              <div>
                <CharacterSheet />
              </div>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
