import React from "react";
import PricingCard from "../UI_Components/PricingCard";

export default function PricingSection() {
  return (
    <section className="py-16 sm:py-20 text-[#000000]/70 pricing-section">
      <div className="max-w-7xl mx-auto space-y-14 px-4 sm:px-6 text-center">
        <div className="contentPadding space-y-4">
          <h2 className="text-balance text-5xl md:text-6xl font-bold">
            Serious{" "}
            <span className="highlight text-[#FB2B8F]">About Growth?</span> So
            Are We
          </h2>
          <p className="text-xl">
            Choose the right plan for your business needs
          </p>
        </div>

        <div className="pricingCards mx-auto flex flex-col sm:flex-row md:flex-wrap justify-center items-center md:items-stretch gap-2 gap-y-10 sm:gap-y-4 md:gap-4 lg:gap-6 max-w-5xl">
          <PricingCard
            title="Starter Automation"
            price="$300"
            paragraph="Perfect for small SaaS teams ready to offload manual work and free up time for strategy."
            features={[
              "Up to 5 automated workflows",
              "Onboarding & setup support",
              "Real-time task monitoring",
              "Weekly performance insights",
              "Email + Slack support",
            ]}
            buttonText="Buy Starter Automation"
            isTransparent
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
