interface Profile {
  fullname: string;
  descript?: string;
  dev: string;
  years: string;
  nationality: string;
  linksSocialNetworks: {
    Github: string;
    Linkedin: string;
    Instagram: string;
    FreeCodeCamp: string;
    Email: string;
    CV: string;
  };
  skills: {
    frontEnd: string[];
    dataBase: string[];
    versionControl: string[];
  };
  profilePicture: string;
  workExperience: {
    title: string;
    company: string;
    date: string;
    description: string;
    linkDescription: string;
  }[];
}

const dataProfile: Profile = {
  fullname: 'Leandro Daniel Schugurensky',
  // descript: '¡Hola a todos! Soy Leandro Daniel Schugurensky, tengo 23 años y cuento con experiencia en roles administrativos. Me destaco en tareas tecnológicas y como programador Front-End, especializado en HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Git y GitHub. También tengo experiencia en el manejo de bases de datos como MongoDB y Firebase.',
  dev: 'Front-end Developer',
  years: '23 años',
  nationality: 'Argentina',
  linksSocialNetworks: {
    Github: "https://github.com/Schugu",
    Linkedin: "https://www.linkedin.com/in/leandrodanielschugurensky/",
    Instagram: "https://www.instagram.com/leanschugu/",
    FreeCodeCamp: "https://www.freecodecamp.org/certification/Schugu/responsive-web-design",
    Email: "mailto:leo.schugu@gmail.com",
    CV: "/profile/CV.pdf"
  },
  skills: {
    frontEnd: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind'],
    dataBase: ['MongoDB', 'Firebase'],
    versionControl: ['Git', 'GitHub']
  },
  profilePicture: '/profile/fotoDePerfil.png',
  workExperience: [
    {
      title: "Administrativo",
      company: "Dirección General de Discapacidad e Inclusión Social de la Municipalidad de la Ciudad de Corrientes",
      date: "Nov. 2023 - Jun. 2024 · 8 meses",
      description: "Pasantía laboral (8 meses) en el marco del programa E.T.P (Entrenamiento Para el Trabajo Público). Desempeño de tareas administrativas: carga y digitalización de expedientes, carga de base de datos, entre otras.",
      linkDescription: "HOL",
    },
    {
      title: "Administrativo",
      company: "Dirección General de Discapacidad e Inclusión Social de la Municipalidad de la Ciudad de Corrientes",
      date: "Jun. 2022 - Ene. 2023 · 8 meses",
      description: "Desempeño de tareas administrativas: carga y digitalización de expedientes, carga de base de datos, entre otras.",
      linkDescription: "",
    },
  ]
};

export default dataProfile;
