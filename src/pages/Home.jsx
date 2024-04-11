import React from 'react'

// CSS
import "../css/Home.css";
import LanguageCard from '../components/LanguageCard';

// Images
import SwiftIcon from "../../public/Swift.png";
import ReactIcon from "../../public/React.png";
import JSIcon from "../../public/JavaScript.png";
import HTMLIcon from "../../public/HTML.png";
import CSSIcon from "../../public/CSS.png";
import LuaIcon from "../../public/Lua.png";

// PDFs
import recommendation1 from "../../public/MTechRecommendationLetter.pdf"


function Home() {
    const languages = [
        { imageUrl: SwiftIcon, language: "Swift" },
        { imageUrl: ReactIcon, language: "ReactJS" },
        { imageUrl: JSIcon, language: "Javascript" },
        { imageUrl: HTMLIcon, language: "HTML" },
        { imageUrl: CSSIcon, language: "CSS" },
        { imageUrl: LuaIcon, language: "Lua" },
    ];

    const languageCards = languages.map((language, i) => {
        return <LanguageCard key={i} imageUrl={language.imageUrl} language={language.language}/>
    })

    return (
        <div className='outer-div fade-in'>
            <div className="header-div">
                <div className='profile-image'>
                    <div style={{background: 'gray', width: "100%", height: "100%"}}></div>
                </div>
                <div>
                    <h1 className="name-label">Michael Whiting</h1>
                    <label>
                        This is my personal portfolio website that shows off 
                        my skills and some of my projects which I have worked on.
                    </label>
                </div>
            </div>
            <div className='knowledge-div'>
                <h3>Languages I know:</h3>
                <div className='languages-div'>
                    {languageCards}
                </div>
                <h3>Certificates & Letters of Recommendation</h3>
                <iframe
                    src={recommendation1}
                    width="100%"
                    height="600px"
                    style={{border: 'none'}}>
                </iframe>
            </div>
        </div>
    )
}

export default Home;