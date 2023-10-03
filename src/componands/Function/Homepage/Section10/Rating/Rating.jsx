import React from "react";
import PropTypes from "prop-types";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./rating.css";

function Rating({ star }) {
  const renderStars = () => {
    const filledStars = Math.round(star);
    const emptyStars = 5 - filledStars;

    const stars = [];
    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <span key={i} className="star">
          <AiFillStar className="filled" />
        </span>
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={filledStars + i} className="star">
          <AiOutlineStar className="empty" />
        </span>
      );
    }
    return stars;
  };

  return <div className="rating-container">{renderStars()}</div>;
}

Rating.propTypes = {
  star: PropTypes.number.isRequired,
};

export default Rating;
