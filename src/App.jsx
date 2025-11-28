import React, { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import LogoSection from "./components/LogoSection/LogoSection";
import ProblemSection from "./components/ProblemSection/ProblemSection";
import SolutionSection from "./components/SolutionSection/SolutionSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import PricingSection from "./components/PricingSection/PricingSection";

function App() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <HeroSection />
        <LogoSection />
      </div>
      <ProblemSection />
      <SolutionSection />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
    </>
  );
}

export default App;
