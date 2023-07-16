import React, { useState } from "react";
import "./Programs.css";
import SectionHeading from "../Heading/SectionHeading";
import ProgramCard from "./programsCard/ProgramCard";

function Programs() {
  const [programs, setPrograms] = useState([
    {
      title: "yoga",
      image: "https://wellnessworks.in/wp-content/uploads/2019/06/Yoga.jpg",
      desc: "This is cardio program",
    },
    {
      title: "Cardio and hit",
      image:
        "https://images.theconversation.com/files/478906/original/file-20220812-22-plgtr.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
      desc: "this is cardio program",
    },
    {
      title: "strength training",
      image:
        "https://recxpress.com.au/wp-content/uploads/2019/05/The-Importance-of-Good-Weightlifting-Form-and-How-to-Improve-Your-Technique.jpg",
      desc: "this is cardio program",
    },
    {
      title: "Cardio",
      image: "https://static.toiimg.com/photo/95305798.cms",
      desc: "this is cardio program",
    },
  ]);
  return (
    <div id="program" className="program-container">
      <SectionHeading title="our programs" />
      <p>
        Gaine up your routine with out growing library of <br />
        worksout led by our world-class trainers
      </p>
      <div className="scrollable-div">
        {programs.map((item, index) => {
          return (
            <ProgramCard
              key={index}
              title={item.title}
              image={item.image}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Programs;
