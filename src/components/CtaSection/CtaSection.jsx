import React from "react";

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-20 text-[#000000]/70 pricing-section">
      <div className="max-w-7xl mx-auto space-y-10 px-4 sm:px-6 text-center">
        <h2 className="text-balance text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Ready to take your growth to the next level?
        </h2>
        <p className="text-lg md:text-xl">
          Join us today and unlock the full potential of your business.
        </p>
        <div className="flex justify-center">
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </section>
  );
}
