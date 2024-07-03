import { useState, useEffect } from "react";

interface IconosTechsProps {
  tech: string;
  tabIndex: number;
  color?: string;
}

const IconosTechs = ({ tech, tabIndex, color = "text-LIGHT-AzulClaro dark:text-CREMA" }: IconosTechsProps) => {
  const [icono, setIcono] = useState<React.ReactNode>();
  const [iconoSize, setIconoSize] = useState<React.ReactNode>();

  useEffect(() => {
    switch (tech.toLowerCase()) {
      case 'html':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--html5-fill]`}></span>)
        break;
      case 'css':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--css3-fill]`}></span>)
        break;
      case 'tailwind':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--tailwind-css-fill]`}></span>)
        break;
      case 'javascript':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--javascript-fill]`}></span>)
        break;
      case 'react':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--reactjs-fill]`}></span>)
        break;
      case 'next.js':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--nextjs-fill]`}></span>)
        break;
      case 'mongodb':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[simple-icons--mongodb]`}></span>)
        break;
      case 'firebase':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--firebase-fill`}></span>)
        break;
      case 'git':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[mdi--git]`}></span>)
        break
      case 'github':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--github-fill]`}></span>)
        break
      case 'typescript':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[bxl--typescript]`}></span>)
        break
      case 'node.js':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--nodejs-fill]`}></span>)
        break
      case 'express.js':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[skill-icons--expressjs-light]`}></span>);

        break
      case 'solidworks':
        setIconoSize('w-5 h-5 md:w-7 md:h-7');
        setIcono(
          <svg className={`w-16 h-16 ${color}`}  fill="currentColor" xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M12.005 13.003a3 3 0 0 1 2.08 5.162l-1.91 1.837h2.83v2h-6l-.001-1.724l3.694-3.555a1 1 0 1 0-1.693-.72h-2a3 3 0 0 1 3-3m6 0v4h2v-4h2v9h-2v-3h-4v-6zm-14-1a7.99 7.99 0 0 0 3 6.246v2.416a10 10 0 0 1-5-8.662zm8-10c5.185 0 9.449 3.946 9.95 9h-2.012A8.001 8.001 0 0 0 5.87 6.868l2.135 2.135h-6v-6L4.45 5.449a9.98 9.98 0 0 1 7.554-3.446" /></svg>
        )
        break



      default:
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[hugeicons--image-not-found-01]`}></span>);
    }
  }, [tech, color]);

  return (
    <div
      tabIndex={tabIndex} aria-label={`${tech}`}
      className={`flex items-center justify-center ${iconoSize} ${color}`}
    >
     {icono}
    </div>
  );
};

export default IconosTechs;
