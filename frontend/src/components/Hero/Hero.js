// Hero.js
import React from 'react';
import image1 from '../assets/images/image_75.png';
import image2 from '../assets/images/image_65.png';
import image3 from '../assets/images/image_22.png';
import image4 from '../assets/images/image_63.png';
import './Hero.css'; // Import the CSS file for Hero styles

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="bg-[#0C0C0C] relative flex p-[0_88.5px_0_88.5px] box-sizing-border hero-content">
        <div 
          className="bg-[50%_50%] bg-contain bg-no-repeat absolute left-[0px] bottom-[0px] w-[100vw] h-[410px] overflow-x: hidden;"
          style={{ backgroundImage: `url(${image1})` }}
        >
        </div>
        <div className="relative flex flex-row box-sizing-border">
          <div className="m-[71.7px_30.4px_71.7px_0] flex flex-col box-sizing-border">
            <div className="m-[0_0_40px_0] flex flex-col w-[fit-content] box-sizing-border">
              <span className="break-words font-['Inter'] font-semibold text-[35.9px] leading-[1.504] text-[#FFFFFF]">
                The Logistics, Supply Chain,
              </span>
              <span className="m-[0_42.1px_0_0] break-words font-['Inter'] font-semibold text-[35.9px] leading-[1.504] text-[#FFFFFF]">
                and Industrial Automation
              </span>
              <span className="self-start break-words font-['Inter'] font-semibold text-[35.9px] leading-[1.504] text-[#FFFFFF]">
                Platform
              </span>
            </div>
            <div className="bg-[linear-gradient(90deg,#333333,#232323,#191919,#000000)] self-start p-[16px_24px_16px_24px] w-[320px] h-[64.7px] box-sizing-border">
              <div 
                className="bg-[50%_50%] bg-contain bg-no-repeat w-[160px] h-[32.7px]"
                style={{ backgroundImage: `url(${image2})` }}
              >
              </div>
            </div>
          </div>
          <div className="bg-[#0C0C0C] relative flex p-[87.2px_0_32px_0] w-[728px] h-[410px] box-sizing-border">
            <div 
              className="bg-[50%_50%] bg-contain bg-no-repeat relative w-[580px] h-[290.8px]"
              style={{ backgroundImage: `url(${image3})` }}
            >
            </div>
            <div 
              className="bg-[50%_50%] bg-contain bg-no-repeat absolute top-[0px] right-[0px] w-[440px] h-[91.3px]"
              style={{ backgroundImage: `url(${image4})` }}
            >
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
