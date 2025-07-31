import React from "react";

interface NeumorphismButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  ariaLabel: string;
  children: React.ReactNode;
}

export function NeumorphismButton({
  label,
  ariaLabel,
  children,
  className = "",
  ...rest // <-- recoge onClick, disabled, etc.
}: NeumorphismButtonProps) {
  return (
    <button
      aria-label={ariaLabel}
      {...rest}        // <-- inyecta onClick, type, etc.
      className={`
        px-6 py-4 xl:px-8 xl:py-4
        rounded-full flex items-center gap-2
        text-slate-500 text-lg 2xl:text-xl
        shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
        transition-all
        hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
        hover:text-blue-500
        ${className}
      `}
    >
      {children}
      <span className="text-lg md:text-xl">{label}</span>
    </button>
  );
}
