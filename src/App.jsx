import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';

// Pages & Components/CSS
import NavBar from "./components/NavBar.jsx"

import "./css/App.css";

function App() {
  useEffect(() => { // for some reason the CSS file isn't changing the color of the body, so doing it here instead
    document.body.style.backgroundColor = "#00B4A1";
  },[]);

  return (
    <div className='container-div'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
