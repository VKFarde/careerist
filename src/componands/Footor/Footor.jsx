import React from "react";
import { SecondaryFootor, Mainfooter } from "./index";
import "./fotor.scss";

function Footor() {
  return (
    <>
      <Mainfooter />
      <div className="footor-breack-line">
        <div className="footor-line"></div>
      </div>
      <SecondaryFootor />
    </>
  );
}

export default Footor;
