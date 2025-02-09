/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/SolutionsCSS/SmallTextBtn.css";
import { Link } from "react-router-dom";

const SmallTextBtn = () => {
  return (
    <div className="small-text-btn-container">
      <h3 className="small-text-btn-heading">
        Together, we can achieve powerful results.
      </h3>
      <Link to="/contact">
        <button className="small-text-btn">Start a Conversation</button>
      </Link>
    </div>
  );
};

export default SmallTextBtn;
