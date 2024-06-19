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
}

const dataProfile: Profile = {
  fullname: 'Leandro Daniel Schugurensky',
  descript: '¡Hola a todos! Soy Leandro Daniel Schugurensky, tengo 23 años y cuento con experiencia en roles administrativos. Me destaco en tareas tecnológicas y como programador Front-End, especializado en HTML, CSS, JavaScript, React, Next.js, TailwindCSS, Git y GitHub. También tengo experiencia en el manejo de bases de datos como MongoDB y Firebase.',
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
    dataBase: ['MongoDb', 'Firebase'],
    versionControl: ['Git', 'GitHub']
  },
  profilePicture: '/profile/fotoDePerfil.png'
};

export default dataProfile;
