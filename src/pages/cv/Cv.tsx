import Navbar from "../../components/navbar/Navbar.tsx";
import { TagOpen, TagClose } from "../../components/TagsSection.tsx";

export default function Project() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center 
    bg-LIGHT-BG-P dark:bg-DARK-BG dark:text-CREMA text-L-T-P">

      <Navbar />

      <article className="mx-0 my-6 w-full h-auto md:h-auto md:w-11/12 md:pt-4 md:pr-4 md:pb-6 md:pl-7 p-2
      bg-LIGHT-BG-P-dark dark:bg-DARK-BG-dark 
        rounded-md border-2 border-DARK-BORDER-light"
      >
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
                  <embed src="/CV/CV_Leandro_Daniel_Schugurensky.pdf" width="100%" height="100%" type="application/pdf" />
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
