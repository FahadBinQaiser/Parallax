import React, { useState } from "react";
import StyledWrapper from "../UI_Components/StyledWrapper";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  if(isOpen){
    document.body.style.overflowY = "hidden"
  }else{
    document.body.style.overflowY = "auto"
  }
  return (
    <nav className="w-full py-4">
      <div className="max-w-sm z-50 md:max-w-2xl h-20 md:h-20 pr-3 rounded-xl pl-5 bg-black/70 mx-auto flex items-center justify-between">
        <h1 className="text-3xl text-white">Parallax</h1>

        <div className="hidden md:flex items-center text-xl gap-6">
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
            <button className="btn">Book a Call</button>
          </StyledWrapper>
        </div>

        <div className="flex md:hidden pl-4 pr-1">
          <StyledWrapper>
            <button className="btn">Book a Call</button>
          </StyledWrapper>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        <div
          className={`fixed top-28 right-7 w-64 h-96 transition-all duration-300 ease-in-out flex justify-center rounded-xl text-center items-center bg-black/90 z-50 ${
            isOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col md:hidden items-center gap-6">
            <div className="flex flex-col gap-6 text-3xl text-white">
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
              <button className="w-40 h-14 text-xl rounded-lg bg-[#FB2B8F] text-white font-medium hover:opacity-90 transition">
                Book a Call
              </button>
            </StyledWrapper>
          </div>
        </div>
      </div>
    </nav>
  );
}