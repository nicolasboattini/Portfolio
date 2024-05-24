import { Link } from "react-router-dom";
import dataProjects from "../../data/dataProjects.ts";
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

        <div className="flex w-full">
          <section className="w-full flex flex-col gap-3 py-5 pl-[5vw]">
            <section className="
            w-full gap-[5vw]
            grid grid-cols-1 sm:grid-cols-2"
            >
              {dataProjects.map(project => (
                <article className="w-full flex flex-col gap-2" key={project.id}>
                  <div className="w-full h-auto border border-pink-600">
                    <img className="w-full h-full object-cover object-center" src={`/projects/${project.id}/1.png`} alt="Portada del proyecto" />
                  </div>

                  <div className="w-full flex flex-col gap-2">
                    <p className="w-full text-center">{project.title}</p>
                    <p>{project.description}</p>

                    <section className="w-full flex gap-2 flex-wrap">
                      {project.techs.map(tech => (
                        <p key={tech}>{tech}</p>
                      ))}
                    </section>
                  </div>

                </article>
              ))}

            </section>
          </section>

          <section className="min-h-full w-auto my-auto">
            <p className="inline-block text-8xl sm:text-9xl font-ubuntu font-normal text-DARK-D-P">;</p>
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
