import React from "react";
import Gradient from "../UI_Components/Gradient";
import { Workflow, Settings2, Clock, Users2 } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Workflow className="text-[#FB6F92] w-8 h-8" />,
      title: "Automation that just works",
      desc: "No complicated setups. Just connect it once, and your workflows run smoothly in the background. The agent keeps everything moving without you lifting a finger.",
      size: "lg:col-span-2 lg:row-span-1 md:col-span-2",
    },
    {
      icon: <Settings2 className="text-[#FB6F92] w-8 h-8" />,
      title: "Your workflows and rules",
      desc: "Every team has its own way of working, this AI adapts to yours. You set the rules, the priorities, and the pace, and it follows through with zero distractions or wasted steps.",
      size: "lg:col-span-1 lg:row-span-2 md:col-span-2 md:row-span-1",
    },
    {
      icon: <Clock className="text-[#FB6F92] w-8 h-8" />,
      title: "Always on reliability",
      desc: "It doesn’t sleep, forget, or burn out. Tasks are executed consistently, day and night, giving you complete confidence that nothing slips through the cracks.",
      size: "xl:col-span-1 lg:col-span-2 lg:row-span-1 md:col-span-1",
    },
    {
      icon: <Users2 className="text-[#FB6F92] w-8 h-8" />,
      title: "Built for teams",
      desc: "Deadlines, launches, last-minute pivots — the agent keeps up with it all. It takes care of the repetitive tasks so your people can focus on momentum and results.",
      size: "xl:col-span-1 lg:col-span-3 lg:row-span-1 md:col-span-1",
    },
  ];

  return (
    <section className="text-[#000000]/70 py-20 px-6 xl:px-0">
      <div className="max-w-5xl mx-auto space-y-12">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-balance text-center">
          What our <span className="text-[#FB6F92]">AI agent</span> handles
          <br /> so you don’t have to:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[280px] gap-6 text-left">
          {features.map(({ icon, title, desc, size }, idx) => (
            <div key={idx} className={`${size}`}>
              <Gradient
                index={idx}
                className="flex flex-col justify-center items-start p-6 sm:p-8 bg-white rounded-2xl shadow-lg border border-gray-100
                hover:border-[#FB6F92] hover:shadow-[0_8px_30px_rgba(251,111,146,0.15)]
                transition-transform duration-300 hover:-translate-y-6
                h-full w-full group"
              >
                <div className="p-3 mb-4 rounded-full bg-gradient-to-tr from-[#FB6F92]/20 to-[#FB6F92]/40">
                  {icon}
                </div>

                <h3
                  className="text-3xl md:text-4xl font-semibold leading-snug 
                  transition-colors duration-300 group-hover:text-[#FB6F92]"
                >
                  {title}
                </h3>
                <p className="mt-3 text-sm sm:text-base md:text-lg">{desc}</p>
              </Gradient>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
