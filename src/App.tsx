import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";
import Project from "./pages/projects/Project.tsx";
import Cv from "./pages/cv/Cv.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import Footer from "./components/footer/Footer.tsx";


function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <main className='flex flex-col min-h-screen bg-LIGHT-BG dark:bg-DARK-BG dark:text-CREMA text-LIGHT-AzulOscuro'>
          <Navbar />

          <section className='flex-grow'>
            <Routes>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path='/home' element={<Home />} />
              <Route path='/projects' element={<Projects />} />
              <Route path='/projects/:projectId' element={<Project />} />
              <Route path='/cv' element={<Cv />} />
            </Routes>
          </section>

          <Footer />
        </main>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
