/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/AboutCSS/AboutHeader.css";

const AboutHeader = () => {
  return (
    <div className="about-header">
      {/* Content Area */}
      <div className="text">
        <div className="jtextfill">
          <h1>
            <span className="mission-title">
              <strong>Our Mission</strong>
            </span>
          </h1>
          <h1>
            <span className="mission-content">
              <strong>
                Uniting Professionals to Achieve Success Through Lasting
                Personal Relationships<sup>®</sup>
              </strong>
            </span>
          </h1>
        </div>
      </div>

      {/* Video Area */}
      <div className="desktopView">
        <video
          className="video"
          autoPlay
          loop
          muted
          playsInline
          src="hero.mp4"
          type="video/mp4"
        >
          {/* <source src="hero.mp4" type="video/mp4" />
          <source src="" type="video/webm" />
          <source src="" type="video/ogg" /> */}
        </video>
      </div>
    </div>
  );
};

export default AboutHeader;
