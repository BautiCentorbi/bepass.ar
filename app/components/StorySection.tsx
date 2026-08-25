"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Founder = {
  key: string;
  name: string;
  role: string;
  image: string;
  paragraphs: string[];
};

const founders: Founder[] = [
  {
    key: "joaquin",
    name: "Joaquín Campos",
    role: "Socio Fundador · Dirección y Estrategia",
    image: "/images/Avatar-Joaquin_Campos.webp",
    paragraphs: [
      "Soy Joaquín Campos, mendocino, contador de formación, consultor y empresario. Hace más de 18 años comencé este camino como cofundador de una consultora tradicional, enfocada en contabilidad, impuestos y gestión. Después llegaron otras experiencias: fui gerente de empresas, participé en distintos proyectos empresariales y desarrollé mi propio emprendimiento vitivinícola.",
      "Estar de los dos lados de la mesa cambió mi forma de entender la consultoría: sé lo que significa tomar decisiones todos los días, administrar recursos escasos, liderar equipos, equivocarme y volver a intentar. Con el tiempo profundicé mi formación en inteligencia artificial, BI y nuevas tecnologías aplicadas a los negocios.",
    ],
  },
  {
    key: "marina",
    name: "Marina Monforte",
    role: "Socia · Desarrollo Organizacional y Negocios",
    image: "/images/Avatar-Marina_Monforte.webp",
    paragraphs: [
      "Soy Marina Monforte, mendocina, Licenciada en Recursos Humanos, gerente, consultora y emprendedora. Trabajé casi 20 años en ManpowerGroup, donde lideré equipos, regiones y proyectos vinculados con personas, organizaciones y desarrollo de negocios.",
      "Esa experiencia me permitió conocer empresas muy distintas desde adentro, acompañar procesos de transformación y comprender algo esencial: ninguna estrategia funciona si las personas que tienen que llevarla adelante no forman parte del cambio. Después fundé mi propia consultora, acompañando a empresas en talento, liderazgo, cultura y desarrollo organizacional.",
    ],
  },
];

export default function StorySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = founders[activeIndex];

  const goTo = (index: number) =>
    setActiveIndex((index + founders.length) % founders.length);

  return (
    <section
      id="story"
      className="px-6 md:px-12 xl:px-20 py-16 md:py-20 xl:py-32 max-w-7xl mx-auto"
    >
      <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tighter text-title_color text-left mb-4">
        Nuestra historia nace del{" "}
        <span className="italic relative">
          Cambio
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary z-0"></span>
        </span>
      </h2>

      <p className="text-lg text-muted-foreground max-w-3xl mb-10">
        BePass es una sociedad. Dos trayectorias distintas que se cruzaron en
        una misma convicción: las empresas necesitan gestión, personas y
        tecnología trabajando juntas.
      </p>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Socios fundadores"
        className="flex flex-wrap gap-4 mb-10"
      >
        {founders.map((founder, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={founder.key}
              role="tab"
              type="button"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              className={`group flex items-center gap-4 rounded-full pl-3 pr-7 py-3 border-2 transition-all ${
                isActive
                  ? "bg-primary border-primary shadow-lg shadow-primary/20 scale-[1.03]"
                  : "bg-transparent border-neutral-300 hover:border-primary/50"
              }`}
            >
              <Image
                className="w-14 h-14 shrink-0 rounded-full object-cover aspect-square"
                src={founder.image}
                alt={`Foto de ${founder.name}`}
                width={56}
                height={56}
              />
              <span className="flex flex-col items-start leading-tight">
                <span
                  className={`text-lg font-semibold ${
                    isActive ? "text-white" : "text-neutral-900"
                  }`}
                >
                  {founder.name}
                </span>
                <span
                  className={`text-sm ${
                    isActive ? "text-white/80" : "text-muted-foreground"
                  }`}
                >
                  {founder.role}
                </span>
              </span>
            </button>
          );
        })}
      </div>

      {/* Contenido animado del socio activo */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.key}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.35 }}
          className="rounded-3xl border border-neutral-200 bg-white shadow-xl p-8 md:p-12 max-w-5xl"
        >
          <div className="flex items-center gap-5 mb-8">
            <Image
              className="w-20 h-20 md:w-24 md:h-24 shrink-0 rounded-full object-cover aspect-square"
              src={active.image}
              alt={`Foto/Avatar de ${active.name}, ${active.role}`}
              placeholder="blur"
              blurDataURL={active.image}
              width={96}
              height={96}
            />
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">
                {active.name}
              </h3>
              <p className="text-base md:text-lg text-muted-foreground">
                {active.role}
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
            {active.paragraphs.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Manejadores para rotar entre socios */}
          <div className="flex items-center justify-center gap-6 mt-10 pt-8 border-t border-neutral-200">
            <button
              type="button"
              onClick={() => goTo(activeIndex - 1)}
              aria-label="Socio anterior"
              className="flex shrink-0 items-center justify-center w-11 h-11 rounded-full border border-neutral-300 text-title_color hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {founders.map((founder, index) => (
                <button
                  key={founder.key}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Ver a ${founder.name}`}
                  aria-current={index === activeIndex}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeIndex
                      ? "w-8 bg-primary"
                      : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label="Siguiente socio"
              className="flex shrink-0 items-center justify-center w-11 h-11 rounded-full border border-neutral-300 text-title_color hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Por qué BePass */}
      <div className="mt-16 pt-16 border-t border-neutral-300/60 flex flex-col gap-6 text-lg text-muted-foreground max-w-5xl">
        <h3 className="text-2xl md:text-3xl font-semibold tracking-tighter text-title_color">
          ¿Por qué{" "}
          <span className="italic relative">
            BePass
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary z-0"></span>
          </span>
          ?
        </h3>
        <p>
          BePass nace de la unión de nuestras trayectorias. Durante años
          vimos organizaciones incorporar sistemas que después nadie usaba,
          procesos que crecían sin planificación e información que llegaba
          tarde. También lo vivimos desde adentro.
        </p>
        <p>
          Por eso creemos que muchas veces el problema no es insistir en el
          mismo camino, sino animarse a encontrar uno diferente. De ahí nace
          BePass: <span className="font-bold">Gestión. Personas. Tecnología.</span>
        </p>
        <p>
          En BePass nos involucramos: nos sentamos con los dueños, trabajamos
          con los equipos, entendemos los procesos y cuestionamos lo que haga
          falta cuestionar. Porque cada empresa es distinta, y cuando el
          camino habitual deja de funcionar, quizás no haga falta insistir
          más — hay que encontrar otro camino.
        </p>
      </div>
    </section>
  );
}
