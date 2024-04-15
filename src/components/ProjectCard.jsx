import * as Icon from "react-bootstrap-icons";
import React from 'react'

import "../css/Projects.css";

function ProjectCard({ project }) {
  const { name, ghLink, description } = project;

  return (
    <div className="project-div">
      <div className="title-div">
        <h1>{name}</h1>
        <a href={ghLink} target="_blank" rel="noopener noreferrer" className="gh-link">
            <Icon.Github className="gh-icon"/>
            GitHub
        </a>
      </div>
      <div className="desc-vid-div">
        <div className="video-div">

        </div>
        <label className="description-label">{description}</label>
      </div>
    </div>
  )
}

export default ProjectCard