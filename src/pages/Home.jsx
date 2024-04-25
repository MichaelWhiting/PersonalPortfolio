
import React from "react";

// CSS
import "../css/Home.css"
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

// Certification Pictures
import DMCert from "../Screenshots/Certifications/DevMountainCert.png";
import MTechCert from "../Screenshots/Certifications/MTechCert.png";
import HSDiploma from "../Screenshots/Certifications/HSDiploma.png"
import HighHonorRoll from "../Screenshots/Certifications/HighHonorRoll.png"
import PathwayCert from "../Screenshots/Certifications/PathwayCert.png";

import MTechRecommend from "../Screenshots/Certifications/MTechRecLetter.png";
import Resume from "../Screenshots/Certifications/Resume.png";

// Certifcation PDFs
import DMCertPDF from "../PDFs/DevMountainCert.pdf";
import MTechCertPDF from "../PDFs/MTechCert.pdf";
import HSDiplomaPDF from "../PDFs/HSDiploma.pdf";
import HighHonorRollPDF from "../PDFs/HighHonorRoll.pdf";
import PathwayCertPDF from "../PDFs/PathwayCert.pdf";

import MTechRecommendPDF from "../PDFs/MTechRecommendationLetter.pdf";
import ResumePDF from "../PDFs/MichaelBWhitingResume.pdf";

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

    const certs90 = [
        {img: DMCert, pdf: DMCertPDF}, 
        {img: MTechCert, pdf: MTechCertPDF}, 
        {img: HSDiploma, pdf: HSDiplomaPDF}, 
        {img: HighHonorRoll, pdf: HighHonorRollPDF}, 
        {img: PathwayCert, pdf: PathwayCertPDF}
    ];
    const certs = [
        {img: Resume, pdf: ResumePDF}, 
        {img: MTechRecommend, pdf: MTechRecommendPDF}
    ];

    const images90 = certs90.map((obj, i) => {
        return (
            <a href={obj.pdf} target="_blank" rel="noopener noreferrer" key={i}>
                <img src={obj.img} className="cert90-item"/>
            </a>
        )
    });

    const images = certs.map((obj, i) => {
        return (
            <a href={obj.pdf} target="_blank" rel="noopener noreferrer" key={i}>
                <img src={obj.img} className="cert-item"/>
            </a>
        )
    });

    const languageCards = languages.map((language, i) => {
        return <LanguageCard key={i} imageUrl={language.imageUrl} language={language.language} />
    })

    return (
        <div className='outer-div fade-in'>
            <div className="my-header-div" style={{background: "#373A3E"}}>
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
            <br/>
            { isMobile &&
            <>
                <h1 style={{textAlign: "center", width: "100%"}}>Certifications</h1>
                <div className="certifications-div90">
                    {images90}
                </div>

                <h1 style={{textAlign: "center", width: "100%"}}>Resume & Recommendations</h1>
                <div className="certifications-div">
                    {images}
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