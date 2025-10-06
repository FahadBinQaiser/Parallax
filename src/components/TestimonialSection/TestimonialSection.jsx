import React from "react";
import Gradient from "../UI_Components/Gradient";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Hikmet Atçeken",
      handle: "@hiatceken",
      text: "Parallax's our daily tool to bypass averages and reveal true insights, for the whole team!",
    },
    {
      name: "Arda Guler",
      handle: "@ardaguler_",
      text: "Parallax levels the analytics field for our team, enabling both beginners and pros to uncover the insights that truly shape our marketing strategies.",
    },
    {
      name: "Maria Ancelotti",
      handle: "@maria_ancelotti",
      text: "From novice to pro, Parallax helps our team uncover the extraordinary in our marketing data!",
    },
    {
      name: "Ragip Diler",
      handle: "@rgdiler",
      text: "Parallax empowers our whole team, techies or not, to dive into analytics and spot the insights that really matter—no more average data!",
    },
    {
      name: "Jenny Wilson",
      handle: "@wilson_jenny19",
      text: "Parallax's user-friendly analytics let our whole team bypass averages to uncover real, game-changing insights every day.",
    },
    {
      name: "Guy Hawkins",
      handle: "@ghawkins",
      text: "Parallax is a game-changer—easy for beginners and powerful for pros to dig beyond averages and drive real strategy!",
    },
  ];

  return (
    <section className="py-20 text-[#000000]/70 from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="inline-block mb-4 text-sm font-medium px-3 py-1 bg-pink-100 border border-pink-200 rounded-full text-[#FB2B8F]">
          Testimonials
        </span>
        <h2 className="text-3xl font-bold sm:text-7xl">
          Public <span className="highlight text-[#FB2B8F]">Cheers</span> for
          Us!
        </h2>
        <p className="mt-3">Find out how our users are spreading the word!</p>

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
