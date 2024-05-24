import { Link } from "react-router-dom";
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
            w-full
            flex flex-col justify-center items-center
            sm:flex-row sm:justify-start gap-[5vw]"
            >
              <article className="flex flex-col gap-2">
                <Link to='/projects/1'>Boton 1</Link>
                <Link to='/projects/2'>Boton 2</Link>
                <Link to='/projects/3'>Boton 3</Link>
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
    </section>
  )
}
