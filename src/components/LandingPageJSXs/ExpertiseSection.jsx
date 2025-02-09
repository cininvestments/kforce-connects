/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "../../CSS/LandingPageCSS/ExpertiseSection.css";

const ExpertiseSection = () => {
  const cards = [
    {
      id: 1,
      title: "98% of Clients",
      description:
        "say Kforce provides talent and data that enables them to complete their strategic priorities in a NPS Survey →",
      url: "/card-1",
    },
    {
      id: 2,
      title: "#1 Most Recognized Brand",
      description:
        "by tech consultants in a Staffing Industry Analysts (SIA) survey →",
      url: "/card-2",
    },
    {
      id: 3,
      title: "Top 5%",
      description:
        "Kforce’s rank by Forbes for Best Professional Recruiting Firms →",
      url: "/card-3",
    },
  ];

  const cardContainerRef = useRef();

  const handleScroll = (direction) => {
    const scrollAmount = cardContainerRef.current.offsetWidth;
    if (direction === "next") {
      cardContainerRef.current.scrollLeft += scrollAmount;
    } else {
      cardContainerRef.current.scrollLeft -= scrollAmount;
    }
  };

  return (
    <div className="custom-container">
      <div className="bg-image">
        <div className="content-text">
          <span>
            Merging your vision and our expertise, we help you achieve powerful
            results
          </span>
          <p>
            At Kforce, we strive{" "}
            <em>To Have a Meaningful Impact on All the Lives We Serve®</em> and
            have helped our clients, candidates, and consultants find meaningful
            work and innovative business solutions for 60 years.
          </p>
        </div>
      </div>
      <div className="expert-cards-section">
        <div className="expert-cards-container" ref={cardContainerRef}>
          {cards.map((card) => (
            <a key={card.id} className="expert-card">
              <strong>{card.title}</strong>
              <p>{card.description}</p>
              <span className="survey-text"></span>
            </a>
          ))}
        </div>
      </div>
      <div className="nav-btns then">
        <button className="nav-btn" onClick={() => handleScroll("prev")}>
          &lt;
        </button>
        <button className="nav-btn" onClick={() => handleScroll("next")}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ExpertiseSection;
