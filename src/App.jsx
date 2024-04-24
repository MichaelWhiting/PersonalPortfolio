import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';

// Pages & Components/CSS
import NavBar from "./components/NavBar.jsx"

import "./css/App.css";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#000000";
    document.body.style.backgroundImage = "linear-gradient(0deg, rgba(98,98,98,1) 0%, rgba(0,0,0,1) 100%)";
    document.body.style.height = "4000px"

  }, []);

  return (
    <div className='container-div'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
