"use client";

import { ClipboardList, Settings, FileBarChart2, Users } from "lucide-react";
import { motion } from "motion/react";

const solutions = [
  {
    icon: <ClipboardList className="w-6 h-6 text-blue-600" />,
    title: "Optimización operativa",
    description:
      "Revisamos tus procesos para eliminar cuellos de botella, automatizar tareas repetitivas y ganar eficiencia real.",
  },
  {
    icon: <FileBarChart2 className="w-6 h-6 text-blue-600" />,
    title: "Reportes que sirven",
    description:
      "Diseñamos reportes que importan: simples, accionables y alineados a tus decisiones clave.",
  },
  {
    icon: <Settings className="w-6 h-6 text-blue-600" />,
    title: "Sistemas a medida",
    description:
      "Creamos sistemas simples, adaptados a tu estructura, sin forzar herramientas innecesarias.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Acompañamiento real",
    description:
      "No vendemos soluciones genéricas. Estamos ahí para ayudarte a sostener el cambio con criterio.",
  },
];

const SolutionsSection = () => {
  return (
    <section className="relative bg-black/7 w-full rounded-t-4xl pt-32 mx-6 md:mx-24 2xl:mx-48">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-16 items-start">
        {/* Título fijo al scrollear */}
        <div className="sticky top-24 self-start">
          <h2 className="text-4xl md:text-6xl font-semibold text-title_color leading-tight">
            Soluciones claras, <br />
            aplicables y{" "}
            <span className="relative inline-block">
              <span className="relative z-10 ">
                <span className='font-medium italic'>escalables</span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 z-0"></span>
            </span>
          </h2>
        </div>

        {/* Contenido a la derecha */}
        <div className="md:col-span-2 space-y-16">
          {solutions.map((solution, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="mt-1">{solution.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {solution.title}
                </h3>
                <p className="text-lg text-foreground">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <motion.div
        className="mt-12 md:mt-32 h-32 w-full bg-gradient-to-b from-black/1 to-black"
      />
    </section>
  );
};

export default SolutionsSection;
