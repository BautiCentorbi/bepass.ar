"use client";

import { motion } from "motion/react";
import {
  Users,
  Wallet,
  ClipboardList,
  Megaphone,
  Factory,
  Cpu,
  TrendingUp,
  Truck,
} from "lucide-react";
import ScrollButton from "./ui/ScrollButton";

const areas = [
  { label: "RRHH", icon: <Users className="w-6 h-6" /> },
  { label: "Finanzas", icon: <Wallet className="w-6 h-6" /> },
  { label: "Administración", icon: <ClipboardList className="w-6 h-6" /> },
  { label: "Marketing", icon: <Megaphone className="w-6 h-6" /> },
  { label: "Operaciones", icon: <Factory className="w-6 h-6" /> },
  { label: "Tecnología", icon: <Cpu className="w-6 h-6" /> },
  { label: "Comercial y Ventas", icon: <TrendingUp className="w-6 h-6" /> },
  { label: "Logística", icon: <Truck className="w-6 h-6" /> },
];

export default function AreasSection() {
  return (
    <section
      id="areas"
      className="px-6 md:px-12 xl:px-20 py-16 md:py-24 max-w-7xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-semibold tracking-tighter leading-tight text-title_color max-w-3xl"
      >
        No trabajamos un rubro:{" "}
        <span className="italic relative">
          trabajamos toda tu empresa
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary z-0"></span>
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg md:text-xl mt-4 md:mt-6 text-muted-foreground max-w-2xl"
      >
        Da igual en qué área quieras mejorar: nos metemos a fondo en
        cualquier sector de tu negocio.
      </motion.p>

      <div className="mt-10 md:mt-12 rounded-3xl border border-neutral-200 bg-neutral-50 shadow-md p-6 md:p-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {areas.map((area, idx) => (
            <motion.div
              key={area.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group flex flex-col items-center text-center gap-3 rounded-2xl bg-white border border-neutral-200 p-5 md:p-6 shadow-sm hover:border-primary hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <span className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {area.icon}
              </span>
              <span className="text-sm md:text-base font-semibold text-neutral-900">
                {area.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 px-6 py-8 md:px-10 md:py-10"
      >
        <p className="text-lg md:text-xl font-medium text-title_color text-center sm:text-left">
          ¿Ves una oportunidad de mejora en alguna de estas áreas? Conversemos
          y potenciémosla juntos.
        </p>
        <div className="shrink-0">
          <ScrollButton />
        </div>
      </motion.div>
    </section>
  );
}
