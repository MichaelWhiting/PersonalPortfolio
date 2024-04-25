import { Outlet } from 'react-router-dom'
import { useEffect } from 'react';

// Pages & Components/CSS
import NavBar from "./components/NavBar.jsx"

import "./css/App.css";

function App() {
  useEffect(() => {
    document.body.style.backgroundColor = "#1c1c1c";
    document.body.style.backgroundImage = "linear-gradient(0deg, rgba(164,173,191,1) 0%, rgba(28,28,28,1) 100%)";
    document.body.style.height = "2000px"

  }, []);

  return (
    <div className='container-div'>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App
