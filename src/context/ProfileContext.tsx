import { createContext, useContext, useEffect, useState } from 'react';
import { Profile, Project } from "./ProfileContextTypes"; 

interface CombinedData {
  dataProfile: Profile | null;
  dataProjects: Project[] | null; 
}

const ProfileContext = createContext<CombinedData | null>(null);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile debe usarse dentro de un ProfileProvider');
  }
  return context;
};

interface ProfileProviderProps {
  children: React.ReactNode;
}

export const ProfileProvider: React.FC<ProfileProviderProps> = ({ children }) => {
  const [combinedData, setCombinedData] = useState<CombinedData | null>(null);

  useEffect(() => {
    Promise.all([
      fetch('/src/translations/es/profile.json').then(response => response.json()),
      fetch('/src/translations/es/projects.json').then(response => response.json())
    ])
      .then(([dataProfile, dataProjects]) => {
        const combinedData: CombinedData = {
          dataProfile,
          dataProjects
        };
        setCombinedData(combinedData);
      })
      .catch(error => console.error('Error fetching profile and project data:', error));
  }, []);

  if (!combinedData) {
    return <div>Loading...</div>;
  }

  return (
    <ProfileContext.Provider value={combinedData}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
