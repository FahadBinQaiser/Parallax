import React, { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import LogoSection from "./components/LogoSection/LogoSection";
import ProblemSection from "./components/ProblemSection/ProblemSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoSection />
      <ProblemSection />
    </>
  );
}

export default App;
