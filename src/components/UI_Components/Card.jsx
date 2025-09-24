import React from "react";

const Card = ({ icon, title, desc }) => {
  return (
    <div className="group relative cursor-pointer overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl sm:mx-auto sm:max-w-sm sm:px-12">
      <span className="absolute top-0 -left-0 z-0 h-24 w-full bg-[#FB2B8F] opacity-75 transition-all duration-500 transform group-hover:scale-[20]" />

      <div className="relative z-10 mx-auto ">
        <span className="grid h-24 w-24 place-items-center rounded-full bg-pink-200 transition-all duration-500 transform group-hover:from-pink-500 group-hover:to-yellow-500">
          {icon}
        </span>

        <div className="space-y-4 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
          <h3 className="text-4xl font-bold">{title}</h3>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
