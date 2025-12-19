import React from "react";
import StyledWrapper from "../UI_Components/StyledWrapper";
import Card from "../UI_Components/Card";
import { FaRegClock, FaRunning, FaDollarSign } from "react-icons/fa";

export default function SolutionSection() {
  const solutions = [
    {
      icon: <FaRegClock className="text-[#FB2B8F] text-3xl" />,
      title: "19 hours saved per week",
      desc: "Eliminate data entry, status updates, and routing so teams can focus on fixing workflows, not maintaining them.",
    },
    {
      icon: <FaRunning className="text-[#FB2B8F] text-3xl" />,
      title: "73% faster customer onboarding",
      desc: "Reduce onboarding from 6 hours to 90 minutes and handle 3x more customers without adding headcount.",
    },
    {
      icon: <FaDollarSign className="text-[#FB2B8F] text-3xl" />,
      title: "$47,000 saved per year",
      desc: "Typical savings for a 15-person team from fewer errors, less rework, and ROI in weeks instead of months.",
    },
  ];

  return (
    <section className="text-[#000000]/70 py-20 px-5 xl:px-0">
      <div className="max-w-6xl space-y-6 mx-auto text-center">
        <div className="contentText py-6">
          <h1 className="text-5xl text-balance sm:text-6xl md:text-6xl font-bold">
            What happens when you{" "}
            <span className="highlight text-[#FB2B8F]">automate busywork</span>
          </h1>
          <p className="text-xl pt-4 font-medium">
            Real numbers from teams who stopped wasting time
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-6">
          {solutions.map((item, idx) => (
            <div
              key={idx}
              className={
                idx === solutions.length - 1
                  ? "md:col-span-2 lg:col-span-1"
                  : ""
              }
            >
              <Card icon={item.icon} title={item.title} desc={item.desc} />
            </div>
          ))}
        </div>

        <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          This isn’t just automation. It removes the work draining your team
          every week so they can focus on execution, not cleanup.
        </p>

        <StyledWrapper />
      </div>
    </section>
  );
}
