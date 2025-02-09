/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import "../../CSS/FindWorkCSS/SubmitResume.css";

const ResumeForm = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="form-section">
        <label>
          First Name*:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
        </label>

        <label>
          Last Name*:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
        </label>

        <label>
          Primary Email*:
          <input
            type="email"
            name="primaryEmail"
            value={formData.primaryEmail}
            onChange={handleChange}
          />
        </label>

        <label>
          Verify Email*:
          <input
            type="email"
            name="verifyEmail"
            value={formData.verifyEmail}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-section">
        <label>
          Phone*:
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Address:
          <input
            type="text"
            name="homeAddress"
            value={formData.homeAddress}
            onChange={handleChange}
          />
        </label>
      </div>

      <div className="form-section">
        <label>
          Upload Resume*:
          <input
            type="file"
            name="resume"
            accept=".doc,.docx,.pdf"
            onChange={handleChange}
          />
        </label>
        <p className="resume-info">
          We accept .DOC, .DOCX, and PDF files up to 2MB.
        </p>
      </div>
    </div>
  );
};

export default ResumeForm;
