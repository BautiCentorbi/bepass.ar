"use client";

import { Send } from "lucide-react";
import { useScroll } from "@/app/context/ScrollContext";
import { NeumorphismButton } from "./NeumorphismButton";

export default function ScrollButton() {
  const { lenis } = useScroll();

  const handleGoToContact = () => {
    console.log('Scroll Button clickeado', lenis)
    if (!lenis) return;
    const target = document.getElementById("contact");
    if (!target) return;
    lenis.scrollTo(target, {
      offset: -80,
      duration: 1.0,
      easing: (t: number): number => Math.pow(t, 0.8),
    });
  };

  return (
    <NeumorphismButton
      ariaLabel="Trabajemos juntos"
      label="Trabajemos juntos"
      className="w-fit"
      onClick={handleGoToContact}  // ahora sí llega al <button>
    >
      <Send />
    </NeumorphismButton>
  );
}
