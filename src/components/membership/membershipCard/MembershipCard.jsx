import React, { useEffect, useState } from "react";
import "./MembershipCard.css";

function MembershipCard({ data }) {
  // const [features, setFeatures] = useState([]);
  // useEffect(() => {
  //   setFeatures(data.features);
  // }, []);
  console.log(data);
  return (
    <div className="membersip-card">
      <div className="membership-title">
        <h6>Package</h6>
        <h1>{data?.title}</h1>
      </div>
      <div className="membership-details">
        <h2>₹{data?.price}</h2>
        <h3>Entry Fee: {data?.entryFee}</h3>
        <h3>Basic Training: {data?.basicTraining ? "YES✅" : "NO🚫"}</h3>
        <div className="features">
          <ul>
            {data?.features.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <button className="btn">Subscribe</button>
      </div>
    </div>
  );
}

export default MembershipCard;
