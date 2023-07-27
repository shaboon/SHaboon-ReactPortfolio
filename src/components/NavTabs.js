import React from "react";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="fixed flex bg-gray-100 w-screen drop-shadow-lg">
      <li className="m-2 mr-4">
        <h1 className="">Sean Haboon</h1>
      </li>
      <li className="m-2 mr-4">
        <a
          href="/"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="m-2 mr-4">
        <a
          href="/Portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="m-2 mr-4">
        <a
          href="/Resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        >
          Resume
        </a>
      </li>
      <li className="m-2 mr-4">
        <a
          href="/Contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
