import Navbar from "../../components/navbar/Navbar.tsx";
import { TagOpen, TagClose } from "../../components/TagsSection.tsx";

export default function Home() {
  return (
    <section className="w-full h-screen flex flex-col items-center
    bg-LIGHT-BG-P dark:bg-DARK-BG-P dark:text-D-T-P text-L-T-P">

      <Navbar></Navbar>

      <section className="w-full h-full flex justify-center items-center">
        <article className="w-full sm:w-11/12 p-2 bg-LIGHT-BG-P-dark dark:bg-DARK-BG-P-dark rounded-md shadow-md shadow-[#2c2c5d]">
        <TagOpen section={"presentación"} />

          <div className="flex w-full">
            <section className="w-full flex flex-col gap-3 py-5 pl-[5vw]">
              <section className="
            w-full
            flex flex-col justify-center items-center
            sm:flex-row sm:justify-start sm:items-center gap-[5vw]"
              >
                <article className="w-48 h-48 sm:min-w-80 sm:h-80 rounded-full overflow-hidden border-2 border-solid border-LIGHT-D-P-dark dark:border-DARK-D-P-light">
                  <img className="w-full h-full object-cover object-center" src="FotoCVSinFondo.png" alt="Foto de perfil" />
                </article>

                <article className="sm:w-full flex flex-col gap-10">
                  <p className="text-center text-lg sm:text-4xl text-DARK-D-P-light">Leandro Daniel Schugurensky</p>
                  <div className="flex gap-10 flex-wrap justify-center items-center text-base sm:text-2xl">
                    <p className="text-center p-2 rounded-lg
                bg-white bg-opacity-10 border-2 border-DARK-D-P-light shadow shadow-DARK-D-P-light">Front-end Developer</p>
                    <p className="text-center p-2 rounded-lg
                bg-white bg-opacity-10 border-2 border-DARK-D-P-light shadow shadow-DARK-D-P-light">23 años</p>
                    <div className="flex place-items-center px-2  rounded-lg
                bg-white bg-opacity-10 border-2 border-DARK-D-P-light shadow shadow-DARK-D-P-light">
                      <span className="w-12 h-12 icon-[twemoji--flag-for-flag-argentina]"></span>

                    </div>
                  </div>
                  <div className="flex gap-4 justify-center items-center">
                    <a href="https://github.com/Schugu" target="_blank" className="flex justify-center items-center p-2 border-2 border-transparent hover:border-DARK-D-P">
                      <span className="w-10 h-10 icon-[mdi--github]"></span>
                    </a>
                    <a href="https://www.linkedin.com/in/leandrodanielschugurensky/" target="_blank">
                      <span className="w-10 h-10 icon-[mdi--linkedin] hover:text-DARK-D-P"></span>
                    </a>
                    <a href="https://www.instagram.com/leanschugu/" target="_blank">
                      <span className="w-10 h-10 icon-[ph--instagram-logo] hover:text-DARK-D-P"></span>
                    </a>
                    <a href="https://www.freecodecamp.org/certification/Schugu/responsive-web-design" target="_blank">
                      <span className="w-10 h-10 icon-[simple-icons--freecodecamp] hover:text-DARK-D-P"></span>
                    </a>
                    <a href="mailto:leo.schugu@gmail.com">
                      <span className="w-10 h-10 icon-[mdi--email-outline] hover:text-DARK-D-P"></span>
                    </a>
                    <a href="" className="w-20 h-10 flex justify-center items-center">
                      <span className="w-full h-full icon-[academicons--cv]"></span>
                      <span className="w-full h-full icon-[material-symbols--download]"></span>
                    </a>
                  </div>

                  <article className="w-full flex flex-col gap-2 items-center ">
                    <p className="text-DARK-D-P text-base sm:text-2xl">Skills</p>
                    <article className="flex flex-col items-start gap-4">
                      <section className="flex flex-wrap gap-x-4 gap-y-1">
                        <p className="text-DARK-D-P-light text-sm sm:text-xl">Desarrollo Front-end:</p>
                        <span className="w-8 h-8 icon-[ri--html5-fill]"></span>
                        <span className="w-8 h-8 icon-[ri--css3-fill]"></span>
                        <span className="w-8 h-8 icon-[ri--tailwind-css-fill]"></span>
                        <span className="w-8 h-8 icon-[ri--javascript-fill]"></span>
                        <span className="w-8 h-8 icon-[ri--reactjs-fill]"></span>
                        <span className="w-8 h-8 icon-[ri--nextjs-fill]"></span>
                      </section>
                      <section className="flex flex-wrap gap-x-4 gap-y-1">
                        <p className="text-DARK-D-P-light text-sm sm:text-xl">Base de datos:</p>
                        <span className="w-8 h-8 icon-[simple-icons--mongodb]"></span>
                        <span className="w-8 h-8 icon-[ri--firebase-fill]"></span>
                      </section>
                    </article>
                  </article>


                  {/* <p>👤 Nombre: <span className="text-L-T-S">Leandro Daniel Schugurensky</span></p>
                <p>👨‍💻 Programador: <span className="text-L-T-S">🎓 Trainee</span></p>
                <p>🎂 Edad: <span className="text-L-T-S">23 años</span></p>
                <p>🌍 País: <span className="text-L-T-S">Argentina</span></p>
                <p>📚 Educación: <span className="text-L-T-S">Estudiante autodidacta</span></p>
                <p className="text-balance">🎯 Objetivo: <span className="text-L-T-S">Actualmente, estoy persiguiendo mi pasión por la programación con el objetivo de convertirme en un programador Front-end.</span></p> */}
                </article>
              </section>
            </section>

            <section className="min-h-full w-auto my-auto">
              <p className="hidden sm:inline-block text-8xl sm:text-9xl font-ubuntu font-normal text-DARK-D-P">;</p>
            </section>
          </div>

          <TagClose />
        </article>
      </section>

    </section>
  )
}
