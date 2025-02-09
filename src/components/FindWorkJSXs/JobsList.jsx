/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSuitcase } from "react-icons/fa";
import "../../CSS/FindWorkCSS/JobsList.css";

const JobsList = ({ jobs }) => {
  const navigate = useNavigate();
  const [visibleJobs, setVisibleJobs] = useState(10);
  const [isLoading, setIsLoading] = useState(false);

  const handleJobClick = (id) => {
    navigate(`/job/${id}`);
  };

  const handleLoadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleJobs((prevVisible) => prevVisible + 10);
      setIsLoading(false);
    }, 1000);
  };

  // If no jobs are available, display a message
  if (jobs.length === 0) {
    return (
      <div className="no-jobs">
        <FaSuitcase size={50} />
        <p>
          No jobs available for the selected filters. Please reset your filter!
        </p>
      </div>
    );
  }

  return (
    <div className="jobs-list-container">
      <p className="job-count top-count">
        Displaying 1 - {Math.min(visibleJobs, jobs.length)} of {jobs.length}
      </p>
      <div className="jobs-container">
        {jobs
          .slice(0, visibleJobs) // Simply slice the filtered jobs
          .map((job) => (
            <div className="job-card" key={job.id}>
              <div className="job-title-container">
                <h2
                  className="job-title"
                  onClick={() => handleJobClick(job.id)}
                >
                  {job.title}
                </h2>
                <p className="job-date">{job.dateAdded}</p>
              </div>
              <div className="job-description-container">
                <p className="job-description">
                  {job.description.slice(0, 300)}...
                </p>
                <p className="job-type-city">
                  {job.type} <br />
                  {job.city}
                </p>
              </div>
              <div className="content-line"></div>
            </div>
          ))}
      </div>
      {visibleJobs < jobs.length && (
        <button
          className="load-more-btn"
          onClick={handleLoadMore}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
      <p className="job-count btm-count">
        Displaying 1 - {Math.min(visibleJobs, jobs.length)} of {jobs.length}
      </p>
    </div>
  );
};

export default JobsList;
