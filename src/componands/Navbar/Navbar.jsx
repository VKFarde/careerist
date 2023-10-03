import React, { useState } from "react";
import logo from "./Logo.svg";
import "./navbar.css";
import { VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { Link } from "react-router-dom";

function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const isItemHovered = (item) => {
    return hoveredItem === item;
  };

  return (
    <div className="navbar">
      <div className="logo-menu-container">
        <div className="logo-container">
          <div className="logo">
            <Link to={"/"}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="menu-container">
          <ul className="menu-list">
            <li
              className={`menu-item ${isItemHovered("about") ? "hovered" : ""}`}
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                About us
                {isItemHovered("about") ? <VscChevronUp /> : <VscChevronDown />}
              </span>
              <ul className="submenu-list">
                <li>
                  <Link to="/meet">Meet Careerist</Link>
                </li>
                <li>
                  <Link to="/ourinstruct">Our Instructors</Link>
                </li>
                <li>
                  <Link to="/outcome">Graduates Outcomes</Link>
                </li>
              </ul>
            </li>
            <li
              className={`menu-item ${
                isItemHovered("programs") ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("programs")}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                Our Programs
                {isItemHovered("programs") ? (
                  <VscChevronUp />
                ) : (
                  <VscChevronDown />
                )}
              </span>
              <ul className="submenu-list">
                <li>
                  <Link to="/manualqa">Manual QA</Link>
                </li>
                <li>
                  <Link to="/qaautomation">QA Automation</Link>
                </li>
                <li>
                  <Link to="/qabundle">QA Bundle</Link>
                </li>
                <li>
                  <Link to="/salesengi">Sales Engineering</Link>
                </li>
                <li>
                  <Link to="/systemengi">System Engineering</Link>
                </li>
                <li>
                  <Link to="/uxdesign">UX Design</Link>
                </li>
                <li>
                  <Link to="/dataanalytics">Data Analytics</Link>
                </li>
              </ul>
            </li>
            <li
              className={`menu-item ${
                isItemHovered("insights") ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("insights")}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                Insights
                {isItemHovered("insights") ? (
                  <VscChevronUp />
                ) : (
                  <VscChevronDown />
                )}
              </span>
              <ul className="submenu-list">
                <li>
                  <Link to="/ourblog">Our Blog</Link>
                </li>
                <li>
                  <Link to="/success">Success Stories</Link>
                </li>
                <li>
                  <Link to="/affiliateprogram">Affiliate Program</Link>
                </li>
              </ul>
            </li>
            <li
              className={`menu-item ${
                isItemHovered("enterprise") ? "hovered" : ""
              }`}
              onMouseEnter={() => handleMouseEnter("enterprise")}
              onMouseLeave={handleMouseLeave}
            >
              <span>
                Enterprise
                {isItemHovered("enterprise") ? (
                  <VscChevronUp />
                ) : (
                  <VscChevronDown />
                )}
              </span>
              <ul className="submenu-list">
                <li>
                  <Link to="/recruiting">Recruiting</Link>
                </li>
                <li>
                  <Link to="/contact">Contract a Team</Link>
                </li>
                <li>
                  <Link to="/work">Work at Careerist</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="contact-info">
        <span>(415) 423-2527</span>
      </div>
    </div>
  );
}

export default Navbar;
