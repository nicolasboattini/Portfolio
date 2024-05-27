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
    <a href={link} target="_blank" className="flex justify-center items-center p-2 border-2 border-transparent hover:border-DARK-D-P">
      <span className={`w-10 h-10 ${icono}`}></span>
    </a>
  );
};

export default SocialNetworkIcon;
