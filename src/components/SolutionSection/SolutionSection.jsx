import React from "react";
import StyledWrapper from "../UI_Components/StyledWrapper";
import Card from "../UI_Components/Card";
import { FaRegClock, FaTasks, FaSmile } from "react-icons/fa";

export default function SolutionSection() {
  const solutions = [
    {
      icon: <FaRegClock className="text-[#FB2B8F] text-4xl" />,
      title: "19 hours saved per week",
      desc: "Cut manual data entry, status updates, and routing. Teams use that time to fix workflows and plan instead of babysitting ops.",
    },
    {
      icon: <FaTasks className="text-[#FB2B8F] text-4xl" />,
      title: "73% faster customer onboarding",
      desc: "What took 6 hours now takes 90 minutes. Onboard 3x more customers without hiring and reduce churn immediately.",
    },
    {
      icon: <FaSmile className="text-[#FB2B8F] text-4xl" />,
      title: "$47,000 saved per year",
      desc: "Average savings for a 15-person team from reduced manual work, fewer errors, and faster ROI in weeks, not months.",
    },
  ];

  return (
    <section className="text-[#000000]/70 py-20 px-5 xl:px-0">
      <div className="max-w-6xl space-y-10 mx-auto text-center">
        <div className="contentText pt-10">
          <h1 className="text-5xl text-balance sm:text-6xl md:text-6xl font-bold leading-tight">
            What happens when you{" "}
            <span className="highlight text-[#FB2B8F]">automate busywork</span>
          </h1>
          <p className="text-xl pt-2 font-medium">
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

        <p className="text-lg md:text-2xl max-w-4xl mx-auto leading-relaxed">
          That's exactly what our AI agent does. It quietly takes over the
          repetitive, low-leverage tasks holding your team back, so your people
          focus on what matters{" "}
          <span className="text-[#FB2B8F] font-semibold">
            strategy, creativity, growth.
          </span>
        </p>

        <StyledWrapper>
          <button className="btn">Book a Call</button>
        </StyledWrapper>
      </div>
    </section>
  );
}
