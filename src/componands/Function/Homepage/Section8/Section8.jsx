import React, { useState } from "react";
import Data from "./data/data.json";
import Data1 from "./data/data1.json";
import Data2 from "./data/data2.json";
import Data3 from "./data/data3.json";
import Data4 from "./data/data4.json";
import Data5 from "./data/data5.json";
import "./section8.css";

function Section8() {
  const [translateX, setTranslateX] = useState(0);
  const [tX, setTX] = useState(0);

  function move(event) {
    const deltaY = event.deltaY;
    const scrollUp = deltaY < 0;
    const scrollDown = deltaY > 0;

    if (scrollUp) {
      setTranslateX((prevTranslateX) => prevTranslateX + 2);
      setTX((pX) => pX - 1);
    }

    if (scrollDown) {
      setTranslateX((prevTranslateX) => prevTranslateX - 2);
      setTX((pX) => pX + 1);
    }
  }

  return (
    <div className="section8" onWheel={move}>
      <div className="section8-heading">
        <span>CAREERIST GRADUATES</span>
        <span>HAVE BEEN HIRED BY:</span>
      </div>
      <div className="section8-container">
        <div className="section8-con">
          <div
            className="section8-con-group1"
            style={{ transform: `translateX(${translateX}%)` }}
          >
            {Data.map((data, index) => (
              <div className="section8-con-first" key={index}>
                <img src={data.src} loading={data.loading} alt={index} />
              </div>
            ))}
          </div>
          <div
            className="section8-con-group2"
            style={{ transform: `translateX(${tX}%)` }}
          >
            {Data1.map((data, index) => (
              <div className="section8-con-second" key={index}>
                <img src={data.src} loading={data.loading} alt={index} />
              </div>
            ))}
          </div>
        </div>
        <div
          className="section8-con-group3"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {Data2.map((data, index) => (
            <div className="section8-con-first" key={index}>
              <img src={data.src} loading={data.loading} alt={index} />
            </div>
          ))}
        </div>
        <div
          className="section8-con-group4"
          style={{ transform: `translateX(${tX}%)` }}
        >
          {Data3.map((data, index) => (
            <div className="section8-con-second" key={index}>
              <img src={data.src} loading={data.loading} alt={index} />
            </div>
          ))}
        </div>
        <div
          className="section8-con-group5"
          style={{ transform: `translateX(${translateX}%)` }}
        >
          {Data4.map((data, index) => (
            <div className="section8-con-first" key={index}>
              <img src={data.src} loading={data.loading} alt={index} />
            </div>
          ))}
        </div>
        <div
          className="section8-con-group6"
          style={{ transform: `translateX(${tX}%)` }}
        >
          {Data5.map((data, index) => (
            <div className="section8-con-second" key={index}>
              <img src={data.src} loading={data.loading} alt={index} />
            </div>
          ))}
        </div>
      </div>
      <div className="section8-fotoor">
        <p>
          *Our clients have found employment after taking Careerist´s trainings
          at the companies listed above. These companies do not in any way
          endorse, sponsor, approve, support our trainings and are not in any
          way affiliated with Careerist.com.
        </p>
      </div>
    </div>
  );
}

export default Section8;
