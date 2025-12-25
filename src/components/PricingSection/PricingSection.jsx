import React from "react";
import PricingCard from "../UI_Components/PricingCard";

export default function PricingSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 text-[#000000]/70 pricing-section bg-[#F5E6D3]">
      <div className="max-w-7xl mx-auto space-y-12 md:space-y-16 px-4 sm:px-6 text-center">
        <div className="contentPadding space-y-3 md:space-y-4">
          <h2 className="text-balance max-w-3xl mx-auto text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold px-2">
            Your team didn't sign up to{" "}
            <span className="highlight text-[#FB2B8F]">Copy-Paste data</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-medium px-2">
            Pick the plan that gives them their actual job back
          </p>
        </div>

        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl items-stretch">
          <PricingCard
            title="Starter Automation"
            price="$300"
            paragraph="Get 15+ hours back per week. Your ops person stops being a human API and starts improving processes."
            features={[
              "5 workflows killing your team daily",
              "10,000 task executions per month",
              "15 tools connected without duct tape",
              "Live visibility into every automation",
              "Setup support so nothing explodes",
              "Perfect for teams under 20 people",
            ]}
            buttonText="Get Your Time Back"
            isTransparent
          />

          <PricingCard
            title="Growth Partner"
            price="$500"
            paragraph="For teams where people are burned out doing robot work and growth is starting to hurt."
            features={[
              "Unlimited workflows across teams",
              "100,000 executions without hiring",
              "Any integration your stack needs",
              "Analytics showing exact hours saved",
              "2-hour support response, not days",
              "Custom templates built for your chaos",
            ]}
            buttonText="Scale Without the Pain"
            isPopular
          />

          <PricingCard
            title="Enterprise / Custom"
            price="Custom"
            paragraph="When automation is business-critical and off-the-shelf setups stop working."
            features={[
              "500k+ monthly task executions",
              "Complex multi-team workflows",
              "Custom logic, edge cases, safeguards",
              "Dedicated strategy & implementation",
              "White-glove onboarding",
              "SLA guarantees and dedicated support",
            ]}
            buttonText="Talk to Us"
            isTransparent
          />
        </div>

        <p className="text-sm sm:text-base md:text-lg text-[#000000]/60 font-medium px-4">
          Need something we haven't thought of?{" "}
          <a href="#" className="text-[#FB6F92] font-semibold hover:underline">
            Let's figure it out together
          </a>
        </p>
      </div>
    </section>
  );
}
