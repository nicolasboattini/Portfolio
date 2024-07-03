import { useEffect, useState } from "react";

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
      case 'c#':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[teenyicons--c-sharp-outline]`}></span>)
        break
      case 'express.js':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[skill-icons--expressjs-light]`}></span>);
        break
      case 'solidworks':
        setIconoSize('w-5 h-5 md:w-7 md:h-7');
        setIcono(
          <svg className={`w-full h-full ${color}`} fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="M31.99,22.4c0-.82,0-1.64,0-2.45,0-.89,0-1.78,0-2.67,0-.82,0-1.64,0-2.45,0-.89,0-1.78,0-2.67,0-.82,0-1.64,0-2.45,0-.89,0-1.78,0-2.67,0-.66-.03-1.32,0-1.98,0-.09,0-.19-.08-.26,0,0,0,0,0,0-.01-.12-.13-.12-.21-.15-.34-.12-.7-.2-1.04-.32-.27-.07-.53-.15-.8-.23-.65-.19-1.3-.39-1.94-.58-1.14-.37-2.29-.69-3.43-1.04-.32-.09-.64-.2-.96-.29-.32-.1-.63-.21-.96-.29-.25-.06-.48-.21-.75-.18-.06-.01-.13-.03-.19-.04-1.72-.52-3.44-1.03-5.16-1.56-.33-.1-.64-.17-.97-.03-.03.01-.05.03-.08.04-2.55.77-5.11,1.54-7.66,2.3-.38.11-.75.27-1.15.32-.11,0-.22.03-.32.06-.78.23-1.56.48-2.34.71-1.03.31-2.06.64-3.09.93-.18.1-.42.08-.58.23-.07.07-.2.04-.26.12-.04.11-.02.23-.02.34C0,11.8,0,18.48,0,25.16c0,.31.03.54.39.61.04.08.12.1.2.13.21.08.43.17.63.26.58.22,1.15.46,1.73.7.63.25,1.27.49,1.89.75.26.1.51.2.77.31.63.26,1.26.5,1.89.76.6.24,1.2.47,1.79.73.62.21,1.22.48,1.83.72.26.1.52.2.77.31.33.13.66.27.99.39.3.11.58.29.92.32.64.26,1.28.51,1.93.76.09.04.18.13.31.07.09-.03.18-.06.27-.09.62-.24,1.24-.49,1.86-.74.03-.02.06-.04.1-.05,1.7-.68,3.39-1.36,5.09-2.04,1-.4,1.99-.79,2.99-1.19.18.03.31-.08.46-.14,1.32-.52,2.63-1.05,3.94-1.58.34-.13.67-.28,1.02-.4.18-.05.25-.18.26-.36,0-.11,0-.23,0-.34-.02-.88,0-1.76,0-2.65ZM11.68,23.11c-.28,1.25-1.2,1.87-2.53,1.66-1.86-.3-3.21-1.31-4.16-2.83-.49-.78-.76-1.64-.79-2.55,0-.17,0-.24.21-.16.44.16.88.31,1.33.45.14.04.17.12.18.25.06,1.54,1.12,2.69,2.71,2.97.71.12,1.2-.19,1.3-.87.14-.87-.16-1.61-.81-2.23-.58-.55-1.25-.99-1.88-1.48-.83-.65-1.59-1.36-2.12-2.27-.53-.92-.74-1.9-.55-2.95.26-1.4,1.37-2.14,2.83-1.88,2,.36,3.25,1.55,3.98,3.3.23.55.34,1.13.37,1.73,0,.15-.03.19-.18.13-.47-.16-.95-.31-1.42-.45-.15-.04-.19-.11-.2-.25-.04-.87-.36-1.63-1.11-2.16-.41-.29-.87-.46-1.38-.5-.62-.05-1.04.24-1.17.82-.14.63-.01,1.2.38,1.72.46.6,1.06,1.06,1.68,1.49.96.67,1.86,1.41,2.53,2.36.6.86.89,1.81.89,2.84,0,.29-.02.57-.08.85ZM29.13,11.47c-.46,3-.92,6-1.38,9-.12.79-.24,1.58-.36,2.37-.02.11-.07.17-.18.21-.4.15-.79.3-1.18.46-.15.06-.19.02-.21-.12-.47-2.4-.95-4.8-1.43-7.2-.08-.42-.17-.83-.3-1.25-.08.43-.15.85-.23,1.28-.51,2.87-1.02,5.74-1.53,8.61-.02.12-.08.17-.19.21-.42.16-.83.31-1.24.49-.16.07-.2.03-.22-.12-.22-1.26-.45-2.51-.67-3.77-.49-2.72-.98-5.43-1.46-8.15-.06-.31-.06-.31.25-.41.39-.13.79-.26,1.18-.4.13-.05.19-.05.21.11.46,2.91.92,5.83,1.38,8.74.02.1.04.21.09.31.07-.41.14-.81.21-1.22.51-2.98,1.02-5.96,1.54-8.93.01-.08.01-.15.11-.19.42-.13.83-.27,1.26-.42.56,2.95,1.12,5.88,1.68,8.81.03,0,.05,0,.08,0,.08-.55.15-1.1.23-1.64.34-2.47.68-4.94,1.02-7.41.03-.21.06-.42.09-.64,0-.06,0-.13.08-.16.48-.16.95-.32,1.46-.48-.1.65-.19,1.27-.29,1.89Z" /></svg>
        )
        break
      case 'c++':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[nonicons--c-plusplus-16]`}></span>);
        break
      case 'c':
        setIconoSize('w-5 h-5 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[nonicons--c-16]`}></span>);
        break
      case 'python':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ant-design--python-outlined]`}></span>);
        break
      case 'google suite':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ph--google-drive-logo]`}></span>);
        break
      case 'microsoft office':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[hugeicons--office-365]`}></span>);
        break
      case 'jira':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[simple-icons--jira]`}></span>);
        break
      case 'trello':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[ri--trello-fill]`}></span>);
        break
      case 'slack':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[mdi--slack]`}></span>);
        break
      case 'illustrator':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[hugeicons--adobe-illustrator]`}></span>);
        break
      case 'photoshop':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[hugeicons--adobe-photoshop]`}></span>);
        break
      case 'sql':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[hugeicons--sql]`}></span>);
        break
      case 'mysql':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[devicon-plain--mysql]`}></span>);
        break
      case 'mariadb':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[simple-icons--mariadbfoundation]`}></span>);
        break
      case 'visual studio code':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[codicon--vscode-insiders]`}></span>);
        break
      case 'visual studio':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[fontisto--visual-studio]`}></span>);
        break
      case '.net':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[devicon-plain--dot-net]`}></span>);
        break
      case 'unity':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[cib--unity]`}></span>);
        break
      case 'unreal':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[mdi--unreal]`}></span>);
        break
      case 'dialogflow':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[simple-icons--dialogflow]`}></span>);
        break
      case 'jira':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[simple-icons--jira]`}></span>);
        break
      case 'jira':
        setIconoSize('w-4 h-4 md:w-8 md:h-8');
        setIcono(<span className={`w-full h-full icon-[simple-icons--jira]`}></span>);
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
