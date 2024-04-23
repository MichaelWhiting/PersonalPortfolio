
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

import DMCert from "../Screenshots/Certifications/DevMountainCert.png";
import MTechCert from "../Screenshots/Certifications/MTechCert.png";
import HSDiploma from "../Screenshots/Certifications/HSDiploma.png"
import HighHonorRoll from "../Screenshots/Certifications/HighHonorRoll.png"
import PathwayCert from "../Screenshots/Certifications/PathwayCert.png";

import MTechRecommend from "../Screenshots/Certifications/MTechRecLetter.png";
import Resume from "../Screenshots/Certifications/Resume.png";

function Home() {
    const isMobile = /Mobi/.test(navigator.userAgent);

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
            { isMobile &&
            <>
                <h1 style={{textAlign: "center"}}>Certifications</h1>
                <div className="certifications-div90">
                    <img src={DMCert} className="cert90-item"/>
                    <img src={MTechCert} className="cert90-item"/>
                    <img src={HSDiploma} className="cert90-item"/>
                    <img src={HighHonorRoll} className="cert90-item"/>
                    <img src={PathwayCert} className="cert90-item"/>
                </div>

                <h1 style={{textAlign: "center"}}>Resume & Recommendations</h1>
                <div className="certifications-div">
                    <img src={Resume} className="cert-item"/>
                    <img src={MTechRecommend} className="cert-item"/>
                </div>
            </>
            }
            { !isMobile && 
            <>
                <HorizontalScroll title="Certifications" rotate={true}/>
                <HorizontalScroll title="Resume & Recommendations" rotate={false}/>
            </>
            }
        </div>
    )
}

export default Home;