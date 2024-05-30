import { ReactNode } from "react";

interface SelectResolutionProps {
  children: ReactNode;
  onClick?: () => void;
}

export default function SelectResolution(props: SelectResolutionProps) {
  const { children, onClick } = props;

  return (
    <section 
      className="flex flex-col items-center justify-end p-1 
      rounded border-2 border-transparent hover:border-AMARILLO hover:bg-white hover:bg-opacity-10 
      transition-colors duration-100 ease-in-out cursor-pointer select-none"
      onClick={onClick}
    >
      {children}
    </section>
  )
}
