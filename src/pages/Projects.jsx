import React from 'react';

// Components
import ProjectCard from "../components/ProjectCard.jsx";

// CSS
import "../css/Projects.css";

function Projects() {

  const projects = [
    { 
      name: "Hidden Gems",
      description: "Description Placeholder",
      ghLink: "Link Here",

    },
    {
      name: "Games Project",
      description: "Description Placeholder",
      ghLink: "Link Here",
    }
  ]

  const projectCards = projects.map((project, i) => {
    return <ProjectCard key={i} project={project}/>
  });

  return (
    <div className="outer-div fade-in">
      <div className="header-div">
        <div>
          <h1 className="name-label">Projects</h1>
          <label>
            This is a page that displays the projects I have worked on and the technologies that I used
            for each project, along with a video demoing the project.
          </label>
        </div>
      </div>
      <div className="projects-div">
        {projectCards}
      </div>
    </div>
  )
}

export default Projects;