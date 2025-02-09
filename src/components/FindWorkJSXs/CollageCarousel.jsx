/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../CSS/FindWorkCSS/CollageCarousel.css";

const CollageCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileSlide, setMobileSlide] = useState(0);

  const images = [
    "csr_group1_1.png",
    "csr_group2_1.png",
    "csr_group2_3.png",
    "csr_group1_2.png",
    "csr_group1_3.png",
    "csr_group2_2.png",
  ];

  // Adjust groups for 3 images per slide
  const desktopGroups = [];
  for (let i = 0; i < images.length; i += 3) {
    desktopGroups.push(images.slice(i, i + 3));
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setMobileSlide((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleIndicatorClick = (index, isMobile = false) => {
    if (isMobile) {
      setMobileSlide(index);
    } else {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="bg">
      <div className="carousel-container">
        {/* Desktop View */}
        <div className="carousel-desktop">
          {desktopGroups.map((group, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                currentSlide === index ? "active" : ""
              }`}
            >
              <div className="carousel-item">
                {group.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt={`Group ${index + 1} - Image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          ))}
          <div className="carousel-indicator">
            {desktopGroups.map((_, index) => (
              <span
                key={index}
                className={currentSlide === index ? "active" : ""}
                onClick={() => handleIndicatorClick(index)}
              ></span>
            ))}
          </div>
        </div>

        {/* Mobile View */}
        <div className="carousel-mobile">
          <img
            src={images[mobileSlide]}
            alt={`Mobile Slide ${mobileSlide + 1}`}
          />
          <div className="carousel-indicator">
            {images.map((_, index) => (
              <span
                key={index}
                className={mobileSlide === index ? "active" : ""}
                onClick={() => handleIndicatorClick(index, true)}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollageCarousel;
