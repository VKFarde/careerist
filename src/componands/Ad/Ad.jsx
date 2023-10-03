import React, { useState } from "react";
import "./ad.scss";
import { useNavigate } from "react-router-dom";

function Ad() {
  const nav = useNavigate();
  const [active, setActive] = useState(false);
  const handleclick = () => {
    setActive(!active);
  };

  if (active === true) {
    nav("/subscription");
    setActive(!active);
  }
  return (
    <div className="banner" onClick={handleclick}>
      <div className="banner-text">Summer is here! Save Up To 50%!</div>
      <div className="banner-picture">
        <ul className="banner-picture-list">
          <li className="banner-ani-one"></li>
          <li className="banner-ani-two"></li>
          <li className="banner-ani-three"></li>
          <li className="banner-ani-four"></li>
          <li className="banner-ani-five"></li>
          <li className="banner-ani-six"></li>
          <li className="banner-ani-seven"></li>
          <li className="banner-ani-eight"></li>
          <li className="banner-ani-nine"></li>
          <li className="banner-ani-ten"></li>
        </ul>
      </div>
      <div className="banner-button">
        <button onClick={handleclick}>Join Now</button>
      </div>
    </div>
  );
}

export default Ad;
