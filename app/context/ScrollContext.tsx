'use client';

import { createContext, useContext, useEffect, useRef, useCallback, useMemo, type ReactNode } from 'react';
import Lenis from 'lenis';

type LenisInstance = InstanceType<typeof Lenis>;
type ScrollTarget = Parameters<LenisInstance['scrollTo']>[0];   // string | number | HTMLElement
type ScrollOpts   = NonNullable<Parameters<LenisInstance['scrollTo']>[1]>; // opciones de Lenis

interface ScrollContextValue {
  lenis: LenisInstance | null;
  scrollTo: (target: ScrollTarget, opts?: Partial<ScrollOpts>) => void;
}

const ScrollContext = createContext<ScrollContextValue>({ lenis: null, scrollTo: () => {} });
export const useScroll = () => useContext(ScrollContext);

export function ScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisInstance | null>(null);

  useEffect(() => {
    const l = new Lenis({
      smoothWheel: true,
      lerp: 0.1,
      duration: 1.2,
    });
    lenisRef.current = l;

    let rafId: number;
    const raf = (time: number) => { l.raf(time); rafId = requestAnimationFrame(raf); };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      l.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollTo = useCallback(
    (target: ScrollTarget, opts?: Partial<ScrollOpts>) => {
      const l = lenisRef.current;
      if (!l) return;

      // Si tu "target" viene de querySelector (Element), castealo a HTMLElement
      // const el = document.querySelector('#contact') as HTMLElement | null;

      l.scrollTo(target, { offset: -80, duration: 1.1, ...(opts ?? {}) });
    },
    []
  );

  const value = useMemo<ScrollContextValue>(() => ({
    lenis: lenisRef.current,
    scrollTo,
  }), [scrollTo]);

  return <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>;
}
