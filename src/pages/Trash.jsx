import React from 'react'
import HorizontalScroll from '../components/HorizontalScroll'
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

function Trash() {
    const projects = [
        {
            name: "Hidden Gems",
            description: `Worked with 3 other DevMountain Students to create "Hidden Gems". Hidden Gems is a social web application for discovering and sharing under-the-radar locations. Users post "Gems"—spots they find unique or hidden—complete with ratings on enjoyment and crowd level, powered by Google Maps and AWS-SDK for precise mapping and efficient data handling. It's also a platform for connection, allowing users to follow others, personalize their profiles with images and custom themes, and navigate a community-curated world of lesser-known locales.`,
            ghLink: "https://github.com/MichaelWhiting/HiddenGems",
            imageUrls: [HomeUrl, ProfileUrl, DiscoverUrl],
            iOS: false
        },
        {
            name: "Games Project",
            description: "This project is a website that has a few different games. The games can be played while not being logged in, but it will not save those scores to the database if so. You are able to login and create accounts and are able to edit things like your username. If you are logged in and play a game, when the game ends it will attempt to save the score to the database and if it is one of the top 20 highest scores for that game, it will be displayed on the leaderboards page for that game. This project is mostly coded in React.",
            ghLink: "https://github.com/MichaelWhiting/PersonalProjectWD",
            imageUrls: [AccountUrl, LeaderboardsUrl, CategoriesUrl, HangmanUrl, ScrambleUrl],
            iOS: false
        },
        {
            name: "UVU Golf App",
            description: "An iOS app built with other peers at Mountainland Technical College and designed to help keep track of golfers scores in UVU's sponsor golf tournament. This app was developed fully using SwiftUI and utilizes a Google Firebase Firestore to save all of data like user accounts, scores, events, and more. While developing this app, I was in charge of being the team lead.",
            ghLink: "https://github.com/MTechMobileDevelopment/UVU-Golf-App",
            imageUrls: [Login, Register, Leaderboards, EventScores, EventDetail, YourEvents, QRScanner, Settings],
            iOS: true
        },
        {
            name: "Foot Prints",
            description: "An iOS app where users can create points based on places they've visited and can share those points with others. This application was developed mostly in UIKit with a few animations being done in SwiftUI. This app utilizes a Google Firebase Database to store all of the information like User Accounts, Marker Locations, and handles the account creation. This app also utilizes Apple's MapKit API to generate the map and the locations on it.",
            ghLink: "https://github.com/MichaelWhiting/Foot-Prints",
            imageUrls: [LoginFP, HomeFP, CreatePlaceFP, AccountFP],
            iOS: true
        }
    ]

    const projectCards = projects.map((project, i) => {
        return (
            <div key={i}>
                <img src={project.imageUrls[0]} style={{width: "60%", height: "auto"}}/>
                <h2>{project.name}</h2>
                <h3>{project.description}</h3>
                <a href={project.ghLink}>github</a>
            </div>
        )
    })

    return (
        <div style={{ width: "100%", height: "7500px", background: "white", color: 'black' }}>
            <h1>michael whiting</h1>
            <h1>languages I know:</h1>
            <ul>
                <li>Swift</li>
                <li>ReactJS</li>
                <li>Javascript</li>
                <li>HTML</li>
                <li>CSS</li>
            </ul>
            <HorizontalScroll title="certificates" rotate={true} />
            <HorizontalScroll title="certificates" rotate={false} />
            <div>
                <h1>projectz:</h1>
                {projectCards}
            </div>
        </div>
    )
}

export default Trash