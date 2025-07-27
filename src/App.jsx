import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { HomePage } from './HomePage';
import { ProjectsPage } from './ProjectsPage';
import { AboutPage } from './AboutPage';
import './App.css'

function App() {
  const [projectItems, setProjectItems] = useState([{
    name: 'YouTube',
    id: 'id1',
    description: 'A basic clone web page of YouTube',
    github: 'https://github.com/suryavamsigara/YouTube-clone',
    deploy: 'https://suryavamsigara.github.io/YouTube-clone/'
  }, {
    name: 'Amazon',
    id: 'id4',
    description: 'A full-stack Amazon e-commerce platform with product listings, and shopping cart functionality.',
    github: 'https://github.com/suryavamsigara/javascript-amazon-project',
    deploy: 'https://suryavamsigara.github.io/javascript-amazon-project/'
  }, {
    name: 'Todo List',
    id: 'id2',
    description: 'A simple yet efficient task manager that lets users add and delete tasks with features like due date',
    github: 'https://github.com/suryavamsigara/todo-list',
    deploy: 'https://todolistbyvamsi.netlify.app/'
  }, {
    name: 'Chatbot',
    id: 'id5',
    description: 'A simple chatbot built using react and OpenAi API.',
    github: 'https://github.com/suryavamsigara/chatbot-project',
    deploy: 'https://chatbotbyvamsi.netlify.app/'
  }, {
    name: 'Trigram language model',
    id: 'id3',
    description: 'A character-level language model that generates creative names by predicting the next character based on the previous two.',
    github: 'https://github.com/suryavamsigara/trigram-language-model',
    deploy: 'Link'
  }]);

  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="projects" element={
        <ProjectsPage 
          projectItems = {projectItems}
          setProjectItems = {setProjectItems}
        />
      }/>
      <Route path="about" element={<AboutPage />} />
    </Routes>
  );
}

export default App
