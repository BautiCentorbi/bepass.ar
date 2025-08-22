"use client";
import { useEffect, useState } from "react";

type Gtag = (
  command: "consent",
  action: "update" | "default",
  params: Record<string, "granted" | "denied">
) => void;

type Consent = "accepted_all" | "accepted_essential" | "rejected" | null;
export default function CookiesBannerMutaLight() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("muta-consent") as Consent) || null;
    if (!saved) setOpen(true);
  }, []);

  function updateConsent(next: Consent) {
    localStorage.setItem("muta-consent", next || "");

    const gtag = (window as unknown as { gtag?: Gtag }).gtag;
    if (gtag) {
      if (next === "accepted_all") {
        gtag("consent", "update", {
          ad_user_data: "granted",
          ad_personalization: "granted",
          analytics_storage: "granted",
          functionality_storage: "granted",
          security_storage: "granted",
        });
      } else if (next === "accepted_essential") {
        gtag("consent", "update", {
          functionality_storage: "granted",
          security_storage: "granted",
        });
      } else {
        gtag("consent", "update", {
          ad_user_data: "denied",
          ad_personalization: "denied",
          analytics_storage: "denied",
          functionality_storage: "denied",
          security_storage: "denied",
        });
      }
    }
    window.dispatchEvent(new Event("consent:ready"));
    setOpen(false);
  }

  if (!open) return null;

  return (
    <div className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4">
      <div
        className="
          w-full max-w-3xl rounded-2xl border border-zinc-200
          bg-white/90 backdrop-blur
          shadow-2xl ring-1 ring-zinc-100
        "
      >
        <div className="p-4 sm:p-5">
          <div className="flex items-start gap-3">
            <span className="mt-1 inline-block size-2 rounded-full bg-primary shadow-[0_0_20px] shadow-primary/50" />

            <div className="flex-1">
              <h3 className="text-sm font-medium text-zinc-900">
                Control de privacidad
              </h3>
              <p className="mt-1 text-xs text-zinc-600 leading-relaxed">
                Usamos cookies esenciales y de seguridad (reCAPTCHA) para proteger los formularios y
                mejorar funcionalidades básicas. Podés aceptar solo las esenciales o todas.
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => updateConsent("accepted_essential")}
                  className="
                    inline-flex items-center justify-center rounded-xl
                    border border-zinc-200 bg-zinc-50 px-3 py-1.5 text-xs
                    text-zinc-800 transition
                    hover:bg-zinc-100 hover:border-zinc-300
                    focus:outline-none focus:ring-2 focus:ring-primary/50
                    active:scale-[0.99]
                  "
                >
                  Aceptar esenciales
                </button>

                <button
                  onClick={() => updateConsent("accepted_all")}
                  className="
                    inline-flex items-center justify-center rounded-xl
                    bg-primary px-3 py-1.5 text-xs text-white
                    transition hover:bg-primary/90
                    focus:outline-none focus:ring-2 focus:ring-primary/50
                    active:scale-[0.99]
                  "
                >
                  Aceptar todo
                </button>

                <button
                  onClick={() => updateConsent("rejected")}
                  className="
                    inline-flex items-center justify-center rounded-xl
                    px-3 py-1.5 text-xs text-zinc-500
                    transition hover:text-zinc-700 hover:bg-zinc-100
                    focus:outline-none focus:ring-2 focus:ring-zinc-300
                    active:scale-[0.99]
                  "
                >
                  Rechazar
                </button>

                <a
                  href="/politica-de-cookies"
                  className="
                    ml-auto text-[11px] text-zinc-500 underline underline-offset-4
                    hover:text-zinc-700
                  "
                >
                  Ver detalles
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 w-full rounded-b-2xl bg-gradient-to-r from-primary/70 via-primary to-primary/70" />
      </div>
    </div>
  );
}
