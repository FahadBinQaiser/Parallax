import React from "react";
import FadeInSection from "./FadeInSection";
import ProblemSection from "./ProblemSection/ProblemSection";
import HowItWorks from "./HowItWorks/HowItWorks";
import SolutionSection from "./SolutionSection/SolutionSection";
import FeatureSection from "./FeatureSection/FeatureSection";
import TestimonialSection from "./TestimonialSection/TestimonialSection";
import PricingSection from "./PricingSection/PricingSection";
import CtaSection from "./CtaSection/CtaSection";
import FaqSection from "./FaqSection/FaqSection";
import Footer from "./Footer/Footer";

export default function BelowFold() {
  return (
    <>
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
    </>
  );
}
