import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

// Pages & Components/CSS
import NavBar from "./components/NavBar.jsx"

import "./css/App.css";

// Backgrounds
import BackgroundVideo from "./videos/background.mp4";

function App() {
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    document.body.style.backgroundColor = "#1c1c1c";
  }, []);

  return (
    <>
      <motion.div className="my-progress-bar"  style={{ scaleX: scrollYProgress }}/>
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
