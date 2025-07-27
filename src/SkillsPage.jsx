import './SkillsPage.css';
import { Header } from './components/Header';

export function SkillsPage() {
  const skills = [
    { name: 'HTML', level: 'Advanced' },
    { name: 'CSS', level: 'Advanced' },
    { name: 'JavaScript', level: 'Intermediate' },
    { name: 'React', level: 'Intermediate' },
    { name: 'Node.js', level: 'Beginner' },
    { name: 'Python', level: 'Intermediate' },
    { name: 'Machine Learning', level: 'Intermediate' },
    { name: 'C', level: 'Intermediate' },
    { name: 'Java', level: 'Intermediate' },
  ];

  return (
    <>
      <title>Skills</title>
      <Header />
      <div className="skills-container">
        <h1 className="skills-title">My Skills</h1>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <h2>{skill.name}</h2>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
