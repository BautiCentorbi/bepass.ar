import React from "react";

const ProblemSection = () => {
  return (
    <section id="problem" className="relative py-12 md:py-36 2xl:py-48 px-6 md:px-24">
      {/* FLECHA VISUAL RECTA */}
      <svg
        viewBox="0 0 600 400"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden md:block absolute top-[8rem] left-1/2 -translate-x-1/2 w-80 h-64 text-blue-600 z-10"
      >
        {/* Línea recta con ligera inclinación */}
        <path
          d="M120,180 L480,300"
          stroke="currentColor"
          strokeWidth="2.5"
          fill="none"
          markerEnd="url(#straight-arrowhead)"
          strokeLinecap="round"
          strokeDasharray="8,6"
          opacity="0.7"
        />
      </svg>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* PROBLEMA */}
        <div>
          <h2 className="text-4xl md:text-6xl font-medium text-title_color tracking-tighter leading-tighter">
            Cuando el{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic font-bold">
                <span className='italic font-medium'>Problema</span>
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
                <span className='italic font-medium'>Solución</span>
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
