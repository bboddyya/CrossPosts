import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
function About() {
  return (
    <div className="aboutWrapper">
      <h1>ABOUT US</h1>
      <div className="aboutTitle">
        After blocking Twitter in Russia, the country's government decided to
        develop a simple but accessible <span>analogue of Twitter</span> as soon
        as possible.
        <span>Jack Dorsey</span>, who recently left his post as CEO of Twitter,
        and{" "}
        <span>
          {" "}
          <a href="https://github.com/bboddyya" color="#4eaceae6">
            Bogdan Bezugly
          </a>{" "}
        </span>
        from Russia were involved in the development.{" "}
        <Link to="/profile">
          <span>Try one of the first!</span>
        </Link>
      </div>
    </div>
  );
}

export default About;
