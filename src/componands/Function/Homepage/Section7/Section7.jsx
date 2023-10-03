import React, { useRef, useState } from "react";
import Data from "./data.json";
import "./section7.css";
import { VscArrowLeft, VscArrowRight, VscChevronRight } from "react-icons/vsc";
import { AiOutlineEllipsis } from "react-icons/ai";

function Section7() {
  const boxRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const isItemHovered = (index) => {
    return hoveredItem === index;
  };

  const handlePreview = () => {
    const box = boxRef.current;
    const width = box.clientWidth;
    box.scrollLeft -= width;
  };

  const handleNext = () => {
    const box = boxRef.current;
    const width = box.clientWidth;
    box.scrollLeft += width;
  };

  return (
    <div className="section7">
      <div className="section7-container">
        <div className="section7-preview">
          <button type="button" onClick={handlePreview}>
            <VscArrowLeft />
          </button>
        </div>
        <div className="section7-card-container" ref={boxRef}>
          {Data.map((item, index) => (
            <div className="section7-card" key={index}>
              <div className="section7-card-heading">
                <h2>
                  {item.first_name} {item.last_name}
                </h2>
                <h3>{item.description}</h3>
              </div>
              <div className="section7-card-img">
                <img src={item.thumbnail} alt={index} />
              </div>
              <div className="section7-card-span">
                <span
                  className={`menu-item ${
                    isItemHovered(index) ? "hovered" : ""
                  }`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  {isItemHovered(index) ? (
                    <>
                      <AiOutlineEllipsis />
                      <AiOutlineEllipsis />
                      <AiOutlineEllipsis />
                      <VscChevronRight />
                    </>
                  ) : (
                    ""
                  )}
                  Meet {item.first_name}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="section7-next">
          <button type="button" onClick={handleNext}>
            <VscArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section7;
