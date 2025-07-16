import Image from 'next/image';
import React from 'react'

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
    }
    // Podés agregar más integrantes aquí si los definen luego
  ];

  return (
    <section className="w-full bg-background py-32 px-6 md:px-24 2xl:px-48">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-7xl font-semibold text-title_color tracking-tight leading-tight mb-20">
          Nuestro <span className="italic relative z-10">Equipo<span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600"></span></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {team.map((person, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
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
      </div>
    </section>
  );
};

export default OurTeam