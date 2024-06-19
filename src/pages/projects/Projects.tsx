import { Link } from "react-router-dom";
import dataProjects from "../../data/dataProjects.ts";
import Techs from "../../components/Techs.tsx";
import { TagOpen, TagClose } from "../../components/TagsSection.tsx";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
export default function Projects() {

  return (
    <section className="w-full min-h-screen flex flex-col items-center 
    bg-LIGHT-BG dark:bg-DARK-BG dark:text-CREMA text-LIGHT-AzulOscuro">

      <article className="mx-0 my-6 w-full h-auto md:h-auto md:w-11/12 md:pt-4 md:pr-4 md:pb-6 md:pl-7 p-2 
      rounded-md border-2 shadow 
      bg-LIGHT-BG-dark border-AZUL shadow-AZUL
      dark:bg-DARK-BG-dark dark:border-DARK-BORDER-light dark:shadow-DARK-BORDER-light">
        <TagOpen section={"Proyectos"} />

        <div className="flex w-full justify-center md:gap-4">
          <section className="w-full flex flex-col gap-3 p-2 md:py-5 md:pl-[5vw]">
            <section className="
            w-full gap-[4vw]
            grid grid-cols-1 sm:grid-cols-2"
            >
              {dataProjects.map((project, index) => (
                <article className="w-full h-full flex flex-col gap-2 p-2 rounded-lg
                 border-2 shadow
                 bg-AZUL bg-opacity-10  border-AZUL-dark shadow-AZUL-dark
                 dark:bg-white dark:bg-opacity-10 dark:border-AMARILLO dark:shadow-AMARILLO"
                  key={project.id}>
                  <div className="w-full h-auto">
                    <img tabIndex={parseInt(`${index + 1}01`)}
                      className="w-full h-full object-cover object-center rounded" src={`/projects/${project.id}/frontPage.png`} alt="Portada del proyecto" />
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <p tabIndex={parseInt(`${index + 1}02`)}
                      className="w-full text-center text-xl border-b-2 border-AZUL-dark dark:border-AMARILLO">{project.title}</p>

                    <section className="w-full flex gap-2">
                      <article className="w-11/12 flex flex-col gap-2 pl-2">
                        <p tabIndex={parseInt(`${index + 1}03`)} className="indent-4">{project.description}</p>
                      </article>

                      <article className="w-1/12 flex flex-col items-center gap-2">
                        <Link
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Ver más"
                          to={`/projects/${project.id}`}
                          tabIndex={parseInt(`${index + 1}04`)}
                          aria-label="Ver más"
                        >
                          <span className="w-8 h-8 icon-[bi--plus-circle-fill] hover:text-AZUL-dark dark:hover:text-AMARILLO"></span>
                        </Link>

                        <a
                          data-tooltip-id="my-tooltip"
                          data-tooltip-content="Github"
                          href={project.linkGithub} target="_blank"
                          tabIndex={parseInt(`${index + 1}05`)}
                          aria-label="Ver proyecto en github"
                        >
                          <span className="w-9 h-9 icon-[iconoir--github-circle] hover:text-AZUL-dark dark:hover:text-AMARILLO"></span>
                        </a>
                        <Tooltip id="my-tooltip" />
                      </article>
                    </section>

                    <section className="w-full flex gap-2 flex-wrap justify-center">
                      {project.techs.map(tech => (
                        <Techs
                          key={tech}
                          tech={tech}
                          tabIndex={parseInt(`${index + 1}06`)}
                        />
                      ))}
                    </section>
                  </div>
                </article>
              ))}

            </section>
          </section>

          <section className="min-h-full w-auto my-auto">
            <p className="hidden sm:inline-block text-8xl sm:text-9xl font-ubuntu font-normal text-AZUL">;</p>
          </section>
        </div>

        <TagClose />
      </article>
    </section>
  )
}
