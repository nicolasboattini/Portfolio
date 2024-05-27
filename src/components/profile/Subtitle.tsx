interface SubtitleProps {
  string: string;
}
interface FlagProps {
  flag: string;
}
const Subtitle = ({ string }: SubtitleProps) => {
  return (
    <p className="md:min-h-14 flex items-center justify-center px-1 md:px-3 text-center
                  rounded-lg bg-white bg-opacity-10 
                  border-2 border-AMARILLO shadow shadow-AMARILLO">
      {string}
    </p>
  )
}

const Flag = ({ flag }: FlagProps) => {
  return (
    <div className="w-9 h-7 md:w-16 md:h-14 flex place-items-center px-2 rounded-lg
                bg-white bg-opacity-10 
                border-2 border-AMARILLO shadow shadow-AMARILLO">
      <span className={`w-full h-full icon-[twemoji--flag-${flag}]`}></span>

    </div>
  )
}

export { Subtitle, Flag }