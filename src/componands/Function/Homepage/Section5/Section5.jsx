import React from "react";
import "./section5.css";
import Img1 from "./1.svg";
import Img2 from "./2.svg";
import Img3 from "./3.svg";
import Img4 from "./4.svg";

const data = [
  {
    img: Img1,
    heading: "Career discovery",
    about:
      "Discover the right career path for you with your personal Career Advisor",
  },
  {
    img: Img2,
    heading: "1:1 Career Coaching",
    about:
      "Study 1:1 with your Career Coach: improve your resume & practice mock job interviews",
  },
  {
    img: Img3,
    heading: "Real-life internship",
    about:
      "Get the necessary know-how and hands-on experience you can add to your LinkedIn",
  },
  {
    img: Img4,
    heading: "Job Application Service",
    about:
      "Careerist helps you find and apply for job openings matching your criteria",
  },
];

function Section5() {
  return (
    <div className="section5">
      <div className="section5-container">
        {data.map((item, index) => (
          <div key={index}>
            <img src={item.img} alt={index} />
            <h2>{item.heading}</h2>
            <p>{item.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section5;
