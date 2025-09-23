import React, { useState } from "react";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import LogoSection from "./components/LogoSection/LogoSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoSection />
    </>
  );
}

export default App;
