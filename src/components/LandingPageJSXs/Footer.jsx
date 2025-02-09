/* eslint-disable no-unused-vars */
import React from "react";
import "../../CSS/LandingPageCSS/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialInstagram } from "react-icons/ti";

const Footer = () => {
  return (
    <>
      <footer className="footer bg-blue">
        <div className="container">
          <div className="logo-content">
            <Link to="/">
              <img
                src="kforce_sm_white_1000px.png"
                alt="Kforce logo"
                className="footer-logo"
              />
            </Link>

            <div>
              <p className="about-text">
                Kforce is a solutions firm specializing in technology, finance
                and accounting, and professional staffing services. Our
                KNOWLEDGEforce® empowers industry-leading companies to achieve
                their digital transformation goals. We curate teams of technical
                experts who build solutions custom-tailored to each client’s
                needs. These scalable, flexible outcomes are shaped by deep
                market knowledge, thought leadership and our multi-industry
                expertise.
              </p>
              <p className="about-text">
                Our integrated approach is rooted in 60 years of proven success
                deploying highly skilled professionals on a temporary and
                direct-hire basis. Each year, more than 20,000 talented experts
                work with a majority of the Fortune 500. Together, we deliver
                Great Results Through Strategic Partnership and Knowledge
                Sharing®.
              </p>
            </div>
          </div>
          <hr className="divider-footer" />
          <div className="link-table">
            <div className="table-column">
              <h3>
                <Link to="/find-work">Find Work</Link>
              </h3>
              <ul>
                <li>
                  <Link to="/search-jobs">Search Jobs</Link>
                </li>
                <li>
                  <Link to="/submit-resume">Submit Your Resume</Link>
                </li>
                {/* <li>
                  <Link to="https://www.kforce.com/kforceconnect-referral-app/">
                    KFORCEconnect
                  </Link>
                </li>
                <li>
                  <Link to="/find-work/visa-sponsorship-solutions/">
                    Visa Sponsorship
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="table-column">
              <h3>
                <Link to="/solution">Solutions</Link>
              </h3>
              <ul>
                <li>
                  <Link to="/talent-solution">Talent Solutions</Link>
                </li>
                {/* <li>
                  <Link to="/solutions/team-solutions/">Team Solutions</Link>
                </li>
                <li>
                  <Link to="/solutions/project-solutions/">Project Solutions</Link>
                </li>
                <li>
                  <Link to="/solutions/international-talent-solutions/">
                    International Talent Solutions
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="table-column">
              <h3>
                <Link to="/about">About</Link>
              </h3>
              <ul>
                <li>
                  <Link to="/leaders">Executive Leadership</Link>
                </li>
                {/* <li>
                  <Link to="/about/sustainability/">Sustainability</Link>
                </li>
                <li>
                  <Link to="/about/careers/">Careers at Kforce</Link>
                </li>
                <li>
                  <Link to="/about/newsroom/">Newsroom</Link>
                </li>
                <li>
                  <Link to="/about/awards/">Awards</Link>
                </li> */}
              </ul>
            </div>
            {/* <div className="table-column">
              <ul className="bigger-link">
                <li>
                  <Link to="/knowledge-center/">Knowledge Center</Link>
                </li>
                <li>
                  <Link to="/investor-relations/">Investor Relations</Link>
                </li>
                <li>
                  <Link to="/site-map/">Site Map</Link>
                </li>
                <li>
                  <Link to="/contact-us/">Contact Us</Link>
                </li>
                <li>
                  <Link to="/accessibility-center/">Accessibility Center</Link>
                </li>
                <li>
                  <Link to="/fraud-alert/">Do You Suspect Fraud?</Link>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </footer>
      <div className="copyright">
        <p>
          ©2024 Kforce Inc. All Rights Reserved. Kforce is proud to be an Equal
          Opportunity/Affirmative Action Employer.
        </p>
        <div className="footer-socials">
          <a href="/" className="sign-in">
            <FaLinkedinIn className="footer-social-icons" />
          </a>
        </div>
        <p className="last">
          <Link
            to="https://kforcewebeast.azureedge.net/media/403128/affirmative-action-statement-of-policy_04-01-2019.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kforce Affirmative Action Statement
          </Link>
          &nbsp;|&nbsp;
          <Link
            to="https://kforcewebeast.azureedge.net/media/408181/ier-poster-final.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Federal IER Poster
          </Link>
          &nbsp;|&nbsp;
          <Link to="/terms-of-use/" target="_blank" rel="noopener noreferrer">
            Terms of Use
          </Link>
          &nbsp;|&nbsp;
          <Link to="/fraud-alert/" target="_blank" rel="noopener noreferrer">
            Fraud Alert
          </Link>
          &nbsp;|&nbsp;
          <Link to="/privacy-policy/" target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </Link>
          &nbsp;|&nbsp;
          <Link
            to="https://privacyportal.onetrust.com/webform/3d9b6fd8-e40c-4c8e-a4c8-6d5dd13d34ed/cf5d6778-3af7-4def-bfdc-87e17eac2865"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Rights
          </Link>
          <Link
            to="https://health.aetna.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Transparency in Coverage
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
