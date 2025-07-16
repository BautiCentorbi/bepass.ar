import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { Manrope } from "next/font/google";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Consultoría de Gestión de Negocios con IA - MUTA",
  description:
  'Consultoría de gestión de empresas, automatización de procesos y optimización de negocios con inteligencia artificial. En MUTA ayudamos a empresas a escalar sus operaciones con soluciones personalizadas. Automatizamos procesos. Humanizamos decisiones.',
  keywords: [
    "consultoría de gestión de empresas",
    "consultoría de negocios",
    "automatización empresarial",
    "inteligencia artificial",
    "IA para empresas",
    "automatizar procesos",
    "consultora MUTA",
    "consultoría empresarial moderna",
    "optimización de negocios",
    "gestión de empresas",
    "gestión de negocios",
    "gestión de empresas con inteligencia artificial",
    "gestión empresarial con inteligencia artificial",
    "gestión de negocios con inteligencia artificial",
    "consultora en Mendoza",
    "consultora de empresas en Mendoza",
    "MUTA Consultora"
  ],
  authors: [
    {
      name: "MUTA",
      // url: 'https://www.muta.ai', // Podés dejarlo como placeholder por ahora
    },
  ],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "MUTA - Consultoría de Gestión con IA",
    description:
      "Consultoría moderna en gestión de negocios. Automatizamos procesos, humanizamos decisiones.",
    // url: 'https://www.muta.ai', // Placeholder, actualizá cuando tengas el dominio
    siteName: "MUTA",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://www.muta.ai/meta/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "MUTA Consultoría de Gestión de Negocios con IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MUTA - Consultoría de Gestión con IA",
    description:
      "Automatizamos procesos. Humanizamos decisiones. Consultoría de gestión moderna con foco en eficiencia y tecnología.",
    images: ["https://www.muta.ai/meta/twitter-cover.jpg"],
  },
  // metadataBase: new URL('https://www.muta.ai'), // Actualizá al definir el dominio final
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${manrope.className} overflow-x-hidden`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
