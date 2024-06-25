import ChangeTheme from "./ChangeTheme.tsx";
import dataProfile from "../../data/dataProfile.ts";
import LinkTo from "./LinkTo.tsx";
import Tooltip from "../../components/tooltip/Tooltip.tsx";

export default function Navbar() {

  return (
    <section className="w-full min-h-12 p-2 gap-2 flex flex-wrap items-center justify-center sm:justify-between 
    bg-LIGHT-BG-dark dark:bg-DARK-BG-dark dark:text-CREMA text-LIGHT-AzulOscuro">
      <p tabIndex={1} className="text-center">{dataProfile.fullname}</p>

      <article className="flex flex-wrap justify-center gap-2 
        text-LIGHT-AzulClaro dark:text-white md:text-2xl select-none">
        <LinkTo to="/home" label="Inicio" tabIndex={2} />
        <p>/</p>
        <LinkTo to="/projects" label="Proyectos" tabIndex={3} />
        <p>/</p>
        <LinkTo to="/cv" label="Curriculum vitae" tabIndex={4} />
        <p>/</p>
        <LinkTo to="/experience" label="Experiencia" tabIndex={5} />
        <p>/</p>
        <LinkTo to="/education" label="Diplomas y certificados" tabIndex={6} />
        <p>/</p>
        <LinkTo to="/contact" label="Contacto" tabIndex={7} />
      </article>

      <Tooltip text="Cambiar tema" position="left">
        <ChangeTheme />
      </Tooltip>
    </section>
  )
}
