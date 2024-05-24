import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from "./pages/home/Home.tsx";
import Projects from "./pages/projects/Projects.tsx";
import Project from "./pages/projects/Project.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";


function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/projects/:projectId' element={<Project />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
