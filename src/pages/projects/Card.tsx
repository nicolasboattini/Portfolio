import { useState } from "react";
import { Project } from "../../data/dataProjects.ts";
import { Link } from "react-router-dom";

type cardProps = {
  project: Project;
  index: number;
}

export default function Card({ project, index }: cardProps) {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  return (
    <article
      onClick={() => setIsVisible(!isVisible)}
      className={`w-full h-full flex flex-col gap-2 p-2 rounded-lg
                  border-2 shadow
                  border-AZUL-dark shadow-AZUL-dark dark:border-AMARILLO dark:shadow-AMARILLO
                  cursor-pointer`}
    >
      <img
        className={`w-full h-full  inset-0 bg-cover bg-center transition-opacity duration-300 ${isVisible ? 'opacity-60' : 'opacity-100'}`}
        src={`/projects/${project.id}/frontPage.png`}
      />

      {
        isVisible && <div className="relative z-10 flex flex-col items-center w-full gap-2 text-white text-center p-4">
          <p className="w-full text-center font-bold text-xl md:text-2xl border-b-2 border-AZUL dark:border-AMARILLO">
            {project.title}
          </p>
          <p className="indent-4 text-balance">{project.description}</p>
          <Link
            to={`/projects/${project.id}`}
            tabIndex={parseInt(`${index + 1}04`)}
            aria-label="Ver más"
            className="flex justify-center items-center p-1 rounded-2xl w-1/2 border-2 shadow transition-colors duration-100 ease-in-out
                     border-AZUL shadow-AZUL hover:bg-AZUL hover:bg-opacity-30 bg-AZUL bg-opacity-10
                     dark:border-AMARILLO dark:shadow-AMARILLO dark:bg-AMARILLO dark:bg-opacity-10 dark:hover:bg-AMARILLO dark:hover:bg-opacity-20"
          >
            Ver más
          </Link>
        </div>
      }

    </article>
  )
}
