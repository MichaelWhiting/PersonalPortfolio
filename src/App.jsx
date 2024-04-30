import { Outlet } from 'react-router-dom'
import { useEffect, useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useDispatch } from 'react-redux';

// Pages & Components/CSS
import NavBar from "./components/NavBar.jsx"

import "./css/App.css";

// Backgrounds
import BackgroundVideo from "./videos/background.mp4";

function App() {
  const dispatch = useDispatch();
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    document.body.style.backgroundColor = "#1c1c1c";
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
      <motion.div className="my-progress-bar" style={{ scaleX: scrollYProgress }} />
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
