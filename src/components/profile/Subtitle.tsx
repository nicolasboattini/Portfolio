import { useState, useEffect } from "react";

interface SubtitleProps {
  string: string;
}
interface FlagProps {
  nationality: string;
}
const Subtitle = ({ string }: SubtitleProps) => {
  return (
    <p className="md:min-h-14 flex items-center justify-center px-1 md:px-3 text-center
                    rounded-lg border-2 
                  border-AZUL shadow-AZUL bg-AZUL bg-opacity-10 
                  dark:border-AMARILLO shadow dark:shadow-AMARILLO dark:bg-white dark:bg-opacity-10 
                  ">
      {string}
    </p>
  )
}

const Flag = ({ nationality }: FlagProps) => {
  const [icono, setIcono] = useState('');

  useEffect(() => {
    switch (nationality) {
      case 'argentina':
        setIcono('icon-[twemoji--flag-argentina]');
        break;
      default:
        setIcono('icon-[openmoji--white-square-flag]');
    }
  }, [nationality]);
  return (
    <div className="w-9 h-7 md:w-16 md:h-14 flex place-items-center px-2 rounded-lg border-2 
                  border-AZUL shadow-AZUL bg-AZUL bg-opacity-10 
                  dark:border-AMARILLO shadow dark:shadow-AMARILLO dark:bg-white dark:bg-opacity-10 
                  ">
      <span className={`w-full h-full ${icono}`} />
    </div>
  )
}

export { Subtitle, Flag }