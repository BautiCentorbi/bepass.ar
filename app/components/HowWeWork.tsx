'use client';

import { motion } from 'framer-motion';
import { Briefcase, Workflow, BarChart3, Smile } from 'lucide-react';
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: '400',
    style: 'italic',
});

const steps = [
  {
    icon: <Briefcase className="w-8 h-8 text-blue-600" />,
    title: 'Diagnóstico inicial',
    description: 'Analizamos el estado y cultura de tu empresa para detectar oportunidades reales de mejora.'
  },
  {
    icon: <Workflow className="w-8 h-8 text-blue-600" />,
    title: 'Diseño del sistema',
    description: 'Creamos un sistema de gestión claro y adaptable a tu realidad operativa.'
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-blue-600" />,
    title: 'Implementación guiada',
    description: 'Te acompañamos paso a paso para poner en marcha los cambios.'
  },
  {
    icon: <Smile className="w-8 h-8 text-blue-600" />,
    title: 'Seguimiento y mejora',
    description: 'Monitoreamos resultados y optimizamos continuamente junto a vos.'
  },
];

const HowWeWork = () => {
  return (
    <section className="relative py-24 px-6 md:px-24 bg-black/10">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-medium text-title_color tracking-tighter leading-tighter">
            ¿Cómo{" "}
            <span className="relative inline-block">
            <span className="relative z-10 italic font-bold">
                <span className={`${playfair.className} font-bold`}>Trabajamos</span>
            </span>
            <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 z-0"></span>
            </span>{" "}
            ?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
          Aplicamos una metodología clara, <span className='font-bold italic'>adaptada a cada empresa</span>, con foco en resultados y acompañamiento real.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#ebebeb] p-6 rounded-2xl shadow-sm text-left"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {step.title}
            </h3>
            <p className="text-gray-700 text-base">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
