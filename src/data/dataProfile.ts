interface Profile {
  fullname: string;
  dev: string;
  years: string;
  nationality: string;
  linksSocialNetworks: string[];
  skills: {
    frontEnd: string[];
    dataBase: string[];
  };
  profilePicture: string;
}

const dataProfile: Profile = {
  fullname: 'Leandro Daniel Schugurensky',
  dev: 'Front-end Developer',
  years: '23 años',
  nationality: 'icon-[twemoji--flag-for-flag-argentina]',
  linksSocialNetworks: [
    "https://github.com/Schugu",
    "https://www.linkedin.com/in/leandrodanielschugurensky/",
    "https://www.instagram.com/leanschugu/",
    "https://www.freecodecamp.org/certification/Schugu/responsive-web-design",
    "mailto:leo.schugu@gmail.com",
    "/CV/CV_Leandro_Daniel_Schugurensky.pdf"
  ],
  skills: {
    frontEnd: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind'],
    dataBase: ['MongoDb', 'Firebase']
  },
  profilePicture: 'FotoCVSinFondo.png'
};

export default dataProfile;
