import React from 'react';
import SectionCard from "../../components/SectionCard";
import Card from "./Card";
import { useProfile } from "../../context/ProfileContext";
import { useTranslation } from 'react-i18next';

const Projects: React.FC = () => {
  const { t } = useTranslation(['global', 'profile', 'projects']);
  const { dataProjects } = useProfile();

  if (!dataProjects) {
    return <div>Loading...</div>;
  }

  return (
    <SectionCard sectionTitle={t("global:projects.section")}>
      <article className="w-full gap-[4vw] grid grid-cols-1 sm:grid-cols-2">
        {dataProjects.map((project) => (
          <Card index={project.id} project={project} />
        ))}
      </article>
    </SectionCard>
  );
};

export default Projects;
