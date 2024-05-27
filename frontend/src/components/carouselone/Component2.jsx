// import React from 'react';

// const Component2 = () => {
//   return (
//     <div style={{ backgroundColor: 'lightgreen', padding: '20px', borderRadius: '5px' }}>
//       <h2>Component 2</h2>
//       <p>This is Component 2 with a light green background.</p>
//     </div>
//   );
// };

// export default Component2;



import React from 'react';
import image26 from '../assets/images/image_39.png'; // Import the image file
import Carousel from './Carousel'; // Assuming you have a Carousel component

const Component2 = () => {
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

export default Component2;
