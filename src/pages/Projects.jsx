import React from 'react';

// Components
import ProjectCard from "../components/ProjectCard.jsx";

// CSS
import "../css/Projects.css";

function Projects() {

  const projects = [
    { 
      name: "Hidden Gems",
      description: `Worked with 3 other DevMountain Students to create "Hidden Gems". Hidden Gems is a social web application for discovering and sharing under-the-radar locations. Users post "Gems"—spots they find unique or hidden—complete with ratings on enjoyment and crowd level, powered by Google Maps and AWS-SDK for precise mapping and efficient data handling. It's also a platform for connection, allowing users to follow others, personalize their profiles with images and custom themes, and navigate a community-curated world of lesser-known locales`,
      ghLink: "https://github.com/MichaelWhiting/HiddenGems",

    },
    {
      name: "Games Project",
      description: "This project is a website that has a few different games. The games can be played while not being logged in, but it will not save those scores to the database if so. You are able to login and create accounts and are able to edit things like your username. If you are logged in and play a game, when the game ends it will attempt to save the score to the database and if it is one of the top 20 highest scores for that game, it will be displayed on the leaderboards page for that game. This project is mostly coded in React.",
      ghLink: "https://github.com/MichaelWhiting/PersonalProjectWD",
    }
  ]

  const projectCards = projects.map((project, i) => {
    return <ProjectCard key={i} project={project}/>
  });

  return (
    <div className="outer-div fade-in">
      <div className="my-header-div">
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