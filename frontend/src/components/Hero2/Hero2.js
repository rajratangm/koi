import React from 'react';
import image45 from '../assets/images/image_45.png'; // Importing image_45.png
import Companies from '../Companies/Companies';

const Hero2 = () => {
  return (
    <div className="relative flex flex-row box-sizing-border">
      <div className="bg-[50%_50%] bg-contain bg-no-repeat m-[0_177.5px_0_0] w-[180px] h-[740.6px]" style={{ backgroundImage: `url(${image45})` }}></div>
      <div className="m-[117.7px_56px_595.9px_0] flex box-sizing-border">
        <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA]">
          North America
        </span>
      </div>
      <div className="relative m-[8.9px_0_8.9px_0] flex w-[864px] h-[fit-content] box-sizing-border">
        <div className="relative flex flex-col items-end w-[864px] h-[fit-content] box-sizing-border">
          <div className="bg-[50%_50%] bg-contain bg-no-repeat m-[0_0_334.9px_0] flex flex-row justify-between p-[108.8px_0_42.1px_0] w-[730px] box-sizing-border">
            <span className="m-[0_13.5px_0_0] w-[138.3px] break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA]">
              Asia
            </span>
            <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA]">
              Europe
            </span>
            <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#DADADA]">
              Middle East
            </span>
          </div>
          <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[864px] h-[210px]" style={{ backgroundImage: `url(${image45})` }}></div>
        </div>
        <div className="border-b-[1px_solid_#FFFFFF] absolute left-[57px] top-[109.3px] flex p-[0_1.8px_4.5px_0] box-sizing-border">
          <span className="break-words font-['Inter'] font-normal text-[17.9px] leading-[1.508] uppercase text-[#FFFFFF]">
            South America
          </span>
        </div>
      </div>
      {/* <Hero2/> */}
      <Companies/>
    </div>
  );
}

export default Hero2;
