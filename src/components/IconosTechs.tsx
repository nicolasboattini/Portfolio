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
      case 'c#':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono('icon-[teenyicons--c-sharp-outline]');
        break
      case 'express.js':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono('icon-[skill-icons--expressjs-light]');
        break
      case 'c++':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono('icon-[nonicons--c-plusplus-16]');
        break
      case 'c':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono('icon-[nonicons--c-16]');
        break
      case 'python':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[ant-design--python-outlined]');
        break
      case 'google suite':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[ph--google-drive-logo]');
        break
      case 'microsoft office':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[hugeicons--office-365]');
        break
      case 'jira':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[simple-icons--jira]');
        break
      case 'trello':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[ri--trello-fill]');
        break
      case 'slack':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[mdi--slack]');
        break
      case 'illustrator':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[hugeicons--adobe-illustrator]');
        break
      case 'photoshop':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[hugeicons--adobe-photoshop]');
        break
      case 'sql':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[hugeicons--sql]');
        break
      case 'mysql':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[devicon-plain--mysql]');
        break
      case 'mariadb':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[simple-icons--mariadbfoundation]');
        break
      case 'visual studio code':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[codicon--vscode-insiders]');
        break
      case 'visual studio':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[fontisto--visual-studio]');
        break
      case '.net':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[devicon-plain--dot-net]');
        break
      case 'unity':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[cib--unity]');
        break
      case 'unreal':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[mdi--unreal]');
        break
      case 'dialogflow':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[simple-icons--dialogflow]');
        break
      case 'jira':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[simple-icons--jira]');
        break
      case 'jira':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono('icon-[simple-icons--jira]');
        break



      default:
        setIcono('icon-[hugeicons--image-not-found-01]');
    }
  }, [tech]);

  return (
    <div
      tabIndex={tabIndex} aria-label={`${tech}`}
      className={`flex items-center justify-center ${iconoSize} ${color}`}
    >
      <span className={`w-full h-full ${icono}`}></span>
    </div>
  );
};

export default IconosTechs;
