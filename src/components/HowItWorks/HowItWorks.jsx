import React from "react";
import AnimatedTimeline from "./AnimatedTimeline";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Connect your tools",
      description:
        "Slack, Notion, HubSpot, Stripe, whatever you use. OAuth takes 30 seconds per tool. You'll have 5 tools connected in under 3 minutes.",
    },
    {
      number: 2,
      title: "Describe what to automate",
      description:
        '"When a deal closes in HubSpot over $10k, create a project in Asana, notify the team in Slack with the contract details, and send the customer a personalized welcome email." Write it like that. It works.',
    },
    {
      number: 3,
      title: "Watch it run forever",
      description:
        "Your workflow executes perfectly every time. 2am Sunday? Done. During your team offsite? Done. When everyone's on vacation? Done. It just runs.",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 relative">
      <div className="max-w-6xl mx-auto text-[#000000]/70">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6">
            Setup in <span className="text-[#FB2B8F]">minutes</span>,<br />
            not months
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-medium">
            No engineers required. No technical debt created.
          </p>
        </div>

        <AnimatedTimeline steps={steps} />
      </div>
    </section>
  );
}
