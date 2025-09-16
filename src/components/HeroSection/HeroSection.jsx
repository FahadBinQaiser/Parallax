import React from "react";
export default function HeroSection() {
  return (
    <div className="heroSection flex flex-col text-[#000000]/70 gap-5 justify-center items-center h-screen pt-16">
      <p className="text-2xl text-center max-w-xl font-medium">
        Trusted by growth-focused SaaS teams worldwide
      </p>
      <h1 className="text-8xl text-center font-bold">
        Your{" "}
        <span className="bg-[#FB2B8F] inline-block px-2 text-white">
          AI teammate
        </span>
        <br />
        that never sleeps.{" "}
      </h1>
      <p className="text-2xl text-center max-w-xl">
        Automate repetitive tasks with an AI Agent built for SaaS teams <br />{" "}
        so your people focus on strategy, not busywork.
      </p>
      <button className="cursor-pointer rounded-2xl bg-[#FB2B8F] w-44 h-16 text-white text-2xl">
        Book a Call
      </button>
    </div>
  );
}
