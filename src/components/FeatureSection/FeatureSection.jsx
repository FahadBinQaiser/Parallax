import React from "react";
import Gradient from "../UI_Components/Gradient";
import { Workflow, Settings2, Clock, Users2 } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Workflow className="text-[#FB6F92] w-12 h-12" />,
      title: "Automation that just works",
      desc: "No complicated setups. Just connect it once, and your workflows run smoothly in the background. The agent keeps everything moving without you lifting a finger.",
      size: "col-span-2 row-span-1",
    },
    {
      icon: <Settings2 className="text-[#FB6F92] w-12 h-12" />,
      title: "Your workflows, your rules",
      desc: "Every team has its own way of working, this AI adapts to yours. You set the rules, the priorities, and the pace, and it follows through with zero distractions or wasted steps.",
      size: "col-span-1 row-span-2",
    },
    {
      icon: <Clock className="text-[#FB6F92] w-12 h-12" />,
      title: "Always on reliability",
      desc: "It doesn’t sleep, forget, or burn out. Tasks are executed consistently, day and night, giving you complete confidence that nothing slips through the cracks.",
      size: "col-span-1 row-span-1",
    },
    {
      icon: <Users2 className="text-[#FB6F92] w-12 h-12" />,
      title: "Built for teams",
      desc: "Deadlines, launches, last-minute pivots — the agent keeps up with it all. It takes care of the repetitive tasks so your people can focus on momentum and results.",
      size: "col-span-1 row-span-1",
    },
  ];

  return (
    <section className="text-[#000000]/70 py-20 px-6 md:px-0">
      <div className="max-w-6xl mx-auto space-y-12">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight">
          What our <span className="text-[#FB6F92]">AI agent</span> handles
          <br /> so you don’t have to:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[280px] gap-6 text-left">
          {features.map(({ icon, title, desc, size }, idx) => (
            <div key={idx} className={`${size}`}>
              <Gradient
                index={idx}
                className="flex flex-col justify-center items-start p-8 bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-[#FB6F92] hover:shadow-pink-100 transition transform duration-300 hover:-translate-y-6 h-full w-full group"
              >
                <div className="mb-4">{icon}</div>
                <h3 className="text-4xl font-semibold group-hover:text-[#FB6F92] leading-snug">
                  {title}
                </h3>
                <p className="mt-3 text-base md:text-lg">{desc}</p>
              </Gradient>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
