import React from "react";
import { FaRegCopy, FaRegClock } from "react-icons/fa";
import { LiaBurnSolid } from "react-icons/lia";

export default function ProblemSection() {
  const problems = [
    {
      icon: <FaRegCopy className="text-[#FB2B8F] text-lg" />,
      title: "Endless Copy-Paste",
      desc: "Your team spends hours copying data between tools, updating spreadsheets, and reformatting documents — time that should be spent on strategy, not admin busywork.",
    },
    {
      icon: <FaRegClock className="text-[#FB2B8F] text-lg" />,
      title: "Waste of Time",
      desc: "Follow-ups slip through the cracks. Critical tasks pile up. And before you know it, growth is stalled because your team is drowning in repetitive processes instead of moving forward.",
    },
    {
      icon: <LiaBurnSolid className="text-[#FB2B8F] text-xl" />,
      title: "Team Burnout",
      desc: "When smart people spend late nights on tasks AI could handle, morale drops and energy drains. Burned out teams can’t focus on innovation they’re stuck surviving the day to day grind.",
    },
  ];

  return (
    <section className="ProblemSection py-20 px-6">
      <div className="max-w-6xl mx-auto bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-10 sm:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <span className="inline-block text-sm font-medium px-3 py-1 bg-pink-100 border border-pink-200 rounded-full text-[#FB2B8F]">
            The problem
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
            The problem with growth? <br />
            <span className="text-[#FB2B8F]">Too many moving parts.</span>
          </h1>
          <p className="text-lg text-gray-700">
            SaaS leaders waste countless hours on manual, repetitive tasks.
            Every{" "}
            <span className="font-semibold text-[#FB2B8F]">
              “just 5 minutes”
            </span>{" "}
            adds up, draining focus from what actually moves the business
            forward.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {problems.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-transparent rounded-2xl p-6 hover:bg-pink-100 transition"
            >
              <div className="p-3 bg-pink-200/60 rounded-full flex items-center mt-7 justify-center">
                {icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
