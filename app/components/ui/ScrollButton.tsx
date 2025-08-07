"use client";

import { Send } from "lucide-react";
import { useScroll } from "@/app/context/ScrollContext";
import { NeumorphismButton } from "./NeumorphismButton";

export default function ScrollButton() {
  const { scrollTo } = useScroll();

  const handleGoToContact = () => {
    if (!scrollTo) return;
    const target = document.getElementById("contact");
    if (!target) return;
    scrollTo(target, {
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
