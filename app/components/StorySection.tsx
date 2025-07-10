import React from "react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: "400",
  style: "italic",
});

const StorySection = () => {
  return (
    <section className="flex my-32 px-8 md:px-24 2xl:px-48 w-full">
      <div className="flex flex-col md:flex-row items-start justify-center ">
        <div>
          <h2 className="min-w-lg text-4xl md:text-6xl font-medium text-title_color tracking-tighter leading-tighter">
            Nuestra{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic font-bold">
                <span className={`${playfair.className} font-bold`}>
                  Historia
                </span>
              </span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 z-0"></span>
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-12 mx-4">
          <p className="text-2xl">
            Este proyecto nació como una evolución. Durante años lideramos una consultora
            tradicional de gestión de negocios, con buenos resultados. Pero
            sabíamos que el modelo clásico tenía un límite. Veíamos cómo los
            procesos se volvían lentos, repetitivos, poco adaptables. Y
            entendimos que era momento de mutar.
          </p>
          <p className="text-2xl">
            Dejamos atrás lo conocido para repensar desde cero cómo acompañar a
            las empresas. A partir de años de investigación, prueba y reflexión,
            desarrollamos una nueva forma de entender la consultoría: más ágil,
            más precisa, más conectada con el presente.
          </p>
          <p className="text-2xl">
            Así nació MUTA: una consultora estratégica que integra tecnología,
            inteligencia artificial y visión humana para automatizar procesos y
            potenciar decisiones. No solo hacemos que tu negocio funcione mejor:
            lo ayudamos a crecer con criterio, con control y con impacto real.
          </p>
          <div className="my-12 flex justify-end">
            <Image className="w-18 h-18 rounded-full" src="/images/Avatar-Joaquin_Campos.webp" alt="Logo de MUTA" width={214} height={120} />
            <div className="flex flex-col ml-4">
              <h3 className="text-2xl font-bold">Joaquin Campos</h3>
              <p className="text-lg">Fundador de MUTA</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
