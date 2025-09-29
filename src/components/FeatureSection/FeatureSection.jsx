import React from "react";
import Gradient from "../UI_Components/gradient";
import { FaCogs, FaSlidersH, FaRegClock, FaUsers } from "react-icons/fa";

export default function FeaturesSection() {
  const features = [
    {
      icon: <FaCogs className="text-[#FB2B8F] text-5xl" />,
      title: "Automation that just works",
      desc: "No over-complicated setups. Connect once, and let the AI take it from there.",
      size: "col-span-2 row-span-1",
    },
    {
      icon: <FaSlidersH className="text-[#FB2B8F] text-5xl" />,
      title: "Your workflows, your rules",
      desc: "Customizable to your team’s exact needs. Zero fluff.",
      size: "col-span-1 row-span-2",
    },
    {
      icon: <FaRegClock className="text-[#FB2B8F] text-5xl" />,
      title: "Always-on reliability",
      desc: "It never sleeps, never forgets, and scales as you grow.",
      size: "col-span-1 row-span-1",
    },
    {
      icon: <FaUsers className="text-[#FB2B8F] text-5xl" />,
      title: "Built for SaaS teams",
      desc: "We understand your world: fast-moving, high stakes, and no room for “oops.”",
      size: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="text-[#000000]/70 py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight">
          What our <span className="text-[#FB2B8F]">AI agent</span> handles
          <br /> (so you don’t have to):
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[200px] gap-6 text-left">
          {features.map(({ icon, title, desc, size }, idx) => (
            <Gradient
              key={idx}
              index={idx}
              className={`flex flex-col justify-center items-start p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-[#FB2B8F] transition ${size}`}
            >
              <div className="mb-4">{icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
              <p className="mt-3 text-lg">{desc}</p>
            </Gradient>
          ))}
        </div>
      </div>
    </section>
  );
}
