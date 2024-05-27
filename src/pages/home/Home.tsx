import Navbar from "../../components/navbar/Navbar.tsx";
import { TagOpen, TagClose } from "../../components/TagsSection.tsx";
import { Subtitle, Flag } from "../../components/profile/Subtitle.tsx";
import dataProfile from "../../data/dataProfile.ts";
import SocialNetworkIcon from "../../components/SocialNetworkIcon.tsx";
import IconosTechs from "../../components/IconosTechs.tsx";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center md:gap-3
    bg-LIGHT-BG-P dark:bg-DARK-BG-P dark:text-[#f1e1cf] text-L-T-P">

      <Navbar></Navbar>

      <article className="w-full h-full flex justify-center items-center">
        <div className="w-full h-screen md:h-auto md:w-11/12 p-2 bg-LIGHT-BG-P-dark dark:bg-DARK-BG-P-dark rounded-md shadow-md shadow-[#2c2c5d]">
          <TagOpen section={"Presentación"} />

          <section className="flex w-full">
            <article className="w-full flex flex-col gap-3 py-2 md:py-2 md:pl-[5vw]">
              <div className="
            w-full
            flex flex-col justify-center items-center
            md:flex-row md:justify-evenly md:items-center gap-2"
              >

                <section className="w-48 h-48 md:min-w-80 md:h-80 rounded-full overflow-hidden border-2 border-solid border-LIGHT-D-P-dark dark:border-DARK-D-P-light">
                  <img className="w-full h-full object-cover object-center" src="FotoCVSinFondo.png" alt="Foto de perfil" />
                </section>

                <section className="md:w-full flex flex-col gap-5 md:gap-10">
                  <p className="text-center text-lg md:text-4xl text-DARK-D-P-light">{dataProfile.fullname}</p>

                  <article className="w-full flex gap-5 flex-wrap justify-center items-center text-base md:text-2xl">
                    <Subtitle string={dataProfile.dev} />
                    <Subtitle string={dataProfile.years} />
                    <Flag flag={dataProfile.nationality} />
                  </article>

                  <article className="flex flex-wrap gap-0.5 md:gap-4 justify-center items-center">
                    {
                      Object.entries(dataProfile.linksSocialNetworks).map(([network, link]) => (
                        <SocialNetworkIcon key={network} socialNetwork={network} link={link} />
                      ))
                    }
                  </article>

                  <article className="w-full flex flex-col gap-2 items-center ">
                    <p className="text-[#2196f3] text-base md:text-2xl">SKILLS</p>
                    <div className="flex flex-col items-start gap-4">
                      <section className="flex flex-wrap gap-x-4 gap-y-1">
                        <p className="text-DARK-D-P-light text-md md:text-xl">Desarrollo Front-end:</p>
                        {dataProfile.skills.frontEnd.map((tech) => (
                          <IconosTechs key={tech} tech={tech} />
                        ))}
                      </section>
                      
                      <section className="flex flex-wrap gap-x-4 gap-y-1">
                        <p className="text-DARK-D-P-light text-md md:text-xl">Base de datos:</p>
                        {dataProfile.skills.dataBase.map((tech) => (
                          <IconosTechs key={tech} tech={tech} />
                        ))}
                      </section>
                    </div>
                  </article>
                </section>

              </div>
            </article>

            <article className="min-h-full w-auto my-auto">
              <p className="hidden md:inline-block text-8xl md:text-9xl font-ubuntu font-normal text-[#2196f3]">;</p>
            </article>
          </section>

          <TagClose />
        </div>
      </article>

    </section>
  )
}
