/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./CookieConsent.css"; // Import the CSS file

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check if the cookie has already been accepted, rejected, or closed
  useEffect(() => {
    const cookieDecision = localStorage.getItem("cookieConsent");
    if (!cookieDecision) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookieConsent", "rejected");
    setIsVisible(false);
  };

  const handleClose = () => {
    localStorage.setItem("cookieConsent", "closed");
    setIsVisible(false);
  };

  if (!isVisible) return null; // Don't render if not visible

  return (
    <div className="cookie-container">
      <button className="cookie-close" onClick={handleClose}>
        &times;
      </button>
      <p className="cookie-text">
        {/* We use cookies to enhance your experience, analyze site usage, and
        improve our services. By continuing, you agree to our use of cookies. */}
        We process your information to measure and improve our sites and
        service, to assist our marketing campaigns and to provide personalised
        content and advertising. By Clicking the white button, you can exercise
        your privacy rights. For more information see our privacy notice{" "}
        <a href="/" className="policy">
          Cookie Policy
        </a>
      </p>
      <div className="cookie-buttons">
        <button className="cookie-btn prefer" onClick={handleAccept}>
          Cookie Preferences
        </button>
        <button className="cookie-btn accept" onClick={handleAccept}>
          Accept All
        </button>

        <button className="cookie-btn reject" onClick={handleReject}>
          Reject All
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
