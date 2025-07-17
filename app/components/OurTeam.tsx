'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const OurTeam = () => {
  const team = [
    {
      name: 'Joaquín Campos',
      role: 'Fundador de MUTA',
      image: '/images/Avatar-Joaquin_Campos.webp',
      alternative: 'Foto/Avatar de Joaquín Campos, fundador de MUTA',
    },
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
    }
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 3.5,
      spacing: 24,
    },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 1.2, spacing: 16 },
      },
      '(max-width: 1024px)': {
        slides: { perView: 2.2, spacing: 20 },
      },
    },
  });

  return (
    <section className="w-full bg-background py-32 px-6 md:px-24 2xl:px-48 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-semibold text-title_color tracking-tight leading-tight mb-20">
          Nuestro <span className="italic relative z-10">Equipo<span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></span></span>
        </h2>

        <div className="relative">
          {/* Gradient fades */}
          <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="keen-slider" ref={sliderRef}>
            {team.map((person, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center text-center px-4"
              >
                <Image
                  src={person.image}
                  alt={person.alternative}
                  width={180}
                  height={180}
                  className="rounded-full object-cover"
                />
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{person.name}</h3>
                <p className="text-gray-600">{person.role}</p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => instanceRef.current?.prev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-500 to-blue-900 p-2 rounded-full z-20"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => instanceRef.current?.next()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-500 to-blue-900 p-2 rounded-full z-20"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
