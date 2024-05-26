
const TagOpen = ({ section }) => {
  return (
    <p className="text-sm sm:text-xl text-L-T-S">
      {`<`}
      <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">section</span>
      {' '}
      <span className="text-LIGHT-D-P-dark dark:text-DARK-D-P">id</span>
      =
      <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">"section__{section}"</span>
      {`>`}
    </p>
  )
}

const TagClose = () => {
  return(
    <p className="text-sm sm:text-xl text-L-T-S">
    {`</`}
    <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">section</span>
    {`>`}
  </p>
  )
}

export { TagOpen, TagClose };