import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";
import { Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";
import CookiesBanner from "./components/CookiesBanner";
import StructuredData from "./components/StructuredData";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Consultoría de gestión de negocios con IA en Mendoza - BEPASS",
  description:
    "Consultoría de gestión de empresas en Mendoza y en toda Argentina. Ayudamos a mejorar las finanzas, automatizar procesos y optimizar la gestión de tu negocio con inteligencia artificial. Estrategia, personas y tecnología trabajando juntas. Automatizamos procesos. Humanizamos decisiones.",
  keywords: [
    "consultoría de gestión de empresas",
    "consultoría de negocios",
    "automatización empresarial",
    "inteligencia artificial",
    "IA para empresas",
    "automatizar procesos",
    "consultora BEPASS",
    "consultoría empresarial moderna",
    "optimización de negocios",
    "gestión de empresas",
    "gestión de negocios",
    "gestión de empresas con inteligencia artificial",
    "gestión empresarial con inteligencia artificial",
    "gestión de negocios con inteligencia artificial",
    "consultora en Mendoza",
    "consultora de empresas en Mendoza",
    "BEPASS Consultora",
    "cómo mejorar las finanzas de mi empresa",
    "cómo automatizar procesos en mi negocio",
    "mejorar la gestión de mi empresa",
    "cómo optimizar procesos empresariales",
    "consultoría en finanzas para pymes",
    "IA para pymes",
    "mejorar la rentabilidad de mi negocio",
    "diagnóstico empresarial",
  ],
  authors: [
    {
      name: "BEPASS",
      url: "https://bepass.com.ar",
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
    title: "BEPASS - Consultoría de Gestión con IA",
    description:
      "Consultoría moderna en gestión de negocios. Automatizamos procesos, humanizamos decisiones.",
    url: "https://bepass.com.ar",
    siteName: "BEPASS",
    locale: "es_AR",
    type: "website",
    // La imagen 1200x630 se genera automáticamente desde app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: "BEPASS - Consultoría de Gestión con IA",
    description:
      "Automatizamos procesos. Humanizamos decisiones. Consultoría de gestión moderna con foco en eficiencia y tecnología.",
    // La imagen se genera automáticamente desde app/twitter-image.tsx
  },
  metadataBase: new URL("https://bepass.com.ar"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <Script id="consent-default" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              ad_user_data: 'denied',
              ad_personalization: 'denied',
              analytics_storage: 'denied',
              functionality_storage: 'denied',
              security_storage: 'denied'
            });
          `}
        </Script>
        <StructuredData />
      </head>
      <body className={`${manrope.className} overflow-x-hidden`}>
        <Header />
        <CookiesBanner />
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            success: {
              style: {
                background: "#22c55e",
                color: "#fff",
              },
            },
            error: {
              style: {
                background: "#dc2626",
                color: "#fff",
              },
            },
          }}
        />
        <Footer />
      </body>
    </html>
  );
}
