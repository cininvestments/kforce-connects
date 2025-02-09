/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Swal from "sweetalert2";
import "../../CSS/SignInCSS/ForgetPassword.css";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (email.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "Check Your Email",
      text: "An email to reset your password has been sent. Follow the instructions provided in the email.",
    });

    setEmail("");
  };

  return (
    <div className="forgetpassword-container">
      <div className="forgetpassword-form-wrapper">
        <p className="forgetpassword-notice">
          An email to reset your password will be sent to you only if you have
          an account with us.
        </p>
        <form className="forgetpassword-form" onSubmit={handleResetPassword}>
          <div className="forgetpassword-input-group">
            <label htmlFor="email">Email Address:</label> <br />
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="forgetpassword-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="forgetpassword-reset-button">
            Reset Password
          </button>
          <Link to="/sign-in">
            <button type="submit" className="forgetpassword-reset-button">
              Go Back
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
