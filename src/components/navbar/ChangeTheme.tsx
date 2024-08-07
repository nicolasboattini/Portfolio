import { useTheme } from '@/context/ThemeContext.tsx';
import Cookies from 'js-cookie';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme | ((prevTheme: Theme) => Theme)) => void;
}

export default function ChangeTheme() {
  const { theme, setTheme } = useTheme() as ThemeContextType;

  const handleChangeTheme = () => {
    setTheme((prevTheme: Theme) => {
      const newTheme: Theme = prevTheme === 'light' ? 'dark' : 'light';
      const htmlElement = document.querySelector('html');
      if (htmlElement) {
        htmlElement.classList.toggle('dark', newTheme === 'dark');
      }
      Cookies.set('theme', newTheme, { expires: 365 });
      return newTheme;
    });
  };

  return (
    <div
      tabIndex={5}
      aria-label={`Cambiar de tema, tema actual: ${theme}`}
      onClick={handleChangeTheme}
      className="cursor-pointer select-none flex justify-center items-center"
    >
      <span
        aria-hidden='true'
        className={`w-6 h-6 md:w-7 md:h-7 hover:text-AZUL dark:hover:text-AMARILLO
        ${theme === 'light'
            ? 'icon-[tdesign--mode-light]'
            : 'icon-[tdesign--mode-dark] '}
        `}></span>
    </div>
  );
}
