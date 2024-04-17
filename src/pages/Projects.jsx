import React from 'react';

// Components
import ProjectCard from "../components/ProjectCard.jsx";

// CSS
import "../css/Projects.css";

// Image Urls
// Hidden Gems
import HomeUrl from "../Screenshots/HiddenGems/HomePage.png";
import ProfileUrl from "../Screenshots/HiddenGems/ProfilePage.png";
import DiscoverUrl from "../Screenshots/HiddenGems/DiscoverPage.png";

// Games Project
import AccountUrl from "../Screenshots/GamesProject/AccountPage.png"
import LeaderboardsUrl from "../Screenshots/GamesProject/LeaderboardsPage.png";
import CategoriesUrl from "../Screenshots/GamesProject/Categories.png";
import HangmanUrl from "../Screenshots/GamesProject/Hangman.png";
import ScrambleUrl from "../Screenshots/GamesProject/Scramble.png";

// UVU Golf App
import Register from "../Screenshots/UVUGolfApp/Register.png";
import Login from "../Screenshots/UVUGolfApp/Login.png";
import Leaderboards from "../Screenshots/UVUGolfApp/Leaderboards.png";
import EventScores from "../Screenshots/UVUGolfApp/EnterScores.png";
import EventDetail from "../Screenshots/UVUGolfApp/EventDetail.png";
import YourEvents from "../Screenshots/UVUGolfApp/YourEvents.png";
import QRScanner from "../Screenshots/UVUGolfApp/QRScanner.png";
import Settings from "../Screenshots/UVUGolfApp/Settings.png";

// FootPrints
import AccountFP from "../Screenshots/FootPrints/Account.png";
import LoginFP from "../Screenshots/FootPrints/Login.png";
import HomeFP from "../Screenshots/FootPrints/Home.png";
import CreatePlaceFP from "../Screenshots/FootPrints/CreatePlace.png";

function Projects() {
  const projects = [
    { 
      name: "Hidden Gems",
      description: `Worked with 3 other DevMountain Students to create "Hidden Gems". Hidden Gems is a social web application for discovering and sharing under-the-radar locations. Users post "Gems"—spots they find unique or hidden—complete with ratings on enjoyment and crowd level, powered by Google Maps and AWS-SDK for precise mapping and efficient data handling. It's also a platform for connection, allowing users to follow others, personalize their profiles with images and custom themes, and navigate a community-curated world of lesser-known locales.`,
      ghLink: "https://github.com/MichaelWhiting/HiddenGems",
      imageUrls: [ HomeUrl, ProfileUrl, DiscoverUrl ],
      iOS: false
    },
    {
      name: "Games Project",
      description: "This project is a website that has a few different games. The games can be played while not being logged in, but it will not save those scores to the database if so. You are able to login and create accounts and are able to edit things like your username. If you are logged in and play a game, when the game ends it will attempt to save the score to the database and if it is one of the top 20 highest scores for that game, it will be displayed on the leaderboards page for that game. This project is mostly coded in React.",
      ghLink: "https://github.com/MichaelWhiting/PersonalProjectWD",
      imageUrls: [ AccountUrl, LeaderboardsUrl, CategoriesUrl, HangmanUrl, ScrambleUrl ],
      iOS: false
    },
    {
      name: "UVU Golf App",
      description: "An iOS app built and designed to help keep track of golfers scores in UVU's sponsor golf tournament.",
      ghLink: "https://github.com/MTechMobileDevelopment/UVU-Golf-App",
      imageUrls: [ Register, Login, Leaderboards, EventScores, EventDetail, YourEvents, QRScanner, Settings ],
      iOS: true
    },
    {
      name: "Foot Prints",
      description: "An iOS app where users can create points based on places they've visited and can share those points with others.",
      ghLink: "https://github.com/MichaelWhiting/Foot-Prints",
      imageUrls: [ LoginFP, HomeFP, CreatePlaceFP, AccountFP ],
      iOS: true
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
            for each project, along with some photos demoing the project.
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