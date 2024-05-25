interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  linkGithub : string;
  cantScreenshots: number;
}

const dataProjects: Project[] = [
  {
    id: '1',
    title: 'BalanceApp 💰',
    description: 'Aplicación web para ingresar ingresos y egresos económicos con sistema de cuentas y base de datos.',
    techs: ['JavaScript', 'React', 'Tailwind', 'Node.js', 'Express.js', 'MongoDB', 'Firebase'],
    linkGithub: 'https://github.com/Schugu/BalanceApp',
    cantScreenshots: 1
  },
  {
    id: '2',
    title: 'Star Wars Page 🌌🚀',
    description: 'Aplicación web con datos de las películas de Star Wars obtenidos de SWAPI.',
    techs: ['JavaScript', 'Next.js', 'Tailwind'],
    linkGithub: 'https://github.com/Schugu/prueba-tecnica-neowyze',
    cantScreenshots: 1
  },
  {
    id: '3',
    title: ' Subscriptions Tracker 📋',
    description: 'Aplicación web para trackear subscripciones',
    techs: ['HTML', 'CSS', 'JavaScript', 'React'],
    linkGithub: 'https://github.com/Schugu/SubscriptionsTracker',
    cantScreenshots: 1
  },
  {
    id: '4',
    title: 'Braille Page 📖🧑‍🦯♿️',
    description: 'Página para aprender Braille',
    techs: ['HTML', 'CSS', 'JavaScript'],
    linkGithub: 'https://github.com/Schugu/BraillePage',
    cantScreenshots: 1
  },
];

export default dataProjects;
