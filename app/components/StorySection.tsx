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
    key: "marina",
    name: "Marina Monforte",
    role: "Socia · Estrategia, Personas y Negocios",
    image: "/images/Avatar-Marina_Monforte.webp",
    paragraphs: [
      "Soy Marina Monforte, Licenciada en Recursos Humanos, MBA y consultora especializada en gestión, talento y desarrollo organizacional.",
      "Durante más de 20 años desarrollé mi carrera en una compañía multinacional especializada en soluciones de talento y gestión de personas, donde ocupé posiciones de conducción regional y nacional, liderando equipos, operaciones y negocios.",
      "Ese recorrido me permitió trabajar junto a empresas de diferentes industrias y dimensiones, conocer realidades muy distintas y acompañar procesos de crecimiento, transformación y desarrollo de sus equipos.",
      "Pero, sobre todo, me enseñó algo que hoy forma parte de nuestra manera de trabajar en BePass: las organizaciones cambian cuando estrategia, gestión y personas avanzan en la misma dirección.",
      "Hoy combino esa experiencia con una mirada integral sobre las empresas, incorporando también el impacto que la tecnología y la transformación digital tienen sobre los procesos, los equipos y las nuevas formas de trabajar.",
    ],
  },
  {
    key: "joaquin",
    name: "Joaquín Campos",
    role: "Socio Fundador · Estrategia, Gestión y Negocios",
    image: "/images/Avatar-Joaquin_Campos.webp",
    paragraphs: [
      "Soy Joaquín Campos, consultor y empresario, con más de 18 años de experiencia acompañando y gestionando organizaciones.",
      "Mi recorrido comenzó en la consultoría tradicional y con el tiempo se fue ampliando hacia la dirección de empresas, la gestión de negocios y el desarrollo de mis propios proyectos empresariales. Esa experiencia me permitió conocer la empresa desde lugares muy diferentes: como asesor, como gerente y también como dueño.",
      "Estar de ambos lados de la mesa definió mi manera de trabajar. Entender los números es importante, pero también lo es comprender los procesos, las personas y las decisiones que hay detrás de ellos.",
      "En los últimos años profundicé mi formación en inteligencia artificial, business intelligence y nuevas tecnologías aplicadas a los negocios. Hoy busco integrar esas herramientas con la experiencia de gestión para construir organizaciones más simples, eficientes y preparadas para lo que viene.",
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
          Nuestros caminos profesionales se cruzaron mucho antes de que
          existiera BePass. Durante años trabajamos juntos desde lugares
          diferentes. Marina, desde posiciones de conducción en una compañía
          multinacional especializada en talento, organizaciones y desarrollo
          de negocios. Joaquín, desde la consultoría, la dirección de
          empresas y sus propios proyectos empresariales.
        </p>
        <p>
          Esos encuentros fueron construyendo algo que con el tiempo resultó
          tan importante como nuestra experiencia profesional:{" "}
          <span className="text-title_color font-semibold">
            confianza, respeto por la mirada del otro
          </span>{" "}
          y una manera compartida de entender cómo deben hacerse las cosas.
        </p>
        <p>
          Después de más de dos décadas de recorrido profesional, decidimos
          integrar nuestras experiencias y capacidades en un mismo proyecto.
          Nos une una mirada complementaria sobre las empresas:{" "}
          <span className="font-bold">
            estrategia, gestión, personas y tecnología
          </span>
          . Pero también una convicción común sobre cómo trabajar: con{" "}
          <span className="text-title_color font-semibold">
            cercanía, compromiso, transparencia y responsabilidad
          </span>{" "}
          por los resultados.
        </p>
        <p className="text-xl md:text-2xl font-medium text-title_color italic mt-2">
          BePass nace también de esa historia. De años de conocernos, de
          trabajar juntos y de elegir hoy{" "}
          <span className="not-italic font-bold text-primary">
            construir juntos
          </span>{" "}
          lo que viene.
        </p>
      </div>
    </section>
  );
}
