/* eslint-disable no-unused-vars */
// SplitArticle.js
import React, { useEffect, useState } from "react";
import "../../CSS/AboutCSS/SplitArticle.css";

const SplitArticle = () => {
  const [bgImage, setBgImage] = useState("");

  useEffect(() => {
    const updateBackgroundImage = () => {
      const width = window.innerWidth;
      const bgImageMobile = ""; // Replace with actual mobile background image
      const bgImageDesk = ""; // Replace with actual desktop background image

      setBgImage(width <= 991 ? bgImageMobile : bgImageDesk);
    };

    updateBackgroundImage();
    window.addEventListener("resize", updateBackgroundImage);

    return () => {
      window.removeEventListener("resize", updateBackgroundImage);
    };
  }, []);

  return (
    <div
      className="split-article"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="left-side">
        <div>
          <img
            src="/whatwebelieve-02.png"
            alt="Corporate Social Responsibility"
          />
        </div>
      </div>
      <div className="right-side">
        <div>
          <h2>What We Believe</h2>
          <p>
            Our vision is To Have a Meaningful Impact on All the Lives We Serve
            <em>
              <sup>®</sup>
            </em>
            , and that promise extends beyond our business. People and
            relationships are at the heart of what we do. That’s why we ensure
            our people feel empowered &nbsp;to make an impact and give back to
            their communities.
          </p>
          {/* <p>
            <a href="../about/esg/" className="btn-line-blue">
              Sustainability at Kforce
            </a>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default SplitArticle;
