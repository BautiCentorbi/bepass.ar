"use client";

import { motion } from "motion/react";
import { ArrowRightCircle } from "lucide-react";

const preguntasYRespuestas = [
  {
    pregunta: "¿Dónde está el dinero de mi negocio?",
    respuesta: "Te ayudamos a visualizar tus finanzas en tiempo real.",
  },
  {
    pregunta: "¿Cómo puedo controlar mejor mi stock?",
    respuesta: "Digitalizamos tu inventario y automatizamos pedidos.",
  },
  {
    pregunta: "¿Mi equipo está siendo eficiente?",
    respuesta: "Implementamos rutinas de mejora continua y KPIs claros.",
  },
  {
    pregunta: "¿Mi estructura es rentable?",
    respuesta: "Analizamos costos y beneficios para optimizar tu operación.",
  },
  {
    pregunta: "¿Estamos tomando decisiones basadas en datos?",
    respuesta:
      "Transformamos tu información en tableros accesibles para todo el equipo.",
  },
];

const futuro = [
  "Análisis de escenarios futuros para anticipar cambios.",
  "Automatización de procesos que se adaptan a cualquier escenario.",
  "Escalabilidad en todas nuestras soluciones.",
  "Adaptación constante a las nuevas tecnologías y tendencias.",
  "Innovación continua para que tu empresa siempre esté un paso adelante.",
];

export default function PreguntasSoluciones() {
  return (
    <section className="px-6 md:px-12 xl:px-20 py-20 max-w-7xl mx-auto">
      {/* Intro */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-semibold tracking-tight leading-tighter text-title_color text-left"
      >
        Conocemos tus preguntas,
        <br className="hidden sm:block" /> tenemos las{" "}
        <span className="relative italic">
          soluciones{" "}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary z-0" />
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl mt-6 md:mt-12 text-muted-foreground max-w-2xl"
      >
        En MUTA, entendemos las inquietudes que surgen en el día a día de tu
        empresa y hemos desarrollado soluciones que se adaptan a tus
        necesidades. Ofrecemos respuestas concretas a estas cinco preguntas
        clave:
      </motion.p>

      {/* Preguntas */}
      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {preguntasYRespuestas.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`p-6 rounded-xl border border-neutral-200 bg-neutral-50 shadow-md ${
              idx === preguntasYRespuestas.length - 1
                ? "md:col-span-2 md:mx-auto md:max-w-xl"
                : ""
            }`}
          >
            <h3 className="font-semibold text-lg md:text-xl text-neutral-900 mb-2">
              {item.pregunta}
            </h3>
            <p className="text-sm md:text-md text-muted-foreground leading-snug">
              {item.respuesta}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Futuro */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="text-4xl md:text-5xl font-medium mt-20 mb-4 text-title_color tracking-tighter leading-tighter"
      >
        Preparamos tu empresa para el{" "}
        <span className="relative italic">
          futuro{" "}
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary z-0" />
        </span>
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-lg md:text-xl mt-6 md:mt-12 text-muted-foreground max-w-2xl"
      >
        No solo resolvemos los desafíos actuales; también miramos hacia
        adelante.
      </motion.p>

      <ul className="grid md:grid-cols-2 gap-4 mt-10">
        {futuro.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start gap-3 text-sm text-neutral-900"
          >
            <ArrowRightCircle className="text-primary mt-1 w-5 h-5 shrink-0" />
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
