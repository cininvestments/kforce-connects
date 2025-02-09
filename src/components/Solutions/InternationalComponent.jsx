/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/SolutionsCSS/InternationalComponent.css";

const InternationalComponent = () => {
  return (
    <div className="international-container">
      {/* Left side with combined images */}
      <div className="images-container">
        <img
          src="https://kforcewebeast.azureedge.net/media/406885/its-map-image.png"
          alt="Map"
          className="base-image"
        />
        <img
          src="https://kforcewebeast.azureedge.net/media/406888/findtalent_supporting_its_1.png"
          alt="Supporting 1"
          className="floating-image floating-image-1"
        />
        <img
          src="https://kforcewebeast.azureedge.net/media/406887/findtalent_supporting_its_3.png"
          alt="Supporting 2"
          className="floating-image floating-image-2"
        />
        <img
          src="https://kforcewebeast.azureedge.net/media/406889/findtalent_supporting_its_2.png"
          alt="Supporting 3"
          className="floating-image floating-image-3"
        />
      </div>

      {/* Right side with text content */}
      <div className="text-container">
        <h2>International Talent Solutions</h2>
        <p>
          You need specialized talent. We have the network. Let us connect you
          with top global talent to ensure your business solutions enhance your
          business strategy.
        </p>
      </div>
    </div>
  );
};

export default InternationalComponent;
