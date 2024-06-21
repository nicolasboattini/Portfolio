import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SectionCard from "../../components/SectionCard.tsx";
import SelectResolution from "./SelectResolution.tsx";
import ProjectNotFound from "./ProjectNotFound.tsx";
import Techs from "../../components/Techs";
import Tooltip from "../../components/tooltip/Tooltip.tsx";
import dataProjects from '../../data/dataProjects';

type DeviceType = 'cellphone' | 'tablet' | 'desktop';

export default function Project() {
  const { projectId } = useParams<{ projectId: string }>();
  const [device, setDevice] = useState<DeviceType>('desktop');

  const project = dataProjects.find(p => p.id === projectId);

  if (!project) {
    return <ProjectNotFound />;
  }

  return (
    <SectionCard sectionTitle={`Proyectos["${project.title}"]`}>
      <div className="w-full h-full flex flex-col gap-2 p-2"
      >

        <section className="w-full flex flex-wrap justify-center gap-4 p-4 rounded-lg
                dark:bg-gray-800 bg-AZUL bg-opacity-10">
          <article className='w-full flex flex-col'>
            <div className="w-full flex justify-between">

              <Tooltip text='Atrás' position='right'>
                <Link to='/projects'
                  aria-label="Atrás"
                  tabIndex={6}
                >
                  <span className="w-9 h-9 icon-[iconoir--undo-circle-solid] hover:text-AZUL-dark dark:hover:text-AMARILLO" />
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
                aria-label="Ver proyecto en github"
                tabIndex={7}
              >
                <p className='text-xl'>Ver código</p>
                <span className="w-9 h-9 icon-[iconoir--github-circle] "></span>
              </a>
            </div>

            <div className='w-full flex flex-col gap-2'>
              <p
                className="w-full text-center text-xl md:text-3xl border-b-2 border-AZUL-dark dark:border-AMARILLO mb-2"
                tabIndex={8}
              >{project.title}</p>
              <p tabIndex={9} className="indent-4 text-lg md:text-xl">{project.description}</p>
              {
                project.moreInfo.map((paragraph, index) => (
                  <p tabIndex={index + 9}
                    key={index} className='indent-4 text-base md:text-xl'>{paragraph}</p>
                ))
              }
            </div>
          </article>

          <article className='w-full flex flex-col gap-4'>
            <p tabIndex={20}
              className="w-full text-center text-xl md:text-2xl text-AZUL-dark dark:text-AMARILLO">Tecnologías:</p>
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
            <p tabIndex={100} className='text-xl md:text-2xl'>Capturas de pantalla:</p>

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
                  <p>PC</p>
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
                  <p>Tablet</p>
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
                  <p>Celular</p>
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
