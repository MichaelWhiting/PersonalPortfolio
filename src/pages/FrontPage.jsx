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

// Animations
const anim = batch(Sticky(), Fade(), Move(0, 0, 1, -1000)) // -700 for x1
const sidewaysAnim = batch(Sticky(), Fade(0.5, 1), Move(3000, 0, -1500, 0)) // -700 for x1
const animStr = (i) => `fadeInAnimation ${250}ms ease-out ${100 * (i + 1)}ms forwards`;

function FrontPage() {
    const scrollY = useSelector(state => state.scrollY);
    const isMobile = /Mobi/.test(navigator.userAgent);

    useEffect(() => {
        console.log(scrollY);
    }, [scrollY]);

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
        return <LanguageCard key={i} imageUrl={language.imageUrl} language={language.language} style={{ animation: animStr(i), opacity: 0 }} />
    })

    return (
        <div style={{height: "auto"}}>
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={anim} className="animator-div">
                        <label className='header-title'>Michael Whiting</label>
                        <Icon.ChevronDoubleDown className="arrow-icon pulse" />
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <Animator animation={anim} className="animator-languages">
                        <h1 className="center-text">Languages I Know:</h1>
                        {languageCards}
                    </Animator>
                </ScrollPage>

                <ScrollPage>
                    <div style={{height: "0px", margin: "0px"}}></div>
                </ScrollPage>

                {!isMobile &&
                    <>
                        <ScrollPage>
                            {(scrollY < 0.7 && scrollY > 0.38) &&
                                <label className="sticky-label fade-in-slow">Certifications</label>
                            }
                        </ScrollPage>

                        <ScrollPage>
                            <Animator animation={sidewaysAnim} className="animator-certs">
                                <HorizontalScroll title="Certifications" rotate={true} />
                            </Animator>
                        </ScrollPage>
                    </>
                }
                {!isMobile &&
                    <>
                        <ScrollPage>
                            {(scrollY < 0.97 && scrollY > 0.79) &&
                                <label className="sticky-label fade-in-slow">Resume & Recommendations</label>
                            }
                        </ScrollPage>

                        <ScrollPage>
                            <Animator animation={anim} className="animator-certs">
                                <HorizontalScroll title="Resume & Recommendations" rotate={false} />
                            </Animator>
                        </ScrollPage>
                    </>
                }
            </ScrollContainer >
            {isMobile &&
                <div className="animator-certs-mobile">
                    helloooo
                    <HorizontalScroll title="Certifications" rotate={true} />
                </div>
            }
            {isMobile &&
                <div className="animator-certs-mobile">
                    <HorizontalScroll title="Resume & Recommendations" rotate={false} />
                </div>
            }
        </div>
    )
}

export default FrontPage;