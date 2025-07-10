"use client";

import { ClipboardList, Settings, FileBarChart2, Users } from "lucide-react";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

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
    <section id="solutions" className="relative bg-black/7 py-24 px-6 md:px-24 2xl:px-48 w-full rounded-t-4xl">
      <div className="flex flex-col md:flex-row items-start justify-center gap-24 w-full">
        <h2 className="w-2xl text-4xl md:text-6xl font-mediumt text-title_color tracking-tighter leading-tighter">
          Soluciones claras, aplicables y{" "}
          <span className="relative inline-block">
            <span className="relative z-10 italic font-bold">
              <span className={playfair.className}>escalables</span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 z-0"></span>
          </span>{" "}
        </h2>
        <div className="space-y-6 w-full">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col md:items-start gap-4 w-full"
            >
              <div className="flex items-center gap-2 w-full md:w-1/3">
                {solution.icon}
                <h3 className="text-xl font-semibold text-gray-900 w-full">
                  {solution.title}
                </h3>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-gray-700 text-lg md:text-xl w-full">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
