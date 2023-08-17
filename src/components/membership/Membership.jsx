import React, { useState } from "react";
import "./Membership.css";
import SectionHeading from "../Heading/SectionHeading";
import MembershipCard from "./membershipCard/MembershipCard";

function Membership() {
  const [memberships, setMemberships] = useState([
    {
      id: 4,
      title: "12 Months",
      price: 6000,
      entryFee: "Free",
      basicTraining: true,
      features: [
        "3hour drive traning time",
        "Free access gym community",
        "Free consultant coach 30 minutes",
      ],
    },
    {
      id: 5,
      title: "24 Months",
      price: 10000,
      entryFee: "Free",
      basicTraining: true,
      features: [
        "3hour drive traning time",
        "Free access gym community",
        "Free consultant coach 30 minutes",
      ],
    },
    {
      id: 1,
      title: "1 Month",
      price: 1200,
      entryFee: 500,
      basicTraining: false,
      features: [
        "3hour drive traning time",
        "Free access gym community",
        "Free consultant coach 30 minutes",
      ],
    },
    {
      id: 2,
      title: "3 Months",
      price: 3000,
      entryFee: 500,
      basicTraining: false,
      features: [
        "3hour drive traning time",
        "Free access gym community",
        "Free consultant coach 30 minutes",
      ],
    },
    {
      id: 3,
      title: "6 Months",
      price: 4500,
      entryFee: 500,
      basicTraining: false,
      features: [
        "3hour drive traning time",
        "Free access gym community",
        "Free consultant coach 30 minutes",
      ],
    },
  ]);
  return (
    <div className="membership-container">
      <SectionHeading title="MEMBERSHIP" />
      <p>
        Your body can do it. It's time to convince
        <br /> your mind.What are you waiting for
      </p>
      <div className="membership-card-container scrollable-div">
        {memberships.map((item) => {
          return <MembershipCard key={item.id} data={item} />;
        })}
      </div>
    </div>
  );
}

export default Membership;
