'use client'

import Lenis from "lenis";
import { useState, useEffect, useContext,createContext } from "react";

const SmoothScrollContext = createContext();

export const useScrollContext = () => useContext(SmoothScrollContext);

export default function ScrollContext({ children }) {
    const [lenisRef, setLenis] = useState(null);
    const [rafState, setRaf] = useState(null);

    useEffect (() => {
      const scroller = new Lenis()
      let rf

      function raf (time) {
        scroller.raf(time)
        requestAnimationFrame(raf)
      }

      rf = requestAnimationFrame(raf)
      setRaf(rf)
      setLenis(scroller)
  
    return () => {
        if (lenisRef) {
          cancelAnimationFrame(rafState)
          lenisRef.destroy()
        }
      }
    }, [])

  return (
    <SmoothScrollContext.Provider value={{ lenisRef }}>
      {children}
    </SmoothScrollContext.Provider>
  );
} 
    