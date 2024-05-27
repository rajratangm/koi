import React from 'react';
import Skills from '../Skills/Skills';

const ACorosel = () => {
  return (
    <div className="bg-[#202123] flex flex-col items-center justify-center p-[47.5px_0_57.5px_0] min-h-screen w-full box-sizing-border">
      <div className="m-[0_0_52.5px_0] flex flex-col items-center w-full box-sizing-border">
        <div className="m-[0_5.9px_8.5px_0.5px] flex flex-row justify-center w-full box-sizing-border">
          <div className="m-[4.5px_9.4px_3.5px_0] flex w-[41.4px] h-[64px] box-sizing-border">
            <img className="w-[41.4px] h-[64px]" src="../assets/vectors/group_1_x2.svg" alt="Image 1" />
          </div>
          <div className="flex flex-row box-sizing-border">
            <span className="break-words font-['Inter'] font-light text-[50.1px] leading-[1.437] text-[#FFFFFF]">
              K
            </span>
            <div className="m-[13px_0.4px_5px_0] inline-block break-words font-['Inter'] font-light text-[37.5px] leading-[1.44] text-[#FFFFFF]">
              OI
            </div>
            <span className="m-[0_3px_0_0] break-words font-['Inter'] font-light text-[50.1px] leading-[1.437] text-[#FFFFFF]">
              R
            </span>
            <div className="m-[13px_0_5px_0] inline-block break-words font-['Inter'] font-light text-[37.5px] leading-[1.44] text-[#FFFFFF]">
              EADER
            </div>
          </div>
        </div>
        <div className="bg-[linear-gradient(90deg,#30AFC0,#33CCCC,#A0E7E7,#E4F8F8,#FFFFFF)] m-[0_0_7.5px_0] w-full max-w-[280px] h-[1px]">
        </div>
        <div className="m-[0_0.3px_0_0] flex flex-row justify-center w-full box-sizing-border">
          <span className="m-[0_11.7px_0_0] break-words font-['Inter'] font-normal text-[15.9px] leading-[1.509] uppercase text-[#FFFFFF]">
            Innovate
          </span>
          <div className="shadow-[0px_0px_10px_2px_#30AFBF,inset_0px_0px_10px_2px_rgba(48,175,191,0.5)] rounded-[50px] bg-[#27FEFF] m-[10.5px_10.4px_9.5px_0] w-[4px] h-[4px]">
          </div>
          <span className="m-[0_14.1px_0_0] break-words font-['Inter'] font-normal text-[15.9px] leading-[1.509] uppercase text-[#FFFFFF]">
            Create
          </span>
          <div className="shadow-[0px_0px_10px_2px_#30AFBF,inset_0px_0px_10px_2px_rgba(48,175,191,0.5)] rounded-[50px] bg-[#27FEFF] m-[10.5px_10.4px_9.5px_0] w-[4px] h-[4px]">
          </div>
          <span className="break-words font-['Inter'] font-normal text-[15.9px] leading-[1.509] uppercase text-[#FFFFFF]">
            Automate
          </span>
        </div>
      </div>
      <div className="m-[0_0_62px_0] flex flex-col items-center w-full box-sizing-border">
        {/* Content here */}
      </div>
      <div className="m-[0_39.3px_0_0] flex flex-row justify-between w-full max-w-[952.7px] box-sizing-border">
        {/* Content here */}
      </div>
      <Skills />
    </div>
  );
};

export default ACorosel;
