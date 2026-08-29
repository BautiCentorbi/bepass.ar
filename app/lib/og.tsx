import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

async function loadManrope(weight: 500 | 800) {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Manrope:wght@${weight}&display=swap`,
    { headers: { "User-Agent": "Mozilla/5.0" } }
  ).then((res) => res.text());

  const fontUrl = css.match(/src: url\(([^)]+)\)/)?.[1];
  if (!fontUrl) throw new Error("No se pudo resolver la fuente Manrope");

  const fontData = await fetch(fontUrl).then((res) => res.arrayBuffer());
  return fontData;
}

export async function renderOgImage() {
  const [medium, extrabold] = await Promise.all([
    loadManrope(500),
    loadManrope(800),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "linear-gradient(135deg, #0b2b52 0%, #123a6b 45%, #2065b9 100%)",
          fontFamily: "Manrope",
        }}
      >
        {/* Orbes decorativos, en línea con el estilo del Hero del sitio */}
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "9999px",
            background: "#4d94e0",
            opacity: 0.35,
            filter: "blur(10px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -100,
            width: 420,
            height: 420,
            borderRadius: "9999px",
            background: "#0b1f3d",
            opacity: 0.5,
            filter: "blur(10px)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <span
            style={{
              fontSize: 44,
              fontWeight: 800,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            BePass
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <span
            style={{
              fontSize: 68,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: 980,
            }}
          >
            Consultoría de gestión con Inteligencia Artificial
          </span>
          <span
            style={{
              fontSize: 30,
              fontWeight: 500,
              color: "#cfe0f5",
              maxWidth: 820,
            }}
          >
            Automatizamos procesos. Humanizamos decisiones.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "9999px",
              background: "#4d94e0",
            }}
          />
          <span style={{ fontSize: 24, fontWeight: 500, color: "#cfe0f5" }}>
            Gestión · Personas · Tecnología
          </span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Manrope", data: medium, weight: 500, style: "normal" },
        { name: "Manrope", data: extrabold, weight: 800, style: "normal" },
      ],
    }
  );
}
