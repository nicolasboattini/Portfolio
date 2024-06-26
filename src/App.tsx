import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";
import Project from "./pages/projects/Project.tsx";
import Cv from "./pages/cv/Cv.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";
import Experience from "./pages/experience/Experience.tsx";
import Education from "./pages/education/Education.tsx";
import Contact from "./pages/contact/Contact.tsx";

import { I18nextProvider } from 'react-i18next';
import i18next from './utils/i18n.ts';

function App() {
 
  return (
    <BrowserRouter>
      <ThemeProvider>
        <I18nextProvider i18n={i18next}>
          <main className='flex flex-col min-h-screen bg-LIGHT-BG dark:bg-DARK-BG dark:text-CREMA text-LIGHT-AzulOscuro'>
            <Navbar />

            <section className='flex-grow'>
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path='/home' element={<Home />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/projects/:projectId' element={<Project />} />
                <Route path='/cv' element={<Cv />} />
                <Route path='/experience' element={<Experience />} />
                <Route path='/education' element={<Education />} />
                <Route path='/contact' element={<Contact />} />
              </Routes>
            </section>

            <Footer />
          </main>
        </I18nextProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
