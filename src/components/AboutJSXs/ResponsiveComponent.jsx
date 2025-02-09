/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/AboutCSS/ResponsiveComponent.css";

const ResponsiveComponent = () => {
  return (
    <div className="container-fluid">
      <div className="row clearfix">
        <div className="col-md-12 column">
          <div className="insightsBigContainer">
            <div className="insg_titlentxt">
              <h2>
                <strong>What We've Been Up To</strong>
              </h2>
            </div>

            <div id="insg_SuperDiv">
              {/** Content Div 1 */}
              <div className="insg_ContentDiv">
                <div className="summary-thumbnail-outer-container">
                  <div className="insg_Icon img-wrapper">
                    <img src="/design-17.png" alt="Annual Letter" />
                  </div>
                  <div>
                    <h3>Annual Letter from the President and CEO</h3>
                    <span className="hideTextMobile">
                      We delivered a record-high $1.71 billion in revenue while
                      transitioning to our hybrid work model called office
                      occasional.
                    </span>
                    {/* <p className="hideTextMobile">
                      <a
                        href="https://www.kforce.com/press-releases/2023-letter-from-president-ceo-joe-liberatore/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Learn More →
                      </a>
                    </p> */}
                  </div>
                </div>
              </div>

              {/** Content Div 2 */}
              <div className="insg_ContentDiv">
                <div className="summary-thumbnail-outer-container">
                  <div className="insg_Icon img-wrapper">
                    <img
                      src="/hybrid-work-environment.png"
                      alt="Customer Experience"
                    />
                  </div>
                  <div>
                    <h3>
                      Putting Customer Experience First in the Hybrid World
                    </h3>
                    <span className="hideTextMobile">
                      World-class customer service and personal relationships
                      remain essential to success as many companies continue to
                      embrace hybrid work, according to experts at Kforce.
                    </span>
                  </div>
                </div>
              </div>

              {/** Content Div 3 */}
              <div className="insg_ContentDiv">
                <div className="summary-thumbnail-outer-container">
                  <div className="insg_Icon img-wrapper">
                    <img src="/logo.png" alt="Great Place to Work" />
                  </div>
                  <div>
                    <h3>
                      Kforce Earns Great Place to Work Certification Once Again
                    </h3>
                    <span className="hideTextMobile">
                      Kforce is once again proud to be Certified™ by Great Place
                      to Work® for the firm’s outstanding employee experience.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
