import React from "react";
export default function HeroSection() {
  return (
    <div className="heroSection flex flex-col text-[#000000]/70 gap-5 justify-center items-center h-screen pt-16">
      <p className="text-lg sm:text-2xl text-center max-w-xl font-medium">
        Trusted by growth-focused SaaS teams worldwide
      </p>
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-center font-bold text-balance">
        Your{" "}
        <span className="bg-[#FB2B8F] inline-block px-2 text-white">
          AI teammate
        </span>{" "}
        <span className="lg:block">that never sleeps.</span>
      </h1>
      <p className="px-6 sm:px-0 text-lg sm:text-2xl text-center max-w-xl font-medium">
        Automate repetitive tasks with an AI Agent built for SaaS teams{" "}
        <span className="sm:block">
          so your people focus on strategy, not busywork.
        </span>
      </p>
      <button className="cursor-pointer rounded-2xl bg-[#FB2B8F] w-44 h-16 text-white text-2xl">
        Book a Call
      </button>
    </div>
  );
}
