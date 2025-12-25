import React, { lazy, Suspense } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import LogoSection from "./components/LogoSection/LogoSection";
import SmoothScrollWrapper from "./components/LenisJS/SmoothScrollWrapper";

const BelowFold = lazy(() => import("./components/LenisJS/BelowFold"));

function App() {
  return (
    <SmoothScrollWrapper>
      <div className="bg">
        <Navbar />
        <HeroSection />
        <LogoSection />
      </div>

      <Suspense fallback={null}>
        <BelowFold />
      </Suspense>
    </SmoothScrollWrapper>
  );
}

export default App;
