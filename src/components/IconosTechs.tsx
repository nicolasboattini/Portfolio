import { useState, useEffect } from "react";

interface IconosTechsProps {
  tech: string;
  tabIndex: number;
}

const IconosTechs = ({ tech, tabIndex }: IconosTechsProps) => {
  const [icono, setIcono] = useState('');

  useEffect(() => {
    switch (tech) {
      case 'HTML':
        setIcono('icon-[ri--html5-fill]');
        break;
      case 'CSS':
        setIcono('icon-[ri--css3-fill]');
        break;
      case 'Tailwind':
        setIcono('icon-[ri--tailwind-css-fill]');
        break;
      case 'JavaScript':
        setIcono('icon-[ri--javascript-fill]');
        break;
      case 'React':
        setIcono('icon-[ri--reactjs-fill]');
        break;
      case 'Next.js':
        setIcono('icon-[ri--nextjs-fill]');
        break;
      case 'MongoDb':
        setIcono('icon-[simple-icons--mongodb]');
        break;
      case 'Firebase':
        setIcono('icon-[ri--firebase-fill]');
        break;
      case 'Git':
        setIcono('icon-[mdi--git]')
        break
      case 'GitHub':
        setIcono('icon-[ri--github-fill]')
        break
      default:
        setIcono('icon-[hugeicons--image-not-found-01]');
    }
  }, [tech]);

  return (
    <div
      tabIndex={tabIndex} aria-label={`${tech}`}
      className={`w-6 h-6 md:w-8 md:h-8 text-LIGHT-AzulClaro dark:text-CREMA`}
    >
      <span className={`w-full h-full ${icono}`}></span>
    </div>
  );
};

export default IconosTechs;
