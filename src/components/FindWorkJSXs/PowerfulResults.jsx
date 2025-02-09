/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/FindWorkCSS/PowerfulResults.css";
import { Link } from "react-router-dom";

const PowerfulResults = () => {
  return (
    <div className="powerfulResultsContentContainer">
      <p>&nbsp;</p>
      <h2 className="heading">
        <span className="subheading">
          <strong>Together, We Can Achieve Powerful Results</strong>
        </span>
      </h2>
      <p>&nbsp;</p>
      <p className="content">
        Kforce is more than just a staffing and solutions firm. We’re a
        community partner dedicated to having a lasting impact on all the lives
        we serve—including yours. Whether you partner with us as a consultant or
        join our corporate team, we invite you to become a part of our Kforce
        family.
      </p>
      <p>&nbsp;</p>
      <div className="buttonContainer">
        <Link to="/submit-resume" rel="noopener" className="btn btn-darkblue">
          Careers at Kforce
        </Link>
        <Link to="/about" rel="noopener" className="btn btn-darkblue">
          See Our Impact
        </Link>
      </div>
      <p>&nbsp;</p>
    </div>
  );
};

export default PowerfulResults;
