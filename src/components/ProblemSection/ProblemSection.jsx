import React from "react";

export default function ProblemSection() {
  return (
    <div className="ProblemSection py-20 px-5 sm:px-0 text-[#000000]/70">
      <div className="max-w-6xl mx-auto text-center space-y-4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl text-center font-bold text-balance">
          The{" "}
          <span className="bg-[#FB2B8F] leading-24 inline-block px-2 text-white">
            problem with growth?
          </span>{" "}
          Too many moving parts.
        </h1>
        <p className="text-lg sm:text-2xl max-w-3xl mx-auto text-center font-medium">
          SaaS leaders waste countless hours on manual, repetitive tasks. Every{" "}
          <span className="highlight text-[#FB2B8F]">just 5 minutes</span> adds
          up, draining focus from what actually moves the business forward.
        </p>
      </div>
    </div>
  );
}
