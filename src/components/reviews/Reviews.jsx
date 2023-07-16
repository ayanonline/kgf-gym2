import React from "react";
import "./Reviews.css";
import SectionHeading from "../Heading/SectionHeading";
import ReviewCard from "./reviewCard/ReviewCard";

function Reviews() {
  return (
    <div className="reviews-container">
      <SectionHeading title="what they say" />
      <p>
        Gaine up your routine with out growing library of <br />
        worksout led by our world-class trainers
      </p>
      <div className="reviews">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
}

export default Reviews;
