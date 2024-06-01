import { ReactNode } from "react";

interface SelectResolutionProps {
  children: ReactNode;
  onClick?: () => void;
  device: string; 
  resolution: string;
  tabIndex: number;
}

export default function SelectResolution(props: SelectResolutionProps) {
  const { children, onClick, device, resolution, tabIndex } = props;

  return (
    <section
      className={`flex flex-col items-center justify-end p-2 
      rounded border-2 cursor-pointer select-none
      transition-colors duration-100 ease-in-out 

    hover:border-AZUL hover:shadow-AZUL hover:bg-AZUL hover:bg-opacity-10 hover:text-LIGHT-AzulOscuro 

    dark:hover:border-AMARILLO dark:hover:shadow-AMARILLO dark:hover:bg-white dark:hover:bg-opacity-10 dark:hover:text-CREMA

      ${device === resolution 
        ? 'border-AZUL shadow-AZUL bg-AZUL bg-opacity-10 dark:border-AMARILLO dark:shadow-AMARILLO dark:bg-white dark:bg-opacity-10'
        : 'border-LIGHT-AzulOscuro border-opacity-10 text-LIGHT-AzulClaro dark:border-CREMA dark:border-opacity-10 dark:text-CREMA-dark '}
      `}
      onClick={onClick}
      tabIndex={tabIndex}
      aria-label={device}
    >
      {children}
    </section>
  );
}
