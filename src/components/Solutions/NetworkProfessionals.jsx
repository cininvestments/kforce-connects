/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/SolutionsCSS/NetworkProfessionals.css";

const NetworkProfessionals = () => {
  return (
    <div className="network-container">
      <div className="network-content">
        <h1 className="network-header">
          Connecting you with a wide network of professionals
        </h1>
        <p className="network-paragraph">
          Whether you need an individual to fill a short-term vacancy or a
          direct hire, Kforce’s Talent Solutions services will connect you with
          a wide network of professionals in the Technology and Finance &
          Accounting spaces.
        </p>
        <p className="network-paragraph">
          Our focus is finding employment solutions and consulting opportunities
          to solve business challenges for a variety of industries. Our
          streamlined hiring process and ongoing consultant care will help you
          find and support the right talent to fit your needs, so you can focus
          on managing your team.
        </p>
      </div>
      <div className="network-image-section">
        <img
          src="team-solutions-2.png"
          alt="Professionals"
          className="network-image"
        />
        <p className="network-image-text">
          Building meaningful connections for your success
        </p>
      </div>
    </div>
  );
};

export default NetworkProfessionals;
