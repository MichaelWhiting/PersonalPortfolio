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
import TSIcon from "../../public/TypeScript.png"

// PDFs
import recommendation1 from "../../public/MTechRecommendationLetter.pdf"
import recommendation2 from "../../public/DevMountainCert.pdf"
import recommendation3 from "../../public/MTechCert.pdf"


function Home() {
    const languages = [
        { imageUrl: SwiftIcon, language: "Swift" },
        { imageUrl: ReactIcon, language: "ReactJS" },
        { imageUrl: JSIcon, language: "JavaScript" },
        { imageUrl: TSIcon, language: "TypeScript" },
        { imageUrl: HTMLIcon, language: "HTML" },
        { imageUrl: CSSIcon, language: "CSS" },
        { imageUrl: LuaIcon, language: "Lua" },
    ];

    const languageCards = languages.map((language, i) => {
        return <LanguageCard key={i} imageUrl={language.imageUrl} language={language.language}/>
    })

    return (
        <div className='outer-div fade-in'>
            <div className="my-header-div">
                <div className='profile-image'>
                    <div className="image-style"></div>
                </div>
                <div>
                    <label className="my-name-label">Michael Whiting</label>
                    <label className="self-desc-label">
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
                <div className="awards">
                    <h3>Certificates & Letters of Recommendation</h3>
                    <br/>
                    <iframe src={recommendation2} className="recommend-letter"></iframe>
                    <iframe src={recommendation1} className="recommend-letter"></iframe>
                    <iframe src={recommendation3} className="recommend-letter"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Home;