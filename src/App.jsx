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
import SmoothScrollWrapper from "./components/LenisJS/SmoothScrollWrapper";
import FadeInSection from "./components/LenisJS/FadeInSection";

function App() {
  return (
    <SmoothScrollWrapper>
      <div className="bg">
        <Navbar />
        <HeroSection />
        <LogoSection />
      </div>

      <FadeInSection>
        <ProblemSection />
      </FadeInSection>

      <HowItWorks />

      <FadeInSection>
        <SolutionSection />
      </FadeInSection>

      <FadeInSection>
        <FeatureSection />
      </FadeInSection>

      <FadeInSection>
        <TestimonialSection />
      </FadeInSection>

      <FadeInSection>
        <PricingSection />
      </FadeInSection>

      <CtaSection />

      <FadeInSection>
        <FaqSection />
      </FadeInSection>

      <FadeInSection>
        <Footer />
      </FadeInSection>
    </SmoothScrollWrapper>
  );
}

export default App;
