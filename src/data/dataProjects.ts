interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  linkGithub : string;
}

const dataProjects: Project[] = [
  {
    id: '1',
    title: 'Proyecto1',
    description: 'descrip',
    techs: ['html', 'css'],
    linkGithub: '',
  },
  {
    id: '2',
    title: 'Proyecto2',
    description: 'descrip',
    techs: ['html', 'css'],
    linkGithub: '',
  },
  {
    id: '3',
    title: 'Proyecto3',
    description: 'descrip',
    techs: ['html', 'css'],
    linkGithub: '',
  },
];

export default dataProjects;
