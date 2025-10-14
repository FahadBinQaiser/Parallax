import React from "react";
import PricingCard from "../UI_Components/PricingCard";

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20 text-[#000000]/70 pricing-section">
      <div className="max-w-7xl mx-auto space-y-10 px-4 sm:px-6 text-center">
        {/* Headline */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Serious{" "}
          <span className="highlight text-[#FB2B8F]">About Growth?</span> So Are
          We
        </h2>

        <div className="pricingCards mx-auto flex flex-col md:flex-row gap-6 justify-center items-center md:items-stretch max-w-5xl">
          <PricingCard
            title="Starter Automation"
            price="$100"
            paragraph="Perfect for small SaaS teams ready to offload manual work and free up time for strategy."
            features={[
              "Up to 5 automated workflows",
              "Onboarding & setup support",
              "Real-time task monitoring",
              "Weekly performance insights",
              "Email + Slack support",
            ]}
            buttonText="Buy Starter Automation"
          />

          <PricingCard
            title="Growth Partner"
            price="$500"
            paragraph="For scaling teams that want deeper integration, more automation, and dedicated guidance."
            features={[
              "Up to 15 automated workflows",
              "Dedicated success manager",
              "Advanced analytics dashboard",
              "Priority integration updates",
              "24/7 live support",
            ]}
            buttonText="Buy Growth Partner"
            isPopular
          />
        </div>
      </div>
    </section>
  );
}
