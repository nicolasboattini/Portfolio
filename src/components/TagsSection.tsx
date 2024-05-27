interface TagOpenProps {
  section: string;
}

const TagOpen = ({ section }: TagOpenProps) => {
  return (
    <div className="flex flex-col text-sm sm:text-xl">
      <p className="text-AMARILLO">
        <span className="text-AZUL">const </span>
        <span className="text-CREMA">{section}</span>
        <span className="text-AZUL"> = </span>
        {`()`}
        <span className="text-AZUL">{` => `}</span>
        {`{`}
      </p>

      <p className="indent-5 text-CREMA">
        <span className="text-AZUL">return </span>
        {`(`}
      </p>
    </div>
  )
};

const TagClose = () => {
  return (
    <div className="flex flex-col text-sm sm:text-xl">
      <p className="indent-5 text-CREMA">
        {`)`}
      </p>
      <p className="text-AMARILLO">
        {`}`}
        <span className="text-AZUL">;</span>
      </p>
    </div>
  )
}

export { TagOpen, TagClose };