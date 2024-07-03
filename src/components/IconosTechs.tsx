import { useEffect, useState } from "react";

interface IconosTechsProps {
  tech: string;
  tabIndex: number;
  color?: string;
}

const IconosTechs = ({ tech, tabIndex, color="text-LIGHT-AzulClaro dark:text-CREMA" }: IconosTechsProps) => {
  const [icono, setIcono] = useState('');
  const [iconoSize, setIconoSize] = useState('');

  useEffect(() => {
    switch (tech.toLowerCase()) {
      case 'html':
        setIcono('icon-[ri--html5-fill]');
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        break;
      case 'css':
        setIcono('icon-[ri--css3-fill]');
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        break;
      case 'tailwind':
        setIcono('icon-[ri--tailwind-css-fill]');
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        break;
      case 'javascript':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--javascript-fill]');
        break;
      case 'react':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--reactjs-fill]');
        break;
      case 'next.js':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--nextjs-fill]');
        break;
      case 'mongodb':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[simple-icons--mongodb]');
        break;
      case 'firebase':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--firebase-fill]');
        break;
      case 'git':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[mdi--git]');
        break
      case 'github':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--github-fill]');
        break
      case 'typescript':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[bxl--typescript]');
        break
      case 'node.js':
        setIconoSize('w-6 h-6 md:w-8 md:h-8');
        setIcono('icon-[ri--nodejs-fill]');
        break
      case 'express.js':
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
      className={`flex items-center justify-center${iconoSize} ${color}`}
    >
      <span className={`w-full h-full ${icono}`}></span>
    </div>
  );
};

export default IconosTechs;
