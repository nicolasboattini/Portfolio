import SectionCard from "../../components/SectionCard.tsx";
import TimeLineItem from "./TimeLineItem.tsx";
import dataProfile from "../../data/dataProfile.ts";

export default function Experience() {
  return (
    <SectionCard sectionTitle="Experiencia Laboral">
      <div className="w-full flex flex-col justify-start items-start"
      >
        {
          dataProfile.workExperience?.map(exp => (
            <TimeLineItem
              title={exp.title}
              company={exp.company}
              date={exp.date}
              description={exp.description}
              linkDescription={exp.linkDescription}
            />
          ))
        }
      </div>
    </SectionCard>
  )
}
