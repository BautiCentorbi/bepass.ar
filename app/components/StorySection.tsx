import Image from "next/image";

export default function StorySection() {
  return (
    <section
      id="story"
      className="px-6 md:px-12 xl:px-20 py-16 md:py-20 xl:py-32 max-w-7xl mx-auto"
    >
      <h2
        className="text-4xl md:text-5xl font-semibold tracking-tighter leading-tighter text-title_color text-left mb-10"
      >
        Nuestra historia nace del{" "}
        <span className="italic relative">
          Cambio
          <span className="absolute bottom-0 left-0 w-full h-1 bg-primary z-0"></span>
        </span>
      </h2>

      <div className="flex flex-col gap-8 text-lg text-muted-foreground max-w-5xl">
        <p
        >
          Soy Joaquín Campos, mendocino, fundador de MUTA. Fui cofundador de una
          consultora tradicional, gerente de empresas y hoy soy también
          empresario vitivinícola. Conozco de cerca lo que implica decidir cada
          día, enfrentar la incertidumbre y crecer sin perder el control.
        </p>

        <p
        >
          <span className="font-bold">MUTA no nació de la nada.</span> Hace 18 años comenzamos una consultora
          enfocada en contabilidad e impuestos. Fue una etapa valiosa: ayudamos
          a muchas empresas a entender sus números. Pero con el tiempo, supe que
          era momento de ir más allá.
        </p>

        <p
        >
          Me capacité en Europa en inteligencia artificial y business
          intelligence, y profundicé en programación. Hoy curso una maestría en
          IA aplicada a los negocios, convencido de que la consultoría no puede
          limitarse al análisis lineal del pasado.
        </p>

        <p
        >
          <span className="font-bold">MUTA es el resultado de esa evolución.</span> Una consultora ágil, moderna,
          que combina tecnología, estrategia y la dosis justa de mirada
          tradicional. Como empresario, me hago las mismas preguntas que vos, y
          esa empatía nos permite diseñar soluciones reales, escalables y
          contextualizadas.
        </p>
        <p
        >
          <span className="font-bold">En MUTA trabajamos codo a codo con cada cliente.</span> Porque adaptarse ya
          no es una opción: es el único camino para liderar el cambio
        </p>

        <div
          className="flex items-center gap-4 mt-8"
        >
          <Image
            className="w-16 h-16 rounded-full"
            src="/images/Avatar-Joaquin_Campos.webp"
            alt="Foto/Avatar de Joaquín Campos, fundador de MUTA"
            placeholder="blur"
            blurDataURL="/images/Avatar-Joaquin_Campos.webp"
            width={64}
            height={64}
          />
          <div>
            <h3 className="text-xl font-bold text-neutral-900">
              Joaquín Campos
            </h3>
            <p className="text-muted-foreground">Fundador de MUTA</p>
          </div>
        </div>
      </div>
    </section>
  );
}
