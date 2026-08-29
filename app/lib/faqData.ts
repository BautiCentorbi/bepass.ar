export type Faq = {
  question: string;
  answer: string;
};

// Mezcla intención local ("consultoría en Mendoza") con intención general
// ("cómo mejorar las finanzas de mi empresa") para ampliar el rango de
// búsquedas que la página puede responder, tanto en Google como en
// buscadores/asistentes de IA.
export const faqs: Faq[] = [
  {
    question: "¿Cómo puedo mejorar las finanzas de mi empresa?",
    answer:
      "El primer paso es tener visibilidad real de los números: ingresos, costos, márgenes y flujo de caja actualizados y ordenados. En BePass empezamos con un diagnóstico financiero, identificamos dónde se pierde rentabilidad y armamos un plan de acción concreto, apoyado en herramientas de datos e inteligencia artificial para tomar decisiones con información y no solo con intuición.",
  },
  {
    question: "¿Cómo automatizar procesos en mi negocio?",
    answer:
      "Automatizar no es comprar un software, es primero entender el proceso: qué pasos son repetitivos, dónde se pierde tiempo y qué decisiones pueden apoyarse en tecnología. Analizamos tus procesos actuales (administrativos, comerciales, operativos) y diseñamos automatizaciones a medida, usando IA donde suma valor real y no como moda.",
  },
  {
    question: "¿Qué hace una consultora de gestión empresarial?",
    answer:
      "Una consultora de gestión acompaña a la empresa a mejorar su estrategia, sus procesos y el desempeño de sus equipos. En BePass trabajamos gestión, personas y tecnología en conjunto: no alcanza con cambiar un sistema si las personas no forman parte del cambio, ni con una buena estrategia si los procesos no la sostienen.",
  },
  {
    question: "¿BePass trabaja con empresas de cualquier rubro?",
    answer:
      "Sí. Trabajamos con empresas de distintas industrias y tamaños en áreas como RRHH, Finanzas, Administración, Marketing, Operaciones, Tecnología, Comercial y Logística. No nos especializamos en un rubro puntual, sino en resolver los problemas de gestión que atraviesan a cualquier negocio.",
  },
  {
    question: "¿Ofrecen consultoría de gestión con inteligencia artificial en Mendoza?",
    answer:
      "Sí, somos una consultora con base en Mendoza. Combinamos experiencia en dirección de empresas, RRHH y estrategia con IA aplicada a negocios, para ayudar a empresas mendocinas y de otras provincias a mejorar su gestión y sus resultados.",
  },
  {
    question: "¿Cómo sé si mi empresa necesita una consultoría de gestión?",
    answer:
      "Algunas señales típicas: los procesos crecieron sin planificación, la información llega tarde o poco confiable, los equipos no tienen roles claros, o la tecnología que usan no se aprovecha del todo. Si te identificás con alguna, conversemos: el primer diagnóstico te ayuda a ver con claridad por dónde empezar.",
  },
];
