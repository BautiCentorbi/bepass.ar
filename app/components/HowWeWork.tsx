import { Ear, BarChart4, Settings, Compass, RefreshCcw } from "lucide-react";

const steps = [
  {
    icon: <Ear className="w-6 md:w-12 h-6 md:h-12 text-blue-600 shrink-0" />,
    title: "1. Escucha profunda",
    description: "Co-creamos desde el inicio",
  },
  {
    icon: <BarChart4 className="w-6 md:w-12 h-6 md:h-12 text-blue-600 shrink-0" />,
    title: "2. Análisis estratégico con herramientas de IA y BI",
    description: "Procesamos los datos reales de tu empresa",
  },
  {
    icon: <Settings className="w-6 md:w-12 h-6 md:h-12 text-blue-600 shrink-0" />,
    title: "3. Implementación ágil y modular",
    description: "Diseñamos soluciones escalables",
  },
  {
    icon: <Compass className="w-6 md:w-12 h-6 md:h-12 text-blue-600 shrink-0" />,
    title: "4. Acompañamiento cercano",
    description: "Trabajamos codo a codo con tu equipo",
  },
  {
    icon: <RefreshCcw className="w-6 md:w-12 h-6 md:h-12 text-blue-600 shrink-0" />,
    title: "5. Feedback, mejora continua y visión futura",
    description: "Evaluamos impacto real",
  },
];

const HowWeWork = () => {
  return (
    <section id="how-we-work" className="relative py-32 px-6 md:px-24 2xl:px-48 bg-black/5 w-full rounded-t-4xl">
      <div className="max-w-6xl mx-auto mb-24 text-center">
        <h2 className="text-4xl md:text-6xl font-medium text-title_color tracking-tight leading-tight mb-8">
          ¿Cómo {" "}
          <span className="relative italic font-medium z-10">
            trabajamos
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary z-0" />
          </span>
          ?
        </h2>
        <p className="text-lg md:text-2xl text-foreground max-w-4xl mx-auto">
          Aplicamos un marco de trabajo centrado en la escucha, los datos y la co-creación. Nos adaptamos a la realidad de cada empresa para acompañarlas hacia un crecimiento sostenible y con control.
        </p>
      </div>

      <div className="relative w-full max-w-3xl mx-auto px-4">
        <div className="relative z-10 flex flex-col gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white shadow-md p-6 rounded-xl text-left flex items-start gap-4"
            >
              <div className="relative z-10">{step.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-foreground text-sm md:text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
