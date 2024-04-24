import React from 'react';

// CSS
import "../css/LanguageCard.css";

function LanguageCard({ imageUrl, language }) {
  return (
    <div className="language-card fade-in">
        <img src={imageUrl} className="logo-img"/>
        <label className="language-label">{language}</label>
    </div>
  )
}

export default LanguageCard