/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import firebaseApp from "../../config/firebaseConfig"; // Import Firebase configuration
import ResumeForm from "./ResumeForm";
import Swal from "sweetalert2";
import "../../CSS/FindWorkCSS/SubmitResume.css";

// Initialize Firebase Storage
const storage = getStorage(firebaseApp);

const SubmitResume = () => {
  // Get jobId and jobTitle from URL params
  const { jobId, jobTitle } = useParams();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    primaryEmail: "",
    verifyEmail: "",
    phone: "",
    state: "",
    zip: "",
    country: "",
    homeAddress: "",
    resume: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    if (!formData.firstName.trim()) return "First name is required.";
    if (!formData.lastName.trim()) return "Last name is required.";
    if (!formData.primaryEmail.trim()) return "Primary email is required.";
    if (!formData.verifyEmail.trim()) return "Please confirm your email.";
    if (formData.primaryEmail !== formData.verifyEmail)
      return "Emails do not match.";
    if (!formData.resume) return "Please upload your resume.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationError = validateForm();
    if (validationError) {
      Swal.fire({
        icon: "error",
        title: "Validation Error",
        text: validationError,
      });
      return;
    }

    setLoading(true);

    try {
      // Upload file to Firebase Storage
      const storageRef = ref(storage, `resumes/${formData.resume.name}`);
      await uploadBytes(storageRef, formData.resume);
      const resumeLink = await getDownloadURL(storageRef);

      // Prepare email content
      const fullName = `${formData.firstName} ${formData.lastName}`;
      const email = formData.primaryEmail;
      const phone = formData.phone;
      const homeAddress = formData.homeAddress;

      // Send email with SMTPJS
      const response = await window.Email.send({
        SecureToken: "3c8a6bc4-b91f-4790-ac44-355edcb4e7d4", // Replace with your SMTP token
        To: "forrecivingcontact@gmail.com",
        From: "forrecivingcontact@gmail.com",
        Subject: `Job Application for ${jobTitle || "N/A"} (ID: ${
          jobId || "N/A"
        })`,
        Body: `
          <strong>Full Name:</strong> ${fullName} <br>
          <strong>Email:</strong> ${email} <br>
          <strong>Phone:</strong> ${phone} <br>
          <strong>Address:</strong> ${homeAddress} <br>
          <strong>Job Title:</strong> ${jobTitle || "N/A"} <br>
          <strong>Job ID:</strong> ${jobId || "N/A"} <br>
          <strong>Resume Link:</strong> <a href="${resumeLink}">Download Resume</a>
        `,
      });

      if (response === "OK") {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: `Your resume for the job ${jobTitle} has been submitted.`,
        }).then(() => {
          // Reset the form state
          setFormData({
            firstName: "",
            lastName: "",
            primaryEmail: "",
            verifyEmail: "",
            phone: "",
            state: "",
            zip: "",
            country: "",
            homeAddress: "",
            resume: null,
          });
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to submit resume. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error during submission:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "An error occurred while submitting your resume.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="submit-resume">
      <div className="header">
        <h1>Find Work</h1>
      </div>
      <div className="title-id">
        <p>
          {jobId && jobTitle ? `JobTitle: ${jobTitle} ` : "Submit Your Resume"}
        </p>
        <p>{jobId && jobTitle ? `JobID: ${jobId} ` : ""}</p>
      </div>

      <p className="required-note">All fields with an asterisk are required.</p>

      <hr />

      <form onSubmit={handleSubmit} className="resume-form">
        <ResumeForm formData={formData} handleChange={handleChange} />

        <hr />
        <div className="privacy-policy">
          <p>
            By clicking submit, you agree that this submission is your
            electronic signature.
          </p>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SubmitResume;
