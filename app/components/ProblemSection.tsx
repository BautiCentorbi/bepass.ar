import React from "react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const ProblemSection = () => {
  return (
    <section className="relative py-24 px-6 md:px-24">
      {/* FLECHA VISUAL */}
      <svg
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block absolute top-[10rem] left-4/7 -translate-x-1/2 w-32 h-32 text-primary z-10"
      >
        <path
          d="M0 0 C60 80, 140 40, 200 120"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="4"
            refY="4"
            orient="auto"
          >
            <path d="M0,0 L8,4 L0,8 Z" fill="currentColor" />
          </marker>
        </defs>
      </svg>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* PROBLEMA */}
        <div>
          <h2 className="text-4xl md:text-6xl font-mediumt text-title_color tracking-tighter leading-tighter">
            Cuando el{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic font-bold">
                <span className={playfair.className}>Problema</span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 z-0"></span>
            </span>{" "}
            es el punto de partida.
          </h2>

          <p className="mt-8 text-lg md:text-xl text-gray-700 max-w-xl">
            Muchas empresas viven en el día a día, con procesos poco claros,
            tareas manuales y decisiones difíciles de sostener. Reconocer ese
            problema no es una falla: es el primer paso hacia una gestión más
            simple, ordenada y estratégica.
          </p>
        </div>

        {/* SOLUCIÓN */}
        <div className="mt-56 text-title_color">
          <h2 className="text-4xl md:text-6xl font-medium tracking-tighter leading-tighter">
            Nuestra{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic font-bold">
                <span className={playfair.className}>Solución</span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 z-0"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mt-8">
            En MUTA acompañamos a las empresas desde ese primer diagnóstico,
            ayudándolas a tomar control, ordenar sus operaciones y crear
            sistemas que les permitan crecer con claridad, sin perder su
            esencia.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
