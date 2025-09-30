import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Hikmet Atçeken",
      handle: "@hiatceken",
      text: "Parallax’s our daily tool to bypass averages and reveal true insights, for the whole team!",
      img: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Arda Guler",
      handle: "@ardaguler_",
      text: "Parallax levels the analytics field for our team, enabling both beginners and pros to uncover the insights that truly shape our marketing strategies.",
      img: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Maria Ancelotti",
      handle: "@maria_ancelotti",
      text: "From novice to pro, Parallax helps our team uncover the extraordinary in our marketing data!",
      img: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Ragip Diler",
      handle: "@rgdiler",
      text: "Parallax empowers our whole team, techies or not, to dive into analytics and spot the insights that really matter—no more average data!",
      img: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Jenny Wilson",
      handle: "@wilson_jenny19",
      text: "Parallax’s user-friendly analytics let our whole team bypass averages to uncover real, game-changing insights every day.",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Guy Hawkins",
      handle: "@ghawkins",
      text: "Parallax is a game-changer—easy for beginners and powerful for pros to dig beyond averages and drive real strategy!",
      img: "https://i.pravatar.cc/150?img=6",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-yellow-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-orange-700 bg-orange-100 rounded-full">
          Testimonials
        </span>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-7xl">
          Public Cheers for Us!
        </h2>
        <p className="mt-3 text-[#000000]/60">
          Find out how our users are spreading the word!
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.handle}</p>
                </div>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
