import { ProfileType, ProjectsType } from "@/types/ProfileContextTypes";
import { createContext, useContext, useEffect, useState } from 'react';

// Define el tipo para los datos combinados que proveerá el contexto
interface CombinedData {
  dataProfile: ProfileType | null; // Asegúrate de definir correctamente ProfileType
  dataProjects: ProjectsType | null; // Usa ProjectsType en lugar de ProjectsTypes[]
  loading: boolean;
}

// Crea el contexto para el perfil
const ProfileContext = createContext<CombinedData | null>(null);

// Hook personalizado para consumir el contexto del perfil
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile debe usarse dentro de un ProfileProvider');
  }
  return context;
};

// Props esperados para el componente del proveedor de perfil
interface ProfileProviderProps {
  children: React.ReactNode;
}

// Componente del proveedor de perfil
export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [combinedData, setCombinedData] = useState<CombinedData>({
    dataProfile: null,
    dataProjects: null,
    loading: true,
  });

  // Efecto para cargar datos cuando el componente está montado
  useEffect(() => {
    Promise.all([
      fetch('/src/translations/es/profile.json').then(response => response.json()),
      fetch('/src/translations/es/projects.json').then(response => response.json())
    ])
    .then(([dataProfile, dataProjects]) => {
      // Simulación de retraso para mostrar indicador de carga
      //setTimeout(() => {
        setCombinedData({
          dataProfile,
          dataProjects,
          loading: false,
        });
      //}, 2000); // Ajusta este valor según tus necesidades
    })
    .catch(error => {
      console.error('Error fetching profile and project data:', error);
      // Manejo de errores apropiado
    });
  }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

  // Renderizado del proveedor de contexto
  return (
    <ProfileContext.Provider value={combinedData}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext; // Exporta el contexto para su uso en otros componentes
