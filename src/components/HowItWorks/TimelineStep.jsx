import React, { forwardRef } from "react";

const TimelineStep = forwardRef(
  ({ number, title, description, alignment = "left" }, ref) => {
    const isLeft = alignment === "left";

    return (
      <div
        ref={ref}
        className={`relative grid grid-cols-2 gap-16 items-center ${
          number !== 3 ? "mb-32" : ""
        }`}
      >
        {isLeft ? (
          <>
            <div className="text-right pr-8">
              <span className="text-[#FB6F92] text-7xl font-bold leading-none block mb-6">
                {number}
              </span>
              <h3 className="text-4xl font-bold text-[#000000] mb-6">
                {title}
              </h3>
              <p className="text-xl text-[#000000]/70 font-medium leading-relaxed">
                {description}
              </p>
            </div>
            <div className="pl-8">
              <div className="w-12 h-12 rounded-full bg-[#FB6F92] border-4 border-[#E5D4B8] relative z-10"></div>
            </div>
          </>
        ) : (
          <>
            <div className="pr-8 flex justify-end">
              <div className="w-12 h-12 rounded-full bg-[#FB6F92] border-4 border-[#E5D4B8] relative z-10"></div>
            </div>
            <div className="text-left pl-8">
              <span className="text-[#FB6F92] text-7xl font-bold leading-none block mb-6">
                {number}
              </span>
              <h3 className="text-4xl font-bold text-[#000000] mb-6">
                {title}
              </h3>
              <p className="text-xl text-[#000000]/70 font-medium leading-relaxed">
                {description}
              </p>
            </div>
          </>
        )}
      </div>
    );
  }
);

TimelineStep.displayName = "TimelineStep";

export default TimelineStep;
