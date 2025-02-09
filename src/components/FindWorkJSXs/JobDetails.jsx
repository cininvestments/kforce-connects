/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useJob } from "../../context/JobContext"; // Import the custom hook to access job context
import "../../CSS/FindWorkCSS/JobDetails.css";

const JobDetails = ({ jobs }) => {
  const { id } = useParams();
  const { selectedJob, setSelectedJob } = useJob(); // Destructure selectedJob and setSelectedJob from context
  const navigate = useNavigate();

  useEffect(() => {
    // If job is not set in context, find it and set it
    if (!selectedJob || selectedJob.id !== id) {
      const foundJob = jobs.find((job) => job.id === id);
      setSelectedJob(foundJob); // Store it in context
    }
  }, [id, selectedJob, jobs, setSelectedJob]);

  if (!selectedJob) {
    return <p>Job not found!</p>;
  }

  const handleApplyClick = () => {
    navigate(
      `/submit-resume/${selectedJob.id}/${encodeURIComponent(
        selectedJob.title
      )}`
    );
  };

  return (
    <div className="job-details">
      {/* Header section */}
      <div className="detail-head-bg">
        <div className="header-content">
          <h1 className="search-title">Search Jobs</h1>
          <Link to="/search-jobs" className="back-link">
            Back to Search Results
          </Link>
        </div>
      </div>

      {/* Job Details Content */}
      <div className="job-details-container">
        <div className="job-content">
          <div className="job-header">
            <h2>{selectedJob.title}</h2>
            <button className="apply-button" onClick={handleApplyClick}>
              Apply Today
            </button>
          </div>
          <div className="job-meta">
            <p>
              <strong>Location:</strong> {selectedJob.city}
            </p>
            <p>
              <strong>Job Type:</strong> {selectedJob.type}
            </p>
            <p>
              <strong>Compensation:</strong> {selectedJob.compensation}
            </p>
            <p>
              <strong>JobID:</strong> {selectedJob.id}
            </p>
          </div>
          <h3>Description:</h3>
          <p>{selectedJob.description} Responsibilities Include:</p>
          <ul>
            {selectedJob.responsibilities.map((resp, index) => (
              <li key={index}>{resp}</li>
            ))}
          </ul>
          <h3>Requirements:</h3>
          <ul>
            {selectedJob.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
          <h3>Additional Information:</h3>
          <ul>
            {selectedJob.additionalInfo.map((info, index) => (
              <li key={index}>{info}</li>
            ))}
          </ul>
          <button className="apply-button btm-btn" onClick={handleApplyClick}>
            Apply Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
