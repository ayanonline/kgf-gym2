import React from "react";
import "./Community.css";
import SectionHeading from "../Heading/SectionHeading";
import arrowIcon from "../../assets/blackarrow.png";

const Community = () => {
  return (
    <div className="community-container">
      <div className="title">
        <SectionHeading title="supportive community" />
        <div className="images">
          <img
            src="https://media.glamour.com/photos/5696653593ef4b095210c925/master/w_1920%2Cc_limit/health-fitness-2009-06-0610-gym-work-out_li.jpg"
            alt="an image"
          />
          <img
            src="https://media.istockphoto.com/id/1136449221/photo/fitness-trainer-portrait-in-the-gym.jpg?s=612x612&w=0&k=20&c=AOkQClzQO8n-TdIwDlep5p4TYBToAW3G2vE5luRdC-U="
            alt=""
            className="overlap"
          />
          <img
            src="https://media.glamour.com/photos/5696653593ef4b095210c925/master/w_1920%2Cc_limit/health-fitness-2009-06-0610-gym-work-out_li.jpg"
            alt=""
            className="overlap"
          />
        </div>
      </div>
      <p>
        Your body can do it. It's time to convince
        <br /> your mind.What are you waiting for
      </p>
      <button className="btn">
        JOIN NOW
        <img src={arrowIcon} alt="an icon" />
      </button>
    </div>
  );
};

export default Community;
