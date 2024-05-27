import React from 'react';
import image from '../../assets/images/world1.svg';

const Label = () => {
  return (
    <div className="bg-[#02304F] flex flex-row items-center justify-center p-[21.5px_0_23px_0] w-full box-sizing-border">
      <div className="m-[0_13.3px_2.5px_0] flex w-[29.5px] h-[29px] box-sizing-border">
        <img className="w-[29.5px] h-[29px]" src={image} alt="Label Image" />
      </div>
      <div className="m-[1.5px_10.1px_0_0] inline-block break-words font-['Inter'] font-normal text-[19.2px] leading-[1.562] text-[rgba(255,255,255,0.92)]">
        Local Presence
      </div>
      <div className="shadow-[0px_0px_10px_2px_#30AFBF,inset_0px_0px_10px_2px_rgba(48,175,191,0.5)] rounded-[100px] bg-[#27FEFF] m-[14.5px_12px_13px_0] w-[4px] h-[4px]">
      </div>
      <div className="m-[1.5px_0_0_0] inline-block break-words font-['Inter'] font-normal text-[19.2px] leading-[1.562] text-[rgba(255,255,255,0.92)]">
        Global Execution
      </div>
    </div>
  );
};

export default Label;
