import { useState, useEffect, useRef } from 'react';
import projects from '../db/projects'



function Project({ title, description, img, url, repo, style }) {
  return (
    <div className="project" style={style}>
    <img src={img} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
    <div className="links">
      <a href={url} target="_blank" rel="noopener noreferrer">View Project</a>
      <a href={repo} target="_blank" rel="noopener noreferrer">View Repo</a>
    </div>
    </div>
  ) 
}

function ProjectSlider() {

  const [projectIndex, setProjectIndex] = useState(0)

  const showPrevProject = () => {
    setProjectIndex(index => {
      if (index === 0) return projects.length -1
      return index - 1
    })
  }

  const showNextProject = () => {

    setProjectIndex(index => {
      if (index === projects.length-1) return 0
      return index + 1
    })
  }

  return (
    <div className="project-slider">
      <div className="arrow" id="arrow-left" onClick={showPrevProject}>L</div>
      {projects.map(project => (
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          img={project.img}
          url={project.url}
          repo={project.repo}
          style={{ translate: `${-100 * projectIndex}%` }}

        />
      ))}
      <div className="arrow" id="arrow-right" style={{ right: "0" }} onClick={showNextProject}>R</div>
  </div>








  );
}

export default ProjectSlider;

