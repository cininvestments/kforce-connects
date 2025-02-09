/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "../../CSS/SignInCSS/LoginComponent.css";
import { Link } from "react-router-dom";

const LoginComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError(true);
  };

  const dismissError = () => {
    setError(false);
  };

  return (
    <div className="logincomponent-container">
      <div className="logincomponent-form-wrapper">
        <img
          src="update01.jpg"
          alt="Header Logo"
          className="logincomponent-header-image"
        />
        {error && (
          <div className="logincomponent-error-banner">
            <p>The username or password is incorrect.</p>
            <button
              className="logincomponent-dismiss-button"
              onClick={dismissError}
            >
              &times;
            </button>
          </div>
        )}
        <form className="logincomponent-form" onSubmit={handleLogin}>
          <div className="logincomponent-input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              className="logincomponent-input"
              required
            />
          </div>
          <div className="logincomponent-input-group">
            <label htmlFor="password">Password</label>
            <div className="logincomponent-password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="logincomponent-input"
                required
              />
              <span
                className="logincomponent-eye-icon"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? "👁" : "🕶"}
              </span>
            </div>
          </div>
          <div className="logincomponent-button-group">
            <button type="submit" className="logincomponent-login-button">
              Login
            </button>
          </div>
          <div className="logincomponent-options-group">
            <label className="logincomponent-remember-me">
              <input type="checkbox" className="logincomponent-checkbox" />{" "}
              Remember me
            </label>
            <Link to="/forget" className="logincomponent-forgot-password">
              Forgot Password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginComponent;
