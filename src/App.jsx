import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';

// Pages & Components/CSS
import NavBar from "./components/NavBar.jsx"

import "./css/App.css";

function App() {
  useEffect(() => { // for some reason the CSS file isn't changing the color of the body, so doing it here instead
    document.body.style.backgroundColor = "rgb(0,180,161)";
    document.body.style.backgroundImage = "radial-gradient(circle, rgba(0,180,161,1) 0%, rgba(0,136,119,1) 100%)";
  },[]);

  return (
    <div className='container-div'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
