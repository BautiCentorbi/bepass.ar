"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import {
  Compass,
  X,
  Home,
  Target,
  Workflow,
  LayoutGrid,
  BookOpen,
  Users,
  HelpCircle,
  TrendingUp,
  Mail,
} from "lucide-react";
import { useScroll } from "@/app/context/ScrollContext";

const sections = [
  { id: null, label: "Inicio", icon: Home },
  { id: "purpose", label: "Propósito", icon: Target },
  { id: "how-we-work", label: "Cómo Trabajamos", icon: Workflow },
  { id: "areas", label: "Áreas", icon: LayoutGrid },
  { id: "story", label: "Historia", icon: BookOpen },
  { id: "our-team", label: "Nuestro Equipo", icon: Users },
  { id: "faq", label: "Preguntas Frecuentes", icon: HelpCircle },
  { id: "results", label: "Resultados", icon: TrendingUp },
  { id: "contact", label: "Contacto", icon: Mail },
] as const;

const easeOutExpo = [0.16, 1, 0.3, 1] as const;

const dropdownVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -8 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.25,
      ease: easeOutExpo,
      staggerChildren: 0.035,
      delayChildren: 0.05,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -6,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: {
      duration: 0.35,
      ease: easeOutExpo,
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
  exit: { x: "100%", transition: { duration: 0.25, ease: "easeIn" as const } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0 },
};

const drawerItemVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0 },
};

export default function FloatingNav() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const { scrollTo, lenis } = useScroll();
  const pathname = usePathname();
  const router = useRouter();
  // Guarda el id al que hay que scrollear una vez que volvamos a la home
  // (por ejemplo, al navegar desde /ejemplos, donde esas secciones no existen).
  const pendingSectionId = useRef<string | null>(null);

  // Cuando volvemos a la home con un scroll pendiente, esperamos a que la
  // sección exista en el DOM (puede tardar un tick tras el cambio de ruta)
  // y recién ahí hacemos el scroll.
  useEffect(() => {
    if (pathname !== "/" || !pendingSectionId.current) return;

    const id = pendingSectionId.current;
    pendingSectionId.current = null;
    let attempts = 0;
    let rafId: number;

    const tryScroll = () => {
      const target = document.getElementById(id);
      if (target) {
        scrollTo(target);
      } else if (attempts < 30) {
        attempts += 1;
        rafId = requestAnimationFrame(tryScroll);
      }
    };

    rafId = requestAnimationFrame(tryScroll);
    return () => cancelAnimationFrame(rafId);
  }, [pathname, scrollTo]);

  // Cierra al hacer click afuera o con Escape
  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  // Resalta la sección activa mientras se scrollea
  useEffect(() => {
    const ids = sections
      .map((s) => s.id)
      .filter((id): id is Exclude<(typeof sections)[number]["id"], null> => id !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = useCallback(
    (id: string | null) => {
      // Las secciones sólo existen en la home. Si estamos en otra ruta
      // (p. ej. /ejemplos), primero navegamos ahí y recién después scrolleamos.
      if (pathname !== "/") {
        pendingSectionId.current = id;
        router.push(id === null ? "/" : `/#${id}`);
        setOpen(false);
        return;
      }

      if (id === null) {
        if (lenis) {
          scrollTo(0, { offset: 0 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
        setActiveId(null);
      } else {
        const target = document.getElementById(id);
        if (target) scrollTo(target);
      }
      setOpen(false);
    },
    [scrollTo, lenis, pathname, router]
  );

  return (
    <div ref={navRef} className="contents">
      {/* ---------- Desktop: pill centrada arriba + dropdown ---------- */}
      <div className="hidden md:flex fixed top-5 2xl:top-8 left-1/2 -translate-x-1/2 z-40 flex-col items-center">
        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="flex items-center gap-2 2xl:gap-3 rounded-full bg-white/85 backdrop-blur-md border border-neutral-200 shadow-lg px-4 py-2.5 2xl:px-9 2xl:py-5 text-sm 2xl:text-xl font-medium text-neutral-800"
        >
          <motion.span
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ duration: 0.25, ease: easeOutExpo }}
            className="flex items-center justify-center"
          >
            {open ? (
              <X className="w-4 h-4 2xl:w-7 2xl:h-7" />
            ) : (
              <Compass className="w-4 h-4 2xl:w-7 2xl:h-7" />
            )}
          </motion.span>
          <span>Explorar</span>
        </motion.button>

        <AnimatePresence>
          {open && (
            <motion.div
              variants={dropdownVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-2 2xl:mt-4 w-[18rem] 2xl:w-[30rem] rounded-2xl bg-white/95 backdrop-blur-md border border-neutral-200 shadow-xl p-2 2xl:p-3 origin-top"
            >
              <ul className="flex flex-col">
                {sections.map(({ id, label, icon: Icon }) => {
                  const isActive = id === activeId;
                  return (
                    <motion.li key={label} variants={itemVariants}>
                      <button
                        type="button"
                        onClick={() => handleNavigate(id)}
                        className={`group w-full flex items-center gap-3 2xl:gap-4 rounded-xl px-3 py-2 2xl:px-5 2xl:py-4 text-left text-sm 2xl:text-xl transition-colors ${
                          isActive
                            ? "text-blue-600 bg-blue-50"
                            : "text-neutral-700 hover:bg-neutral-100 hover:text-blue-600"
                        }`}
                      >
                        <Icon className="w-4 h-4 2xl:w-6 2xl:h-6 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                        <span className="flex-1 transition-transform duration-200 group-hover:translate-x-0.5">
                          {label}
                        </span>
                        {isActive && (
                          <motion.span
                            layoutId="floating-nav-active-dot-desktop"
                            className="w-2 h-2 rounded-full bg-blue-600"
                            transition={{ type: "spring", stiffness: 500, damping: 35 }}
                          />
                        )}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ---------- Mobile: tab en el borde + drawer lateral ---------- */}
      <div className="md:hidden">
        <motion.button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          whileTap={{ scale: 0.95 }}
          className="fixed top-1/2 right-0 -translate-y-1/2 z-40 flex flex-col items-center gap-1.5 rounded-l-2xl bg-white/90 backdrop-blur-md border border-r-0 border-neutral-200 shadow-lg px-2.5 py-4"
        >
          <Compass className="w-5 h-5 text-neutral-800" />
          <span
            className="text-[11px] font-medium text-neutral-800 tracking-wide"
            style={{ writingMode: "vertical-rl" }}
          >
            Explorar
          </span>
        </motion.button>

        <AnimatePresence>
          {open && (
            <>
              <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 z-40 bg-black/40"
              />
              <motion.div
                key="drawer"
                variants={drawerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="fixed inset-y-0 right-0 z-50 w-[78vw] max-w-xs bg-white shadow-2xl p-5 pt-8 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-lg font-semibold text-neutral-900">Explorar</span>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Cerrar menú de navegación"
                    className="p-1.5 rounded-full hover:bg-neutral-100 text-neutral-600"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <ul className="flex flex-col gap-1 overflow-y-auto">
                  {sections.map(({ id, label, icon: Icon }) => {
                    const isActive = id === activeId;
                    return (
                      <motion.li key={label} variants={drawerItemVariants}>
                        <button
                          type="button"
                          onClick={() => handleNavigate(id)}
                          className={`w-full flex items-center gap-3 rounded-xl px-3 py-3 text-left text-base transition-colors ${
                            isActive
                              ? "text-blue-600 bg-blue-50"
                              : "text-neutral-700 active:bg-neutral-100"
                          }`}
                        >
                          <Icon className="w-5 h-5 shrink-0" />
                          <span className="flex-1">{label}</span>
                          {isActive && (
                            <motion.span
                              layoutId="floating-nav-active-dot-mobile"
                              className="w-2 h-2 rounded-full bg-blue-600"
                              transition={{ type: "spring", stiffness: 500, damping: 35 }}
                            />
                          )}
                        </button>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
