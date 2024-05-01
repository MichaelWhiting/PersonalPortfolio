import { motion, useScroll } from 'framer-motion';
import { Outlet, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Pages & Components/CSS
import NavBar from "./components/NavBar.jsx"

import "./css/App.css";

// Backgrounds
import BackgroundVideo from "./videos/background.mp4";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll()
  const isMobile = /Mobi/.test(navigator.userAgent);

  useEffect(() => {
    document.body.style.backgroundColor = "#00C8A0"; // 1c1c1c
    navigate("/joke");
  }, []);
  
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (progress) => {
      if (!Number.isNaN(progress)) {
        dispatch({
          type: "updateY",
          payload: progress
        })
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress]);


  useEffect(() => {
    dispatch({
      type: "updateY",
      payload: +scrollYProgress
    })

  }, [scrollYProgress])

  return (
    <>
      <motion.div className={!isMobile ? "my-progress-bar" : "my-progress-bar-mobile"} style={{ scaleX: scrollYProgress }} />
      <div className='container-div'>
        <video autoPlay loop muted playsInline className="bg-video">
          <source src={BackgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

export default App
