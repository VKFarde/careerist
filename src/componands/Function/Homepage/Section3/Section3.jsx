import React from "react";
import logo from "../Img/34.webp";
import "./section3.css";

function Section3() {
  return (
    <div className="section3">
      <div className="section3-container">
        <div className="section3-h1">
          <h1>TECH CAREER</h1>
          <h1>FOR ALL</h1>
        </div>
        <div className="section3-param">
          <p>
            Get the career services you need to land a job, because education is
            just one piece of the job search puzzle
          </p>
        </div>
      </div>
      <div className="section3-img">
        <img src={logo} alt="section 3 " />
      </div>
    </div>
  );
}

export default Section3;
