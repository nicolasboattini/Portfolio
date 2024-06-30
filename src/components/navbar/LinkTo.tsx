import { Link, useLocation } from "react-router-dom"

interface LinkToProps {
  to: string;
  label: string;
  tabIndex: number;
}

export default function LinkTo({ to, label, tabIndex }: LinkToProps) {
  const location = useLocation();
  return (
    <Link
      tabIndex={tabIndex}
      to={to}
      className={`rounded px-1 py-0.5 border-2 flex justify-center items-center gap-1
          ${location.pathname === to
          ? 'dark:border-AMARILLO dark:text-AMARILLO border-AZUL text-AZUL'
          : 'border-transparent dark:text-CREMA text-AZUL-dark'}
          hover:border-AZUL hover:text-AZUL
          dark:hover:border-AMARILLO dark:hover:text-AMARILLO

          
          transition-colors duration-300 ease-in-out
    `}><p className="text-lg md:text-2xl font-ubuntu font-thin dark:text-AMARILLO text-AZUL">#</p> {label}</Link>
  )
}
