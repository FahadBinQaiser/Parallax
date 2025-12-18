import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TimelineStep from "./TimelineStep";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedTimeline({ steps }) {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const stepRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
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

      stepRefs.current.forEach((step, index) => {
        const isEven = index % 2 === 1;
        gsap.fromTo(
          step,
          { opacity: 0, x: isEven ? 50 : -50 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
              end: "top 50%",
              scrub: 1,
            },
          }
        );
      });
    });

    mm.add("(max-width: 767px)", () => {
      stepRefs.current.forEach((step) => {
        gsap.fromTo(
          step,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              end: "top 60%",
              scrub: 1,
            },
          }
        );
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      mm.revert();
    };
  }, []);

  return (
    <div ref={sectionRef} className="relative min-h-[80vh] md:min-h-full">
      <div className="hidden md:block absolute left-1/2 top-0 w-1 bg-[#FB6F92]/20 h-full -translate-x-1/2">
        <div ref={lineRef} className="w-full bg-[#FB6F92] origin-top"></div>
      </div>

      <div className="md:hidden absolute left-6 top-0 w-0.5 bg-[#FB6F92]/30 h-full"></div>

      <div className="md:pl-0 pl-12">
        {steps.map((step, index) => (
          <TimelineStep
            key={step.number}
            ref={(el) => (stepRefs.current[index] = el)}
            number={step.number}
            title={step.title}
            description={step.description}
            alignment={index % 2 === 0 ? "left" : "right"}
          />
        ))}
      </div>
    </div>
  );
}
