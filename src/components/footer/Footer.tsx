export default function Footer() {
  return (
    <footer className="w-full min-h-10 p-2 gap-2 flex flex-wrap items-center justify-center
    bg-LIGHT-BG-dark dark:bg-DARK-BG-dark dark:text-CREMA text-LIGHT-AzulOscuro">
      <p>Template hecho por Leandro Daniel Schugurensky</p>
      <a href="https://github.com/Schugu" target="_blank"
        className="flex justify-center items-center hover:text-AZUL dark:hover:text-AMARILLO">
        <span className="w-5 h-5 icon-[mdi--github]" />
      </a>
      <a href="https://www.linkedin.com/in/leandrodanielschugurensky/" target="_blank"
        className="flex justify-center items-center hover:text-AZUL dark:hover:text-AMARILLO">
        <span className="w-5 h-5 icon-[mdi--linkedin]" />
      </a>
    </footer>
  )
}
