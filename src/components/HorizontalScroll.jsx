import { motion, useTransform, useScroll } from "framer-motion"
import { useEffect, useRef, useState } from 'react';

// CSS
import "../css/HorizontalScroll.css";

// Certifications
import DMCert from "../Screenshots/Certifications/DevMountainCert.png";
import MTechCert from "../Screenshots/Certifications/MTechCert.png";
import HSDiploma from "../Screenshots/Certifications/HSDiploma.png"
import HighHonorRoll from "../Screenshots/Certifications/HighHonorRoll.png"
import PathwayCert from "../Screenshots/Certifications/PathwayCert.png";

import MTechRecommend from "../Screenshots/Certifications/MTechRecLetter.png";
import Resume from "../Screenshots/Certifications/Resume.png";

function HorizontalScroll({ title, rotate }) {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], rotate ? ["28%", "-29%"] : ["1%", "1%"]);
    const certs90 = [DMCert, MTechCert, HSDiploma, HighHonorRoll, PathwayCert];
    const certs = [Resume, MTechRecommend];

    const isMobile = /Mobi/.test(navigator.userAgent);

    const images90 = certs90.map((url, i) => {
        return (
            <img src={url} className="scroll-card-90" key={i} />
        )
    });

    const images = certs.map((url, i) => {
        return (
            <img src={url} className="scroll-card" key={i} />
        )
    });

    return (
        <section ref={targetRef} className="relative">
            <h3 className="title">{title}</h3>
            <div className="cert-div">
                {!isMobile &&
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
                {isMobile &&
                    <h1>Person on mobile!</h1>
                }
            </div>
        </section>
    )
}

export default HorizontalScroll;