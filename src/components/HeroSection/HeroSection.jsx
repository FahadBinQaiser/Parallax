import React from "react";
import Button from "../UI_Components/StyledWrapper";
export default function HeroSection() {
  return (
    <div className="heroSection flex flex-col text-[#000000]/70 gap-5 justify-center items-center h-[85vh]">
      <p className="text-lg sm:text-xl text-center max-w-xl font-medium">
        Trusted by 50+ SaaS teams worldwide
      </p>
      <h1 className="text-5xl sm:text-6xl text-balance text-center heading max-w-3xl mx-auto">
        Stop losing your team to
        <span className="text-[#FB2B8F] zigzag-underline px-2">busywork</span>
      </h1>

      <p className="px-6 sm:px-0 text-lg sm:text-xl text-center max-w-xl font-medium">
        Automate repetitive tasks with an AI Agent built for SaaS teams{" "}
        <span className="sm:block">so your people focus on strategy</span>
      </p>
      <Button text="See what gets automated" width="full" />
    </div>
  );
}
