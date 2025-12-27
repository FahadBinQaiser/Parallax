import React, { forwardRef } from "react";

const TimelineStep = forwardRef(
  ({ number, title, description, alignment = "left" }, ref) => {
    const isLeft = alignment === "left";

    return (
      <div
        ref={ref}
        className={`relative ${number !== 3 ? "mb-20 md:mb-32" : ""}`}
      >
        <div className="md:hidden text-[#000000]/70">
          <span className="text-[#FB2B8F] text-5xl font-bold leading-none block mb-4">
            {number}
          </span>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-base font-medium leading-relaxed">{description}</p>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {isLeft ? (
            <>
              <div className="text-right pr-4 lg:pr-8">
                <span className="text-[#FB2B8F] text-5xl lg:text-7xl font-bold leading-none block mb-4 lg:mb-6">
                  {number}
                </span>
                <h3 className="text-2xl lg:text-4xl font-bold  mb-4 lg:mb-6">
                  {title}
                </h3>
                <p className="text-base lg:text-x font-medium leading-relaxed">
                  {description}
                </p>
              </div>
              <div className="pl-4 lg:pl-8">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FB2B8F] border-4 border-[#E5D4B8] relative z-10"></div>
              </div>
            </>
          ) : (
            <>
              <div className="pr-4 lg:pr-8 flex justify-end">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#FB2B8F] border-4 border-[#E5D4B8] relative z-10"></div>
              </div>
              <div className="text-left pl-4 lg:pl-8">
                <span className="text-[#FB2B8F] text-5xl lg:text-7xl font-bold leading-none block mb-4 lg:mb-6">
                  {number}
                </span>
                <h3 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6">
                  {title}
                </h3>
                <p className="text-base lg:text-xl font-medium leading-relaxed">
                  {description}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
);

TimelineStep.displayName = "TimelineStep";

export default TimelineStep;
