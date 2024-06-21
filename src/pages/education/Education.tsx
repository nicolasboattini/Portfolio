import { TagOpen, TagClose } from "../../components/TagsSection.tsx";
import dataProfile from "../../data/dataProfile.ts";

export default function Education() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center">

      <article className="my-6 w-full h-auto md:h-auto md:w-11/12 md:pt-4 md:pr-4 md:pb-6 md:pl-7 p-2 
      rounded-md border-2 shadow 
      bg-LIGHT-BG-dark border-AZUL shadow-AZUL
      dark:bg-DARK-BG-dark dark:border-DARK-BORDER-light dark:shadow-DARK-BORDER-light">

        <TagOpen section={"Educación"} />

        <div className="flex w-full">
          <section className="w-full flex flex-col gap-3 py-2 md:py-2 md:pl-[5vw]">
            <article className="
            w-full gap-[4vw]
            grid grid-cols-1 sm:grid-cols-2"
            >
              {
                dataProfile.certificates.map((certificate, index) => (
                  <a href={certificate} target="_blank"
                    className="w-full h-auto rounded overflow-hidden
                    border-2 border-AMARILLO dark:border-AZUL">
                    <img
                      className=''
                      src={`/profile/education/${index + 1}.jpg`}
                      alt={`Screenshot ${index + 1}`}
                    />
                  </a>

                ))
              }
            </article>
          </section>

          <section className="min-h-full w-auto my-auto">
            <p className="hidden md:inline-block text-8xl md:text-9xl font-ubuntu font-normal text-AZUL">;</p>
          </section>
        </div>

        <TagClose />
      </article>

    </section >
  )
}
