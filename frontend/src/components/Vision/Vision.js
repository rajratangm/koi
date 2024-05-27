// import React from 'react';
// import image78 from '../assets/images/image_78.png';
// import image6 from '../assets/images/image_6.png';
// import image9 from '../assets/images/image_9.png';
// import image15 from '../assets/images/image_15.png';
// import image42 from '../assets/images/image_42.png';
// import image19 from '../assets/images/image_19.png';
// import image31 from '../assets/images/image_31.png';
// import image74 from '../assets/images/image_74.png';
// import image47 from '../assets/images/image_47.png';
// import image53 from '../assets/images/image_53.png';
// import image61 from '../assets/images/image_61.png';
// import image73 from '../assets/images/image_78.png';

// const Vision = () => {
//   return (
//     <div className="bg-[#02304F] flex flex-col items-center p-[45.1px_0_48px_0] w-[1425px] box-sizing-border">
//       <p className="m-[0_6.5px_6.2px_0] break-words font-['Inter'] font-medium text-[24.6px] leading-[1.171] uppercase text-[#20B0E7]">
//         <span className="koi-connect-enterprise-integration-layer-sub-0">KOI</span>
//         <span>READER</span>
//       </p>
//       <p className="m-[0_18.5px_40.5px_0] break-words font-['Inter'] font-normal text-[16.7px] leading-[1.617] text-[#DADADA]">
//         <span className="connect-with-any-platform-automation-systems-controllers-or-robotic-systems-sub-0"></span>
//         <span className="connect-with-any-platform-automation-systems-controllers-or-robotic-systems-sub-2"></span>
//         <span>READER</span>
//       </p>
//       <div className="flex flex-col items-center w-[1136px] box-sizing-border">
//         <div className="flex flex-row gap-[0_112px] w-[1136px] box-sizing-border">
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image78})` }}></div>
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image6})` }}></div>
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image9})` }}></div>
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image15})` }}></div>
//         </div>
//         <div className="flex flex-row gap-[0_112px] w-[1136px] box-sizing-border">
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image42})` }}></div>
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image19})` }}></div>
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image31})` }}></div>
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image74})` }}></div>
//         </div>
//         <div className="flex flex-row gap-[0_112px] w-[1136px] box-sizing-border">
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image47})` }}></div>
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image53})` }}></div>
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image61})` }}></div>
//           <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image73})` }}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Vision;

import React from 'react';
import image78 from '../assets/images/image_78.png';
import image6 from '../assets/images/image_6.png';
import image9 from '../assets/images/image_9.png';
import image15 from '../assets/images/image_15.png';
import image42 from '../assets/images/image_42.png';
import image19 from '../assets/images/image_19.png';
import image31 from '../assets/images/image_31.png';
import image74 from '../assets/images/image_78.png';
import image47 from '../assets/images/image_47.png';
import image53 from '../assets/images/image_53.png';
import image61 from '../assets/images/image_61.png';
import image73 from '../assets/images/image_78.png';
import './Vision.css'; // Import the CSS file for Vision styles

const Vision = () => {
  return (
    <div className="vision-container">
      <div className="bg-[#02304F] flex flex-col items-center p-[45.1px_0_48px_0] w-full box-sizing-border">
        <p className="m-[0_6.5px_6.2px_0] break-words font-['Inter'] font-medium text-[24.6px] leading-[1.171] uppercase text-[#20B0E7]">
          <span className="koi-connect-enterprise-integration-layer-sub-0">KOI</span>
          <span>READER</span>
        </p>
        <p className="m-[0_18.5px_40.5px_0] break-words font-['Inter'] font-normal text-[16.7px] leading-[1.617] text-[#DADADA]">
          <span className="connect-with-any-platform-automation-systems-controllers-or-robotic-systems-sub-0"></span>
          <span className="connect-with-any-platform-automation-systems-controllers-or-robotic-systems-sub-2"></span>
          <span>READER</span>
        </p>
        {/* Container for the grid, centering it horizontally */}
        <div className="image-grid-container">
          <div className="flex flex-col items-center w-[100%] box-sizing-border">
            <div className="flex flex-row gap-[0_112px] w-[100%] box-sizing-border">
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image78})` }}></div>
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image6})` }}></div>
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image9})` }}></div>
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image15})` }}></div>
            </div>
            <div className="flex flex-row gap-[0_112px] w-[100%] box-sizing-border">
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image42})` }}></div>
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image19})` }}></div>
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image31})` }}></div>
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image74})` }}></div>
            </div>
            <div className="flex flex-row gap-[0_112px] w-[100%] box-sizing-border">
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image47})` }}></div>
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image53})` }}></div>
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image61})` }}></div>
              <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[200px] h-[120px]" style={{ backgroundImage: `url(${image73})` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
