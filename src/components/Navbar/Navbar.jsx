import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import StyledWrapper from "../UI_Components/StyledWrapper";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full py-4">
      <div className="max-w-2xl rounded-xl pl-5 bg-black/70 mx-auto flex items-center justify-between">
        <h1 className="text-3xl text-white">Parallax</h1>

        <div className="flex items-center gap-6">
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
        <div className="md:hidden">
          <button>`{isOpen ? <Menu /> : <X />}`</button>
        </div>
      </div>
    </nav>
  );
}
