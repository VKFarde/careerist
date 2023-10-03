import React from "react";
import "./section1.css";
import logo from "../Img/img.webp";
import icon from "../Img/icon.svg";

function Section1() {
  return (
    <div className="section1">
      <div className="section1-container">
        <div className="section1-container-one">
          <span>GROW YOUR</span>
          <span className="section1-container-one-img">
            <img src={icon} alt="growthicon" />
            CAREER
          </span>
          <span>IN TECH</span>
        </div>
        <div className="section1-container-two">
          <p>
            Ready for your next chapter? Join our immersive programs and get on
            the fast track to a high-paying tech job
          </p>
        </div>
      </div>
      <div className="section1-img-container">
        <div className="section1-img-container-one"></div>
        <img src={logo} alt="laptop" />
        <div className="section1-img-container-two"></div>
      </div>
    </div>
  );
}

export default Section1;
