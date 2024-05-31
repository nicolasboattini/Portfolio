import { Link, useLocation } from "react-router-dom"
import ChangeTheme from "./ChangeTheme.tsx";
import dataProfile from "../../data/dataProfile.ts";

export default function Navbar() {
  const location = useLocation();

  return (
    <section className="w-full min-h-12 p-2 gap-2 flex flex-wrap items-center justify-center sm:justify-between 
    bg-LIGHT-BG-S dark:bg-DARK-BG-dark dark:text-CREMA text-L-T-P">
      <p className="text-center">{dataProfile.fullname}</p>

      <article className="flex flex-wrap justify-center gap-2 text-DARK-BORDER-light">
        <Link to='/home' className={`border-b-2  border-DARK-BORDER-light ${location.pathname === '/home' ? 'border-CREMA dark:text-CREMA' : ''}`}>Home</Link>
        <Link to='/projects' className={`border-b-2  border-DARK-BORDER-light ${location.pathname === '/projects' ? 'border-CREMA dark:text-CREMA' : ''}`}>Projects</Link>
        <Link to='/cv' className={`border-b-2  border-DARK-BORDER-light ${location.pathname === '/cv' ? 'border-CREMA dark:text-CREMA' : ''}`}>Curriculum vitae</Link>
      </article>


      <ChangeTheme />
    </section>
  )
}
