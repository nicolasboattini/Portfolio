
export default function Home() {
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
          <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">"section__presentación"</span>
          {`>`}
        </p>

        <div className="flex w-full">
          <section className="w-full flex flex-col gap-3 py-5 pl-[5vw]">
            <section className="
            w-full
            flex flex-col justify-center items-center
            sm:flex-row sm:justify-start gap-[5vw]"
            >
              <article className="w-48 h-48 sm:min-w-60 sm:h-60 rounded-full overflow-hidden border-2 border-solid border-LIGHT-D-P-dark dark:border-DARK-D-P-light">
                <img className="w-full h-full object-cover object-center" src="FotoCVSinFondo.png" alt="Foto de perfil" />
              </article>

              <article className="sm:w-full flex flex-col justify-center items-start gap-3 text-DARK-D-P text-lg sm:text-xl">
                <p>👤 Nombre: <span className="text-L-T-S">Leandro Daniel Schugurensky</span></p>
                <p>👨‍💻 Programador: <span className="text-L-T-S">🎓 Trainee</span></p>
                <p>🎂 Edad: <span className="text-L-T-S">23 años</span></p>
                <p>🌍 País: <span className="text-L-T-S">Argentina</span></p>
                <p>📚 Educación: <span className="text-L-T-S">Estudiante autodidacta</span></p>
                <p className="text-balance">🎯 Objetivo: <span className="text-L-T-S">Actualmente, estoy persiguiendo mi pasión por la programación con el objetivo de convertirme en un programador Front-end.</span></p>
              </article>
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

      <article className="w-full sm:w-11/12 p-2 bg-LIGHT-BG-P-dark dark:bg-DARK-BG-P-dark">
        <p className="text-sm sm:text-xl text-L-T-S">
          {`<`}
          <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">section</span>
          {' '}
          <span className="text-LIGHT-D-P-dark dark:text-DARK-D-P">id</span>
          =
          <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">"section__skills"</span>
          {`>`}
        </p>

        <div className="flex w-full">
          <section className="w-full flex flex-col gap-3 py-5 pl-[5vw]">

            <article className="
            w-full
            flex flex-col justify-center items-center
            sm:flex-row sm:justify-start sm:items-start gap-4"
            >
              <div className="h-full flex justify-center items-center">
                <p className="text-DARK-D-P text-xl">Skills</p>
              </div>

              <div className="flex flex-col p-4 gap-4 border-t-2 sm:border-t-0 sm:border-l-2 border-solid border-DARK-D-P-light">

                <div className="w-full h-full flex flex-col gap-2 justify-start items-center">
                  <p className="text-left w-full">Desarrollo Front-end:</p>
                  <section className="w-full flex flex-wrap gap-2 pl-4">
                    <img src="https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
                    <img src="https://img.shields.io/badge/HTML%20-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML" />
                    <img src="https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS" />
                    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
                    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Nextjs" />
                    <img src="https://img.shields.io/badge/Tailwind_CSS-4392DB?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind" />
                    <img src="https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=node.js&logoColor=5fa04e" alt="Node.js" />
                    <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
                  </section>
                </div>

                <div className="w-full h-full flex flex-col gap-2 justify-start items-center">
                  <p className="text-left w-full">Base de datos:</p>
                  <section className="w-full flex flex-wrap gap-2 pl-4">
                    <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                    <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase" />
                  </section>
                </div>
              </div>

            </article>
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
