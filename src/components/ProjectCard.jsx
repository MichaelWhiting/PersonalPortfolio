import React from 'react'

import "../css/Projects.css";

function ProjectCard({project}) {

  return (
    <div className="project-div">
      <h1>{project.name}</h1>
      <h3>{project.ghLink}</h3>
      <label>{project.description}</label>
    </div>
  )
}

export default ProjectCard