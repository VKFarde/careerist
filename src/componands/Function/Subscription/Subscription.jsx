import React, { useState } from "react";
import "./subscription.css";

function Subscription() {
  const [details, setDetails] = useState({
    name: "",
    no: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setDetails((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    // For example, you can console.log the form details
    console.log(details);
  };

  return (
    <div className="subscription" id="subscription">
      <div className="subscription-container">
        <div className="subscription-left">
          <div className="subscription-heading">
            <h1>GET STARTED WITH CAREERIST</h1>
          </div>
          <div className="subscription-des">
            <p>
              Get matched with a Career Advisor, helping you select and enroll
              in the right program for you. Ask them about a free class!
            </p>
          </div>
        </div>
        <div className="subscription-right">
          <form onSubmit={handleSubmit} className="subscription-form">
            <div className="subscription-input">
              <input
                placeholder="Your Full Name"
                id="name"
                type="text"
                value={details.name}
                onChange={handleInputChange}
              />
              <input
                placeholder="(201)523-0124"
                id="no"
                type="number"
                value={details.no}
                onChange={handleInputChange}
              />
              <input
                placeholder="E-mail"
                id="email"
                type="email"
                value={details.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="subscription-confirm">
              <input
                type="checkbox"
                id="confirmCheckbox"
                onClick={handleInputChange}
              />
              <span>
                By participating, you agree to receive automated text messages.
                Consent is not a condition of purchase. You can unsubscribe at
                any time. We never share your data.
              </span>
            </div>
            <div className="subscription-button">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Subscription;
