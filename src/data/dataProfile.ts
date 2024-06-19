interface Profile {
  fullname: string;
  descript?: string;
  dev: string;
  years: string;
  nationality: string;
  linksSocialNetworks: {
    github: string;
    linkedin: string;
    instagram: string;
    freecodecamp: string;
    email: string;
    cv: string;
  };
  skills: {
    frontEnd: string[];
    dataBase: string[];
    versionControl: string[];
  };
  profilePicture: string;
}

const dataProfile: Profile = {
  fullname: 'Leandro Daniel Schugurensky',
  descript: '¡Hola a todos! Soy Leandro Daniel Schugurensky, tengo 23 años y cuento con experiencia en roles administrativos. Me destaco en tareas tecnológicas y como programador Front-End, especializado en HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Git y GitHub. También tengo experiencia en el manejo de bases de datos como MongoDB y Firebase.',
  dev: 'Front-end Developer',
  years: '23 años',
  nationality: 'argentina',
  linksSocialNetworks: {
    github: "https://github.com/Schugu",
    linkedin: "https://www.linkedin.com/in/leandrodanielschugurensky/",
    instagram: "https://www.instagram.com/leanschugu/",
    freecodecamp: "https://www.freecodecamp.org/certification/Schugu/responsive-web-design",
    email: "mailto:leo.schugu@gmail.com",
    cv: "/profile/CV.pdf"
  },
  skills: {
    frontEnd: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind'],
    dataBase: ['MongoDb', 'Firebase'],
    versionControl: ['Git', 'GitHub']
  },
  profilePicture: '/profile/fotoDePerfil.png'
};

export default dataProfile;
