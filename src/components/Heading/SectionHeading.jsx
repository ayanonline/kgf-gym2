import React from "react";
import "./SectionHeading.css";
function SectionHeading(props) {
  return (
    <div className="heading-container">
      <div className="bar-icon">
        <div className="bar-icon-item1"></div>
        <div className="bar-icon-item1"></div>
        <div className="bar-icon-item2"></div>
        <div className="bar-icon-item2"></div>
      </div>
      <h1>{props.title}</h1>
    </div>
  );
}

export default SectionHeading;
