import { Link } from "react-router-dom"
import ChangeTheme from "./ChangeTheme.tsx";

export default function Navbar() {
  return (
    <section className="w-full h-12 bg-LIGHT-BG-S dark:bg-DARK-BG-S dark:text-D-T-P text-L-T-P p-2 flex items-center justify-between">
      <article className="flex gap-2">
        <Link to='/home'>Home</Link>
        <Link to='/projects'>Projects</Link>
      </article>

      <p>Nombre</p>

      <ChangeTheme />
    </section>
  )
}
