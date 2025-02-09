/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaChevronDown, FaTimes } from "react-icons/fa";
import "../../CSS/FindWorkCSS/ExpertiseArea.css";
import { Link } from "react-router-dom";

const ExpertiseArea = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="expertiseAreaContainer">
      <div className="contentArea">
        <div className="textSection">
          <h2 className="title">Areas of Expertise</h2>
          <p className="description">
            When you partner with our team of experts, we help you find the
            right match—browse thousands of contract or direct hire
            opportunities now.
          </p>
        </div>
        <div className="accordionArea">
          <div className="accordion">
            <div
              className="accordionHeader"
              onClick={toggleAccordion}
              onMouseEnter={() => window.innerWidth > 768 && setIsOpen(true)}
            >
              <h3 className="accordionTitle">Technology</h3>
              <div className="toggleIcon">
                {isOpen ? <FaTimes /> : <FaChevronDown />}
              </div>
            </div>
            {isOpen && (
              <div className="accordionContent">
                <p>
                  As our reliance on technology increases, so does the demand
                  for cutting-edge IT talent. We merge your tech expertise with
                  our expansive network to connect you with industry-leading
                  companies.
                </p>
                <div className="links">
                  <Link to="/search-jobs" className="button">
                    Search Contract Jobs
                  </Link>
                  <Link to="/search-jobs" className="button">
                    Search Direct Hire Jobs
                  </Link>
                </div>
              </div>
            )}
          </div>
          <hr className="divider" />
          <div className="accordion">
            <div
              className="accordionHeader"
              onClick={toggleAccordion}
              onMouseEnter={() => window.innerWidth > 768 && setIsOpen(true)}
            >
              <h3 className="accordionTitle">Finance & Accounting</h3>
              <div className="toggleIcon">
                {isOpen ? <FaTimes /> : <FaChevronDown />}
              </div>
            </div>
            {isOpen && (
              <div className="accordionContent">
                <p>
                  Finance & Accounting professionals are critical to the success
                  and longevity of every business. We understand your unique
                  skill set and career goals to connect you with jobs that make
                  an impact.
                </p>
                <div className="links">
                  <Link to="/search-jobs" className="button">
                    Search Contract Jobs
                  </Link>
                  <Link to="/search-jobs" className="button">
                    Search Direct Hire Jobs
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertiseArea;
