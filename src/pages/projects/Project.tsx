import { useParams } from 'react-router-dom';
import dataProjects from '../../data/dataProjects';

export default function Project() {
  const { projectId } = useParams();

  const project = dataProjects.find(p => p.id === projectId);

  if (!project) {
    return <div>Proyecto no encontrado...</div>;
  }

  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
    </div>  
  );
}
