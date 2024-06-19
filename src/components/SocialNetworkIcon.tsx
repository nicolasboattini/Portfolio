import { useState, useEffect } from "react";

interface SocialNetworkProps {
  socialNetwork: string;
  link: string;
  tabIndex: number;
}

const SocialNetworkIcon = ({ socialNetwork, link, tabIndex }: SocialNetworkProps) => {
  const [icono, setIcono] = useState('');

  useEffect(() => {
    switch (socialNetwork) {
      case 'Github':
        setIcono('icon-[mdi--github]');
        break;
      case 'Linkedin':
        setIcono('icon-[mdi--linkedin]');
        break;
      case 'Instagram':
        setIcono('icon-[ph--instagram-logo]');
        break;
      case 'FreeCodeCamp':
        setIcono('icon-[simple-icons--freecodecamp]');
        break;
      case 'Email':
        setIcono('icon-[mdi--email-outline]');
        break;
      case 'CV':
        setIcono('icon-[academicons--cv]');
        break;
      default:
        setIcono('');
    }
  }, [socialNetwork]);

  return (
    <a href={link} target="_blank"
      className="flex justify-center items-center p-1 rounded-xl
                border-2 border-transparent shadow
                transition-colors duration-100 ease-in-out
                hover:border-AZUL hover:shadow-AZUL hover:bg-AZUL hover:bg-opacity-10  border-LIGHT-AzulOscuro border-opacity-10 text-LIGHT-AzulClaro hover:text-LIGHT-AzulOscuro
                dark:hover:border-AMARILLO dark:hover:shadow-AMARILLO dark:hover:bg-white dark:hover:bg-opacity-10 dark:border-CREMA dark:border-opacity-10 dark:text-CREMA-dark dark:hover:text-CREMA
                "
    tabIndex={tabIndex} aria-label={`${socialNetwork}`}
                >
      <span className={`w-8 h-8 md:w-10 md:h-10 ${icono}`}></span>
    </a>
  );
};

export default SocialNetworkIcon;
