interface NeumorphismButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  ariaLabel: string;
  children: React.ReactNode;
}

const NeumorphismButton = ({
  label,
  ariaLabel,
  children,
}: NeumorphismButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={`
  px-6 py-4 2xl:px-12 2xl:py-4
  rounded-full 
  flex items-center gap-2 
  text-slate-500 text-lg 2xl:text-xl
  shadow-[-5px_-5px_10px_rgba(255,_255,_255,_0.8),_5px_5px_10px_rgba(0,_0,_0,_0.25)]
  
  transition-all

  hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]
  hover:text-blue-500
`}
    >
      {children}
      <span className="text-xl 2xl:text-2xl">{label}</span>
    </button>
  );
};

export default NeumorphismButton;
