import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Cookies from 'js-cookie';

// Definir el tipo para el contexto
interface ThemeContextType {
  theme: 'dark' | 'light'; // Definir el tipo específico para theme
  setTheme: (theme: 'dark' | 'light') => void; // Ajustar también setTheme
}

// Crear el contexto con un valor inicial indefinido
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    const savedTheme = Cookies.get('theme');
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      return savedTheme as 'dark' | 'light'; // Asegurarse de que savedTheme sea del tipo correcto
    }
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const applyTheme = (currentTheme: 'dark' | 'light') => {
      const htmlElement = document.querySelector('html');
      if (htmlElement) {
        if (currentTheme === 'dark') {
          htmlElement.classList.add('dark');
        } else {
          htmlElement.classList.remove('dark');
        }
      }
    };

    // Aplicar el tema basado en la cookie o el preferido del sistema
    const savedTheme = Cookies.get('theme');
    if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light')) {
      setTheme(savedTheme as 'dark' | 'light');
      applyTheme(savedTheme as 'dark' | 'light');
    } else {
      applyTheme(theme);
    }

    const handleThemeChange = (e: MediaQueryListEvent) => {
      const newTheme = e.matches ? 'dark' : 'light';
      setTheme(newTheme);
      applyTheme(newTheme);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleThemeChange);
    };
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
