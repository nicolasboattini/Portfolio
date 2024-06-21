import SectionCard from "../../components/SectionCard.tsx";
import dataProfile from "../../data/dataProfile.ts";

export default function Project() {
  return (
    <SectionCard sectionTitle="Curriculum vitae">
      <article className="w-full h-full flex flex-col gap-2 p-2">
        <div className="pdf-container" style={{ width: '100%', height: '100vh' }}>
          <embed src={dataProfile.linksSocialNetworks.CV} width="100%" height="100%" type="application/pdf" />
        </div>
      </article>
    </SectionCard>
  );
}
