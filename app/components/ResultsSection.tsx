'use client';

import { useState } from 'react';
import {
  Target,
  PackageCheck,
  BarChart,
  Network,
  Brain,
  TrendingUp,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ContactForm from './ContactForm';

type Category = 'Finanzas' | 'Operaciones' | 'Personas' | 'Datos';

const results: {
  icon: React.ReactNode;
  category: Category;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}[] = [
  {
    icon: <Target className="w-4 h-4" />,
    category: 'Finanzas',
    title: '+10% de flujo de caja mensual',
    description: 'Gracias a automatizar cobranzas anticipadas en una PyME industrial. Redujimos errores manuales y aceleramos el ciclo de facturación.',
    metric: '+10%',
    metricLabel: 'flujo de caja',
  },
  {
    icon: <PackageCheck className="w-4 h-4" />,
    category: 'Operaciones',
    title: 'Reducción del 35% en desvíos de stock',
    description: 'Implementamos trazabilidad digital y alertas en tiempo real en una empresa de alimentos.',
    metric: '-35%',
    metricLabel: 'desvíos de stock',
  },
  {
    icon: <BarChart className="w-4 h-4" />,
    category: 'Personas',
    title: '+18% de productividad en equipo administrativo',
    description: 'Simplificamos tareas repetitivas con herramientas no-code. Capacitamos al equipo con microlearning diario.',
    metric: '+18%',
    metricLabel: 'productividad',
  },
  {
    icon: <Network className="w-4 h-4" />,
    category: 'Datos',
    title: 'De decisiones intuitivas a decisiones con datos',
    description: 'Transformamos un negocio comercial con tableros BI conectados a ventas, gastos y rentabilidad. Eliminamos el doble trabajo.',
    metric: '100%',
    metricLabel: 'visibilidad de datos',
  },
  {
    icon: <Brain className="w-4 h-4" />,
    category: 'Personas',
    title: 'Adopción tecnológica real, no solo promesas',
    description: 'En menos de 30 días, el 80% del equipo comenzó a usar herramientas digitales sin fricción ni curva de aprendizaje.',
    metric: '80%',
    metricLabel: 'adopción en 30 días',
  },
];

const kpis = [
  { icon: <Target className="w-3.5 h-3.5" />, label: 'Flujo de caja', value: '+10%', sub: 'cobranzas automatizadas' },
  { icon: <PackageCheck className="w-3.5 h-3.5" />, label: 'Desvíos de stock', value: '-35%', sub: 'con trazabilidad digital' },
  { icon: <BarChart className="w-3.5 h-3.5" />, label: 'Productividad', value: '+18%', sub: 'equipo administrativo' },
  { icon: <Brain className="w-3.5 h-3.5" />, label: 'Adopción del equipo', value: '80%', sub: 'en menos de 30 días' },
];

const categories: Category[] = ['Finanzas', 'Operaciones', 'Personas', 'Datos'];

const categoryColors: Record<Category, string> = {
  Finanzas: 'bg-emerald-500',
  Operaciones: 'bg-amber-500',
  Personas: 'bg-fuchsia-500',
  Datos: 'bg-blue-600',
};

const categoryBadge: Record<Category, string> = {
  Finanzas: 'text-emerald-700 bg-emerald-50 border-emerald-200',
  Operaciones: 'text-amber-700 bg-amber-50 border-amber-200',
  Personas: 'text-fuchsia-700 bg-fuchsia-50 border-fuchsia-200',
  Datos: 'text-blue-700 bg-blue-50 border-blue-200',
};

const ResultsSection = () => {
  const [filter, setFilter] = useState<Category | 'Todos'>('Todos');

  const filteredResults =
    filter === 'Todos' ? results : results.filter((r) => r.category === filter);

  const maxCategoryCount = Math.max(
    ...categories.map((c) => results.filter((r) => r.category === c).length)
  );

  return (
    <section id='results' className="relative w-full py-48 px-6 md:px-24 2xl:px-48 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-black to-[#020617] z-0" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2 z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[160px] opacity-30 translate-x-1/2 translate-y-1/2 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="text-sm font-semibold tracking-widest text-blue-400 mb-3">
          CASOS REALES
        </p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-semibold leading-tight tracking-tight mb-8"
        >
          El Impacto de <span className='font-medium italic relative z-10'>Bepass<span className='absolute bottom-0 left-0 w-full h-1 bg-white'></span></span>
        </motion.h2>

        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="rounded-full bg-primary/90 text-white text-xs font-semibold px-3 py-1.5">
            Proyectos reales de BePass
          </span>
          <span className="text-sm italic text-white/50">
            Resultados de clientes, filtrables por área de impacto
          </span>
        </div>

        {/* Filtros */}
        <div className="mb-6">
          <p className="text-xs font-semibold tracking-widest text-white/40 mb-2">
            ÁREA DE IMPACTO
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setFilter('Todos')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                filter === 'Todos'
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white/5 border-white/15 text-white/70 hover:border-white/30'
              }`}
            >
              Todos
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFilter(cat)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                  filter === cat
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white/5 border-white/15 text-white/70 hover:border-white/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Panel / dashboard */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Barra superior */}
          <div className="flex items-center justify-between gap-4 px-5 py-3.5 bg-[#0b1220]">
            <div className="flex items-center gap-3">
              <span className="flex items-center justify-center w-7 h-7 rounded-md bg-primary text-white text-sm font-bold">
                B
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold text-white">BePass · Panel de Impacto</p>
                <p className="text-xs text-white/40">Casos reales · resultados medibles</p>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Datos reales
            </div>
          </div>

          {/* Cuerpo claro */}
          <div className="bg-white text-neutral-900">
            {/* KPIs */}
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-neutral-200">
              {kpis.map((kpi, index) => (
                <div key={index} className="px-5 py-5">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-neutral-400 uppercase mb-2">
                    {kpi.icon}
                    {kpi.label}
                  </div>
                  <p className="text-2xl md:text-3xl font-semibold text-neutral-900">
                    {kpi.value}
                  </p>
                  <p className="text-xs text-neutral-400 mt-1">{kpi.sub}</p>
                </div>
              ))}
            </div>

            {/* Cuerpo: lista + categorías */}
            <div className="grid md:grid-cols-3 border-t border-neutral-200">
              {/* Lista de proyectos */}
              <div className="md:col-span-2 border-b md:border-b-0 md:border-r border-neutral-200 p-5">
                <p className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-neutral-400 uppercase mb-4">
                  <TrendingUp className="w-3.5 h-3.5" />
                  Resultados por proyecto
                </p>
                <div className="flex flex-col gap-3">
                  <AnimatePresence mode="sync">
                    {filteredResults.map((item) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-start gap-3 rounded-lg border border-neutral-200 px-4 py-3"
                      >
                        <span className="mt-0.5 text-primary shrink-0">{item.icon}</span>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="text-sm font-semibold text-neutral-900">
                              {item.title}
                            </h3>
                            <span
                              className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] ${categoryBadge[item.category]}`}
                            >
                              {item.category}
                            </span>
                          </div>
                          <p className="text-sm text-neutral-500 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Impacto por categoría */}
              <div className="p-5">
                <p className="text-[11px] font-semibold tracking-wide text-neutral-400 uppercase mb-4">
                  Impacto por área
                </p>
                <div className="flex flex-col gap-4">
                  {categories.map((cat) => {
                    const count = results.filter((r) => r.category === cat).length;
                    const width = (count / maxCategoryCount) * 100;
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => setFilter(cat)}
                        className="text-left group"
                      >
                        <div className="flex items-center justify-between text-sm mb-1.5">
                          <span className="text-neutral-700 group-hover:text-neutral-900">
                            {cat}
                          </span>
                          <span className="text-neutral-400">
                            {count} {count === 1 ? 'caso' : 'casos'}
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-neutral-100 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${categoryColors[cat]}`}
                            style={{ width: `${width}%` }}
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 px-5 py-3 border-t border-neutral-200 text-xs text-neutral-400">
              <span>Resultados documentados 2024–2025</span>
              <span>Fuente: casos de éxito de proyectos BePass</span>
            </div>
          </div>
        </motion.div>

        <p className="flex items-center gap-2 text-sm text-white/40 mt-4">
          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
          Tocá una categoría para filtrar los resultados
        </p>
      </div>
      <div className='contact-form-wrapper'>
        <ContactForm />
      </div>
    </section>
  );
};

export default ResultsSection;
