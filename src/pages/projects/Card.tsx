import { useState } from 'react';
import { Project } from '../../data/dataProjects';
import { Link } from 'react-router-dom';
import IconosTechs from "../../components/IconosTechs.tsx";
import Tooltip from "../../components/tooltip/Tooltip.tsx";

type CardProps = {
  project: Project;
  index: number;
};

export default function Card({ project, index }: CardProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setTimeout(() => setIsVisible(true), 100);
  };

  const handleMouseLeave = () => {
    setTimeout(() => setIsVisible(false), 100);
  };

  return (
    <div
      className="overflow-hidden relative w-full h-auto border-2 shadow 
      bg-AZUL bg-opacity-10 border-AZUL shadow-AZUL 
      dark:bg-white dark:bg-opacity-10 dark:border-AMARILLO dark:shadow-AMARILLO"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={`/projects/${project.id}/frontPage.png`}
        alt="Portada del proyecto"
        className={`w-full h-auto object-cover transition-all duration-[0.3s] ${isVisible ? 'blur-lg transform scale-125' : ''}`}
      />

      <div
        className={`absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 p-2
          bg-black text-CREMA
          transition-all duration-500 ${isVisible ? 'bg-opacity-50 opacity-100' : 'bg-opacity-0 opacity-0'}`}
      >
        <p className="w-full text-center font-bold text-xl md:text-2xl border-b-2 border-AZUL dark:border-AMARILLO">
          {project.title}
        </p>

        <section className='w-full flex justify-center flex-wrap gap-2'>
          {project.techs.map((tech, index) => (
            <Tooltip text={tech}>
              <IconosTechs key={tech} tech={tech} tabIndex={51 + index} color='text-CREMA'/>
            </Tooltip>
          ))}
        </section>
        <Link
          to={`/projects/${project.id}`}
          tabIndex={parseInt(`${index + 1}04`)}
          aria-label="Ver más"
          className="flex justify-center items-center p-1 rounded-2xl w-1/2 border-2 shadow transition-colors duration-100 ease-in-out border-AZUL shadow-AZUL hover:bg-AZUL hover:bg-opacity-30 bg-AZUL bg-opacity-10 dark:border-AMARILLO dark:shadow-AMARILLO dark:bg-AMARILLO dark:bg-opacity-10 dark:hover:bg-AMARILLO dark:hover:bg-opacity-20"
        >
          Ver más
        </Link>
      </div>
    </div>
  );
}
