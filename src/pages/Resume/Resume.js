import React from "react";

export default function Resume() {
  return (
    <div className="content">
      <div className="resume"></div>
      <form
        method="get"
        action="https://drive.google.com/file/d/1mjj2zhbM6dG0eNtg3mg6DhUjQzPO64GC/view?usp=sharing"
        className="download"
      >
        <button className="submit">
          <a className=""></a>
        </button>
      </form>

      <div className="skills">
        <h1>Sean Haboon</h1>
        <h1>Experience</h1>

        <div>
          <h2>UNCC Full-Stack Bootcamp Alumini</h2>
          <p>2023 - 2023</p>
        </div>

        <div>
          <h2>Thunderbird Molding Greensboro</h2>

          <h3>GAP General Apprentice</h3>
          <p>2019 - 2022</p>

          <h3>GAP General Apprentice</h3>
          <p>2017 - 2019</p>
        </div>
      </div>
    </div>
  );
}
