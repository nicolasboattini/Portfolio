import { Link } from "react-router-dom";
import dataProjects from "../../data/dataProjects.ts";
import Techs from "../../components/Techs.tsx";
export default function Projects() {

  return (
    <section className="w-full min-h-screen flex flex-col items-center p-2 gap-3
    bg-LIGHT-BG-P dark:bg-DARK-BG-P dark:text-D-T-P text-L-T-P">
      <article className="w-full sm:w-11/12 p-2 bg-LIGHT-BG-P-dark dark:bg-DARK-BG-P-dark">
        <p className="text-sm sm:text-xl text-L-T-S">
          {`<`}
          <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">section</span>
          {' '}
          <span className="text-LIGHT-D-P-dark dark:text-DARK-D-P">id</span>
          =
          <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">"section__proyectos"</span>
          {`>`}
        </p>

        <div className="flex w-full gap-2">
          <section className="w-full flex flex-col gap-3 py-5 pl-[5vw]">
            <section className="
            w-full gap-[5vw]
            grid grid-cols-1 sm:grid-cols-2"
            >
              {dataProjects.map(project => (
                <article className="w-full h-full flex flex-col gap-2 p-2 rounded-lg
                bg-white bg-opacity-10 border-2 border-DARK-D-P-light"
                  key={project.id}>
                  <div className="w-full h-auto">
                    <img className="w-full h-full object-cover object-center" src={`/projects/${project.id}/1.png`} alt="Portada del proyecto" />
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <p className="w-full text-center text-xl text-DARK-D-P">{project.title}</p>

                    <section className="w-full flex gap-2">
                      <article className="w-11/12 flex flex-col gap-2">
                        <p className="">{project.description}</p>
                      </article>

                      <article className="w-1/12 flex flex-col items-center gap-2">
                        <Link to={`/projects/${project.id}`}><span className="w-8 h-8 icon-[bi--plus-circle-fill] hover:text-DARK-D-P-light"></span></Link>
                        <a href={project.linkGithub} target="_blank"><span className="w-9 h-9 icon-[iconoir--github-circle] hover:text-DARK-D-P-light"></span></a>
                      </article>
                    </section>

                    <section className="w-full flex gap-2 flex-wrap justify-center">
                      {project.techs.map(tech => (
                        <Techs key={tech} tech={tech}/>
                      ))}
                    </section>
                  </div>
                </article>
              ))}

            </section>
          </section>

          <section className="min-h-full w-auto my-auto">
            <p className="hidden sm:inline-block text-8xl sm:text-9xl font-ubuntu font-normal text-DARK-D-P">;</p>
          </section>
        </div>

        <p className="text-sm sm:text-xl text-L-T-S">
          {`</`}
          <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">section</span>
          {`>`}
        </p>
      </article>
    </section>
  )
}
