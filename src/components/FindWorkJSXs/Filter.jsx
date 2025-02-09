/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../CSS/FindWorkCSS/Filter.css";
import JobsList from "./JobsList"; // Import JobsList
import { FaSuitcase } from "react-icons/fa";

const FilterComponent = ({ inputValue, otherName }) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  const filters = {
    jobType: { Contract: 598, Permanent: 615 },
    remote: { Full: 193, Partial: 569 },
    areaOfExpertise: { "Finance and Accounting": 13, Technology: 649 },
    industry: {
      "Banking and Consumer Lending": 42,
      "Business Services - Other": 47,
      "Computer Hardware": 25,
      "Energy and Utilities": 106,
      "Financial Services": 67,
      "Healthcare Services": 34,
      Insurance: 19,
      "Telecommunications Services": 22,
    },
    jobSkills: {
      "Project Management": 79,
      "Software Development": 74,
    },
    datePosted: { "24 Hours": 0, "3 Days": 0, "All Jobs": 649 },
  };

  const handleFilterClick = (filter) => {
    if (activeFilters.includes(filter)) {
      setActiveFilters(activeFilters.filter((item) => item !== filter));
    } else {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const toggleFilterMenu = () => {
    setIsFilterOpen((prev) => !prev);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Filter jobs based on active filters
  let filteredJobs = otherName.filter((job) => {
    if (activeFilters.length === 0) return true;

    return activeFilters.every((filter) => {
      return (
        (filters.jobType[job.type] && job.type === filter) ||
        (filters.remote[job.remote] && job.remote === filter) ||
        (filters.areaOfExpertise[job.areaOfExpertise] &&
          job.areaOfExpertise === filter) ||
        (filters.industry[job.industry] && job.industry === filter) ||
        (filters.jobSkills[job.jobSkills] && job.jobSkills.includes(filter)) ||
        (filters.datePosted[job.datePosted] && job.datePosted === filter)
      );
    });
  });

  // Sort filtered jobs
  if (sortOption === "newest") {
    filteredJobs = filteredJobs.sort(
      (a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)
    );
  } else if (sortOption === "oldest") {
    filteredJobs = filteredJobs.sort(
      (a, b) => new Date(a.dateAdded) - new Date(b.dateAdded)
    );
  }

  return (
    <div className="flex-n-cont">
      <div>
        <div className="btn-bond">
          <button
            className="save-job-alert"
            onClick={() => setActiveFilters([])}
          >
            Reset Search
          </button>
        </div>

        <div className={`filter-container ${isFilterOpen ? "open" : ""}`}>
          <button className="filter-toggle-button" onClick={toggleFilterMenu}>
            {isFilterOpen ? "Close Filters" : "Filter & Sort (1213 results)"}
          </button>

          {(isFilterOpen || window.innerWidth > 768) && (
            <div className="filter-content">
              <div className="filter-section">
                <h3 className="filter-title">Sort by</h3>
              </div>
              <select
                className="dropdown-filter"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="relevant">Relevant Jobs</option>
                <option value="oldest">Oldest Jobs First</option>
                <option value="newest">Newest Jobs First</option>
              </select>

              {Object.entries(filters).map(([title, options]) => (
                <div className="filter-section" key={title}>
                  <h3 className="filter-title">{title}</h3>
                  <div className="filter-options">
                    {Object.entries(options).map(([type, count]) => (
                      <div
                        key={type}
                        className={`filter-option ${
                          activeFilters.includes(type) ? "active" : ""
                        }`}
                        onClick={() => handleFilterClick(type)}
                      >
                        {type} ({count})
                        {activeFilters.includes(type) && (
                          <span className="remove-filter">✕</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Pass the filtered jobs to JobsList */}
      <JobsList jobs={filteredJobs} query={inputValue} className="listing" />
    </div>
  );
};

export default FilterComponent;
