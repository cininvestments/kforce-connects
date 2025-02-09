/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/LandingPageCSS/AboutComponent.css";
import { Link } from "react-router-dom";

const AboutComponent = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img
          src="about.jpg" // Replace with your image URL
          alt="About Kforce"
          className="about-image"
        />
        <div className="about-text">
          <strong>Kforce stands for KNOWLEDGEforce®</strong>
          <span>
            We know we achieve{" "}
            <em>
              Great Results Through Strategic Partnership and Knowledge Sharing®{" "}
            </em>
            , which is why we view each interaction with our clients,
            candidates, consultants and communities as an opportunity to build
            lasting personal relationships and business partnerships.
          </span>
          <p>
            We invite you to learn more about our process, our people and how we
            reimagine how business gets done.
          </p>
          <Link to="/about">
            <button className="about-button">About Kforce</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
