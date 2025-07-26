import { Routes, Route } from 'react-router';
import { HomePage } from './HomePage';
import { ProjectsPage } from './ProjectsPage';
import './App.css'

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="projects" element={<ProjectsPage />} />
    </Routes>
  );
}

export default App
