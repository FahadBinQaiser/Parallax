import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import StyledWrapper from "../UI_Components/StyledWrapper";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full py-4">
      <div className="max-w-sm z-50 md:max-w-2xl h-20 md:h-full rounded-xl pl-5 bg-black/70 mx-auto flex items-center justify-between">
        <h1 className="text-3xl text-white">Parallax</h1>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex gap-6 text-white">
            <a href="/" className="hover:text-[#FB2B8F]">
              Home
            </a>
            <a href="/" className="hover:text-[#FB2B8F]">
              About
            </a>
            <a href="/" className="hover:text-[#FB2B8F]">
              Services
            </a>
            <a href="/" className="hover:text-[#FB2B8F]">
              Contact
            </a>
          </div>
          <StyledWrapper>
            <button className="px-5 py-2 rounded-lg bg-[#FB2B8F] text-white font-medium hover:opacity-90 transition">
              Book a Call
            </button>
          </StyledWrapper>
        </div>
        <div className="flex md:hidden px-4 ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
        {isOpen && (
          <div className="fixed top-28 right-0 w-64 h-96 flex justify-center rounded-xl text-center items-center bg-black/90">
            <div className="flex flex-col text-43xl md:hidden items-center gap-6">
              <div className="flex flex-col gap-6 text-white">
                <a href="/" className="hover:text-[#FB2B8F]">
                  Home
                </a>
                <a href="/" className="hover:text-[#FB2B8F]">
                  About
                </a>
                <a href="/" className="hover:text-[#FB2B8F]">
                  Services
                </a>
                <a href="/" className="hover:text-[#FB2B8F]">
                  Contact
                </a>
              </div>
              <StyledWrapper>
                <button className="px-5 py-2 rounded-lg bg-[#FB2B8F] text-white font-medium hover:opacity-90 transition">
                  Book a Call
                </button>
              </StyledWrapper>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
