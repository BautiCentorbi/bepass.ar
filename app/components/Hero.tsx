import React from "react";
import {
  Manrope,
  Libre_Baskerville,
  Instrument_Serif,
  Cormorant_Garamond,
  Playfair_Display,
} from "next/font/google";
import { ArrowDown, Leaf } from "lucide-react";
import NeumorphismButton from "./ui/NeumorphismButton";

const manrope = Manrope({ subsets: ["latin"] });
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const Hero = () => {
  return (
    <section
      className={`${manrope.className} relative flex items-end justify-start w-full h-full 2xl:my-16 gap-8 px-8 md:px-24 2xl:px-48`}
    >
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] 2xl:w-[700px] 2xl:h-[700px] bg-[#2065b9] rounded-full blur-3xl translate-x-1/2 2xl:translate-x-1/2 translate-y-1/5 2xl:translate-y-1/2 opacity-50 pointer-events-none z-0"></div>


      <div className="flex flex-col max-w-5xl">
        <div className="flex gap-2 items-center ">
          <Leaf className="w-6 h-6 text-blue-700" />
          <h2 className="text-xl">Consultora de Gestión de Empresas</h2>
        </div>
        <h1 className="text-5xl md:text-8xl 2xl:text-9xl  font-semibold text-title_color tracking-tighter leading-tight">
          <span className="font-medium">Una empresa</span>
          <span className="font-medium"> bien gestionada</span>
          <span className={`${playfair.className} font-bold italic`}>
            {" "}
            Crece
          </span>
        </h1>
        <div className="max-w-md">
          <div className="mb-4">
            <p className="mt-6 text-lg md:text-xl 2xl:text-2xl text-gray-700 max-w-xl">
              <span className="font-bold">MUTA</span> es un{" "}
              <span className="font-bold">aliado estratégico</span> para
              empresas que buscan orden y control.
            </p>
            <p className="mt-6 text-lg md:text-xl 2xl:text-2xl text-gray-700 max-w-xl">
              Creamos soluciones claras, humanas y escalables para que puedan{" "}
              <span className="font-bold">crecer con criterio</span>.
            </p>
          </div>
          <NeumorphismButton ariaLabel="Conocé más" label="Conocé más">
            <ArrowDown />
          </NeumorphismButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
