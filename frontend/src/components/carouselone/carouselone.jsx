import React, { useState } from 'react';
import Component1 from './Component1'; // Import your component files
import Component2 from './Component2';
import Component3 from './Component3';

const SlideShow = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const renderCurrentSlide = () => {
    switch (currentSlide) {
      case 1:
        return <Component1 />;
      case 2:
        return <Component2 />;
      case 3:
        return <Component3 />;
      default:
        return null;
    }
  };

  const handleClick = (slideNumber) => {
    setCurrentSlide(slideNumber);
  };

  const buttonStyle = {
    borderRadius: '4px',
    border: '1px solid #FFFFFF',
    backgroundColor: '#014F4B',
    padding: '11.6px 0 12.2px 2.6px',
    width: '225.6px',
    boxSizing: 'border-box',
    fontFamily: "'Inter', sans-serif",
    fontWeight: '500',
    fontSize: '14.3px',
    letterSpacing: '2px',
    lineHeight: '1.175',
    textTransform: 'uppercase',
    color: '#FFFFFF',
    margin: '5px', // Adding some margin for spacing between buttons
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#000000',
    opacity: '0.5',
    cursor: 'not-allowed', // Indicate that the button is disabled
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#000000', padding: '20px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button style={buttonStyle} onClick={() => handleClick(1)}>Smart Yard</button>
        <button style={buttonStyle} onClick={() => handleClick(2)}>Slide 2</button>
        <button style={buttonStyle} onClick={() => handleClick(3)}>Slide 3</button>
        <button style={disabledButtonStyle} disabled>Smart Factory</button>
        <button style={disabledButtonStyle} disabled>Disabled 2</button>
      </div>
      <div>
        {renderCurrentSlide()}
      </div>
    </div>
  );
};

export default SlideShow;
