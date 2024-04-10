import React from 'react'

// CSS
import "../css/Home.css";

function Home() {



    return (
        <div className='outer-div fade-in'>
            <div className="header-div">
                <div className='profile-image'>
                    <div style={{background: 'gray', width: "100%", height: "100%"}}></div>
                </div>
                <div>
                    <h1 className="name-label">Michael Whiting</h1>
                    <label>
                        This is my personal portfolio website that shows off 
                        my skills and some of my projects which I have worked on.
                    </label>
                </div>
            </div>
            <div className='languages-div'>
                <h3>Languages I know:</h3>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Home;