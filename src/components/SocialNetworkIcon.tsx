import { useState, useEffect } from "react";

interface SocialNetworkProps {
  socialNetwork: string;
  link: string;
}

const SocialNetworkIcon = ({ socialNetwork, link }: SocialNetworkProps) => {
  const [icono, setIcono] = useState('');

  useEffect(() => {
    switch (socialNetwork) {
      case 'github':
        setIcono('icon-[mdi--github]');
        break;
      case 'linkedin':
        setIcono('icon-[mdi--linkedin]');
        break;
      case 'instagram':
        setIcono('icon-[ph--instagram-logo]');
        break;
      case 'freecodecamp':
        setIcono('icon-[simple-icons--freecodecamp]');
        break;
      case 'email':
        setIcono('icon-[mdi--email-outline]');
        break;
      case 'cv':
        setIcono('icon-[academicons--cv]');
        break;
      default:
        setIcono('');
    }
  }, [socialNetwork]);

  return (
    <a href={link} target="_blank"
      className="flex justify-center items-center p-1 rounded-xl
                border-2 border-transparent hover:border-AMARILLO
                hover:bg-white hover:bg-opacity-10 
                transition-colors duration-100 ease-in-out
                ">
      <span className={`w-8 h-8 md:w-10 md:h-10 ${icono}`}></span>
    </a>
  );
};

export default SocialNetworkIcon;
