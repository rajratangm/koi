

import React from 'react';
import image26 from '../assets/images/image_26.png'; // Import the image file
import Carousel from './Carousel'; // Assuming you have a Carousel component

const Component1 = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      padding: '20px',
      
      
    }}>
      {/* Image on the left */}
      <div style={{
        flex: '0 0 50%',
        marginRight: '20px',
      }}>
        <img src={image26} alt="Image 26" style={{ maxWidth: '100%', height: 'auto' }} />
      </div>

      {/* Carousel on the right */}
      <div style={{
        flex: '0 0 50%',
      }}>
        <Carousel />
      </div>
    </div>
  );
};

export default Component1;
