// import React from 'react'

// const Footer = () => {
//   return (
//     <section id='footer'>

// <div className="bg-[#070707] relative p-[12px_88.5px_12px_88.5px] w-full box-sizing-border flex justify-between items-center">
//       <span className="break-words font-['Inter'] font-normal text-[11.4px] leading-[1.579] text-[rgba(255,255,255,0.92)]">
//         KoiReader Technologies © 2019-2024. All Rights Reserved.
//       </span>
//       <div className="flex space-x-4">
//         <span className="break-words font-['Inter'] font-normal text-[11.4px] leading-[1.579] text-[rgba(255,255,255,0.92)]">
//           Terms of Use
//         </span>
//         <span className="break-words font-['Inter'] font-normal text-[11.4px] leading-[1.579] text-[rgba(255,255,255,0.92)]">
//           Privacy Policy
//         </span>
//       </div>
//     </div>

//     </section>
  
//   )
// }

// export default Footer


import React from 'react';

const Footer = () => {
  return (
    <section id="footer" className="w-full">
      <div className="bg-[#070707] p-[12px_88.5px] w-full flex justify-between items-center">
        <span className="break-words font-['Inter'] font-normal text-[11.4px] leading-[1.579] text-[rgba(255,255,255,0.92)]">
          KoiReader Technologies © 2019-2024. All Rights Reserved.
        </span>
        <div className="flex space-x-4">
          <span className="break-words font-['Inter'] font-normal text-[11.4px] leading-[1.579] text-[rgba(255,255,255,0.92)]">
            Terms of Use
          </span>
          <span className="break-words font-['Inter'] font-normal text-[11.4px] leading-[1.579] text-[rgba(255,255,255,0.92)]">
            Privacy Policy
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
