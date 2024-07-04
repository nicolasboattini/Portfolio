import IconosTechs from "@/components/IconosTechs.tsx";
import SectionCard from "@/components/SectionCard.tsx";
import SocialNetworkIcon from "@/components/SocialNetworkIcon.tsx";
import { Flag, Subtitle } from "@/components/profile/Subtitle.tsx";
import Tooltip from "@/components/tooltip/Tooltip.tsx";
import { useProfile } from "@/context/ProfileContext.tsx";
import { useTranslation } from 'react-i18next';
import ContImg from "./ContImg.tsx";

export default function Home() {
  const { t } = useTranslation(['global', 'profile', 'projects']);
  const { dataProfile, loading } = useProfile();

  return (
    <SectionCard sectionTitle={t("global:homePage.section")}>
      {loading && <p>Cargando...</p>}
      {!loading && !dataProfile && <p>No hay información disponible.</p>}

      {!loading && dataProfile && (
        <article className="w-full flex flex-col justify-center items-center
                          md:flex-row md:justify-center md:items-center gap-[4vw]">

          <ContImg shape="circle">
            <img className="w-full h-full object-cover object-center" src={dataProfile.profilePicture} alt="Foto de perfil" />
          </ContImg>

          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-5 md:gap-10">
            <p className="sm:text-left text-center text-lg md:text-4xl text-AZUL dark:text-AMARILLO" tabIndex={7}>
              {dataProfile.fullname}
            </p>

            <section className="w-full flex gap-5 flex-wrap justify-center md:justify-start items-center text-base md:text-2xl">
              <Subtitle string={t("profile:dev")} tabIndex={8} />
              {dataProfile.titles?.map((_, index) => (
                <Subtitle string={t(`profile:titles.${index}`)} tabIndex={9}/>
              ))}
              <Subtitle string={t("profile:years")} tabIndex={9} />
              <Tooltip text={dataProfile.nationality}>
                <Flag nationality={dataProfile.nationality.toLowerCase()} tabIndex={10} />
              </Tooltip>
            </section>

            {dataProfile.linksSocialNetworks &&
              <section className="flex flex-wrap gap-0.5 md:gap-4 items-center md:items-start">
                {Object.entries(dataProfile.linksSocialNetworks).map(([network, link], index) => (
                  <Tooltip text={network} key={network + index}>
                    <SocialNetworkIcon socialNetwork={network} link={link} tabIndex={10 + index} />
                  </Tooltip>
                ))}
              </section>
            }

            {dataProfile.skills &&
              <section className="w-full flex flex-col gap-2 items-center md:items-start">
                <p className="text-LIGHT-AzulOscuro dark:text-AZUL text-base md:text-2xl text-center" tabIndex={50}>
                  {t("global:homePage.skills.title")}
                </p>

                <article className="w-4/6 md:w-full flex flex-col items-start gap-6">
                  {Object.entries(dataProfile.skills).map(([titleStack, stack], index) => (
                    <div className="flex items-center flex-wrap gap-x-4 gap-y-1" key={titleStack + index}>
                      <p className="text-AZUL-dark dark:text-AMARILLO text-md md:text-xl" tabIndex={51}>
                        {t(`global:homePage.skills.${titleStack}`)}:
                      </p>
                      {stack.map((tech, stackindex) => (
                        <Tooltip text={tech} key={titleStack + tech + stackindex}>
                          <IconosTechs tech={tech} tabIndex={51 + stackindex} />
                        </Tooltip>
                      ))}
                    </div>
                  ))}
                </article>
              </section>
            }

            {dataProfile.descript && <p className="text-base md:text-xl text-balance text-center md:text-left">{t("profile:descript")}</p>}

            {dataProfile.hobbies &&
              <section className="w-full flex flex-col items-left gap-2">
                <p className="text-LIGHT-AzulOscuro dark:text-AZUL text-base md:text-2xl">{t("global:homePage.hobbies")}</p>
                <p className="text-base md:text-xl text-balance text-center md:text-left">{t("profile:hobbies")}</p>
              </section>
            }
          </div>

        </article>
      )}
    </SectionCard>
  );
}
