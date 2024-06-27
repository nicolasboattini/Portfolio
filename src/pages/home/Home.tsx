import SectionCard from "../../components/SectionCard.tsx";
import Tooltip from "../../components/tooltip/Tooltip.tsx";
import { Subtitle, Flag } from "../../components/profile/Subtitle.tsx";
import SocialNetworkIcon from "../../components/SocialNetworkIcon.tsx";
import IconosTechs from "../../components/IconosTechs.tsx";
import { useProfile } from "../../context/ProfileContext.tsx";
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation(['global', 'profile', 'projects']);
  const { dataProfile } = useProfile();

  if (!dataProfile) {
    return <div>Loading...</div>; 
  }

  return (
    <SectionCard sectionTitle={t("global:homePage.section")}>
      <article className="w-full flex flex-col justify-center items-center
                          md:flex-row md:justify-center md:items-center gap-[4vw]">

        <div className="w-48 h-48 md:min-w-80 md:h-80 xl:min-w-96 xl:h-96  rounded-full overflow-hidden border-2 border-solid border-AZUL dark:border-AMARILLO
        bg-gradient-to-b  from-AZUL to-AMARILLO">
          <img className="w-full h-full object-cover object-center" src={dataProfile.profilePicture} alt="Foto de perfil" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 md:gap-10">
          <p className="text-lg md:text-4xl text-AZUL dark:text-AMARILLO"
            tabIndex={7}
          >{dataProfile?.fullname}
          </p>

          <section className="w-full flex gap-5 flex-wrap justify-center md:justify-start items-center text-base md:text-2xl">
            <Subtitle string={t("profile:dev")} tabIndex={8} />
            <Subtitle string={t("profile:years")} tabIndex={9} />
            <Tooltip text={dataProfile.nationality}>
              <Flag nationality={dataProfile.nationality.toLowerCase()} tabIndex={10} />
            </Tooltip>
          </section>



          <section className="flex flex-wrap gap-0.5 md:gap-4 items-center md:items-start">
            {
              Object.entries(dataProfile.linksSocialNetworks).map(([network, link], index) => (
                <Tooltip text={network}>
                  <SocialNetworkIcon key={network} socialNetwork={network} link={link} tabIndex={10 + index} />
                </Tooltip>
              ))
            }
          </section>

          <section className="w-full flex flex-col gap-2 items-center md:items-start">
            <p
              className="text-LIGHT-AzulOscuro dark:text-AZUL text-base md:text-2xl text-center"
              tabIndex={50}
            >{t("global:homePage.skills")}</p>
            <article className="w-4/6 md:w-full flex flex-col items-start gap-4">
              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <p
                  className="text-AZUL-dark dark:text-AMARILLO text-md md:text-xl"
                  tabIndex={51}
                >{t("global:homePage.frontEnd")}:</p>

                {dataProfile.skills.frontEnd.map((tech, index) => (
                  <Tooltip text={tech}>
                    <IconosTechs key={tech} tech={tech} tabIndex={51 + index} />
                  </Tooltip>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <p
                  className="text-AZUL-dark dark:text-AMARILLO text-md md:text-xl"
                  tabIndex={100}
                >{t("global:homePage.dataBase")}:</p>
                {dataProfile.skills.dataBase.map((tech, index) => (
                  <Tooltip text={tech}>
                    <IconosTechs key={tech} tech={tech} tabIndex={101 + index} />
                  </Tooltip>
                ))}
              </div>

              <div className="flex flex-wrap gap-x-4 gap-y-1">
                <p
                  className="text-AZUL-dark dark:text-AMARILLO text-md md:text-xl"
                  tabIndex={150}
                >{t("global:homePage.versionControl")}:</p>
                {dataProfile.skills.versionControl.map((tech, index) => (
                  <Tooltip text={tech}>
                    <IconosTechs key={tech} tech={tech} tabIndex={151 + index} />
                  </Tooltip>
                ))}
              </div>
            </article>
          </section>

          {
            dataProfile.descript && <p className="text-base md:text-xl text-balance text-center md:text-left">{dataProfile.descript}</p>
          }

        </div>

      </article>
    </SectionCard>
  )
}
