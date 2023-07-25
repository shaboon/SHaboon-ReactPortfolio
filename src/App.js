import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavTabs from "./components/NavTabs";

import About from "./pages/About/About";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume";
import Contact from "./pages/Contact/Contact";

import selfie from "./components/assets/IMG_2470.jpg";

export default function App() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    document.title = "Home";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="flex columns-2">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="bg-light">
        <img className="selfie" src={selfie} alt="picture of Sean Haboon" />
        <ul className="nav nav-tabs justify-content-end">
          <li className="nav-item">
            <h1 className="left light">Sean Haboon</h1>
          </li>
        </ul>
      </div>
      ;
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/Portfolio" element={<Portfolio />} />
            <Route path="/Resume" element={<Resume />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
