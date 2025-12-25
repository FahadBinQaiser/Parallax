import React from "react";
import StyledWrapper from "../UI_Components/StyledWrapper";
import RadialGradient from "../UI_Components/RadialGradient";

export default function CtaSection() {
  return (
    <section className="relative h-[80vh] flex flex-col md:flex-row items-center justify-center text-center py-20 bg-gradient-to-b from-[#080008] via-[#0a0a0a] to-[#100010]">
      <RadialGradient />
      <div className="relative z-10 px-6 space-y-6 sm:px-8 md:px-16 text-white max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl text-balance font-bold leading-tight">
          Stop managing tasks. Start{" "}
          <span className="text-[#fb2b8f]">managing growth.</span>
        </h2>

        <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto">
          Your team is too valuable to waste on busywork. Let AI handle the
          repetitive stuff so you can focus on the strategic work.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <StyledWrapper
            width="auto"
            text="Start Free Trial"
            padding="0.875rem 2rem"
          />

          <button className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition">
            See How It Works
          </button>
        </div>

        <p className="text-gray-400 text-sm pt-2">
          No credit card required. 14-day free trial. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
