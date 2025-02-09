/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Swal from "sweetalert2";
import "../../CSS/LandingPageCSS/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobType: "",
    additionalInfo: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.jobType) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: "Please fill in all required fields!",
      });
      return;
    }

    setLoading(true);

    window.Email.send({
      SecureToken: "3c8a6bc4-b91f-4790-ac44-355edcb4e7d4", // Replace with your SMTP token
      To: "forrecivingcontact@gmail.com",
      From: "forrecivingcontact@gmail.com",
      Subject: `Contact Form Submission from ${formData.name}`,
      Body: `
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Job Type:</strong> ${formData.jobType}</p>
        <p><strong>Additional Information:</strong> ${formData.additionalInfo}</p>
      `,
    }).then((message) => {
      setLoading(false);
      if (message === "OK") {
        Swal.fire({
          icon: "success",
          title: "Message Sent",
          text: "Your message has been sent successfully!",
        });
        setFormData({
          name: "",
          email: "",
          jobType: "",
          additionalInfo: "",
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to send message. Please try again later.",
        });
      }
    });
  };

  return (
    <div className="contact-form-container-responsive">
      <form onSubmit={handleSubmit} className="contact-form-stylish-wrapper">
        <div className="form-group-wrapper">
          <label htmlFor="name" className="form-label-stylish">
            Name: <span className="required-indicator">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="input-field-responsive"
          />
        </div>

        <div className="form-group-wrapper">
          <label htmlFor="email" className="form-label-stylish">
            Email: <span className="required-indicator">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="input-field-responsive"
          />
        </div>

        <div className="form-group-wrapper">
          <label className="form-label-stylish">
            Job Type: <span className="required-indicator">*</span>
          </label>
          <div className="radio-group-wrapper">
            <input
              type="radio"
              id="temporary"
              name="jobType"
              value="Temporary/Contract/Project"
              checked={formData.jobType === "Temporary/Contract/Project"}
              onChange={handleChange}
              required
            />
            <label htmlFor="temporary" className="radio-label">
              Temporary/Contract/Project
            </label>
          </div>
          <div className="radio-group-wrapper">
            <input
              type="radio"
              id="directHire"
              name="jobType"
              value="Direct Hire"
              checked={formData.jobType === "Direct Hire"}
              onChange={handleChange}
              required
            />
            <label htmlFor="directHire" className="radio-label">
              Direct Hire
            </label>
          </div>
        </div>

        <div className="form-group-wrapper">
          <label htmlFor="additionalInfo" className="form-label-stylish">
            Additional Information:
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            rows="4"
            value={formData.additionalInfo}
            onChange={handleChange}
            className="textarea-responsive"
          ></textarea>
        </div>

        <button
          type="submit"
          className="submit-button-responsive"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
