import { motion, useTransform, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from 'react';

// CSS
import "../css/HorizontalScroll.css";

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

function HorizontalScroll({ title, rotate }) {
    const [showTitle, setShowTitle] = useState(true);
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], rotate ? ["35%", "-28%"] : ["1%", "1%"]); // ["28%", "-29%"]

    const isMobile = /Mobi/.test(navigator.userAgent);

    useEffect(() => {
        console.log("running!")
        const unsubscribeX = x.on("change", (value) => {
            // console.log("x:", x.current, "y:", scrollYProgress.current)
            if (value === "-29%" && isMobile === false) {
                setShowTitle(false)
            } else {
                setShowTitle(true)
            }
        });

        return () => {
            unsubscribeX();
        };
    }, [scrollYProgress]);

    const certs90 = [
        { img: DMCert, pdf: DMCertPDF },
        { img: MTechCert, pdf: MTechCertPDF },
        { img: HSDiploma, pdf: HSDiplomaPDF },
        { img: HighHonorRoll, pdf: HighHonorRollPDF },
        { img: PathwayCert, pdf: PathwayCertPDF }
    ];

    const certs = [
        { img: Resume, pdf: ResumePDF },
        { img: MTechRecommend, pdf: MTechRecommendPDF }
    ];

    const images90 = certs90.map((obj, i) => {
        return (
            <a href={obj.pdf} target="_blank" rel="noopener noreferrer" key={i} className="a-tag">
                <img src={obj.img} className="scroll-card-90 fade-in" />
            </a>
        )
    });

    const images = certs.map((obj, i) => {
        return (
            <a href={obj.pdf} target="_blank" rel="noopener noreferrer" key={i} className="a-tag">
                <img src={obj.img} className="scroll-card fade-in"/>
            </a>
        )
    });

    return (
        <section ref={targetRef} className={rotate ? "relative90" : "relative"}>
            {/* {showTitle && <h3 className="title">{title}</h3>} */}
            <br />
            <div>
                {isMobile &&
                    <>
                        <div className="mobile-imgs">
                            { rotate && 
                                {images90}  
                            }
                            { !rotate &&
                                {images}
                            }
                        </div>
                    </>
                }
                { !isMobile &&
                    <motion.div style={{ x }} className="cert-div">
                        {rotate &&
                            <>
                                {images90}
                            </>
                        }
                        {!rotate &&
                            <>
                                {images}
                            </>
                        }
                    </motion.div>
                }
            </div>
        </section>
    )
}

export default HorizontalScroll;