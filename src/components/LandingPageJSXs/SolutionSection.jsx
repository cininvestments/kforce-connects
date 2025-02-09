/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../CSS/LandingPageCSS/SolutionSection.css";
import { MdKeyboardDoubleArrowRight, MdOutlineClose } from "react-icons/md";
import { HiArrowLongRight } from "react-icons/hi2";
import { FaAngleDown, FaChevronDown } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import { RiCloseLargeLine } from "react-icons/ri";

const SolutionSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleHover = (index) => {
    setActiveIndex(index);
  };

  const handleAccordionClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  const solutions = [
    {
      title: "Talent Solutions",
      content:
        "Save time finding the right resource for your team while we connect you with the best talent in the marketplace.",
      image1: "heroshapes_talentsolutions_3.png",
      image2: "homepage-project-solutions.png",
      backgroundColor: "#3190bd",
    },
    {
      title: "Team Solutions",

      image1: "heroshapes_teamsolutions_3.png",
      image2: "heroshapes_teamsolutions_1.png",
      content:
        "Take charge of your most valued initiatives while we provide a dedicated team offering technical expertise and services.",

      backgroundColor: "#175fd4",
    },
    {
      title: "Project Solutions",
      content:
        "Empower your teams to deliver results while we provide the strategy, technology, and execution expertise.",
      image1: "projecthead.png",
      image2: "projecthead2.png",
      backgroundColor: "#07285c",
    },
  ];

  return (
    <div className="BigDiv_SolutionSectionMacro">
      <div className="div_desktopView">
        <div className="div_Circle">
          <div className="spectrum firstchild">
            <h2>
              <strong>SPECTRUM OF SOLUTIONS</strong>
            </h2>
          </div>
          <div className="circles">
            {solutions.map((_, index) => (
              <div
                key={index}
                className={`div_Circle${index + 1} ${
                  activeIndex === index ? "coloredCircle" : ""
                }`}
              ></div>
            ))}
          </div>
        </div>

        {/* Desktop Titles and Content */}
        <div className="div_titles">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`div_title${index + 1}`}
              onMouseEnter={() => handleHover(index)}
            >
              <a
                className="d-arrow"
                style={{
                  cursor: "pointer",
                  color: activeIndex === index ? "black" : "rgb(179, 177, 177)",
                }}
                href="/talent-solution"
              >
                {solution.title}
                <MdKeyboardDoubleArrowRight />
              </a>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="div_images">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`div_images${index + 1}`}
              style={{ display: activeIndex === index ? "flex" : "none" }}
            >
              <div
                className="cardSlide text big shaped-left"
                style={{
                  backgroundColor: solution.backgroundColor,

                  position: "absolute",
                  top: "75px",
                  left: "0px",
                  color: "#fff",
                  zIndex: 2,
                }}
              >
                <p>
                  <strong>{solution.title}</strong>
                </p>
                <p>{solution.content}</p>
                <a
                  href="/talent-solution"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.2rem",
                    color: "#fff",
                  }}
                >
                  Learn More{" "}
                  <HiArrowLongRight
                    style={{
                      marginTop: "0.2rem",
                    }}
                  />
                </a>
              </div>
              <div
                className="cardSlide image small shaped-right"
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "350px",
                  zIndex: 1,
                }}
              >
                <img src={solution.image1} alt={solution.title} />
              </div>
              <div
                className="cardSlide image big shaped-left"
                style={{
                  position: "absolute",
                  top: "225px",
                  left: "250px",
                  zIndex: 0,
                }}
              >
                <img src={solution.image2} alt={solution.title} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accordion for Mobile View */}
      <div className="div_mobileView">
        {solutions.map((solution, index) => (
          <div key={index} className="accordion_item">
            <div
              className="accordion_title"
              onClick={() => handleAccordionClick(index)}
            >
              <span>{solution.title}</span>
              <span>
                {activeIndex === index ? (
                  <RiCloseLargeLine className="acc-icons" />
                ) : (
                  // <FaAngleDown  className="acc-icons"/>
                  <AiOutlineDown className="acc-icons" />
                )}
              </span>
            </div>
            <div
              className="accordion_content"
              style={{
                display: activeIndex === index ? "block" : "none",
              }}
            >
              <p>{solution.content}</p>
              <a
                href="/talent-solution"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.2rem",
                  color: "#fff",
                  marginTop: "1.5rem",
                }}
              >
                Learn More{" "}
                <HiArrowLongRight
                  style={{
                    marginTop: "0.2rem",
                  }}
                />
              </a>
              {/* <img src={solution.image1} alt={solution.title} /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionSection;
