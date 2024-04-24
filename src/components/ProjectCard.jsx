import * as Icon from "react-bootstrap-icons";
import React, { useState } from "react";
import { Carousel, Spinner } from "react-bootstrap";

import "../css/Projects.css";

// Imgs

function ProjectCard({ project }) {
  const { name, ghLink, description, imageUrls, iOS } = project;

  const carouselItems = imageUrls.map((url, i) => {
    const [loading, setLoading] = useState(true);

    return iOS ? (
      <Carousel.Item key={i}>
        { loading && 
          <Spinner/>
        }
        <img 
          src={url} 
          className="carousel-img-ios" 
          onLoad={() => setLoading(false)}
          style={{display: loading ? "none" : "block"}}/>
      </Carousel.Item>
    ) : (
      <Carousel.Item key={i}>
        { loading && 
          <Spinner/>
        }
        <img 
          src={url} 
          className="carousel-img" 
          onLoad={() => setLoading(false)}
          style={{display: loading ? "none" : "block"}}/>      
      </Carousel.Item>
    );
  });

  return (
    <div className="project-div">
      <div className="title-div">
        <h1>{name}</h1>
        <a
          href={ghLink}
          target="_blank"
          rel="noopener noreferrer"
          className="gh-link"
        >
          <Icon.Github className="gh-icon" />
          GitHub
        </a>
      </div>
      <div className="desc-vid-div">
        {iOS && (
          <>
            <Carousel className="carousel-div-ios" data-bs-theme="dark">
              {carouselItems}
            </Carousel>
            <div className="desc-div-ios">
              <label className="description-label">{description}</label>
            </div>
          </>
        )}
        {!iOS && (
          <>
            <Carousel className="carousel-div" data-bs-theme="dark">
              {carouselItems}
            </Carousel>
            <div className="desc-div">
              <label className="description-label">{description}</label>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
