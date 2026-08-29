import { faqs } from "@/app/lib/faqData";

// Datos estructurados (schema.org) para:
// 1) que Google entienda la entidad "BePass" (nombre, socios, contacto, redes)
// 2) que buscadores/asistentes de IA (ChatGPT, Perplexity, Google AI Overviews)
// puedan citar a BePass con datos correctos (GEO - Generative Engine Optimization)
export default function StructuredData() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://www.bepass.com.ar/#organization",
    name: "BePass",
    url: "https://www.bepass.com.ar",
    logo: "https://www.bepass.com.ar/android-chrome-512x512.png",
    image: "https://www.bepass.com.ar/android-chrome-512x512.png",
    description:
      "Consultoría de gestión de empresas con inteligencia artificial. Trabajamos estrategia, gestión, personas y tecnología para mejorar procesos, finanzas y resultados de negocios de cualquier rubro.",
    areaServed: "AR",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mendoza",
      addressCountry: "AR",
    },
    founders: [
      {
        "@type": "Person",
        name: "Marina Monforte",
        jobTitle: "Socia · Estrategia, Personas y Negocios",
      },
      {
        "@type": "Person",
        name: "Joaquín Campos",
        jobTitle: "Socio Fundador · Estrategia, Gestión y Negocios",
      },
    ],
    sameAs: [
      "https://www.instagram.com/bepass_ai/",
      "https://www.linkedin.com/company/bepass-ai-consultora/",
    ],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
