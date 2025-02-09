/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../CSS/AboutCSS/LeaderComponent.css";

const LeaderComponent = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Simulate loading time

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const leaders = [
    {
      name: "Joe Liberatore",
      position: " PRESIDENT & CEO",
      image: "/stephen.avif",
    },
    {
      name: "Dave Bair",
      position: "PRESIDENT CONSULTING SOLUTIONS",
      image: "/davebair.avif",
    },
    {
      name: "Alice Johnson",
      position: "CFO",
      image: "/michael-blackman-headshot.jpeg",
    },
    // Add 10 more leaders here
  ];

  return (
    <div className="leader-component">
      {isLoading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}

      {!isLoading && (
        <>
          {/* Background Video Section */}
          <div className="video-section">
            <video autoPlay loop muted className="bg-video">
              <source src="/gettyimages.mp4" type="video/mp4" />
            </video>
            <div className="video-content">
              <span>Meet Our Leaders</span>
              <div className="button-container">
                <button className="btn btn-primary">
                  Executive Leadership
                </button>
                <button className="btn btn-secondary">
                  Directive Leadership
                </button>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="cards-section">
            <div className="grid-container">
              {leaders.map((leader, index) => (
                <div key={index} className="card">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="leader-image"
                  />
                  <h3 className="leader-name">{leader.name}</h3>
                  <p className="leader-position">{leader.position}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll to Top Button */}
          <button className="scroll-top-btn" onClick={scrollToTop}>
            ↑
          </button>

          {/* Link to Executive Leaders */}
          <div className="executive-link">
            <a href="/executive-leaders" className="link">
              Executive Leaders &rarr;
            </a>
          </div>
        </>
      )}
    </div>
  );
};

export default LeaderComponent;
