import "./section9.css";
import React from "react";
import Data from "./Data/data.json";

function Section9() {
  return (
    <div className="section9">
      <div className="section9-heading">
        <h1>THANK YOU!</h1>
      </div>
      <div className="section9-container">
        {Data.map((data, index) => (
          <div className="section9-card" key={index}>
            <div className="section9-card-img-text">
              <div className="section9-card-img">
                <img src={data.avatar} alt={index} />
              </div>
              <div className="section9-card-text">
                <h2>{data.name}</h2>
              </div>
            </div>
            <div className="section9-card-param">
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section9;
