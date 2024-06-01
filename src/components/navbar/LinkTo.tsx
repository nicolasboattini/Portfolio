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
      className={`border-b-2   
          ${location.pathname === to
          ? 'border-AZUL text-AZUL dark:border-CREMA dark:text-CREMA'
          : 'border-LIGHT-AzulClaro text-LIGHT-AzulClaro  dark:border-DARK-BORDER-light '}
          hover:border-AZUL hover:text-AZUL dark:hover:border-CREMA dark:hover:text-CREMA
          transition-colors duration-300 ease-in-out
    `}>{label}</Link>
  )
}
