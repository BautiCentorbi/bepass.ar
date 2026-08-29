"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/app/lib/faqData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section
      id="faq"
      className="px-6 md:px-12 xl:px-20 py-16 md:py-24 max-w-5xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-semibold tracking-tighter leading-tight text-title_color max-w-3xl"
      >
        Preguntas{" "}
        <span className="italic relative">
          frecuentes
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary z-0"></span>
        </span>
      </motion.h2>

      <p className="text-lg text-muted-foreground max-w-2xl mt-4 mb-10">
        Dudas comunes sobre gestión, finanzas, procesos y cómo trabajamos en
        BePass.
      </p>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={faq.question}
              className="rounded-2xl border border-neutral-200 bg-white overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                aria-expanded={isOpen}
                className="w-full flex items-center justify-between gap-4 text-left px-5 md:px-7 py-5 md:py-6"
              >
                <span className="text-base md:text-lg font-semibold text-neutral-900">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-primary transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 md:px-7 pb-5 md:pb-6 -mt-1">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
