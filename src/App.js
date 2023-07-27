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
    <div className="w-screen h-screen mt-0 bg-gray-800">
      <div className="fixed mt-0">
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
      <div className="grid-columns-2 flex flex-1">
        <div className="m-5 w-1/5 mt-20 flex flex-wrap self-center">
          <img
            className="selfie w-auto h-1/5 rounded-3x1"
            src={selfie}
            alt="picture of Sean Haboon"
          />
          <ul className="flex flex-wrap grid-column-1">
            <li className="mr-4">
              <h1 className="text-red-400">Sean Haboon</h1>
            </li>
            <li className="mr-4">shaboon.dev@gmail.com</li>
          </ul>
        </div>
        <div className="w-4/5 m-5 mt-24 bg-gradient-to-b from-gray-100 to-gray-400 filter drop-shadow-lg">
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
    </div>
  );
}
