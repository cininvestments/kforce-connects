/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useState, useContext, useEffect } from "react";

const JobContext = createContext();

export const useJob = () => {
  return useContext(JobContext);
};

export const JobProvider = ({ children }) => {
  const [selectedJob, setSelectedJob] = useState(() => {
    // Retrieve the selected job from localStorage
    const savedJob = localStorage.getItem("selectedJob");
    return savedJob ? JSON.parse(savedJob) : null; // Parse JSON if available
  });

  useEffect(() => {
    if (selectedJob) {
      // Save the selected job to localStorage
      localStorage.setItem("selectedJob", JSON.stringify(selectedJob));
    }
  }, [selectedJob]);

  return (
    <JobContext.Provider value={{ selectedJob, setSelectedJob }}>
      {children}
    </JobContext.Provider>
  );
};
