import React from "react";
import PricingCard from "../UI_Components/PricingCard";

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20 text-[#000000]/70 pricing-section">
      <div className="max-w-7xl mx-auto space-y-14 px-4 sm:px-6 text-center">
        <div className="contentPadding space-y-4">
          <h2 className="text-balance max-w-3xl mx-auto text-5xl md:text-6xl font-bold text-[#000000]">
            Your Team Didn't Sign Up to{" "}
            <span className="highlight text-[#FB2B8F]">Copy-Paste Data</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto font-medium">
            Pick the plan that gives them their actual job back
          </p>
        </div>

        <div className="pricingCards mx-auto flex flex-col sm:flex-row md:flex-wrap justify-center items-center md:items-stretch gap-2 gap-y-10 sm:gap-y-4 md:gap-4 lg:gap-6 max-w-5xl">
          <PricingCard
            title="Starter Automation"
            price="$300"
            paragraph="Get 15+ hours back per week. Your ops person stops being a human API and starts improving processes."
            features={[
              "5 workflows (the ones killing your team)",
              "10,000 task executions monthly",
              "15 tool integrations",
              "See every automation run in real-time",
              "Setup help so nothing explodes",
            ]}
            buttonText="Get Your Time Back"
            isTransparent
          />

          <PricingCard
            title="Growth Partner"
            price="$500"
            paragraph="For teams where everyone's secretly job hunting because they're tired of doing robot work."
            features={[
              "Unlimited workflows (automate everything)",
              "100,000 executions (scale without hiring)",
              "Every integration you need",
              "Analytics that show exact hours saved",
              "2-hour support response (not 3 days)",
              "Custom templates for your chaos",
              "AI support that actually helps",
            ]}
            buttonText="Scale Without the Pain"
            isPopular
          />
        </div>

        <p className="text-[#000000]/60 text-lg font-medium mt-8">
          Need 500k+ tasks per month?{" "}
          <a href="#" className="text-[#FB6F92] font-semibold hover:underline">
            Let's talk custom pricing
          </a>
        </p>
      </div>
    </section>
  );
}
