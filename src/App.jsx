import React, { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import LogoSection from "./components/LogoSection/LogoSection";
import ProblemSection from "./components/ProblemSection/ProblemSection";
import SolutionSection from "./components/SolutionSection/SolutionSection";
import FeatureSection from "./components/FeatureSection/FeatureSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoSection />
      <ProblemSection />
      <SolutionSection />
      <FeatureSection />
    </>
  );
}

export default App;
