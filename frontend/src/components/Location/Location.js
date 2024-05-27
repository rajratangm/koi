

import React from 'react';
import image75 from '../assets/images/image_58.png'; // Importing the image

const Location = () => {
  return (
    <div className="bg-[#111111] relative flex p-[60px_80px_42.5px_88.5px] w-full box-sizing-border">
      <div className="relative flex flex-row justify-between w-[1256.5px] h-[fit-content] box-sizing-border">
        <div className="m-[125px_0_0_0] flex flex-row justify-between w-[618.1px] h-[fit-content] box-sizing-border">
          <div className="m-[0_0_12.5px_0] flex flex-row box-sizing-border">
            <div className={`bg-[50%_50%] bg-contain bg-no-repeat w-[110px] h-[110px]`} style={{ backgroundImage: `url(${image75})` }}>
            </div>
            <div className="m-[39.7px_0_41.3px_0] inline-block break-words font-['Inter'] font-normal text-[23.8px] leading-[1.21] uppercase text-[#FFFFFF]">
              Locations
            </div>
          </div>
        </div>
        <div className="bg-[50%_50%] bg-contain bg-no-repeat w-[240px] h-[116px]" style={{ backgroundImage: `url(${image75})` }}></div>
      </div>
      <div className="bg-[#2FAFBF] absolute right-[134.5px] bottom-[110px] w-[949.1px] h-[1px]"> {/* Line adjusted left */}
      </div>
      <div className="absolute right-[150.7px] bottom-[42.5px] flex flex-row justify-between w-[989.1px] box-sizing-border"> {/* Adjust USA position right */}
        <div className="flex flex-col items-center box-sizing-border">
          <div className="m-[0_0_8px_4.8px] inline-block break-words font-['Inter'] font-semibold text-[19.4px] leading-[1.546] uppercase text-[#2FAFBF]">
            USA
          </div>
          <div className="rounded-[50px] bg-[#2FAFBF] m-[0_0_7.5px_5px] w-[12px] h-[12px]">
          </div>
          <div className="flex flex-col items-center w-[fit-content] box-sizing-border">
            <span className="break-words font-['Inter'] font-light text-[17px] leading-[1.588] text-[rgba(255,255,255,0.92)]">
              1234 Street Name
            </span>
            <span className="m-[0_0px_0_0] break-words font-['Inter'] font-light text-[17px] leading-[1.588] text-[rgba(255,255,255,0.92)]">
              City, State ZIP
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center box-sizing-border">
          <div className="m-[0_0_8px_4.8px] inline-block break-words font-['Inter'] font-semibold text-[19.4px] leading-[1.546] uppercase text-[#2FAFBF]">
            India
          </div>
          <div className="rounded-[50px] bg-[#2FAFBF] m-[0_0_7.5px_5px] w-[12px] h-[12px]">
          </div>
          <div className="flex flex-col items-center w-[fit-content] box-sizing-border">
            <span className="break-words font-['Inter'] font-light text-[17px] leading-[1.588] text-[rgba(255,255,255,0.92)]">
              #154/20, 5th Main, HSR Layout 7th Sector
            </span>
            <span className="m-[0_0px_0_0] break-words font-['Inter'] font-light text-[17px] leading-[1.588] text-[rgba(255,255,255,0.92)]">
              Bangalore, KA 560102
            </span>
          </div>
        </div>
      </div>
      <div className="bg-[#202123] absolute left-[0px] top-[0px] right-[0px] h-[160px]">
      </div>
      <div className="bg-[#DBDBDB] absolute left-[0px] top-[-1px] right-[0px] h-[120px]">
      </div>
    </div>
  );
}

export default Location;
