import React from "react";
import "./ProgramCard.css";
import arrowIcon from "../../../assets/arrow.png";

function ProgramCard(props) {
  return (
    <div className="program-card">
      <div
        className="program-image"
        style={{
          backgroundImage: `url(${props.image})`,
          backgroundSize: "cover",
        }}
      ></div>
      <div className="program-title">
        <h1>{props.title}</h1>
        <img src={arrowIcon} alt="an icon" />
      </div>
      <p>{props.desc}</p>
    </div>
  );
}

export default ProgramCard;
