import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ExamplesClient from "./ExamplesClient";

export const metadata: Metadata = {
  title: "Ejemplos de tableros de gestión - BEPASS",
  description:
    "Ejemplos de tableros de gestión que implementamos para nuestros clientes: marketing digital y control comercial en tiempo real.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function EjemplosPage() {
  return (
    <main className="w-full bg-black/5 px-6 md:px-24 2xl:px-48 py-32">
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <Link
          href="/#how-we-work"
          className="inline-flex items-center gap-2 text-sm text-foreground/70 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a la web
        </Link>
        <h1 className="text-4xl md:text-6xl font-medium text-title_color tracking-tight leading-tight mb-6">
          Ejemplos de{" "}
          <span className="relative italic font-medium z-10">
            tableros
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary z-0" />
          </span>
        </h1>
        <p className="text-lg md:text-2xl text-foreground max-w-4xl mx-auto">
          Dos ejemplos representativos del tipo de tableros de gestión que implementamos para
          nuestros clientes. Números y nombres ilustrativos.
        </p>
      </div>

      <ExamplesClient />
    </main>
  );
}
