import SectionCard from "../../components/SectionCard.tsx";

export default function ProjectNotFound() {
  return (
    <SectionCard sectionTitle="Proyecto?">
      <article className="w-full h-full flex justify-center items-center">
        <p tabIndex={7} className="text-2xl">Proyecto no encontrado :/</p>
      </article>
    </SectionCard>
  )
}
