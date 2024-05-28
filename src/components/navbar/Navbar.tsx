import { Link, useLocation } from "react-router-dom"
import ChangeTheme from "./ChangeTheme.tsx";
import dataProfile from "../../data/dataProfile.ts";

export default function Navbar() {
  const location = useLocation();

  return (
    <section className="w-full h-12 p-2 flex items-center justify-between
    bg-LIGHT-BG-S dark:bg-DARK-BG-dark dark:text-D-T-P text-L-T-P">
      <p>{dataProfile.fullname}</p>

      <article className="flex gap-2">
        <Link to='/home' className={`border-b-2 border-transparent ${location.pathname === '/home' ? 'border-DARK-BORDER-light' : ''}`}>Home</Link>
        <Link to='/projects' className={`border-b-2 border-transparent ${location.pathname === '/projects' ? 'border-DARK-BORDER-light' : ''}`}>Projects</Link>
      </article>


      <ChangeTheme />
    </section>
  )
}
