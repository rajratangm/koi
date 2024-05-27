import React from 'react';
import AwardSectionImage from '../AwardSectionImage/AwardSectionImage';

const AwardSectionGrid = ({ recognitions }) => {
  return (
    <div className="flex flex-row w-[1277.3px] h-[fit-content] box-sizing-border">
      {recognitions.map((recognition, index) => (
        <AwardSectionImage key={index} imageUrl={recognition.imageUrl} text={recognition.text} />
      ))}
    </div>
  );
}

export default AwardSectionGrid;
