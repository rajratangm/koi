import React from 'react';
// import RecognitionList from './RecognitionList'; // Assuming RecognitionList is in the same directory
import AwardSectionGrid from '../AwardSectionGrid/AwardSectionGrid';

const AwardSection = ({ recognitions }) => {
  return (
    <div className="absolute right-[88.5px] bottom-[-0.5px] flex flex-row justify-between p-[0_0_33.5px_0] w-[979px] box-sizing-border">
      <AwardSectionGrid recognitions={recognitions} />
    </div>
  );
}

export default AwardSection;
