import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Sanchez",
      handle: "Operations Lead @GrowthCo",
      text: "Onboarding dropped from 6 hours to 8 minutes. Zero manual work. Paid for itself in the first week.",
    },
    {
      name: "Sofia Patel",
      handle: "Head of CS @Streamline",
      text: "Set up in 18 minutes. Saved 12 hours a week. Customer response time dropped from 4 hours to 12 minutes.",
    },
    {
      name: "James Wu",
      handle: "Co-founder @DataSync",
      text: "Scaled from 50 to 200 customers without adding headcount. Got our nights and weekends back.",
    },
    {
      name: "Alex Sanderson",
      handle: "VP of Ops @ScaleUp",
      text: "Non-technical team built 12 workflows in week one. Full onboarding live in 45 minutes.",
    },
    {
      name: "Nina Lee",
      handle: "Customer Success Manager @RenewIt",
      text: "Saved 3 months of engineering time for $299/month. Engineers focus on shipping product.",
    },
    {
      name: "Steve Davis",
      handle: "Revenue Operations @TechSolutions",
      text: "Cut manual work from 23 hours to 4 per week. Improved ROI in 11 days.",
    },
  ];

  return (
    <section className="py-20 text-[#000000]/70 from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="inline-block mb-4 text-sm font-medium px-3 py-1 bg-pink-100 border border-pink-200 rounded-full text-[#FB2B8F]">
          Testimonials
        </span>
        <h2 className="text-3xl font-bold sm:text-6xl">
          Public <span className="highlight text-[#FB2B8F]">Cheers</span> for
          Us!
        </h2>
        <p className="mt-3">
          Real results from teams who stopped doing busywork
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`relative backdrop-blur-sm hover:scale-105 transition-all duration-300 p-6 text-left rounded-xl
                ${
                  i % 2 === 0
                    ? "bg-[#FB2B8F] shadow-[8px_8px_0px_0px_rgba(0,0,0,0.7)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,0.7)]"
                    : "shadow-xl hover:shadow-2xl bg-gradient-to-tr from-[#f2e8cf] via-[#f8f0db] to-[#fff9f0]"
                }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p
                    className={`font-semibold text-xl ${
                      i % 2 === 0 ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {t.name}
                  </p>
                  <p
                    className={`text-sm ${
                      i % 2 === 0 ? "text-white/80" : "text-gray-500"
                    }`}
                  >
                    {t.handle}
                  </p>
                </div>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    i % 2 === 0 ? "bg-white/20" : "bg-gray-100"
                  }`}
                >
                  <svg
                    className={`w-4 h-4 ${
                      i % 2 === 0 ? "text-white" : "text-gray-600"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
              </div>
              <p
                className={`text-base leading-relaxed ${
                  i % 2 === 0 ? "text-white/95" : "text-[#000000]/70"
                }`}
              >
                {t.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
