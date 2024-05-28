import { Link, useLocation } from "react-router-dom"
import ChangeTheme from "./ChangeTheme.tsx";
import dataProfile from "../../data/dataProfile.ts";

export default function Navbar() {
  const location = useLocation();

  return (
    <section className="w-full h-12 bg-LIGHT-BG-S dark:bg-DARK-BG-S dark:text-D-T-P text-L-T-P p-2 flex items-center justify-between">
      <article className="flex gap-2">
        <Link to='/home' className={`border-b-2 border-transparent ${location.pathname === '/home' ? 'border-DARK-BORDER-light' : ''}`}>Home</Link>
        <Link to='/projects' className={`border-b-2 border-transparent ${location.pathname === '/projects' ? 'border-DARK-BORDER-light' : ''}`}>Projects</Link>
      </article>

      <p>{dataProfile.fullname}</p>

      <ChangeTheme />
    </section>
  )
}
