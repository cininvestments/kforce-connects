/* eslint-disable no-unused-vars */
import React, { useRef } from "react";
import "../../CSS/AboutCSS/AboutExpert.css";

const AboutExpert = () => {
  const cards = [
    {
      id: 1,
      title: "3,000",
      description: "Clients Partner with Kforce",
    },
    {
      id: 2,
      title: "60",
      description: "Years in the industry",
    },
    {
      id: 3,
      title: "30,000",
      description: "Consultant deployed nationwide",
    },
  ];

  const cardContainerRef = useRef();

  return (
    <div className="aboutexpert-custom-container">
      <div className="aboutexpert-bg-image">
        <div className="aboutexpert-content-text">
          <span>Who We Are</span>
          <p>
            Kforce is a solutions firm specializing in building and managing
            elite teams within Technology and Finance & Accounting with top
            employers nationwide. We empower our clients, candidates,
            consultants, and employees to reimagine how business gets done with
            innovative and scalable solutions. We work with a significant
            majority of the Fortune 500 and have over 8 million professionals in
            our talent database.
          </p>
          <p>
            But we are more than a best-in-class staffing and solutions firm. We
            are innovators, thought leaders, and high performers who work with
            our clients, candidates, consultants, employees, and communities to
            move together toward tomorrow®. Together, we can achieve powerful
            results.
          </p>
        </div>
      </div>
      <div className="aboutexpert-cards-section">
        <div className="aboutexpert-cards-container" ref={cardContainerRef}>
          {cards.map((card) => (
            <a key={card.id} className="aboutexpert-card">
              <strong>{card.title}</strong>
              <p>{card.description}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutExpert;
