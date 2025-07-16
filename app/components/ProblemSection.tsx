"use client";

import { motion } from "motion/react";
import { Brain, ChartColumn, Clock10, Rocket, Rotate3D } from "lucide-react";

const preguntasYRespuestas = [
  {
    pregunta: "¿Dónde está el dinero de mi negocio?",
    respuesta:
      "Implementamos dashboards financieros  conectados tu sistema para monitoreo en tiempo real.",
  },
  {
    pregunta: "¿Cuánto gana mi negocio?",
    respuesta:
      "Analizamos márgenes, estructuras de costos y procesos para detectar ineficiencias y oportunidades.",
  },
  {
    pregunta:
      "¿Cómo integro mejor mi almacén, mi equipo comercial y mi producción?",
    respuesta:
      "Automatizamos el circuito entre los equipos, disminuyendo el tiempo entre el pedido y el despacho.",
  },
  {
    pregunta: "¿Es mi equipo eficiente o apaga incendios?",
    respuesta:
      "Aplicamos enfoques de mejora continua con KPIs (Indicadores Claves de Rendimiento) y rutinas colaborativas.",
  },
  {
    pregunta: "¿Mi estructura es rentable o sobredimensionada?",
    respuesta: "Hacemos diagnósticos economicos y simulaciones de escenarios.",
  },
  {
    pregunta: "¿Cómo hago para que no todo dependa de mi?",
    respuesta:
      "Estandarizamos y automatizamos procesos clave, asegurando continuidad operativa y delegacion efectiva con control.",
  },
];

const futuro = [
  {
    pregunta: "¿Cómo adapto mi empresa a nuevos escenarios?",
    icon: <Clock10 className="w-12 h-12 text-blue-600" />,
    respuesta:
      "Aplicamos modelado de escenarios futuros, combinando datos históricos, señales de mercado y herramientas de inteligencia artificial para activar rutas estratégicas con flexibilidad.",
  },
  {
    pregunta: "¿Cómo capacito a mi equipo en tecnología?",
    icon: <Brain className="w-12 h-12 text-blue-600" />,
    respuesta:
      "Integramos microlearning diario, espacios de entrenamiento interactivo y herramientas intuitivas basadas en IA para acelerar la adopción digital desde adentro.",
  },
  {
    pregunta: "¿Somos lo suficientemente flexibles ante los cambios?",
    icon: <Rotate3D className="w-12 h-12 text-blue-600" />,
    respuesta:
      "Diseñamos procesos modulares, escalables y soportados por herramientas low-code/no-code, que se ajustan dinámicamente a nuevos entornos o estructuras organizativas.",
  },
  {
    pregunta: "¿Cómo aseguro que mi equipo de ventas esté actualizado?",
    icon: <Rocket className="w-12 h-12 text-blue-600" />,
    respuesta:
      "Centralizamos la información en CRMs conectados, automatizamos flujos comerciales y activamos rutinas de seguimiento con analítica embebida y feedback constante.",
  },
  {
    pregunta:
      "¿Qué decisiones tomaría si tuviera todos los datos en un mismo lugar?",
    icon: <ChartColumn className="w-12 h-12 text-blue-600" />,
    respuesta:
      "Unificamos tus sistemas con data lakes y tableros integrados, para que tengas visibilidad en tiempo real y tomes decisiones con el respaldo de tus propios datos.",
  },
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
        En MUTA, entendemos las inquietudes que surgen todos los días en tu
        empresa. Llevamos años implementando soluciones concretas, escalables y
        modernas a los desafíos que enfrentan los negocios reales. Estas son
        algunas de las preguntas que ya ayudamos a responder:
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
            className="p-6 rounded-xl border border-neutral-200 bg-neutral-50 shadow-md"
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

      <ul className="grid md:grid-cols-2 gap-4 my-12">
        {futuro.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="flex items-start justify-start gap-3 text-sm text-neutral-900"
          >
            {item.icon}
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-lg md:text-xl text-neutral-900 mb-2">
                {item.pregunta}
              </h3>
              <p className="text-foreground text-md">{item.respuesta}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
