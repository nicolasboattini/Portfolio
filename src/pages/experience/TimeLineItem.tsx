import Flag from "@/components/Flag.tsx";
import { useTranslation } from 'react-i18next';

interface Work {
  title: string;
  company: string;
  date: string;
  modality: string;
  workplace: string;
  country: string;
  description: string[];
  tasks?: string[];
  linkDescription?: string;
}

interface TimelineItemProps {
  index: string | number;
  work: Work;
}


const TimelineItem = ({ work, index }: TimelineItemProps) => {
  const { t } = useTranslation(['global', 'profile', 'projects']);

  return (
    <section className="ml-7 md:ml-0 relative border-s 
    border-AZUL-dark 
    dark:border-AMARILLO-dark"
    key={"work" + index}>

      <div className="mb-16 ms-6">
        <span className="absolute flex items-center justify-center w-6 h-6 -start-3 ring-4 rounded-full
        bg-blue-100 ring-AZUL-dark 
        dark:ring-AMARILLO-dark dark:bg-AMARILLO-light">

          <svg className="w-2.5 h-2.5 text-AZUL dark:text-AZUL " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
          </svg>
        </span>

        <section className="w-full flex flex-col md:flex-row md:justify-start gap-4 md:gap-14">
          <article className="w-full md:w-4/12">
            <p className="text-xl font-semibold text-AZUL-dark dark:text-AZUL">
              {t(`profile:workExperience.${index}.title`)}
            </p>
            <p className="text-lg font-medium text-gray-600 dark:text-white">{t(`profile:workExperience.${index}.company`)}</p>
            <time className="text-base font-normal leading-none text-AZUL dark:text-CREMA">{t(`profile:workExperience.${index}.date`)}</time>
            <div className="flex items-center gap-2 dark:text-AMARILLO text-AZUL-dark">
              <p className="text-base font-medium ">
                {t(`profile:workExperience.${index}.modality`)} - {t(`profile:workExperience.${index}.workplace`)}.
              </p>
              <Flag country={work.country} width={8} height={8} />
            </div>

          </article>
          <article className="w-full md:w-6/12 flex flex-col gap-2">
            {
              work.description.map((_, pIndex) => (
                <p key={"work" + index + pIndex} className="w-full text-balance text-xl font-normal text-AZUL-dark dark:text-CREMA">{t(`profile:workExperience.${index}.description.${pIndex}`)}</p>
              ))
            }
            {
              work.tasks && (
                <>
                  <p className="text-xl text-AZUL-dark dark:text-AZUL">{t("global:workExperience.tasks")}</p>
                  <ol className="list-inside list-disc">
                    {work.tasks.map((_, taskIndex) => (
                      <li key={"work" + index + taskIndex} className="w-full text-balance text-xl font-normal text-AZUL dark:text-white">{t(`profile:workExperience.${index}.tasks.${taskIndex}`)}</li>
                    ))}
                  </ol>
                </>
              )
            }
            {
              work.linkDescription &&
              <a href={work.linkDescription} className="w-fit text-xl hover:border-b-2 transition-colors duration-100 ease-in-out
              dark:text-AMARILLO dark:hover:border-AMARILLO 
              text-AZUL hover:border-AZUL 
              ">
                {t("global:workExperience.showMore")}
              </a>
            }
          </article>
        </section>
      </div>

    </section>
  );
};

export default TimelineItem;
