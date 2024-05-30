import { ReactNode } from "react";

interface SelectResolutionProps {
  children: ReactNode;
  onClick?: () => void;
  styleClass?: string; 
}

export default function SelectResolution(props: SelectResolutionProps) {
  const { children, onClick, styleClass } = props;

  return (
    <section
      className={`flex flex-col items-center justify-end p-2 
      rounded border-2 
      hover:border-AMARILLO hover:bg-white hover:bg-opacity-10
      transition-colors duration-100 ease-in-out cursor-pointer select-none ${styleClass}`}
      onClick={onClick}
    >
      {children}
    </section>
  );
}
