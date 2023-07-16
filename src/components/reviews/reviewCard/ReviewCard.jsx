import React from "react";
import "./ReviewCard.css";

function ReviewCard(props) {
  return (
    <div className="review-card">
      <p>Best GYM ever, I love this GYM, Good trainer</p>
      <div className="review-user">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          alt=""
        />
        <div className="user-info">
          <h4>Ayan Ghosh</h4>
          <h5>Software Engineer</h5>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
