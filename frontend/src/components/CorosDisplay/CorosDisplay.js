// import React, { useState } from 'react';
// import image60 from '../assets/images/image_60.png';
// import image17 from '../assets/images/image_17.png';
// import image72 from '../assets/images/image_17.png';
// import image18 from '../assets/images/image_18.png';
// import image56 from '../assets/images/image_56.png';
// import image54 from '../assets/images/image_54.png';
// import image44 from '../assets/images/image_44.png';
// import image80 from '../assets/images/image_17.png';
// import image16 from '../assets/images/image_16.png';
// import image43 from '../assets/images/image_43.png';
// import image37 from '../assets/images/image_37.png';
// import image48 from '../assets/images/image_48.png';
// import image28 from '../assets/images/image_28.png';
// import image3 from '../assets/images/image_3.png';
// import image77 from '../assets/images/image_17.png';
// import image25 from '../assets/images/image_25.png';

// const Carousel = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const nextSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
//   };

//   return (
//     <div className="carousel">
//       <button onClick={prevSlide}>Previous</button>
//       <img src={slides[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
//       <button onClick={nextSlide}>Next</button>
//     </div>
//   );
// };

// const CorosDisplay = () => {
//   const [selectedCarousel, setSelectedCarousel] = useState(1);

//   const handleSelectCarousel = (carouselNum) => {
//     setSelectedCarousel(carouselNum);
//   };

//   return (
//     <div className="app">
//       <button onClick={() => handleSelectCarousel(1)}>Carousel 1</button>
//       <button onClick={() => handleSelectCarousel(2)}>Carousel 2</button>
//       <button onClick={() => handleSelectCarousel(3)}>Carousel 3</button>
//       <button onClick={() => handleSelectCarousel(4)}>Carousel 4</button>
//       <button onClick={() => handleSelectCarousel(5)}>Carousel 5</button>

//       {selectedCarousel === 1 && (
//         <Carousel slides={[image60, image17, image72]} />
//       )}
//       {selectedCarousel === 2 && (
//         <Carousel slides={[image18]} />
//       )}
//       {selectedCarousel === 3 && (
//         <Carousel slides={[image56, image54, image44, image80]} />
//       )}
//       {selectedCarousel === 4 && (
//         <Carousel slides={[image16, image43]} />
//       )}
//       {selectedCarousel === 5 && (
//         <Carousel slides={[image37, image48, image28, image3, image77, image25]} />
//       )}
//     </div>
//   );
// };

// export default CorosDisplay;



import React, { useState } from 'react';
import image60 from '../assets/images/image_60.png';
import image17 from '../assets/images/image_17.png';
import image72 from '../assets/images/image_60.png';
import image18 from '../assets/images/image_18.png';
import image56 from '../assets/images/image_56.png';
import image54 from '../assets/images/image_54.png';
import image44 from '../assets/images/image_44.png';
import image80 from '../assets/images/image_44.png';
import image16 from '../assets/images/image_16.png';
import image43 from '../assets/images/image_43.png';
import image37 from '../assets/images/image_37.png';
import image48 from '../assets/images/image_48.png';
import image28 from '../assets/images/image_28.png';
import image3 from '../assets/images/image_3.png';
import image77 from '../assets/images/image_3.png';
import image25 from '../assets/images/image_25.png';
import image45 from '../assets/images/image_45.png';
import image12 from '../assets/images/image_12.png';
import image33 from '../assets/images/image_33.png';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <div className="carousel">
      <div className="w-[242px] h-[145px] bg-[50%_50%] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${slides[currentSlide]})` }}></div>
    </div>
  );
};

const ImageGrid = ({ images }) => (
  <div className="grid grid-cols-3 gap-4 mt-4">
    {images.map((image, index) => (
      <div key={index} className="w-[242px] h-[145px] bg-[50%_50%] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${image})` }}></div>
    ))}
  </div>
);

const CorosDisplay = () => {
  const [selectedRegion, setSelectedRegion] = useState('North America');

  const handleSelectRegion = (region) => {
    setSelectedRegion(region);
  };

  const regionImages = {
    'North America': [image60, image17, image72],
    'Asia': [image18, image56, image54],
    'Europe': [image44, image80, image16],
    'Middle East': [image43, image37, image48],
    'South America': [image28, image3, image77, image25],
  };

  return (
    <div className="relative flex flex-row box-sizing-border bg-gray-900 text-white">
      <div className="w-[180px] h-[740.6px]" style={{ backgroundImage: `url(${image45})`, backgroundPosition: '50% 50%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
      <div className="flex flex-col ml-8 mt-4">
        <div className="flex flex-row justify-around">
          <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA] cursor-pointer" onMouseEnter={() => handleSelectRegion('North America')}>
            North America
          </span>
          <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA] cursor-pointer" onMouseEnter={() => handleSelectRegion('Asia')}>
            Asia
          </span>
          <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA] cursor-pointer" onMouseEnter={() => handleSelectRegion('Europe')}>
            Europe
          </span>
          <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA] cursor-pointer" onMouseEnter={() => handleSelectRegion('Middle East')}>
            Middle East
          </span>
          <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA] cursor-pointer" onMouseEnter={() => handleSelectRegion('South America')}>
            South America
          </span>
        </div>
        <div className="mt-4">
          <Carousel slides={regionImages[selectedRegion]} />
        </div>
        <div className="image-grid-container mt-4">
          <ImageGrid images={regionImages[selectedRegion]} />
        </div>
      </div>
      {/* Positioning the image at the top-right corner */}
      <div className="absolute top-0 right-0 mt-4 mr-8">
        <div className="w-[100px] h-[60px] bg-[50%_50%] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${image12})`, backgroundSize: 'contain' }}></div>
      </div>
      {/* Positioning the image at the bottom-right corner */}
      <div className="absolute bottom-0 right-0 mr-8 mb-8">
        <div className="w-[864px] h-[210px] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${image33})`, backgroundPosition: '50% 50%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
      </div>
    </div>
  );
};

export default CorosDisplay;


//---------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import image60 from '../assets/images/image_60.png';
// import image17 from '../assets/images/image_17.png';
// import image72 from '../assets/images/image_60.png';
// import image18 from '../assets/images/image_18.png';
// import image56 from '../assets/images/image_56.png';
// import image54 from '../assets/images/image_54.png';
// import image44 from '../assets/images/image_44.png';
// import image80 from '../assets/images/image_44.png';
// import image16 from '../assets/images/image_16.png';
// import image43 from '../assets/images/image_43.png';
// import image37 from '../assets/images/image_37.png';
// import image48 from '../assets/images/image_48.png';
// import image28 from '../assets/images/image_28.png';
// import image3 from '../assets/images/image_3.png';
// import image77 from '../assets/images/image_3.png';
// import image25 from '../assets/images/image_25.png';
// import image45 from '../assets/images/image_45.png';
// import image12 from '../assets/images/image_45.png';
// import image33 from '../assets/images/image_33.png';

// const Carousel = ({ slides }) => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   return (
//     <div className="carousel">
//       <div className="w-[242px] h-[145px] bg-[50%_50%] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${slides[currentSlide]})` }}></div>
//     </div>
//   );
// };

// const ImageGrid = ({ images }) => (
//   <div className="grid grid-cols-3 gap-4 mt-4">
//     {images.map((image, index) => (
//       <div key={index} className="w-[242px] h-[145px] bg-[50%_50%] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${image})` }}></div>
//     ))}
//   </div>
// );

// const CorosDisplay = () => {
//   const [selectedRegion, setSelectedRegion] = useState('North America');

//   const handleSelectRegion = (region) => {
//     setSelectedRegion(region);
//   };

//   const regionImages = {
//     'North America': [image60, image17, image72],
//     'Asia': [image18, image56, image54],
//     'Europe': [image44, image80, image16],
//     'Middle East': [image43, image37, image48],
//     'South America': [image28, image3, image77, image25],
//   };

//   return (
//     <div className="relative flex flex-row box-sizing-border bg-gray-900 text-white">
//       <div className="w-[180px] h-[740.6px]" style={{ backgroundImage: `url(${image45})`, backgroundPosition: '50% 50%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
//       <div className="flex flex-col ml-8 mt-4">
//         <div className="flex flex-row justify-around">
//           <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA] cursor-pointer" onMouseEnter={() => handleSelectRegion('North America')}>
//             North America
//           </span>
//           <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA] cursor-pointer" onMouseEnter={() => handleSelectRegion('Asia')}>
//             Asia
//           </span>
//           <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA] cursor-pointer" onMouseEnter={() => handleSelectRegion('Europe')}>
//             Europe
//           </span>
//           <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA] cursor-pointer" onMouseEnter={() => handleSelectRegion('Middle East')}>
//             Middle East
//           </span>
//           <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA] cursor-pointer" onMouseEnter={() => handleSelectRegion('South America')}>
//             South America
//           </span>
//         </div>
//         <div className="mt-4">
//           <Carousel slides={regionImages[selectedRegion]} />
//         </div>
//         <div className="image-grid-container mt-4">
//           <ImageGrid images={regionImages[selectedRegion]} />
//         </div>
//       </div>
//       {/* Positioning the image at the bottom-right corner */}
//       <div className="absolute bottom-0 right-0 mr-8 mb-8">
//         <div className="w-[864px] h-[210px] bg-contain bg-no-repeat" style={{ backgroundImage: `url(${image33})`, backgroundPosition: '50% 50%', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
//       </div>
//     </div>
//   );
// };

// export default CorosDisplay;
