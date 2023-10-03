import React from "react";
import "./scondfootor.scss";
import { Link } from "react-router-dom";

const footerData = [
  "Privacy Policy",
  "Terms of Service",
  "Cancellation Policy",
  "Referral Policy",
  "Guarantee",
  "Education Rules",
];

const footerLinks = [
  "/privacypolicy",
  "/terms",
  "/cancelpolicy",
  "/referralpolicy",
  "/guarantee",
  "/educationrules",
];

function SecondaryFooter() {
  return (
    <div className="scondfooter">
      <div>
        <h3>© Careerist, 2023</h3>
      </div>
      <div className="seond-menu">
        {footerData.map((data, index) => (
          <div key={index}>
            <Link to={footerLinks[index]}>
              <h4>{data}</h4>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SecondaryFooter;
