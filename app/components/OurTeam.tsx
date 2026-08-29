'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const direccion = [
  {
    name: 'Marina Monforte',
    role: 'Socia · Estrategia, Personas y Negocios',
    image: '/images/Avatar-Marina_Monforte.webp',
    alternative: 'Foto/Avatar de Marina Monforte, Socia de BePass',
  },
  {
    name: 'Joaquín Campos',
    role: 'Socio Fundador · Estrategia, Gestión y Negocios',
    image: '/images/Avatar-Joaquin_Campos.webp',
    alternative: 'Foto/Avatar de Joaquín Campos, Socio de BePass',
  },
  {
    name: 'Mauricio Sosa',
    role: 'Dirección de Tecnología',
    image: '/images/Avatar-Mauricio_Sosa.webp',
    alternative: 'Foto/Avatar de Mauricio Sosa, Dirección de Tecnología',
  },
];

const especialistas = [
  {
    name: 'Bautista Centorbi',
    role: 'Responsable de crecimiento y posicionamiento digital',
    image: '/images/Avatar-Bautista_Centorbi.webp',
    alternative: 'Foto/Avatar de Bautista Centorbi, responsable de crecimiento y posicionamiento digital',
  },
  {
    name: 'Cristian Sampieri',
    role: 'Líder de Eficiencia y  Diseño de Procesos',
    image: '/images/Avatar-Cristian_Sampieri.webp',
    alternative: 'Foto/Avatar de Cristian Sampieri, líder de eficiencia y diseño de procesos',
  },
  {
    name: 'Andres Valle',
    role: 'Consultor Senior en Finanzas y Estrategia',
    image: '/images/Avatar-Andres_Valle.webp',
    alternative: 'Foto/Avatar de Andres Valle, consultor senior en finanzas y estrategia',
  },
  {
    name: 'IPL Ingeniería Industrial',
    role: 'Partner en Gestión Industrial y Mejora Continua',
    image: '/images/Avatar-IPL_Ingenieria.webp',
    alternative: 'Foto/Avatar de IPL Ingeniería Industrial, partner en gestión industrial y mejora continua',
  },
  {
    name: 'Ruben Dip',
    role: 'Consultor en Inteligencia de Datos y Visualización',
    image: '/images/Avatar-Ruben_Dip.webp',
    alternative: 'Foto/Avatar de Ruben Dip, consultor en inteligencia de datos y visualización',
  },
];

const OurTeam = () => {
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 3.5,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1, spacing: 16 },
      },
      '(max-width: 1024px)': {
        slides: { perView: 2.2, spacing: 20 },
      },
    },
  });

  return (
    <section id='our-team' className="w-full bg-background py-32 px-6 md:px-24 2xl:px-48 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-semibold text-title_color tracking-tight leading-tight mb-20">
          Nuestro <span className="italic relative z-10">Equipo<span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></span></span>
        </h2>

        {/* Dirección */}
        <div className="mb-24">
          <h3 className="text-2xl md:text-3xl font-semibold text-title_color tracking-tight mb-2">
            Dirección
          </h3>
          <p className="text-gray-600 mb-12 max-w-2xl">
            La mesa que define el rumbo de BePass.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {direccion.map((person) => (
              <div key={person.name} className="flex flex-col items-center text-center">
                <Image
                  src={person.image}
                  alt={person.alternative}
                  placeholder='blur'
                  blurDataURL={person.image}
                  width={180}
                  height={180}
                  className="rounded-full object-cover aspect-square"
                />
                <h4 className="mt-6 text-xl font-semibold text-gray-900">{person.name}</h4>
                <p className="text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Red de especialistas */}
        <h3 className="text-2xl md:text-3xl font-semibold text-title_color tracking-tight mb-2">
          Red de Especialistas
        </h3>
        <p className="text-gray-600 mb-12 max-w-2xl">
          Ingeniería, finanzas, marketing, datos y más: la red de partners que
          acompaña cada proyecto de BePass.
        </p>

        <div className="relative">
          <div className="keen-slider" ref={sliderRef}>
            {especialistas.map((person, index) => (
              <div key={index} className="keen-slider__slide flex flex-col items-center text-center">
                <Image
                  src={person.image}
                  alt={person.alternative}
                  placeholder='blur'
                  blurDataURL={person.image}
                  width={180}
                  height={180}
                  className="rounded-full object-cover aspect-square"
                />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>

          <div className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-gradient-to-br from-blue-500 to-blue-800 p-3 rounded-full shadow-lg text-white"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>

          <div className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-gradient-to-br from-blue-500 to-blue-800 p-3 rounded-full shadow-lg text-white"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Gradiente lateral */}
          <div className="sm:hidden md:absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="sm:hidden md:absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>


          {/* Mobile arrows */}
          <div className="md:hidden flex justify-center gap-4 mt-8">
            <button
              onClick={() => instanceRef.current?.prev()}
              className="bg-gradient-to-br from-blue-500 to-blue-800 p-3 rounded-full shadow-lg text-white"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => instanceRef.current?.next()}
              className="bg-gradient-to-br from-blue-500 to-blue-800 p-3 rounded-full shadow-lg text-white"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
