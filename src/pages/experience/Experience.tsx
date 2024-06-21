import { TagOpen, TagClose } from "../../components/TagsSection";
import TimeLineItem from "./TimeLineItem.tsx";
import dataProfile from "../../data/dataProfile.ts";

export default function Experience() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center">

      <article className="mx-0 my-6 w-full h-auto md:h-auto md:w-11/12 md:pt-4 md:pr-4 md:pb-6 md:pl-7 p-2 
      rounded-md border-2 shadow 
      bg-LIGHT-BG-dark border-AZUL shadow-AZUL
      dark:bg-DARK-BG-dark dark:border-DARK-BORDER-light dark:shadow-DARK-BORDER-light">

        <TagOpen section={`Experiencia Laboral`} />

        <section className="flex w-full">
          <article className="w-full flex flex-col gap-3 py-2 md:py-2 md:pl-[5vw]">
            <div className="w-full flex flex-col justify-start items-start"
            >
              {
                dataProfile.workExperience.map(exp => (
                  <TimeLineItem
                    title={exp.title}
                    company={exp.company}
                    date={exp.date}
                    description={exp.description}
                    linkDescription={exp.linkDescription}
                  />
                ))
              }
            </div>
          </article>

          <article className="min-h-full w-auto my-auto">
            <p className="hidden md:inline-block text-8xl md:text-9xl font-ubuntu font-normal text-AZUL">;</p>
          </article>

        </section>

        <TagClose />
      </article>

    </section>
  )
}
