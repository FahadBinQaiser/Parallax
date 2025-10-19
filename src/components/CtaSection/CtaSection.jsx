import React from "react";

export default function CtaSection() {
  return (
    <section className="relative h-full flex flex-col md:flex-row items-center justify-center text-center py-16 bg-gradient-to-b from-[#080008] via-[#0a0a0a] to-[#100010]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(251,43,143,0.35)_0%,transparent_80%),radial-gradient(ellipse_at_bottom_left,rgba(255,110,196,0.2)_0%,transparent_90%)] pointer-events-none"></div>

      <div className="relative z-10 px-8 sm:px-16 md:px-16 py-16 md:py-0 text-white space-y-3">
        <h2 className="text-8xl font-bold leading-tight">
          Ready to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb2b8f] via-[#ff6ec4] to-[#e14f9c]">
            Scale Smarter
          </span>
          ?
        </h2>

        <p className="text-white/70 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
          Automate the busywork, remove bottlenecks, and let your team focus on
          the insights that drive growth. Fast setup, expert support, measurable
          ROI.
        </p>

        <div className="pt-6">
          <button className="w-56 sm:w-64 py-4 text-lg rounded-full text-white bg-gradient-to-r from-[#fb2b8f] via-[#ff6ec4] to-[#e14f9c] shadow-[0_0_24px_rgba(251,43,143,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_32px_rgba(251,43,143,0.7)]">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  );
}
