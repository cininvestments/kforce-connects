/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import "../../CSS/FindWorkCSS/DownLinks.css";

const DownLinks = () => {
  return (
    <div className="bg-color">
      <div className="down-list">
        <hr className="horizontal-top" />
        <ul className="unorder-flex">
          <li>
            <Link to="/search-jobs" className="bg-01">
              <div>
                <span>Search Jobs</span>
              </div>
            </Link>
          </li>
          <hr className="inline-hr" />

          <li>
            <Link to="/submit-resume" className="bg-04">
              <div>
                <span>Submit Your Resume</span>
              </div>
            </Link>
          </li>
          <hr className="inline-hr" />

          <li>
            <Link to="/about" className="bg-03">
              <div>
                <span>About Kforce</span>
              </div>
            </Link>
          </li>
          {/* <hr className="inline-hr" />

          <li>
            <Link to="/find-work/visa-sponsorship-solutions/" className="bg-02">
              <div>
                <span>Visa Sponsorship</span>
              </div>
            </Link>
          </li> */}
        </ul>
        <hr className="horizontal-top" />
      </div>
    </div>
  );
};

export default DownLinks;
