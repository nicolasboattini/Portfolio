import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionCard from "../../components/SectionCard.tsx";
import SelectResolution from "./SelectResolution.tsx";
import ProjectNotFound from "./ProjectNotFound.tsx";
import Techs from "../../components/Techs";
import Tooltip from "../../components/tooltip/Tooltip.tsx";
import { useProfile } from "../../context/ProfileContext.tsx";
import { useTranslation } from 'react-i18next';

type DeviceType = 'cellphone' | 'tablet' | 'desktop';

export default function Project() {
  const { t } = useTranslation(['global', 'profile', 'projects']);

  const { dataProjects } = useProfile();

  const { projectId } = useParams<{ projectId: string }>();
  const [device, setDevice] = useState<DeviceType>('desktop');

  if (!projectId || !dataProjects) {
    return <ProjectNotFound />;
  }

  const project = dataProjects.find(p => p.id === parseInt(projectId));

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <SectionCard sectionTitle={`${t("global:projects.section")}["${project.title}"]`}>
      <div className="w-full h-full flex flex-col gap-2 p-2"
      >

        <section className="w-full flex flex-wrap justify-center gap-4 p-4 rounded-lg
                dark:bg-gray-800 bg-AZUL bg-opacity-10">
          <article className='w-full flex flex-col'>
            <div className="w-full flex justify-between items-center">

              <Tooltip text={t("global:projects.back")} position='right'>
                <Link to='/projects'
                  aria-label={t("global:projects.back")}
                  tabIndex={6}
                  className='flex justify-center items-center border-2 border-transparent py-1 px-1.5 rounded
                   hover:text-AZUL-dark hover:border-AZUL-dark hover:bg-AZUL hover:bg-opacity-10
                  dark:hover:border-AMARILLO dark:hover:text-AMARILLO dark:hover:bg-AMARILLO dark:hover:bg-opacity-10'
                >
                  <span className="w-7 h-7 md:w-9 md:h-9 icon-[tdesign--enter]" />
                </Link>
              </Tooltip>

              <a
                className='flex flex-wrap gap-1 justify-center items-center rounded
                        border-2 py-1 px-1.5
                        hover:text-AZUL-dark border-DARK-BG-light hover:border-AZUL-dark 
                        hover:bg-AZUL hover:bg-opacity-10
                        dark:border-CREMA dark:hover:border-AMARILLO dark:hover:text-AMARILLO
                        dark:hover:bg-AMARILLO dark:hover:bg-opacity-10'

                href={project.linkGithub}
                target="_blank"
                aria-label={t("global:projects.viewRepository")}
                tabIndex={7}
              >
                <p className='hidden sm:inline-block text-sm md:text-xl'>{t("global:projects.viewRepository")}</p>
                <span className="w-6 h-6 md:w-9 md:h-9 icon-[iconoir--github-circle] "></span>
              </a>
            </div>

            <div className='w-full flex flex-col gap-6'>
              <p
                className="w-full text-center text-xl md:text-3xl border-b-2 border-AZUL-dark dark:border-AMARILLO mb-2"
                tabIndex={8}
              >{project.title}</p>
              <p tabIndex={9} className="indent-8 text-lg md:text-xl">{t(`projects:${parseInt(projectId) - 1}.description`)}</p>

              {project.moreInfo.map((_, index) => (
                <p tabIndex={index + 9} key={index} className='indent-8 text-base md:text-xl'>
                  {t(`projects:${parseInt(projectId) - 1}.moreInfo.${index}`)}
                </p>
              ))}
            </div>
          </article>

          <article className='w-full flex flex-col gap-4'>
            <p tabIndex={20}
              className="w-full text-center text-xl md:text-2xl text-AZUL-dark dark:text-AMARILLO">
              {t("global:projects.technologies")}:
            </p>
            <div className="flex gap-2 flex-wrap justify-center">
              {project.techs.map((tech, index) => (
                <Techs key={tech} tech={tech} tabIndex={index + 20} />
              ))}
            </div>
          </article>
        </section>

        {
          (project.cantScreenshots.cellphone > 0 || project.cantScreenshots.tablet > 0 || project.cantScreenshots.desktop > 0)
          && <section className='w-full flex flex-col gap-4 items-center'>
            <p tabIndex={100} className='text-xl md:text-2xl'>{t("global:projects.screenshots")}:</p>

            <article className='flex justify-center flex-wrap gap-6'>
              {project.cantScreenshots.desktop > 0 &&
                <SelectResolution
                  onClick={() => setDevice('desktop')}
                  device={device} resolution="desktop"
                  tabIndex={101}
                >
                  <span
                    className="w-16 h-10 icon-[ion--ios-desktop]"
                  />
                  <p>{t("global:projects.device.desktop")}</p>
                </SelectResolution>
              }

              {
                project.cantScreenshots.tablet > 0 &&
                <SelectResolution
                  onClick={() => setDevice('tablet')}
                  device={device} resolution="tablet"
                  tabIndex={102}
                >
                  <span
                    className="w-9 h-9 icon-[ion--tablet-portrait-sharp]"
                  />
                  <p>{t("global:projects.device.tablet")}</p>
                </SelectResolution>
              }

              {
                project.cantScreenshots.cellphone > 0 &&
                <SelectResolution
                  onClick={() => setDevice('cellphone')}
                  device={device} resolution="cellphone"
                  tabIndex={103}
                >
                  <span
                    className="w-9 h-9 icon-[ion--phone-portrait-sharp]"
                  />
                  <p>{t("global:projects.device.cellphone")}</p>
                </SelectResolution>
              }
            </article>

            <article className='w-full flex flex-wrap justify-center items-center'>
              {[...Array(project.cantScreenshots[device])].map((_, index) => (

                <div key={index} tabIndex={index + 104} className={`p-1
                      ${device === 'cellphone' ? 'w-full sm:w-1/4' : ''}
                      ${device === 'tablet' ? 'w-full sm:w-1/3' : ''}
                      ${device === 'desktop' ? 'w-full sm:w-1/2' : ''}
                      `}>
                  <img
                    className='w-full h-auto border-2 border-AMARILLO dark:border-AZUL'

                    src={`/projects/${project.id}/screenshots/${device}/${index + 1}.png`}
                    alt={`Screenshot ${index + 1}`}
                  />
                </div>

              ))}
            </article>
          </section>
        }

      </div>
    </SectionCard>
  );
}
