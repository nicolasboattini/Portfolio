import SectionCard from "../../components/SectionCard.tsx";
import { useTranslation } from 'react-i18next';
import { useProfile } from "../../context/ProfileContext.tsx";

export default function Cv() {
  const { dataProfile } = useProfile();
  const { t } = useTranslation(['global', 'profile', 'projects']);

  return (
    <SectionCard sectionTitle={t("global:cv.section")}>
      <article className="w-full h-full flex flex-col gap-2 p-2">
        <div className="pdf-container" style={{ width: '100%', height: '100vh' }}>
          <embed src={dataProfile?.linksSocialNetworks.CV} width="100%" height="100%" type="application/pdf" />
        </div>
      </article>
    </SectionCard>
  );
}
