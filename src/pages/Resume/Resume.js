import React from "react";
import "./Resume.css";

export default function Resume() {
  return (
    <div className="content">
      <div className="resume"></div>
      <form method="get" action="file.doc" className="download">
        <button>
          <a></a>
        </button>
      </form>
    </div>
  );
}
