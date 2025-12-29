import React from "react";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
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
import SmoothScrollWrapper from "./components/LenisJS/SmoothScrollWrapper";

function App() {
  return (
    <SmoothScrollWrapper>
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
    </SmoothScrollWrapper>
  );
}

export default App;
