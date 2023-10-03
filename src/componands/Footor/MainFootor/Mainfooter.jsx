import React from "react";
import "./footor.scss";
import { Link } from "react-router-dom";
import logo from "../Logo.svg";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlinePhone } from "react-icons/hi";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const data = [
  {
    heading: "About",
    components: ["Meet Careerist", "Our Instructors", "Graduate Outcomes"],
    links: ["/meet", "/ourinstruct", "/outcome"],
  },
  {
    heading: "Our Programs",
    components: [
      "Manual QA",
      "QA Automation",
      "QA Bundle",
      "Sales Engineering",
      "Systems Engineering",
      "UX Design",
      "Data Analytics",
    ],
    links: [
      "/manualqa",
      "/qaautomation",
      "/qabundle",
      "/salesengi",
      "/systemengi",
      "/uxdesign",
      "/dataanalytics",
    ],
  },
  {
    heading: "Insights",
    components: ["Our Blog", "Success Stories", "Affiliate Program"],
    links: ["/ourblog", "/success", "/affiliateprogram"],
  },
  {
    heading: "Enterprise",
    components: ["Recruiting", "Contract a Team", "Work at Careerist"],
    links: ["/recuriting", "/contact", "/work"],
  },
];
function Mainfooter() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-img-contact">
          <div className="footer-img-container">
            <Link to={"/"}>
              <img src={logo} alt="homepagelink" />
            </Link>
          </div>
          <span>
            <HiOutlinePhone />
            (415) 569-0243
          </span>
          <span>
            <AiOutlineMail />
            advisors@careerist.com
          </span>
          <div className="footor-icon">
            <FaFacebookF />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
        <div className="footer-menu">
          {data.map((item, index) => (
            <div key={index}>
              <h3>{item.heading}</h3>
              <ul>
                {item.components.map((component, idx) => (
                  <li key={idx}>
                    <Link to={item.links[idx]}>{component}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mainfooter;
