import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturesSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;

    gsap.fromTo(
      line,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      step1Ref.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: step1Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      step2Ref.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: step2Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    gsap.fromTo(
      step3Ref.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: step3Ref.current,
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-24 px-6 bg-[#E5D4B8] relative" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-7xl font-bold text-[#000000] mb-6 leading-tight">
            Setup in <span className="text-[#FB6F92]">minutes</span>,<br />
            not months
          </h2>
          <p className="text-2xl text-[#000000]/70 font-medium">
            No engineers required. No technical debt created.
          </p>
        </div>

        <div className="relative min-h-[120vh]">
          <div className="absolute left-1/2 top-0 w-1 bg-[#FB6F92]/20 h-full -translate-x-1/2">
            <div ref={lineRef} className="w-full bg-[#FB6F92] origin-top"></div>
          </div>

          <div
            ref={step1Ref}
            className="relative grid grid-cols-2 gap-16 mb-32 items-center"
          >
            <div className="text-right pr-8">
              <span className="text-[#FB6F92] text-7xl font-bold leading-none block mb-6">
                1
              </span>
              <h3 className="text-4xl font-bold text-[#000000] mb-6">
                Connect your tools
              </h3>
              <p className="text-xl text-[#000000]/70 font-medium leading-relaxed">
                Slack, Notion, HubSpot, Stripe, whatever you use. OAuth takes 30
                seconds per tool. You'll have 5 tools connected in under 3
                minutes.
              </p>
            </div>
            <div className="pl-8">
              <div className="w-12 h-12 rounded-full bg-[#FB6F92] border-4 border-[#E5D4B8] relative z-10"></div>
            </div>
          </div>

          <div
            ref={step2Ref}
            className="relative grid grid-cols-2 gap-16 mb-32 items-center"
          >
            <div className="pr-8 flex justify-end">
              <div className="w-12 h-12 rounded-full bg-[#FB6F92] border-4 border-[#E5D4B8] relative z-10"></div>
            </div>
            <div className="text-left pl-8">
              <span className="text-[#FB6F92] text-7xl font-bold leading-none block mb-6">
                2
              </span>
              <h3 className="text-4xl font-bold text-[#000000] mb-6">
                Describe what to automate
              </h3>
              <p className="text-xl text-[#000000]/70 font-medium leading-relaxed">
                "When a deal closes in HubSpot over $10k, create a project in
                Asana, notify the team in Slack with the contract details, and
                send the customer a personalized welcome email." Write it like
                that. It works.
              </p>
            </div>
          </div>

          <div
            ref={step3Ref}
            className="relative grid grid-cols-2 gap-16 items-center"
          >
            <div className="text-right pr-8">
              <span className="text-[#FB6F92] text-7xl font-bold leading-none block mb-6">
                3
              </span>
              <h3 className="text-4xl font-bold text-[#000000] mb-6">
                Watch it run forever
              </h3>
              <p className="text-xl text-[#000000]/70 font-medium leading-relaxed">
                Your workflow executes perfectly every time. 2am Sunday? Done.
                During your team offsite? Done. When everyone's on vacation?
                Done. It just runs.
              </p>
            </div>
            <div className="pl-8">
              <div className="w-12 h-12 rounded-full bg-[#FB6F92] border-4 border-[#E5D4B8] relative z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
