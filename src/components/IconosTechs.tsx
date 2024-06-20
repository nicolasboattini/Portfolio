import { useState, useEffect } from "react";

interface IconosTechsProps {
  tech: string;
  tabIndex: number;
  color?: string;
}

const IconosTechs = ({ tech, tabIndex, color="text-LIGHT-AzulClaro dark:text-CREMA" }: IconosTechsProps) => {
  const [icono, setIcono] = useState('');
  const [iconoSize, setIconoSize] = useState('');

  useEffect(() => {
    switch (tech) {
      case 'HTML':
        setIcono('icon-[ri--html5-fill]');
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        break;
      case 'CSS':
        setIcono('icon-[ri--css3-fill]');
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        break;
      case 'Tailwind':
        setIcono('icon-[ri--tailwind-css-fill]');
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        break;
      case 'JavaScript':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--javascript-fill]');
        break;
      case 'React':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--reactjs-fill]');
        break;
      case 'Next.js':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--nextjs-fill]');
        break;
      case 'MongoDB':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[simple-icons--mongodb]');
        break;
      case 'Firebase':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--firebase-fill]');
        break;
      case 'Git':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[mdi--git]');
        break
      case 'GitHub':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--github-fill]');
        break
      case 'TypeScript':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[bxl--typescript]');
        break
      case 'Node.js':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--nodejs-fill]');
        break
      case 'Express.js':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono('icon-[skill-icons--expressjs-light]');
        break



      default:
        setIcono('icon-[hugeicons--image-not-found-01]');
    }
  }, [tech]);

  return (
    <div
      tabIndex={tabIndex} aria-label={`${tech}`}
      className={`${iconoSize} ${color}`}
    >
      <span className={`w-full h-full ${icono}`}></span>
    </div>
  );
};

export default IconosTechs;
