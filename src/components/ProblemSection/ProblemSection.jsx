import React from "react";
import { FaRegCopy, FaRegClock } from "react-icons/fa";
import { LiaBurnSolid } from "react-icons/lia";

export default function ProblemSection() {
  const problems = [
    {
      icon: <FaRegCopy className="text-[#FB2B8F] text-lg" />,
      title: "Endless Copy-Paste",
      desc: "Your best people spend 6 hours a week copying data between tools. That's 312 hours a year per person doing work a script could handle.",
    },
    {
      icon: <FaRegClock className="text-[#FB2B8F] text-lg" />,
      title: "Waste of Time",
      desc: "Every new customer triggers 23 manual steps across 5 tools. Your team executes this perfectly 91% of the time. The other 9% creates fires your leadership team has to put out.",
    },
    {
      icon: <LiaBurnSolid className="text-[#FB2B8F] text-xl" />,
      title: "Team Burnout",
      desc: "You hired a growth marketer to build campaigns. They spend 40% of their time pulling reports and updating Notion. In three months, they'll start looking for a new job where they can do actual marketing.",
    },
  ];

  return (
    <section className="ProblemSection py-20 px-6">
      <div className="max-w-6xl text-[#000000]/70 mx-auto bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl p-10 sm:p-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-left">
          <span className="inline-block text-sm font-medium px-3 py-1 bg-pink-100 border border-pink-200 rounded-full text-[#FB2B8F]">
            The problem
          </span>
          <h1 className="text-4xl text-balance heading">
            Growth stalled by busywork? <br />
            <span className="text-[#FB2B8F]">Too many moving parts.</span>
          </h1>
          <p className="text-lg font-medium">
            Your revenue doubled, but your team didn’t. Manual work exploded,
            onboarding takes hours, data is everywhere, and product is
            babysitting spreadsheets.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {problems.map(({ icon, title, desc }, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 bg-transparent rounded-2xl py-2 sm:p-4 hover:bg-pink-100 transition"
            >
              <div className="p-3 bg-pink-200/60 order-2 sm:order-0 rounded-full flex items-center mt-7 justify-center">
                {icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-sm mt-2 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
