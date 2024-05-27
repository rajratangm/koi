import React from 'react';

const AwardSectionImage = ({ imageUrl, text }) => {
  return (
    <div className="m-[0_0_366px_0] flex flex-col items-center box-sizing-border">
      <div
        className={`bg-[50%_50%] bg-contain bg-no-repeat m-[0_0_13.5px_0] w-[242px] h-[145px]`}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <p className="m-[0_17.3px_0_2px] break-words font-['Inter'] font-normal text-[14.9px] leading-[1.611] text-[rgba(255,255,255,0.92)]">
        {text}
      </p>
    </div>
  );
}

export default AwardSectionImage;
