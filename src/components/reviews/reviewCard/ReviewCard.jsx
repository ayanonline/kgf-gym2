import React from "react";
import "./ReviewCard.css";

function ReviewCard(props) {
  return (
    <div className="review-card">
      <p>
        Best GYM ever, I love this GYM, Good Lorem ipsum dolor sit, amet
        consectetur adipisicing elit. Dolores, nisi! Blanditiis nulla debitis
        dolores nesciunt facilis assumenda voluptatum minima repellat magnam,
        quaerat nihil adipisci eveniet voluptatibus qui fuga, expedita tempora?
      </p>
      <div className="review-user">
        <img
          src="https://lh3.googleusercontent.com/ogw/AGvuzYbDvrUkRF83D4iFSPTLoDEAB4mH5vRv_agiVYZEZpc=s32-c-mo"
          alt="user-icon"
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
