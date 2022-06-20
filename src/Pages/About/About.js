import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="aboutWrapper">
      <h1>ABOUT US</h1>
      <div className="aboutTitle">
        After Twitter was blocked in Russia, millions of people were left
        without the opportunity to <span>EXPRESS</span> themselves to others, to{" "}
        <span>SPEAK</span> with others, to <span>TELL</span> others what is
        happening around them.{" "}
        <Link to="/profile">
          <span>CrossPosts</span>
        </Link>{" "}
        gives people this opportunity. World leaders, celebrities and ordinary
        people have already joined us, <span>we only need you!</span>
      </div>
    </div>
  );
}

export default About;
