import {
    Animator,
    ScrollContainer,
    ScrollPage,
    Sticky,
    Fade,
    batch,
    Move,
} from 'react-scroll-motion';
import { useSelector } from 'react-redux';
import * as Icon from "react-bootstrap-icons";

// Components
import LanguageCard from '../components/LanguageCard.jsx';
import HorizontalScroll from '../components/HorizontalScroll.jsx';

import SwiftIcon from "../Icons/Swift.png";
import ReactIcon from "../Icons/React.png";
import JSIcon from "../Icons/JavaScript.png";
import HTMLIcon from "../Icons/HTML.png";
import CSSIcon from "../Icons/CSS.png";
import LuaIcon from "../Icons/Lua.png";
import TSIcon from "../Icons/TypeScript.png";

// CSS
import "../css/FrontPage.css";
import { useEffect } from 'react';

const anim = batch(Sticky(), Fade(), Move(0, 0, 15, -1000)) // -700 for x1
const sidewaysAnim = batch(Sticky(), Fade(0.5, 1), Move(3000, 0, -1500, 0)) // -700 for x1

function FrontPage() {
    const scrollY = useSelector(state => state.scrollY);

    useEffect(() => {}, [scrollY]);

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
        <ScrollContainer>
            <ScrollPage>
                <Animator animation={anim} className="animator-div">
                    <label className='header-title'>Michael Whiting</label>
                    <Icon.ChevronDoubleDown className="arrow-icon pulse"/>
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <div style={{ height: "1px" }}></div>
            </ScrollPage>

            <ScrollPage>
                <Animator animation={anim} className="animator-languages">
                    <h1 className="center-text">Languages I Know:</h1>
                    {languageCards}
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <div style={{ height: "1px" }}></div>
                { (scrollY < 0.65 && scrollY > 0.43) &&
                    <label className="sticky-label fade-in-slow">Certifications</label>
                }
            </ScrollPage>

            <ScrollPage>
                <Animator animation={sidewaysAnim} className="animator-certs">
                    <HorizontalScroll title="Certifications" rotate={true} />
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <div style={{ height: "1px" }}></div>
                { (scrollY < 0.84 && scrollY > 0.7) &&
                    <label className="sticky-label fade-in-slow">Resume & Recommendations</label>
                }
            </ScrollPage>

            <ScrollPage>
                <Animator animation={anim} className="animator-certs">
                    <HorizontalScroll title="Resume & Recommendations" rotate={false} />
                </Animator>
            </ScrollPage>

            <ScrollPage>
                <div style={{ height: "1px" }}></div>
            </ScrollPage>
        </ScrollContainer >
    )
}

export default FrontPage;