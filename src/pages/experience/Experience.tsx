import SectionCard from "@/components/SectionCard.tsx";
import TimeLineItem from "./TimeLineItem.tsx";
import { useProfile } from "@/context/ProfileContext.tsx";
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation(['global', 'profile', 'projects']);
  const { dataProfile, loading } = useProfile();

  return (
    <SectionCard sectionTitle={t("global:workExperience.section")}>
      {loading && <p>Cargando...</p>}
      {!loading && !dataProfile && <p>No hay información disponible.</p>}

      {!loading && dataProfile?.workExperience &&
        <div className="w-full flex flex-col justify-start items-start">
          {
            dataProfile.workExperience.map((work, index) => (
              <TimeLineItem
                key={"work" + index}
                index={index}
                work={work}
              />
            ))
          }
        </div>
      }
    </SectionCard>
  )
}
