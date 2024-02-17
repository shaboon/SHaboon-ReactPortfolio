import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

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
    <div className="w-screen h-3000 mt-0 bg-gradient-to-b from-gray-600 to-gray-800 custom-font">
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.5}>
          <p className="landing-layer fixed mt-0 filter drop-shadow-xl z-10 font-extrabold">
            Page1
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
          <p className="landing-layer fixed mt-0 filter drop-shadow-xl z-10 font-extrabold">
            Page2
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.5}>
          <p className="landing-layer fixed mt-0 filter drop-shadow-xl z-10 font-extrabold">
            Page 3
          </p>
        </ParallaxLayer>
      </Parallax>
      {/* <div className="fixed mt-0 filter drop-shadow-xl z-10 font-extrabold">
        <NavTabs
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </div>
      <div className="flex flex-col justify-center lg:flex-row">
        <div className="m-5 w-full lg:w-1/5 mt-20 lg:order-1">
          <img
            className="selfie w-1/2 lg:w-auto h-1/5 lg:h-auto rounded-lg"
            src={selfie}
            alt="picture of (Me) Sean Haboon"
          />
          <ul className="w-full flex flex-wrap grid-column-1 m-2 justify-center bg-gradient-to-b from-gray-200 to-gray-400">
            <li className="m-2 mr-6">
              <h1 className="text-red-400">Sean Haboon</h1>
            </li>
            <li className="m-2 mr-4">
              <a href="https://www.linkedin.com/in/sean-haboon-6494501a7/">
                Go to my LinkedIn
              </a>
              <br></br>
              <a href="mailto:shaboon.dev@gmail.com">shaboon.dev@gmail.com</a>
            </li>
          </ul>
        </div>

        <div className="w-full lg:w-4/5 m-5 mt-20 bg-gradient-to-b from-gray-100 to-gray-400 rounded-l-lg filter drop-shadow-lg lg:order-2">
          <Router>
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/Resume" element={<Resume />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </Router>
        </div>
      </div> */}
    </div>
  );
}
