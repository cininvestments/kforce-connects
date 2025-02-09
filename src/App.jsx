/* eslint-disable no-undef */
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/LandingPageJSXs/Navbar";
import Footer from "./components/LandingPageJSXs/Footer";
import FindWork from "./components/FindWorkJSXs/FindWork";
import LandingPage from "./components/LandingPageJSXs/LandingPage";
import SearchJob from "./components/FindWorkJSXs/SearchWork";
import JobDetails from "./components/FindWorkJSXs/JobDetails";
import JobsList from "./components/FindWorkJSXs/JobsList";
import jobs from "./data/jobs";

// Import the JobProvider from the context
import { JobProvider } from "./context/JobContext";
import SubmitResume from "./components/FindWorkJSXs/submitResume";
import SolutionSection from "./components/Solutions/SolutionsComponent";
import TalentSolutionLanding from "./components/Solutions/TalentSolutionLanding";
import AboutLanding from "./components/AboutJSXs/AboutLanding";
import LeaderLanding from "./components/AboutJSXs/LeaderLanding";
import SignInLanding from "./components/SignInJSXs/SignInLanding";
import ForgetPassword from "./components/SignInJSXs/ForgetPassword";
import LoginComponent from "./components/SignInJSXs/LoginComponent";
import ScrollToTop from "../ScrollToTop";
import ContactForm from "./components/LandingPageJSXs/ContactForm";

function App() {
  return (
    <JobProvider>
      {/* Wrap the application in the JobProvider */}
      <BrowserRouter basename="/">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/find-work" element={<FindWork />} />
          <Route path="/solutions" element={<SolutionSection />} />
          <Route path="/search-jobs" element={<SearchJob />} />
          <Route path="/job" element={<JobsList jobs={jobs} />} />
          <Route path="/talent-solution" element={<TalentSolutionLanding />} />
          <Route
            path="/submit-resume/:jobId/:jobTitle"
            element={<SubmitResume />}
          />
          <Route path="/submit-resume" element={<SubmitResume />} />
          <Route path="/leaders" element={<LeaderLanding />} />
          <Route path="/about" element={<AboutLanding />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/sign-in" element={<SignInLanding />} />
          <Route path="/job/:id" element={<JobDetails jobs={jobs} />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/forget" element={<ForgetPassword />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </JobProvider>
  );
}

export default App;
