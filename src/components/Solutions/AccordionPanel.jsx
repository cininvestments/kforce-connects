/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "../../CSS/SolutionsCSS/Accordion.css";

const AccordionPanel = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-panel">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-title">{title}</h3>
        <span className="accordion-icon">{isOpen ? "✖" : "⬇"}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

export default AccordionPanel;
