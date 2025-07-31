'use client'

import { ReactNode, createContext, useContext, useEffect, useState } from "react"
import Lenis from "lenis"

interface ScrollContextValue {
  lenis: Lenis | null
}

const ScrollContext = createContext<ScrollContextValue>({ lenis: null })

export function useScroll() {
  return useContext(ScrollContext)
}

interface ScrollProviderProps {
  children: ReactNode
}

export function ScrollProvider({ children }: ScrollProviderProps) {
  // Ahora usamos state para forzar re-render cuando setLenis cambia
  const [lenis, setLenis] = useState<Lenis | null>(null)

  useEffect(() => {
    const scroller = new Lenis()
    setLenis(scroller)         //  ← esto actualiza el contexto

    function raf(time: number) {
      scroller.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => {
      scroller.destroy()
    }
  }, [])

  return (
    <ScrollContext.Provider value={{ lenis }}>
      {children}
    </ScrollContext.Provider>
  )
}
