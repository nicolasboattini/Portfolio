import { useParams, Link } from 'react-router-dom';
import dataProjects from '../../data/dataProjects';
import Techs from "../../components/Techs.tsx";


export default function Project() {
  const { projectId } = useParams();

  const project = dataProjects.find(p => p.id === projectId);

  if (!project) {
    return <div>Proyecto no encontrado...</div>;
  }

  return (
    <section className="w-full min-h-screen flex flex-col items-center p-2 gap-3
    bg-LIGHT-BG-P dark:bg-DARK-BG-P dark:text-D-T-P text-L-T-P">
      <article className="w-full sm:w-11/12 p-2 bg-LIGHT-BG-P-dark dark:bg-DARK-BG-P-dark rounded-md shadow-md shadow-[#2c2c5d]">
        <p className="text-sm sm:text-xl text-L-T-S">
          {`<`}
          <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">section</span>
          {' '}
          <span className="text-LIGHT-D-P-dark dark:text-DARK-D-P">id</span>
          =
          <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">"section__proyectos__{project.title}"</span>
          {`>`}
        </p>

        <div className="flex w-full gap-2">
          <section className="w-full flex flex-col gap-3 py-5 pl-[5vw]">
            <section className="
            w-full gap-[5vw]
            grid grid-cols-1 sm:grid-cols-2"
            >
            

            </section>
          </section>

          <section className="min-h-full w-auto my-auto">
            <p className="hidden sm:inline-block text-8xl sm:text-9xl font-ubuntu font-normal text-DARK-D-P">;</p>
          </section>
        </div>

        <p className="text-sm sm:text-xl text-L-T-S">
          {`</`}
          <span className="text-LIGHT-D-P dark:text-DARK-D-P-light">section</span>
          {`>`}
        </p>
      </article>
    </section>
  );
}
