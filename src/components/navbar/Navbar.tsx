import ChangeTheme from "./ChangeTheme.tsx";
import dataProfile from "../../data/dataProfile.ts";
import LinkTo from "./LinkTo.tsx";

export default function Navbar() {

  return (
    <section className="w-full min-h-12 p-2 gap-2 flex flex-wrap items-center justify-center sm:justify-between 
    bg-LIGHT-BG-dark dark:bg-DARK-BG-dark dark:text-CREMA text-LIGHT-T-dark">
      <p className="text-center">{dataProfile.fullname}</p>

      <article className="flex flex-wrap justify-center gap-2 
        text-LIGHT-T dark:text-DARK-BORDER-light md:text-2xl select-none">
          <LinkTo to="/home" label="Inicio" />
          <LinkTo to="/projects" label="Proyectos" />
          <LinkTo to="/cv" label="Curriculum vitae" />
      </article>


      <ChangeTheme />
    </section>
  )
}
