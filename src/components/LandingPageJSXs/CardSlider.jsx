/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../CSS/LandingPageCSS/CardSlider.css";

const CardSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // Update the total number of slides

  // Automatically change slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="card-carousel-container">
      <div
        className="card-carousel"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {/* Card 1 */}
        <div
          className={`card-slider-container ${
            currentSlide === 0 ? "active" : ""
          }`}
        >
          <div className="image-section">
            <img src="wells.png" alt="Report" className="slider-image" />
          </div>
          <div className="content-section">
            <h3>Preparing your organization for generative AI</h3>
            <p>
              In this white paper, we dive deep and discuss why large language
              models (LLMs) and other AI tools increase the need for good data
              governance, quality and storage practices.
            </p>
            <div className="action-button">
              {/* <button>Learn More</button> */}
            </div>
            <div className="carousel-dots">
              {[...Array(totalSlides)].map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className={`card-slider-container ${
            currentSlide === 1 ? "active" : ""
          }`}
        >
          <div className="image-section">
            <img src="caru2.png" alt="Report" className="slider-image" />
          </div>
          <div className="content-section">
            <h3>
              Kforce survey: Quality and security dominate data and analytics
              concerns
            </h3>
            <p>
              Collecting meaningful data and data security are the biggest
              challenges when it comes to data analytics, according to a recent
              survey on Kforce.co...
            </p>
            <div className="action-button">
              {/* <button>Learn More</button> */}
            </div>
            <div className="carousel-dots">
              {[...Array(totalSlides)].map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className={`card-slider-container ${
            currentSlide === 2 ? "active" : ""
          }`}
        >
          <div className="image-section">
            <img src="report.png" alt="Report" className="slider-image" />
          </div>
          <div className="content-section">
            <h3> Labor & Industry Trends Report October 2024</h3>
            <p>
              Learn more about labor and industry trends for October 2024 from
              our Chief Corporate Development Officer at Kforce, Michael
              Blackman.
            </p>
            <div className="action-button">
              {/* <button>Learn More</button> */}
            </div>
            <div className="carousel-dots">
              {[...Array(totalSlides)].map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => handleDotClick(index)}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button className="nav-arrow left-arrow" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="nav-arrow right-arrow" onClick={handleNext}>
        &#8250;
      </button>

      {/* Carousel Dots */}
      {/* <div className="carousel-dots">
        {[...Array(totalSlides)].map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div> */}
    </div>
  );
};

export default CardSlider;
