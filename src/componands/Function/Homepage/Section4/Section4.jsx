import React from "react";
import "./section4.css";
import Img1 from "./mqa.svg";
import Img2 from "./qaa.svg";
import Img3 from "./3.svg";
import Img4 from "./4.svg";
import Img5 from "./6.svg";
import Img6 from "./8.svg";
import Img7 from "./9.svg";

const section = [
  {
    img: Img1,
    title: "Manual QA",
    description:
      "Quality Assurance (QA) is the fastest path to your first job in tech. No prior experience required",
    duration: "15 weeks",
    salary: "Salary > $69K",
  },
  {
    img: Img2,
    title: "QA Automation",
    description:
      "Boost your QA career with Automation! Apply for high-paying mid-level positions. Python 101 required",
    duration: "6 months",
    salary: "Salary > $115K",
  },
  {
    img: Img3,
    title: "QA Bundle",
    description:
      "Take our QA Complete training and build a long-term, high-demand career in tech – no prior experience or degree required!",
    duration: "10 months",
    salary: "Salary > $115K",
  },
  {
    img: Img4,
    title: "Sales Engineering",
    description:
      "Represent tech companies and enjoy lucrative bonuses in a dynamic and exciting work environment",
    duration: "9 weeks",
    salary: "Salary > $100K",
  },
  {
    img: Img5,
    title: "Systems Engineering",
    description:
      "Get a mid-level job as a Systems Engineer or SRE Engineer and build products that matter",
    duration: "6 months",
    salary: "Salary > $95K",
  },
  {
    img: Img6,
    title: "UX Design",
    description:
      "Create enjoyable experiences for users interacting with digital tools while earning your dream salary",
    duration: "16 weeks",
    salary: "Salary > $65K",
  },
  {
    img: Img7,
    title: "Data Analytics",
    description:
      "Kickstart your high-demand Data Analytics career! Join our training and land a job fast",
    duration: "7½ months",
    salary: "Salary > $62K",
  },
];

function Section4() {
  return (
    <div className="section4">
      <div className="section4-container">
        {section.map((data, index) => (
          <div key={index} className="card">
            <img src={data.img} alt={index} />
            <h2>{data.title}</h2>
            <h4>{data.description}</h4>
            <div>
              <span>{data.duration}</span>
              <span>{data.salary}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section4;
