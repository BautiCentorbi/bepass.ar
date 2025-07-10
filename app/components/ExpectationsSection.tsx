'use client';

import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
});

const groupedPillars = [
  {
    title: 'Escucha y diagnóstico con criterio',
    description: 'No partimos de supuestos. Entendemos tu contexto real y analizamos con datos y experiencia para detectar puntos críticos, ineficiencias y oportunidades concretas.'
  },
  {
    title: 'Soluciones realistas y sostenibles',
    description: 'Diseñamos sistemas accionables, alineados con tu realidad operativa. Nada de recetas mágicas, solo estructuras claras que podés sostener.'
  },
  {
    title: 'Claridad, orden y delegación',
    description: 'Transformamos el caos en procesos claros, delegables y medibles. Para que lideres con control sin estar en todo.'
  },
  {
    title: 'Automatización inteligente',
    description: 'Quitamos lo que no suma. Automatizamos procesos manuales con lógica y criterio, sin perder el foco en lo importante.'
  },
  {
    title: 'Decisiones con datos',
    description: 'Creamos reportes simples, claros y útiles. Para que tomes decisiones con información real, no intuiciones.'
  },
  {
    title: 'Impacto medible y mejora continua',
    description: 'Nos enfocamos en resultados concretos: tiempos, costos, eficiencia. Y trabajamos para que los cambios se mantengan y evolucionen.'
  },
  {
    title: 'Acompañamiento real',
    description: 'No implementamos y desaparecemos. Caminamos con vos cada etapa. Sostenemos el cambio, juntos.'
  },
];

const ExpectationsSection = () => {
  return (
    <section className="relative py-32 px-6 md:px-24 2xl:px-48">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-medium text-title_color tracking-tight leading-tight mb-12">
          Qué podés <span className={`italic ${playfair.className} relative z-10`}>esperar<span className='absolute bottom-0 left-0 w-full h-1 bg-primary z-0'></span></span> de MUTA
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {groupedPillars.map((pillar, index) => (
            <div
              key={index}
              className="mb-4"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {pillar.title}
              </h3>
              <p className="text-gray-700 text-base">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExpectationsSection;
