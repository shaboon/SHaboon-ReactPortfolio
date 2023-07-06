import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavTabs from "./components/NavTabs";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";

import "./main.css";

export default function App() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    document.title = "Home";
  }, []);

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="background">
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}
