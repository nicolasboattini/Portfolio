import SectionCard from "components/SectionCard";
import Card from "./Card";
import { useProfile } from "context/ProfileContext";
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation(['global', 'profile', 'projects']);
  const { dataProjects, loading } = useProfile();

  return (
    <SectionCard sectionTitle={t("global:projects.section")}>
      {loading && <div>Cargando...</div>}
      {!loading && (!dataProjects || dataProjects.length === 0) && <div>No hay proyectos disponibles</div>}

      {!loading && dataProjects && dataProjects.length > 0 &&
        <article className="w-full gap-[4vw] grid grid-cols-1 sm:grid-cols-2">
          {dataProjects.map((project) => (
            <Card key={project.id} index={project.id} project={project} />
          ))}
        </article>
      }
    </SectionCard>
  );
};

export default Projects;
