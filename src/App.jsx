import React, { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";

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
