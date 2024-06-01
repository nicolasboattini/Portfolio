import { useParams } from 'react-router-dom';
import Navbar from "../../components/navbar/Navbar";
import { TagOpen, TagClose } from "../../components/TagsSection";
import dataProjects from '../../data/dataProjects';
import Techs from "../../components/Techs";
import { Tooltip } from 'react-tooltip';
import { useState } from 'react';
import SelectResolution from "./SelectResolution.tsx";

type DeviceType = 'cellphone' | 'tablet' | 'desktop';

export default function Project() {
  const { projectId } = useParams<{ projectId: string }>();
  const [device, setDevice] = useState<DeviceType>('desktop');

  const project = dataProjects.find(p => p.id === projectId);

  if (!project) {
    return <div>Proyecto no encontrado...</div>;
  }


  return (
    <section className="w-full min-h-screen flex flex-col items-center 
    bg-LIGHT-BG dark:bg-DARK-BG dark:text-CREMA text-LIGHT-AzulOscuro">

      <Navbar />
      <article className="mx-0 my-6 w-full h-auto md:h-auto md:w-11/12 md:pt-4 md:pr-4 md:pb-6 md:pl-7 p-2 
      rounded-md border-2 shadow 
      bg-LIGHT-BG-dark border-AZUL shadow-AZUL
      dark:bg-DARK-BG-dark dark:border-DARK-BORDER-light dark:shadow-DARK-BORDER-light">

        <TagOpen section={`Proyectos["${project.title}"]`} />

        <section className="flex w-full">
          <article className="w-full flex flex-col gap-3 py-2 md:py-2 md:pl-[5vw]">
            <div className="
            w-full
            flex flex-col justify-center items-center
            md:flex-row md:justify-evenly md:items-center gap-2"
            >

              <section className="w-full h-full flex flex-col gap-2 p-2"
              >

                <article className="w-full flex flex-wrap justify-center gap-4 p-4 rounded-lg
                dark:bg-gray-800 bg-AZUL bg-opacity-10">
                  <div className='w-full flex flex-col'>
                    <section className="w-full flex justify-end">
                      <a data-tooltip-id="my-tooltip"
                        data-tooltip-content="Github"
                        href={project.linkGithub}
                        target="_blank"
                        aria-label="Ver proyecto en github"
                        tabIndex={6}
                      >
                        <span className="w-9 h-9 icon-[iconoir--github-circle] hover:text-AMARILLO"></span>
                      </a>
                      <Tooltip id="my-tooltip" />
                    </section>

                    <section className='w-full flex flex-col gap-2'>
                      <p
                        className="w-full text-center text-xl md:text-3xl border-b-2 border-AZUL-dark dark:border-AMARILLO mb-2"
                        tabIndex={7}
                      >{project.title}</p>
                      <p tabIndex={8} className="indent-4 text-lg md:text-xl">{project.description}</p>
                      {
                        project.moreInfo.map((paragraph, index) => (
                          <p tabIndex={index + 8}
                          key={index} className='indent-4 text-base md:text-xl'>{paragraph}</p>
                        ))
                      }
                    </section>
                  </div>

                  <section className='w-full flex flex-col gap-4'>
                    <p className="w-full text-center text-xl md:text-2xl text-AZUL-dark dark:text-AMARILLO">Tecnologías:</p>
                    <article className="flex gap-2 flex-wrap justify-center">
                      {project.techs.map((tech, index) => (
                        <Techs key={tech} tech={tech} tabIndex={index + 20} />
                      ))}
                    </article>
                  </section>
                </article>


                <article className='w-full flex flex-col gap-4 items-center'>
                  <p tabIndex={100} className='text-xl md:text-2xl'>Capturas de pantalla:</p>

                  <div className='flex justify-center flex-wrap gap-6'>
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
                  </div>

                  <div className='w-full flex flex-wrap justify-center items-center'>
                    {[...Array(project.cantScreenshots[device])].map((_, index) => (

                      <section key={index} tabIndex={index + 104} className={`p-1
                      ${device === 'cellphone' ? 'w-full sm:w-1/4' : ''}
                      ${device === 'tablet' ? 'w-full sm:w-1/3' : ''}
                      ${device === 'desktop' ? 'w-full sm:w-1/2' : ''}
                      `}>
                        <img
                          className='w-full h-auto border-2 border-AMARILLO dark:border-AZUL'

                          src={`/projects/${project.id}/screenshots/${device}/${index + 1}.png`}
                          alt={`Screenshot ${index + 1}`}
                        />
                      </section>

                    ))}
                  </div>
                </article>

              </section>
            </div>
          </article>

          <article className="min-h-full w-auto my-auto">
            <p className="hidden md:inline-block text-8xl md:text-9xl font-ubuntu font-normal text-AZUL">;</p>
          </article>

        </section>

        <TagClose />
      </article>

    </section>
  );
}
