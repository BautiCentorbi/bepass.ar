"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Ear, BarChart4, Settings, Compass, RefreshCcw, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: <Ear className="w-7 h-7 text-blue-600 shrink-0" />,
    title: "1. Escucha profunda",
    description: "Co-creamos desde el inicio",
  },
  {
    icon: <BarChart4 className="w-7 h-7 text-blue-600 shrink-0" />,
    title: "2. Análisis estratégico con herramientas de IA y BI",
    description: "Procesamos los datos reales de tu empresa",
  },
  {
    icon: <Settings className="w-7 h-7 text-blue-600 shrink-0" />,
    title: "3. Implementación ágil y modular",
    description: "Diseñamos soluciones escalables",
  },
  {
    icon: <Compass className="w-7 h-7 text-blue-600 shrink-0" />,
    title: "4. Acompañamiento cercano",
    description: "Trabajamos codo a codo con tu equipo",
  },
  {
    icon: <RefreshCcw className="w-7 h-7 text-blue-600 shrink-0" />,
    title: "5. Feedback, mejora continua y visión futura",
    description: "Evaluamos impacto real",
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="relative py-32 px-6 md:px-24 2xl:px-48 bg-black/5 w-full rounded-t-4xl">
      <div className="max-w-6xl mx-auto mb-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-medium text-title_color tracking-tight leading-tight mb-8"
        >
          ¿Cómo{" "}
          <span className="relative italic font-medium z-10">
            trabajamos
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary z-0" />
          </span>
          ?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-2xl text-foreground max-w-4xl mx-auto"
        >
          Aplicamos un marco de trabajo centrado en la escucha, los datos y la co-creación. Nos adaptamos a la realidad de cada empresa para acompañarlas hacia un crecimiento sostenible y con control.
        </motion.p>
      </div>

      <div className="relative w-full max-w-3xl mx-auto px-4">
        {/* Línea de fondo (recorrido completo) */}
        <div className="absolute left-[52px] top-7 bottom-7 w-0.5 bg-neutral-300/70" />

        {/* Línea de progreso animada */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.4, ease: "easeInOut" }}
          className="absolute left-[52px] top-7 bottom-7 w-0.5 bg-primary origin-top"
        />

        <div className="relative z-10 flex flex-col gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative bg-white shadow-md p-6 rounded-xl text-left flex items-start gap-4"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.15 + 0.15,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
                className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-white border-2 border-primary shrink-0"
              >
                {step.icon}
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-foreground text-sm md:text-lg">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mt-16"
      >
        <Link
          href="/ejemplos"
          className="group inline-flex items-center gap-2 bg-primary text-white font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Ver ejemplos de tableros
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  );
};

export default HowWeWork;
