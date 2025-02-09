/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/SolutionsCSS/SolutionCards.css";

const SolutionCards = () => {
  return (
    <div className="card-control">
      <div className="cards-container">
        <div className="card">
          <strong className="card-heading">
            Finance & Accounting Staffing
          </strong>
          <p>
            From building out a team to navigating business cycle peaks with
            short-term solutions, we can help you find experienced Finance &
            Accounting professionals. Our experts specialize in connecting you
            with top talent in the following areas:
          </p>
          <ul>
            <li>Financial Planning and Analysis</li>
            <li>Data and Analytics</li>
            <li>Regulatory and Compliance</li>
            <li>Transactional and Operational Accounting</li>
          </ul>
        </div>

        <div className="card">
          <strong className="card-heading">Technology Staffing</strong>
          <p>
            Our process delivers high-touch, relationship-driven results backed
            by progressive technologies. Let us help you find the best talent in
            the marketplace to support your projects within the following areas:
          </p>
          <ul>
            <li>Full Stack Development</li>
            <li>Enterprise Data Management</li>
            <li>UX/UI</li>
            <li>Project Management and Business Analysis</li>
            <li>Infrastructure</li>
            <li>Cybersecurity</li>
            <li>Networking and Engineering</li>
            <li>Agile Transformation</li>
            <li>BI/AI</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SolutionCards;
