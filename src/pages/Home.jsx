
import React from "react";

// CSS
import "../css/Home.css";
import LanguageCard from '../components/LanguageCard.jsx';
import HorizontalScroll from "../components/HorizontalScroll.jsx";

// Images
import SwiftIcon from "../Icons/Swift.png";
import ReactIcon from "../Icons/React.png";
import JSIcon from "../Icons/JavaScript.png";
import HTMLIcon from "../Icons/HTML.png";
import CSSIcon from "../Icons/CSS.png";
import LuaIcon from "../Icons/Lua.png";
import TSIcon from "../Icons/TypeScript.png";

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
        return <LanguageCard key={i} imageUrl={language.imageUrl} language={language.language} />
    })

    return (
        <div className='outer-div fade-in'>
            <div className="my-header-div">
                <div className='profile-image'>
                    <div className="image-style"></div>
                </div>
                <div className='hi'>
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

            </div>
            <HorizontalScroll title="Certifications" rotate={true}/>
            <HorizontalScroll title="Resume & Recommendations" rotate={false}/>
        </div>
    )
}

export default Home;