import React, { useRef } from "react";
import Data from "./Data/data.json";
import "./section10.css";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import Rating from "./Rating/Rating";

function Section10() {
  const boxRef = useRef(null);

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
    <div className="section10">
      <div className="section10-container">
        <div className="section10-preview">
          <button type="button" onClick={handlePreview}>
            <AiOutlineDoubleLeft />
          </button>
        </div>
        <div className="section10-card-container" ref={boxRef}>
          {Data.map((data, index) => (
            <div className="section10-card" key={index}>
              <div className="section10-rating">
                <Rating star={data.stars} />
              </div>
              <div className="section10-params">
                <p>{data.review}</p>
              </div>
              <div className="section10-source">
                <span>{data.source}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="section10-next">
          <button type="button" onClick={handleNext}>
            <AiOutlineDoubleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section10;
