"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import ScrollButton from "./ui/ScrollButton";

const Hero = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  // El fondo animado se desvanece a medida que el Hero sale de pantalla
  // scrolleando hacia abajo, y queda confinado a esta sección.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex items-center justify-center w-full h-full my-8 md:my-12 2xl:my-24 gap-8 px-8 md:px-24 2xl:px-48"
    >
      {/* Fondo animado: manchas suaves con los colores de BePass. Se extiende
          un poco más allá del borde inferior de la sección y se desvanece
          gradualmente, para que no corte en seco. */}
      <motion.div
        aria-hidden
        style={{ opacity: bgOpacity, y: bgY }}
        className="hero-bg pointer-events-none absolute inset-x-0 top-0 h-[calc(100%+6rem)] z-0"
      >
        <span className="hero-orb hero-orb-1" />
        <span className="hero-orb hero-orb-2" />
      </motion.div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col max-w-5xl items-center justify-center w-full">
        <div className="flex gap-2 items-center mb-4 md:mb-8">
          <h2 className="text-2xl md:text-5xl 2xl:text-6xl">Transformá tu empresa:</h2>
        </div>

        <h1 className="text-5xl text-center md:text-8xl 2xl:text-9xl font-semibold text-title_color tracking-tighter leading-tight">
          <span className="font-medium block">Llevamos tu </span>
          <span className="font-medium">gestión al {' '}</span>
          <span className="relative inline-block">
            <span className="hero-futuro-ring" aria-hidden />
            <span className="italic font-medium z-10"> Futuro</span>
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: "left" }}
              className="absolute bottom-0 left-0 w-full h-1 md:h-3 bg-primary z-0"
            />
          </span>
        </h1>

        <div className="max-w-lg flex flex-col text-center item-center">
          <div className="mb-8">
            <p className="mt-6 text-lg md:text-xl 2xl:text-2xl text-foreground max-w-xl">
              Revolucionamos tu gestión con <span className="font-bold"> nuevas tecnologías</span>, <span className="font-bold">IA</span>, <span className="font-bold">experiencia</span> y la dosis justa de consultoría tradicional
            </p>
          </div>
        </div>
        <ScrollButton />
      </div>
    </section>
  );
};

export default Hero;
