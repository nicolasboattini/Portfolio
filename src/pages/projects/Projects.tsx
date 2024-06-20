import dataProjects from "../../data/dataProjects.ts";
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
            <article className="
            w-full gap-[4vw]
            grid grid-cols-1 sm:grid-cols-2"
            >
              {
                dataProjects.map((project, index) => (
                  <Card index={index} project={project}/>
                ))
              }    
            </article>
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
