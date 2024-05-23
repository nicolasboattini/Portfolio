
export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center p-2
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
          <section className="
            w-full
            flex flex-col justify-center items-center
            sm:flex-row sm:justify-start sm:flex-wrap
            gap-[5vw] py-5 pl-[5vw]"
          >
            <article className="w-48 h-48 sm:w-60 sm:h-60 rounded-full overflow-hidden border-2 border-solid border-LIGHT-D-P-dark dark:border-DARK-D-P-light">
              <img className="w-full h-full object-cover object-center" src="FotoCVSinFondo.png" alt="Foto de perfil" />
            </article>

            <article className="sm:w-1/2 flex flex-col justify-center items-start gap-3 text-DARK-D-P text-lg sm:text-xl">
              <p>👤 Nombre: <span className="text-L-T-S">Leandro Daniel Schugurensky</span></p>
              <p>👨‍💻 Programador: <span className="text-L-T-S">🎓 Trainee</span></p>
              <p>🎂 Edad: <span className="text-L-T-S">23 años</span></p>
              <p>🌍 País: <span className="text-L-T-S">Argentina</span></p>
              <p>📚 Educación: <span className="text-L-T-S">Estudiante autodidacta</span></p>
              <p>🎯 Objetivo: <span className="text-L-T-S">Actualmente, estoy persiguiendo mi pasión por la programación con el objetivo de convertirme en un programador Front-end.</span></p>

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
