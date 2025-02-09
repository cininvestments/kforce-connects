/* eslint-disable no-unused-vars */
import React from "react";
import HeroSection from "./HeroSection";
import SolutionSection from "./SolutionSection";
import ExpertiseSection from "./ExpertiseSection";
import AboutComponent from "./AboutComponent";
import CardSlider from "./CardSlider";
import InsightsComponent from "./InsightsComponent";
import ChatwootWidget from "../Chatwoot/ChatwootWidget";
import CookieConsent from "../Cookies/CookieConsent";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <SolutionSection />
      <ExpertiseSection />
      <AboutComponent />
      <CardSlider />
      <InsightsComponent />

      <ChatwootWidget
        websiteToken="x3bjmjwBXfXNgyeEAYd8iW5C" // Replace with your token
        baseUrl=" BASE_URL" // Replace with your Chatwoot base URL
        settings={{
          position: "right", // Optional custom settings
          launcherTitle: "Need Help?",
        }}
      />
      <CookieConsent />
    </div>
  );
};

export default LandingPage;
