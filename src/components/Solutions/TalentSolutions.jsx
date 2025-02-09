/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/SolutionsCSS/TalentSolutions.css";
import { Link } from "react-router-dom";

const TalentSolutions = () => {
  return (
    <div className="talent-container">
      <div className="talent-content">
        <h1 className="talent-header">Talent Solutions</h1>
        <Link to="/contact">
          <button className="talent-button">Start a Conversation</button>
        </Link>
      </div>
    </div>
  );
};

export default TalentSolutions;
