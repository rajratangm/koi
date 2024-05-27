// import React, { useState } from 'react';

// const Carousel = () => {
//   // Array of images for the carousel
//   const images = [
//     '../assets/images/image_26.jpg',
//     '../assets/images/image_39.jpg',
//     '../assets/images/image_7.jpg',
//     // Add more image paths as needed
//   ];

//   // State to track the index of the current image
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to handle clicking on the next button
//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   // Function to handle clicking on the previous button
//   const handlePrevious = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px', height: '150px', overflow: 'hidden' }}>
//       {/* Display the current image */}
//       <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />

//       {/* Previous and Next buttons */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
//         <button onClick={handlePrevious}>Previous</button>
//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


// import React, { useState } from 'react';
// import image26 from '../assets/images/image_26.png'; // Import your images
// import image39 from '../assets/images/image_39.png';
// import image7 from '../assets/images/image_7.png';

// const Carousel = () => {
//   // Array of images for the carousel
//   const images = [image26, image39, image7];

//   // State to track the index of the current image
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   // Function to handle clicking on the next button
//   const handleNext = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
//   };

//   // Function to handle clicking on the previous button
//   const handlePrevious = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div style={{ border: '1px solid #ccc', padding: '10px', width: '200px', height: '150px', overflow: 'hidden' }}>
//       {/* Display the current image */}
//       <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />

//       {/* Previous and Next buttons */}
//       <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
//         <button onClick={handlePrevious}>Previous</button>
//         <button onClick={handleNext}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default Carousel;


//---------------------------

import React, { useState, useEffect } from 'react';
import image26 from '../assets/images/image_26.png'; // Import your images
import image39 from '../assets/images/image_39.png';
import image7 from '../assets/images/image_7.png';

const Carousel = () => {
  // Array of images for the carousel
  const images = [image26, image39, image7];

  // State to track the index of the current image
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to handle clicking on the next button
  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Function to handle clicking on the previous button
  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Automatically move to the next image every 3 seconds
  useEffect(() => {
    const interval = setInterval(handleNext, 3000);
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', width: '500px', height: '300px', overflow: 'hidden' }}>
      {/* Display the current image */}
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />

      {/* Previous and Next buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default Carousel;
