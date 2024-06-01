interface TagOpenProps {
  section: string;
}

const TagOpen = ({ section }: TagOpenProps) => {
  return (
    <div className="flex flex-col text-sm sm:text-xl">
      <p className="text-AMARILLO-dark dark:text-AMARILLO">
        <span className="text-AZUL-dark dark:text-AZUL">const </span>
        <span tabIndex={6} className="text-AZUL-light dark:text-CREMA">{section}</span>
        <span className="text-AZUL-dark dark:text-AZUL"> = </span>
        {`()`}
        <span className="text-AZUL-dark dark:text-AZUL">{` => `}</span>
        {`{`}
      </p>

      <p className="indent-5 text-AZUL-light dark:text-CREMA">
        <span className="text-AZUL-dark dark:text-AZUL">return </span>
        {`(`}
      </p>
    </div>
  )
};

const TagClose = () => {
  return (
    <div className="flex flex-col text-sm sm:text-xl">
      <p className="indent-5 text-AZUL-light dark:text-CREMA">
        {`)`}
      </p>
      <p className="text-AMARILLO-dark dark:text-AMARILLO">
        {`}`}
        <span className="text-AZUL-dark dark:text-AZUL">;</span>
      </p>
    </div>
  )
}

export { TagOpen, TagClose };