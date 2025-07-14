import React from "react";
import { Send } from "lucide-react";
import NeumorphismButton from "./ui/NeumorphismButton";

const Hero = () => {
  return (
    <section className="relative flex items-center justify-center w-full h-full md:my-8 2xl:my-14 gap-8 px-8 md:px-24 2xl:px-48">
      {/* Fondo decorativo */}

      {/* Contenido */}
      <div className="flex flex-col max-w-5xl items-center justify-center w-full">
        <div className="flex gap-2 items-center mb-4 md:mb-8">
          <h2 className="text-2xl md:text-5xl 2xl:text-6xl">Transformá tu empresa:</h2>
        </div>

        <h1 className="text-5xl text-center md:text-8xl 2xl:text-9xl font-semibold text-title_color tracking-tighter leading-tight">
          <span className="font-medium block">Llevamos tu </span>
          <span className="font-medium">gestión al {' '}</span>
          <span className="relative inline-block">
            <span className="italic font-medium z-10"> Futuro</span>
            <span className="absolute bottom-0 left-0 w-full h-1 md:h-3 bg-primary z-0" />
          </span>
        </h1>

        <div className="max-w-lg flex flex-col text-center item-center">
          <div className="mb-8">
            <p className="mt-6 text-lg md:text-xl 2xl:text-2xl text-foreground max-w-xl">
              Revolucionamos tu gestión con <span className="font-bold"> nuevas tecnologías</span>, <span className="font-bold">IA</span>, <span className="font-bold">experiencia</span> y la dosis justa de consultoría tradicional
            </p>
          </div>
        </div>
        <NeumorphismButton
          ariaLabel="Contactanos"
          label="Contactanos"
          className="w-fit"
        >
          <Send />
        </NeumorphismButton>
      </div>
    </section>
  );
};

export default Hero;
