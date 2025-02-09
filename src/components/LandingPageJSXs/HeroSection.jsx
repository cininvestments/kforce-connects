/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/LandingPageCSS/HeroSection.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero-section">
      {/* Video Background (for large screens) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-element"
        src="kforce-vid.mp4"
        type="video/mp4"
      >
        Your browser does not support the video tag.
      </video>

      {/* Image Background (for smaller screens) */}
      <img
        src="projecthead.png" /* Replace with your image path */
        alt="Hero Background"
        className="image-element"
      />

      {/* Gradient Overlay */}
      <div className="hero-video-gradient"></div>

      {/* Light Blue Mask */}
      <div className="hero-image-mask"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <article className="content-container">
          <span>
            Let&apos;s <br />
            transform <br /> business,
            <br /> together
          </span>
          <br />
          <br />
          <p>
            <Link
              to="/about"
              title="Together Toward Tomorrow"
              className="btn-filled"
            >
              Explore Trends
            </Link>
          </p>
        </article>
      </div>
    </div>
  );
};

export default HeroSection;
