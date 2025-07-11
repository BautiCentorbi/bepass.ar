'use client';

import { Briefcase, Workflow, BarChart3, Smile } from 'lucide-react';

const steps = [
  {
    icon: <Briefcase className="w-6 h-6 text-blue-600 shrink-0" />, 
    title: 'Diagnóstico estratégico',
    description: 'Detectamos cuellos de botella, pérdidas invisibles y puntos críticos en tus operaciones. Todo con foco en datos reales y criterios de impacto.'
  },
  {
    icon: <Workflow className="w-6 h-6 text-blue-600 shrink-0" />, 
    title: 'Sistema de gestión a medida',
    description: 'Diseñamos estructuras de trabajo claras y adaptables que mejoran los KPIs de eficiencia, tiempos de respuesta y delegación interna.'
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-blue-600 shrink-0" />, 
    title: 'Implementación guiada',
    description: 'No te dejamos solo. Acompañamos cada paso con claridad, resolviendo obstáculos y asegurando resultados sostenibles.'
  },
  {
    icon: <Smile className="w-6 h-6 text-blue-600 shrink-0" />, 
    title: 'Optimización continua',
    description: 'Medimos, analizamos y mejoramos de forma iterativa. Si no genera impacto, no lo implementamos.'
  },
];

const HowWeWork = () => {
  return (
    <section className="relative py-32 px-6 md:px-24 2xl:px-48 bg-black/7 w-full rountet-t-4xl">
      <div className="max-w-6xl mx-auto mb-24">
        <h2 className="text-4xl md:text-6xl font-medium text-title_color tracking-tight leading-tight mb-8">
          ¿Cómo <span className='italic font-medium'>trabajamos</span>?
        </h2>
        <p className="text-lg md:text-2xl text-foreground max-w-3xl">
          No ofrecemos fórmulas genéricas. Aplicamos un sistema de gestión claro, medible y adaptable que busca resultados concretos: eficiencia, control y crecimiento real.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-6 items-start">
            {step.icon}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-foreground text-base">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowWeWork;
