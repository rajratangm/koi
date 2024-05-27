import React from 'react';
import image36 from '../assets/images/image_36.png';

const Company = () => {
  return (
    <div className="m-[0_0_366px_0] flex flex-col items-center box-sizing-border">
      <div className=" bg-[50%_50%] bg-contain bg-no-repeat m-[0_0_13.5px_0] w-[242px] h-[145px]" style={{ backgroundImage: `url(${image36})` }}></div>
      <p className="m-[0_17.3px_0_2px] break-words font-['Inter'] font-normal text-[14.9px] leading-[1.611] text-[rgba(255,255,255,0.92)]">
        <span className="supply-chain-2020-batch-6-sub-7"></span><span className="supply-chain-2020-batch-6-sub-0"></span><span></span>
      </p>
    </div>
  );
}

export default Company;
