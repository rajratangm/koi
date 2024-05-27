import React from 'react';
import './Article.css'; // Assuming you've stored the CSS in a file named styles.css
import image from '../../assets/images/logo.svg'; // Assuming you've stored the concert image in your assets folder

const ParallaxPage = () => {
  return (
    <div className="wrapper">
      <div className="parallax__group hero-container">
        <div className="parallax__layer sky"></div>
        <div className="parallax__layer bushes"></div>
        <div className="parallax__layer water"></div>
        <div className="parallax__layer people1"></div>
        <div className="parallax__layer people2"></div>
        <div className="parallax__layer people3"></div>
        <div className="parallax__layer hero-text">
         
          <div className="year-container">
            <h1>WELCOME</h1>
          </div>
        </div>
      </div>
      <div className="parallax__group info-container">
        <img src={image} alt="Lively and colourful concert" />
        <div className="text-container">
          <h2>You Reached the right place</h2>
          <p>Ready to increase you Sales many folds?</p>
          <p>Be ready to be amazed</p>
        </div>
      </div>
    </div>
  );
};

export default ParallaxPage;
