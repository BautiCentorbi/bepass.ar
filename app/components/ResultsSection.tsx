'use client';

import { Target, PackageCheck, BarChart, Network, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const results = [
  {
    icon: <Target className="w-6 h-6 text-blue-600" />, 
    title: '+10% de flujo de caja mensual',
    description: 'Gracias a automatizar cobranzas anticipadas en una PyME industrial. Redujimos errores manuales y aceleramos el ciclo de facturación.'
  },
  {
    icon: <PackageCheck className="w-6 h-6 text-blue-600" />, 
    title: 'Reducción del 35% en desvíos de stock',
    description: 'Implementamos trazabilidad digital y alertas en tiempo real en una empresa de alimentos.'
  },
  {
    icon: <BarChart className="w-6 h-6 text-blue-600" />, 
    title: '+18% de productividad en equipo administrativo',
    description: 'Simplificamos tareas repetitivas con herramientas no-code. Capacitamos al equipo con microlearning diario.'
  },
  {
    icon: <Network className="w-6 h-6 text-blue-600" />, 
    title: 'De decisiones intuitivas a decisiones con datos',
    description: 'Transformamos un negocio comercial con tableros BI conectados a ventas, gastos y rentabilidad. Eliminamos el doble trabajo.'
  },
  {
    icon: <Brain className="w-6 h-6 text-blue-600" />, 
    title: 'Adopción tecnológica real, no solo promesas',
    description: 'En menos de 30 días, el 80% del equipo comenzó a usar herramientas digitales sin fricción ni curva de aprendizaje.'
  }
];

const ResultsSection = () => {
  return (
    <section className="relative w-full py-48 px-6 md:px-24 2xl:px-48 bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-black to-[#020617] z-0" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[160px] opacity-30 translate-x-1/2 translate-y-1/2 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-semibold leading-tight tracking-tight mb-24"
        >
          El Impacto de <span className='font-medium italic relative z-10'>Muta<span className='absolute bottom-0 left-0 w-full h-1 bg-white'></span></span>
        </motion.h2>

        <div className="relative flex flex-col gap-8">
          {results.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative w-full md:w-2/3 ${index % 2 === 0 ? 'md:self-start' : 'md:self-end'} px-6 py-6 border border-white/10 bg-white/5 backdrop-blur-md rounded-2xl shadow-xl`}
            >
              <div className="mb-2 flex items-center gap-2 text-blue-400">
                {item.icon}
                <h3 className="text-lg font-semibold text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-white/80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;