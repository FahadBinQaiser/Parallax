import React from "react";

const gradients = {
  highlight: "bg-gradient-to-br from-[#fde2e4] via-[#ffd6d9] to-[#fff0f2]",
  normal: "bg-gradient-to-tr from-[#f2e8cf] via-[#f8f0db] to-[#fff9f0]", // subtle beige
};

export default function Gradient({ index = 0, children, className = "" }) {
  const isHighlight = index === 0 || index === 2;

  return (
    <div
      className={`${
        isHighlight ? gradients.highlight : gradients.normal
      } ${className}`}
    >
      {children}
    </div>
  );
}
