/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "../../CSS/FindWorkCSS/SearchWork.css";
import { FaCaretDown, FaSearch } from "react-icons/fa";
import FilterComponent from "./Filter";
import jobsData from "../../data/jobs"; // Import your job data

const SearchJob = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [dropdownPlaceholder, setDropdownPlaceholder] =
    useState("Type to search");
  const [inputValue, setInputValue] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 768);
  const [isSearching, setIsSearching] = useState(false);

  // Listen for screen resize to update state
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Simulate loading time of 6 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);

    // Change placeholder to "Loading..." once user starts typing
    if (e.target.value.length > 0) {
      setDropdownPlaceholder("Loading...");
    } else {
      setDropdownPlaceholder("Type to search");
    }
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen((prev) => !prev);
    setDropdownPlaceholder("Type to search");
  };

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
    }, 1000); // Simulate search delay
  };

  // Rename filteredJobs to otherName
  const otherName = jobsData.filter(
    (job) => job.title.toLowerCase().includes(inputValue.toLowerCase()) // Case-insensitive search
  );

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading....</p>
      </div>
    );
  }

  return (
    <div className="contain-big">
      <div className="head">
        <div className="search-job-container">
          <div className="background">
            <div className="content">
              <h1 className="title">Search Jobs</h1>
              <div className="links">
                <a href="#" className="link">
                  Submit Your Resume
                </a>
                <span className="divider"></span>
                <a href="#" className="link">
                  Knowledge Center
                </a>
              </div>
            </div>
          </div>

          <div className="blue-bg-section">
            <div className="input-container">
              <input
                type="text"
                placeholder="Search jobs by title or skills"
                className="input-field"
                onChange={handleChange}
                value={inputValue}
              />
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="City, State or ZIP"
                  className="input-field"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                />
                <span className="dropdown-arrow" onClick={handleDropdownClick}>
                  <FaCaretDown />
                </span>
                {isDropdownOpen && (
                  <div className="dropdown-content">{dropdownPlaceholder}</div>
                )}
              </div>
              {isLargeScreen ? (
                <FaSearch
                  className="search-icon-search"
                  onClick={handleSearch}
                />
              ) : (
                <button
                  className="search-button"
                  onClick={handleSearch}
                  disabled={isSearching}
                >
                  {isSearching ? "Searching..." : "Search"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      <FilterComponent
        inputValue={inputValue} // Pass inputValue as query
        otherName={otherName} // Pass the otherName function as prop
      />
    </div>
  );
};

export default SearchJob;
