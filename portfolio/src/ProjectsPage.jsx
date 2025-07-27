import { Header } from './components/Header';
import './ProjectsPage.css';

export function ProjectsPage( {projectItems, setProjectItems} ) {
  return (
    <>
      <title>projects</title>

      <Header />

      <SearchProject />

      <ProjectItems
        projectItems={projectItems}
        setProjectItems={setProjectItems}
      />
    </>
  );
}

function SearchProject() {
  return (
    <div className="input-bar">
      <input
        type="text"
        placeholder='Search Projects'
        className='search-input'
      />
      <span className="arrow-symbol">→</span>
    </div>
  );
}

function ProjectItem( {name, description, github, id, deploy} ) {
  const openLink = ((link) => {
    window.open(link, "_blank");
  });

  return (
    <div className="project-card" key={id}>
      <div>
        <h1>{name}</h1>
      </div>
      <p>{description}</p>
      <div className="project-links">
        <button
          onClick={() => {openLink(github)}}
        >Open Github</button>
        <button
          onClick={() => {openLink(deploy)}}
        >Open Link</button>
      </div>
    </div>
  );
}

function ProjectItems( {projectItems} ) {
  return (
    <div className="projects-cards-container">
      {projectItems.map((item) => {
        return (
          <ProjectItem
            key={item.id}
            id={item.id}
            name={item.name}
            description={item.description}
            github={item.github}
            deploy={item.deploy}
          />
        );
      })}
    </div>
  );
}