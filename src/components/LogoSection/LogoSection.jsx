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
    <section className="py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-10 items-center justify-items-center transition-opacity duration-300">
          {logos.map(({ icon: Icon, name }, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Icon className="w-16 h-16 text-[#000000]/70 hover:text-[#FB2B8F] transition" />
              <span className="text-sm font-medium text-[#000000]/60">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
