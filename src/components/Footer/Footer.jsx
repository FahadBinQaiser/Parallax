import React from "react";
import RadialGradient from "../UI_Components/RadialGradient";

export default function FooterSection() {
  return (
    <footer className="relative text-white py-8 px-6 bg-gradient-to-b from-[#080008] via-[#0a0a0a] to-[#100010]">
      <RadialGradient />

      <div className="max-w-7xl mx-auto text-center">
        <h3 className="font-bold text-6xl md:text-7xl lg:text-8xl">Parallax</h3>
        <p className="text-white text-sm">
          © 2025 Parallax. Built for teams who refuse to waste time on manual
          work.
        </p>
      </div>
    </footer>
  );
}
