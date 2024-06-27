import SectionCard from "../../components/SectionCard.tsx";
import TimeLineItem from "./TimeLineItem.tsx";
import { useProfile } from "../../context/ProfileContext.tsx";
import { useTranslation } from 'react-i18next';

export default function Experience() {
  const { t } = useTranslation(['global', 'profile', 'projects']);
  const { dataProfile } = useProfile();

  return (
    <SectionCard sectionTitle={t("global:workExperience.section")}>
      <div className="w-full flex flex-col justify-start items-start"
      >
        {
          dataProfile?.workExperience?.map((_, index) => (
            <TimeLineItem
              title={t(`profile:workExperience.${index}.title`)}
              company={t(`profile:workExperience.${index}.company`)}
              date={t(`profile:workExperience.${index}.date`)}
              description={t(`profile:workExperience.${index}.description`)}
              linkDescription={t(`profile:workExperience.${index}.linkDescription`)}
            />
          ))
        }
      </div>
    </SectionCard>
  )
}
