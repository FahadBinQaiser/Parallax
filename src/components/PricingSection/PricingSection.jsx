import React from "react";
import PricingCard from "../UI_Components/PricingCard";

export default function PricingSection() {
  return (
    <section className="py-20 text-[#000000]/70 pricing-section">
      <div className="max-w-4xl space-y-10 mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold sm:text-7xl">
          Serious{" "}
          <span className="highlight text-[#FB2B8F]">About Growth?</span> So Are
          We
        </h2>
        <div className="pricingCards gap-2 flex flex-row">
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
          />
        </div>
      </div>
    </section>
  );
}
