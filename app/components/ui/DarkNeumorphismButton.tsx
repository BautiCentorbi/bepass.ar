// ui/DarkNeumorphismButton.tsx
import React from "react";

interface DarkNeumorphismButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  ariaLabel: string;
  children?: React.ReactNode;
}

const DarkNeumorphismButton: React.FC<DarkNeumorphismButtonProps> = ({
  label,
  ariaLabel,
  children,
  type = "button", // por defecto button, lo podrás sobreescribir
  ...rest // aquí van type, onClick, disabled, etc.
}) => {
  return (
    <button
      type={type} // ¡importante!
      aria-label={ariaLabel}
      {...rest} // esparce TODO lo que venga: onClick, className, disabled...
      className={`
        px-6 py-4 xl:px-8 xl:py-4
        rounded-full flex items-center gap-2
        text-zinc-200 text-lg md:text-xl
        bg-zinc-800
        shadow-[-5px_-5px_10px_rgba(60,60,60,0.8),5px_5px_10px_rgba(0,0,0,0.6)]
        transition-all duration-200
        hover:shadow-[-1px_-1px_5px_rgba(80,80,80,0.6),
                      1px_1px_5px_rgba(0,0,0,0.5),
                      inset_-2px_-2px_5px_rgba(60,60,60,1),
                      inset_2px_2px_4px_rgba(0,0,0,0.5)]
        hover:bg-zinc-700 hover:text-blue-400
      `}
    >
      {children}
      <span>{label}</span>
    </button>
  );
};

export default DarkNeumorphismButton;
