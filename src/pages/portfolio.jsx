import { useState, useEffect, useRef } from 'react';

import Project from '../components/project'
import projects from '../db/projects'


function Portfolio() {
  // const [projectIndex, setProjectIndex] = useState(0)

  return (
    <section id='portfolio'>
      <div className="container">
        <h1 className="section-title">Welcome to my portfolio</h1>  
        <div className="section-body">
          <div className="project-container" style={{ width: "100%", height: "100%" }}>
            <div className="arrow" id="arrow-left"></div>
            {projects.map(project => (
              <Project
                key={project.id}
                title={project.title}
                description={project.description}
                img={project.img}
                url={project.url}
                repo={project.repo}
              />
            ))}
            <div className="arrow" id="arrow-left"></div>
          </div>
        </div>
      </div>  
    </section>
  );
}

export default Portfolio;