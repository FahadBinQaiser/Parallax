import React from "react";

const gradients = [
  "bg-gradient-to-br from-[#f2e8cf] via-[#f8f0db] to-[#fff9f0]",
  "bg-gradient-to-tr from-[#f2e8cf] via-[#fdf6ec] to-[#f2e8cf]",
  "bg-gradient-to-bl from-[#fff9f0] via-[#f2e8cf] to-[#f8f0db]",
  "bg-gradient-to-tl from-[#f8f0db] via-[#fff9f0] to-[#f2e8cf]",
];

export default function Gradient({ index = 0, children, className = "" }) {
  const gradient = gradients[index % gradients.length];
  return <div className={`${gradient} ${className}`}>{children}</div>;
}
