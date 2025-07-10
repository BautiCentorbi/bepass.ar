import React from "react";
import { Playfair_Display } from "next/font/google";
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const HowWeWork = () => {
  return (
    <section className="relative w-full h-full bg-gray-300">
      <div className="2xl:my-16 gap-8 px-8 md:px-24 2xl:px-48">
        <h2 className="text-4xl md:text-6xl font-medium text-gray-900 tracking-tighter leading-tighter">
            Cuando el{" "}
            <span className="relative inline-block">
            <span className="relative z-10 italic font-bold text-gray-900">
                <span className={playfair.className}>Problema</span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 z-0"></span>
            </span>{" "}
            es el punto de partida.
        </h2>
      </div>
    </section>
  );
};

export default HowWeWork;
