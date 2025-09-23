import React from "react";
import {
  SiSlack,
  SiNotion,
  SiFigma,
  SiStripe,
  SiGithub,
  SiIntercom,
} from "react-icons/si";

const LogoSection = () => {
  const logos = [
    { icon: SiSlack, name: "Slack" },
    { icon: SiNotion, name: "Notion" },
    { icon: SiFigma, name: "Figma" },
    { icon: SiStripe, name: "Stripe" },
    { icon: SiGithub, name: "Github" },
    { icon: SiIntercom, name: "Intercom" },
  ];

  return (
    <section className="py-24 px-6 bg-[#f2e8cf]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#000000]/70 mb-6 text-balance">
          If others trust us, you can too.
        </h2>

        <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[#000000]/70 leading-relaxed mb-12">
          From scrappy startups to scaling SaaS giants — teams use our AI agent
          to{" "}
          <span className="bg-[#FB2B8F] text-white px-2 py-1 rounded-md">
            free people from mind-numbing work
          </span>{" "}
          and focus on strategy.
        </p>

        <p className="text-lg md:text-xl text-[#000000]/60 mb-10">
          Trusted by teams at:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-items-center opacity-70 hover:opacity-100 transition-opacity duration-300">
          {logos.map(({ icon: Icon, name }, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Icon className="w-16 h-16 text-gray-600 hover:text-gray-900 transition" />
              <span className="text-sm font-medium text-[#000000]/60">
                {name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 inline-block bg-[#FB2B8F]/10 rounded-full px-4 py-2">
          <span className="text-sm font-medium text-[#FB2B8F]">
            Proof is better than promises.
          </span>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
