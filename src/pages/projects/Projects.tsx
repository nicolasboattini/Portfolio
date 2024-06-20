import { Link } from "react-router-dom";
import dataProjects from "../../data/dataProjects.ts";
import Techs from "../../components/Techs.tsx";
import { TagOpen, TagClose } from "../../components/TagsSection.tsx";
import Card from "./Card.tsx";


export default function Projects() {

  return (
    <section className="w-full min-h-screen flex flex-col items-center">

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
              {/* {dataProjects.map((project, index) => (
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
                          to={`/projects/${project.id}`}
                          tabIndex={parseInt(`${index + 1}04`)}
                          aria-label="Ver más"
                        >
                          <span className="w-8 h-8 icon-[bi--plus-circle-fill] hover:text-AZUL-dark dark:hover:text-AMARILLO"></span>
                        </Link>

                        <a
                          href={project.linkGithub} target="_blank"
                          tabIndex={parseInt(`${index + 1}05`)}
                          aria-label="Ver proyecto en github"
                        >
                          <span className="w-9 h-9 icon-[iconoir--github-circle] hover:text-AZUL-dark dark:hover:text-AMARILLO"></span>
                        </a>
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
              ))} */}

              {
                dataProjects.map((project, index) => (
                  <Card index={index} project={project}/>

                //   <div className="relative group rounded-lg 
                //  border-2 shadow overflow-hidden w-full h-full
                //  bg-AZUL bg-opacity-10  border-AZUL-dark shadow-AZUL-dark
                //  dark:bg-white dark:bg-opacity-10 dark:border-AMARILLO dark:shadow-AMARILLO">
                //     <img
                //       src={`/projects/${project.id}/frontPage.png`}
                //       alt="Card Image"
                //       className="block w-full h-auto rounded-lg transition duration-[0.3s] ease-in-out transform group-hover:scale-125"
                //     />
                //     <div className="hover:bg-black hover:bg-opacity-30 absolute inset-0 rounded-lg overflow-hidden group-hover:backdrop-blur-md transition duration-300 ease-in-out flex items-center justify-center">
                //       <div className="flex flex-col items-center w-full gap-2
                //       text-white text-center p-4 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                //         <p className="w-full text-center font-bold text-xl md:text-2xl border-b-2 border-AZUL dark:border-AMARILLO">{project.title}</p>
                //         <p className="indent-4 text-balance">{project.description}</p>
                //         <Link
                //           to={`/projects/${project.id}`}
                //           tabIndex={parseInt(`${index + 1}04`)}
                //           aria-label="Ver más"
                //           className="flex justify-center items-center p-1 rounded-2xl w-1/2
                //                       border-2 shadow
                //                       transition-colors duration-100 ease-in-out

                //                     border-AZUL shadow-AZUL hover:bg-AZUL hover:bg-opacity-30 bg-AZUL bg-opacity-10
                //                     dark:border-AMARILLO dark:shadow-AMARILLO dark:bg-AMARILLO dark:bg-opacity-10 dark:hover:bg-AMARILLO dark:hover:bg-opacity-20"
                //         >
                //           Ver más
                //         </Link>
                //       </div>
                //     </div>
                //   </div>
                ))
              }
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
