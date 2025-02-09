/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../CSS/SolutionsCSS/HeaderCarousel.css";

const HeaderCarousel = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://kforcewebeast.azureedge.net/media/407145/talent-solutions-hero.png",
      title: "Talent Solutions",
      description:
        "Save time finding the right resource for your team while we connect you with the best talent in the marketplace.",
    },
    {
      id: 2,
      image: "https://kforcewebeast.azureedge.net/media/406882/hero_2.jpg",
      title: "Team Solutions",
      description:
        "Take charge of your most valued initiatives while we provide a dedicated team offering technical expertise and services.",
    },
    {
      id: 3,
      image: "https://kforcewebeast.azureedge.net/media/406884/hero_5.jpg",
      title: "Project Solutions",
      description:
        "Transform your business while we help you connect strategy to execution to tackle your most challenging initiatives..",
    },
    {
      id: 4,
      image: "https://kforcewebeast.azureedge.net/media/407144/its-hero.png",
      title: "International Talent Solutions",
      description:
        "Connecting opportunities across the Connect with the specialized onshore talent you need while we provide risk mitigation, immigration strategy and visa sponsorship..",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 7000); // 7 seconds interval
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="bg-slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentSlide ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="slide-content">
            <h1>{slide.title}</h1>
            <p>{slide.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeaderCarousel;
