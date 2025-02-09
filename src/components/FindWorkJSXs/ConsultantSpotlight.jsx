/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/FindWorkCSS/ConsultantSpotlight.css"; // Assuming you save the styles in this CSS file.

const ConsultantSpotlight = () => {
  return (
    <div className="panel-consultanSpotlightMacro" role="tablist">
      <div
        className="columnMacro-consultanSpotlightMacro threeColumns column1 done"
        style={{ marginTop: "-120px", opacity: 1 }}
      >
        <div
          className="imageColumnMacro-consultanSpotlightMacro"
          style={{ transform: "translateY(0px)" }}
        >
          <img src="consultant-spotlight-1.png" alt="Virendra Kumar" />
        </div>
        <div
          className="textColumnMacro-consultanSpotlightMacro"
          style={{ transform: "translateY(0px)" }}
        >
          <p>
            <span style={{ fontSize: "14pt" }}>
              <strong>
                “I love knowing what my long-term career plan looks like as a
                consultant.”
              </strong>
            </span>
          </p>
          <p>
            <span style={{ fontSize: "14pt" }}>
              <em>Virendra Kumar, Kforce Consultant</em>
            </span>
          </p>
        </div>
      </div>
      <div
        className="columnMacro-consultanSpotlightMacro threeColumns column2 done"
        style={{
          marginTop: "100px",
          marginBottom: "100px",
          opacity: 1,
        }}
      >
        <div
          className="imageColumnMacro-consultanSpotlightMacro"
          style={{ transform: "translateY(0px)" }}
        >
          <img src="headshot2.png" alt="Jill Tucker" />
        </div>
        <div
          className="textColumnMacro-consultanSpotlightMacro"
          style={{ transform: "translateY(0px)" }}
        >
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              <strong>
                “I am amazed at how skilled and intelligent, yet humble and
                welcoming, Kforce employees have been.”
              </strong>
            </span>
          </p>
          <p style={{ textAlign: "center" }}>
            <span style={{ fontSize: "14pt" }}>
              <em>Jill Tucker, Kforce Consultant</em>
            </span>
          </p>
        </div>
      </div>
      <div
        className="columnMacro-consultanSpotlightMacro threeColumns column3 done"
        style={{
          marginTop: "300px",
          marginBottom: "-300px",
          opacity: 1,
        }}
      >
        <div
          className="textColumnMacro-consultanSpotlightMacro"
          style={{ transform: "translateY(0px)" }}
        >
          <p style={{ textAlign: "right" }}>
            <span style={{ fontSize: "14pt" }}>
              <strong>
                “It’s clear that Kforce truly cares about the well-being of
                their employees.”
              </strong>
            </span>
          </p>
          <p style={{ textAlign: "right" }}>
            <span style={{ fontSize: "14pt" }}>
              <em>Steven Waters, Kforce Consultant</em>
            </span>
          </p>
        </div>
        <div
          className="imageColumnMacro-consultanSpotlightMacro"
          style={{ transform: "translateY(0px)" }}
        >
          <img src="headshot3.png" alt="Steven Waters" />
        </div>
      </div>
    </div>
  );
};

export default ConsultantSpotlight;
