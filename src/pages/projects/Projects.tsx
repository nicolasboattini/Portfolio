import SectionCard from "../../components/SectionCard.tsx";
import Card from "./Card.tsx";
import dataProjects from "../../data/dataProjects.ts";

export default function Projects() {
  return (
    <SectionCard sectionTitle="Proyectos">
      <article className="w-full gap-[4vw] grid grid-cols-1 sm:grid-cols-2">
        {
          dataProjects.map((project, index) => (
            <Card index={index} project={project} />
          ))
        }
      </article>
    </SectionCard>
  )
}
