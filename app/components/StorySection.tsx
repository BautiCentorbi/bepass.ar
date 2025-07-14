'use client'

import { motion } from "motion/react";
import Image from "next/image";

export default function StorySection() {
  return (
    <section id="story" className="px-6 md:px-12 xl:px-20 pt-16 md:py-20 xl:py-32 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tighter text-title_color text-left mb-10"
      >
        Nuestra historia nace del <span className="italic relative">Cambio<span className='absolute bottom-0 left-0 w-full h-1 bg-primary z-0'></span></span>
      </motion.h2>

      <div className="flex flex-col gap-8 text-lg text-muted-foreground max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Soy Joaquín Campos, mendocino, fundador de MUTA. En el pasado fui cofundador de una consultora tradicional, gerente de empresas y actualmente soy empresario vitivinícola más allá de mi rol en MUTA. Conozco de cerca lo que significa tomar decisiones todos los días, enfrentar la incertidumbre y buscar crecer sin perder el control del negocio.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          MUTA no nació de la noche a la mañana. Hace 18 años fundamos una consultora tradicional enfocada en contabilidad, impuestos y una visión retrospectiva del negocio. Aquella etapa fue valiosa: ayudamos a muchas empresas a entender sus números y sus resultados. Pero con el tiempo, sentí que era necesario ir más allá.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Por eso, decidí capacitarme en Europa, especializándome en inteligencia artificial y business intelligence. Profundicé en el manejo de herramientas de programación y hoy estoy cursando una maestría en inteligencia artificial aplicada a los negocios. Estoy convencido de que el futuro de la consultoría no puede limitarse a analizar el pasado y el futuro en entornos lineales.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          MUTA es el reflejo de esa evolución. Una consultora moderna, ágil y centrada en potenciar empresas reales con herramientas tecnológicas, visión estratégica y la dosis justa de consultoría tradicional. Como empresario, me hago las mismas preguntas que vos. Y esa empatía es lo que nos permite diseñar soluciones prácticas, escalables y adaptadas a cada contexto. Detrás de MUTA hay un equipo comprometido con la transformación empresarial, que trabaja codo a codo con cada cliente. Porque adaptarse ya no es una opción, es la única manera de liderar el cambio.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center gap-4 mt-8"
        >
          <Image
            className="w-16 h-16 rounded-full"
            src="/images/Avatar-Joaquin_Campos.webp"
            alt="Avatar de Joaquín Campos"
            width={64}
            height={64}
          />
          <div>
            <h3 className="text-xl font-bold text-neutral-900">Joaquín Campos</h3>
            <p className="text-muted-foreground">Fundador de MUTA</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
