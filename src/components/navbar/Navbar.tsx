import Tooltip from "@/components/tooltip/Tooltip.tsx";
import { useProfile } from "@/context/ProfileContext.tsx";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "./ChangeLanguage.tsx";
import ChangeTheme from "./ChangeTheme.tsx";
import LinkTo from "./LinkTo.tsx";

export default function Navbar() {
  const { dataProfile } = useProfile();
  const { t } = useTranslation(['global', 'profile', 'projects']);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full min-h-12 p-2 gap-2 
     flex flex-wrap items-center justify-between lg:justify-around
     bg-LIGHT-BG-dark dark:bg-DARK-BG-dark dark:text-CREMA text-LIGHT-AzulOscuro">
      <p tabIndex={1} className="text-center text-sm md:text-xl text-AZUL dark:text-AMARILLO">{dataProfile?.fullname ?? 'Nombre no disponible'}</p>
      <div className="lg:hidden">
        <button
          className="flex items-center text-AZUL dark:text-AMARILLO"
          onClick={toggleMenu}
        >
          {
            isMenuOpen
              ? (<span className="block h-8 w-8 icon-[iconamoon--close-light]" />)
              : (<span className="block h-8 w-8 icon-[iconamoon--menu-burger-horizontal-thin]" />)
          }
        </button>
      </div>
      <ul className={`${isMenuOpen ? 'block' : 'hidden'
        } lg:flex lg:items-center lg:justify-center lg:flex-wrap lg:gap-4 
         max-lg:absolute max-lg:right-0 max-lg:top-12 max-lg:z-10
         w-full sm:w-1/2 md:w-auto rounded
        bg-LIGHT-BG-dark dark:bg-DARK-BG-dark dark:text-CREMA text-LIGHT-AzulOscuro
        max-lg:border-2 max-lg:border-AZUL max-lg:dark:border-AMARILLO p-2 
        `}>
        <li>
          <LinkTo to="/home" label={t("global:navbar.home")} tabIndex={2} />
        </li>
        <li>
          <LinkTo to="/projects" label={t("global:navbar.projects")} tabIndex={3} />
        </li>
        <li>
          <LinkTo to="/cv" label={t("global:navbar.cv")} tabIndex={4} />
        </li>
        {
          dataProfile?.workExperience &&
          <li>
            <LinkTo to="/experience" label={t("global:navbar.experience")} tabIndex={5} />
          </li>
        }
        {

          dataProfile?.certificates &&
          <li>
            <LinkTo to="/education" label={t("global:navbar.education")} tabIndex={6} />
          </li>
        }
        <li>
          <LinkTo to="/contact" label={t("global:navbar.contact")} tabIndex={7} />
        </li>

        <li className="flex items-center justify-between gap-2">
          <ChangeLanguage />
          <Tooltip text={t("global:navbar.changeTheme")} position="left">
            <ChangeTheme />
          </Tooltip>
        </li>
      </ul>
    </nav>
  )
}
