import React from "react";
import StyledWrapper from "../UI_Components/StyledWrapper";
export default function CtaSection() {
  return (
    <section className="relative h-full flex flex-col md:flex-row items-center justify-center text-center py-16 bg-gradient-to-b from-[#080008] via-[#0a0a0a] to-[#100010]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,43,143,0.35)_0%,transparent_80%),radial-gradient(ellipse_at_bottom_left,rgba(255,110,196,0.2)_0%,transparent_90%)] pointer-events-none"></div>

      <div className="relative z-10 px-8 sm:px-16 md:px-16 py-16 md:py-0 text-white space-y-3">
        <h2 className="text-6xl text-balance md:text-6xl max-w-4xl mx-auto font-bold">
          Stop wasting <span className="text-[#fb2b8f]">time on busywork</span>{" "}
          Let AI handle it for you.
        </h2>

        <p className="text-gray-300 text-balance text-base sm:text-lg max-w-4xl mx-auto">
          Your team can't waste hours on busywork. Let AI handle the repetitive
          work so they can focus on the strategic work that actually grows your
          business.
        </p>

        <div className="pt-6 flex flex-row justify-center items-center">
          <button className="p-3 py-3.5 bg-black/20 text-white rounded-xl">
            See what gets automated
          </button>
          <StyledWrapper width={"full"} text="Book a Call">
            Book a Call
          </StyledWrapper>
        </div>
      </div>
    </section>
  );
}
