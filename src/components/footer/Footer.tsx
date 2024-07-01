import { useTranslation } from 'react-i18next';
import Tooltip from "components/tooltip/Tooltip.tsx";

export default function Footer() {
  const { t } = useTranslation('global');

  return (
    <footer className="w-full min-h-10 p-2 gap-2 flex flex-wrap items-center justify-center
    bg-LIGHT-BG-dark dark:bg-DARK-BG-dark dark:text-CREMA text-LIGHT-AzulOscuro">
      <p className="text-center">{t("global:footer.template")} Leandro Daniel Schugurensky</p>
      <Tooltip text='Github'>
        <a href="https://github.com/Schugu" target="_blank"
          className="flex justify-center items-center hover:text-AZUL dark:hover:text-AMARILLO">
          <span className="w-5 h-5 icon-[mdi--github]" />
        </a>
      </Tooltip>
      <Tooltip text='Linkedin'>
        <a href="https://www.linkedin.com/in/leandrodanielschugurensky/" target="_blank"
          className="flex justify-center items-center hover:text-AZUL dark:hover:text-AMARILLO">
          <span className="w-5 h-5 icon-[mdi--linkedin]" />
        </a>
      </Tooltip>
    </footer>
  )
}
