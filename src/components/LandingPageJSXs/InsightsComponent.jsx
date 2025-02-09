/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/LandingPageCSS/InsightsComponent.css"; // Importing the CSS file

const InsightsComponent = () => {
  return (
    <div className="insightsBigContainer">
      <div className="col-xs-12 insg_titlentxt">
        <h2 style={{ textAlign: "center" }}>
          <strong>
            <span style={{ fontSize: "24pt" }}>Insights</span>
          </strong>
        </h2>
      </div>

      <div id="insg_SuperDiv" className="col-sm-12">
        {[
          {
            // href: "https://www.kforce.com/articles/preparing-your-organization-for-generative-ai",
            img: "res1.jpg",
            title: "Preparing your organization for generative AI",
            description:
              "Interest in AI is at an all-time high, but there is more to mastering this technology than simply deploying the latest tools.",
          },
          {
            // href: "https://www.kforce.com/articles/kforce-survey-quality-and-security-dominate-data-and-analytics-concerns",
            img: "res2.jpg",
            title:
              "Kforce survey: Quality and security dominate data and analytics concerns",
            description:
              "Collecting meaningful data and data security are the biggest challenges when it comes to data analytics, according to a recent survey on Kforce.com.",
          },
          {
            // href: "https://www.kforce.com/articles/labor-and-industry-trends-report-october-2024/",
            img: "report.png",
            title: "Labor and Industry Trends Report October 2024",
            description:
              "Total nonfarm payroll employment was essentially unchanged in October, adding just 12,000 jobs, while the unemployment rate remained unchanged at 4.1%.",
          },
        ].map((content, index) => (
          <div
            className="insg_ContentDiv"
            style={{ width: "427.35px", height: "372.3px" }}
            key={index}
          >
            <div className="col-sm-12 summary-thumbnail-outer-container">
              {/* <a
                href={content.href}
                target="_blank"
                rel="noopener noreferrer"
                className="sqs-gallery-image-container"
              > */}
              <div className="insg_Icon img-wrapper">
                <img src={content.img} alt={content.title} />
              </div>
              {/* </a> */}
              <div style={{ color: "#000" }}>
                <h3>{content.title}</h3>
                <span className="hideTextMobile">{content.description}</span>
                {/* <p className="hideTextMobile">
                  <a
                    href={content.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More →
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InsightsComponent;
