import React from "react";
import StyledWrapper from "../UI_Components/StyledWrapper";
import Card from "../UI_Components/Card";
import { FaRegClock, FaTasks, FaSmile } from "react-icons/fa";

export default function SolutionSection() {
  const solutions = [
    {
      icon: <FaRegClock className="text-[#FB2B8F] text-4xl" />,
      title: "Works 24/7",
      desc: "Your AI teammate never needs sleep, breaks, or downtime it's always there, ready to handle tasks around the clock.",
    },
    {
      icon: <FaTasks className="text-[#FB2B8F] text-4xl" />,
      title: "Never forgets a task",
      desc: "No sticky notes, no missed deadlines. Your agent remembers and executes every detail with perfect consistency.",
    },
    {
      icon: <FaSmile className="text-[#FB2B8F] text-4xl" />,
      title: "Doesn't complain",
      desc: "It handles all the repetitive, boring, low-leverage tasks without burning out, so your team can stay focused on the big wins.",
    },
  ];

  return (
    <section className="text-[#000000]/70 py-20 px-6 md:px-0">
      <div className="max-w-6xl space-y-10 mx-auto text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
          Meet your{" "}
          <span className="highlight text-[#FB2B8F]">AI teammate</span> that
          never sleeps.
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {solutions.map(({ icon, title, desc }, idx) => (
            <Card key={idx} icon={icon} title={title} desc={desc} />
          ))}
        </div>

        <p className=" text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
          That's exactly what our AI agent does. It quietly takes over the
          repetitive, low-leverage tasks holding your team back — so your people
          focus on what matters:{" "}
          <span className="text-[#FB2B8F] font-semibold">
            strategy, creativity, growth.
          </span>
        </p>

        <StyledWrapper>
          <button className="btn w-64 h-64">Book a Call</button>
        </StyledWrapper>
      </div>
    </section>
  );
}
