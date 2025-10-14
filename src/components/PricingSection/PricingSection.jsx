import React from "react";
import PricingCard from "../UI_Components/PricingCard";

export default function PricingSection() {
  return (
    <section className="py-20 pricing-section">
      <div className="max-w-4xl space-y-10 mx-auto px-6 text-center">
        <h2>Pricing Plans</h2>
        <div className="pricingCards gap-2 flex flex-row">
          <PricingCard />
          <PricingCard />
        </div>
      </div>
    </section>
  );
}
