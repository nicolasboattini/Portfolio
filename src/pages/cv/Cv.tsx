import { TagOpen, TagClose } from "../../components/TagsSection.tsx";
import dataProfile from "../../data/dataProfile.ts";

export default function Project() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center">

      <article className="mx-0 my-6 w-full h-auto md:h-auto md:w-11/12 md:pt-4 md:pr-4 md:pb-6 md:pl-7 p-2 
      rounded-md border-2 shadow 
      bg-LIGHT-BG-dark border-AZUL shadow-AZUL
      dark:bg-DARK-BG-dark dark:border-DARK-BORDER-light dark:shadow-DARK-BORDER-light">
        
        <TagOpen section={"Curriculum vitae"} />

        <section className="flex w-full">
          <article className="w-full flex flex-col gap-3 py-2 md:py-2 md:pl-[5vw]">
            <div className="
            w-full
            flex flex-col justify-center items-center
            md:flex-row md:justify-evenly md:items-center gap-2"
            >
              <article className="w-full h-full flex flex-col gap-2 p-2">
                <div className="pdf-container" style={{ width: '100%', height: '100vh' }}>
                  <embed src={dataProfile.linksSocialNetworks.CV} width="100%" height="100%" type="application/pdf" />
                </div>

              </article>
            </div>
          </article>

          <article className="min-h-full w-auto my-auto">
            <p className="hidden md:inline-block text-8xl md:text-9xl font-ubuntu font-normal text-AZUL">;</p>
          </article>
        </section>

        <TagClose />
      </article>
    </section>
  );
}
