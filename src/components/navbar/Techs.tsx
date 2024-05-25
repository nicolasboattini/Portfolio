
interface TechsProps {
  tech: string;
}

export default function Techs({ tech }: TechsProps) {
  switch (tech) {
    case 'HTML':
      return (
        <img
          src="https://img.shields.io/badge/HTML%20-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"
          alt="HTML"
        />
      );
    case 'JavaScript':
      return (
        <img
          src="https://img.shields.io/badge/JavaScript%20-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black"
          alt="JavaScript"
        />
      );
    case 'CSS':
      return (
        <img
          src="https://img.shields.io/badge/CSS%20-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"
          alt="CSS"
        />
      );
    case 'React':
      return (
        <img
          src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
          alt="React"
        />
      );
    case 'Next.js':
      return (
        <img
          src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white"
          alt="Next.js"
        />
      );
    case 'Tailwind':
      return (
        <img
          src="https://img.shields.io/badge/Tailwind_CSS-4392DB?style=for-the-badge&logo=tailwind-css&logoColor=white"
          alt="Tailwind"
        />
      );
    case 'Node.js':
      return (
        <img
          src="https://img.shields.io/badge/Node.js-000000?style=for-the-badge&logo=node.js&logoColor=5fa04e"
          alt="Node.js"
        />
      );
    case 'Express.js':
      return (
        <img
          src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"
          alt="Express.js"
        />
      );
    case 'MongoDB':
      return (
        <img
          src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"
          alt="MongoDB"
        />
      );
    case 'Firebase':
      return (
        <img
          src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black"
          alt="Firebase"
        />
      );
    default:
      return (
        <div>Unknown technology: {tech}</div>
      );
  }
}
