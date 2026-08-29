import { ogContentType, ogSize, renderOgImage } from "@/app/lib/og";

export const alt = "BEPASS Consultoría de Gestión de Negocios con IA";
export const size = ogSize;
export const contentType = ogContentType;

export default async function OpengraphImage() {
  return renderOgImage();
}
