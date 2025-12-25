import React, { useEffect, useState } from "react";
import Button from "../UI_Components/StyledWrapper";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav className="w-full py-4">
      <div className="relative max-w-sm md:max-w-2xl h-20 pl-5 pr-3 rounded-xl bg-black/70 mx-auto flex items-center justify-between">
        <h1 className="text-3xl text-white">Parallax</h1>

        <div className="hidden md:flex items-center text-[17px] gap-6">
          <div className="flex gap-6 text-white">
            <a href="/" className="hover:text-[#FB2B8F]">
              Pricing
            </a>
            <a href="/" className="hover:text-[#FB2B8F]">
              Request a demo
            </a>
          </div>
          <Button text="Start Automating" width="full" />
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div
          className={`fixed top-24 right-6 w-64 h-96 rounded-xl bg-black/90 z-50
          transition-all mt-4 duration-300 ease-in-out flex items-center justify-center
          ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col gap-6 text-3xl text-white">
              <a href="/" className="hover:text-[#FB2B8F]">
                Pricing
              </a>
              <a href="/" className="hover:text-[#FB2B8F]">
                Request a demo
              </a>
            </div>
            <Button text="Start Automating" width="full" />
          </div>
        </div>
      </div>
    </nav>
  );
}
