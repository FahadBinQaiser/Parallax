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
import CtaSection from "./components/CtaSection/CtaSection";
import HowItWorks from "./components/HowItWorks/HowItWorks";
import FaqSection from "./components/FaqSection/FaqSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="bg">
        <Navbar />
        <HeroSection />
        <LogoSection />
      </div>
      <ProblemSection />
      <HowItWorks />
      <SolutionSection />
      <FeatureSection />
      <TestimonialSection />
      <PricingSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </>
  );
}

export default App;
