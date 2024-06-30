import ChangeTheme from "./ChangeTheme.tsx";
import LinkTo from "./LinkTo.tsx";
import Tooltip from "../../components/tooltip/Tooltip.tsx";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "./ChangeLanguage.tsx";
import { useProfile } from "../../context/ProfileContext.tsx";

export default function Navbar() {
  const { dataProfile } = useProfile();
  const { t } = useTranslation(['global', 'profile', 'projects']);



  return (
    <section className="w-full min-h-12 p-2 gap-2 
    flex flex-wrap items-center justify-center sm:justify-around
    bg-LIGHT-BG-dark dark:bg-DARK-BG-dark dark:text-CREMA text-LIGHT-AzulOscuro">
      <p tabIndex={1} className="text-center text-sm md:text-xl text-AMARILLO">{dataProfile?.fullname ?? 'Nombre no disponible'}</p>

      <article className="flex flex-wrap gap-4 justify-center
        text-LIGHT-AzulClaro dark:text-white text-sm md:text-xl select-none">
        <LinkTo to="/home" label={t("global:navbar.home")} tabIndex={2} />

        <LinkTo to="/projects" label={t("global:navbar.projects")} tabIndex={3} />

        <LinkTo to="/cv" label={t("global:navbar.cv")} tabIndex={4} />

        {
          dataProfile?.workExperience &&
          <LinkTo to="/experience" label={t("global:navbar.experience")} tabIndex={5} />
        }
        {
          dataProfile?.certificates &&
          <LinkTo to="/education" label={t("global:navbar.education")} tabIndex={6} />
        }

        <LinkTo to="/contact" label={t("global:navbar.contact")} tabIndex={7} />
      </article>

      <ChangeLanguage />

      <Tooltip text={t("global:navbar.changeTheme")} position="left">
        <ChangeTheme />
      </Tooltip>
    </section>
  )
}
