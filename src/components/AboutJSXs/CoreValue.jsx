/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/AboutCSS/CoreValue.css";

const CoreValue = () => {
  return (
    <div className="corevalue-container">
      <div className="corevalue">
        <div className="corevalue-left">
          <h2>
            <strong>Our Core Values</strong>
          </h2>
          <p>
            Our core values unite us around our mission, support our culture,
            and serve as a declaration of how we treat each other, our
            customers, and our partners. They guide us as we navigate an
            ever-evolving world. Together, let’s do great things.
          </p>
          {/* <p>
            <a
              href="/core-values/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-line-blue"
            >
              <span>Learn More</span>
            </a>
          </p> */}
        </div>
        <div className="corevalue-right">
          <img
            className="corevalue-image"
            src="/corevalue.png"
            alt="Our Core Values"
          />
        </div>
      </div>
    </div>
  );
};

export default CoreValue;
