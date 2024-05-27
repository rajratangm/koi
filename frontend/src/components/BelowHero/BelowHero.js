

import React from 'react';
import image26 from '../assets/images/image_26.png'; // Import the image
import image66 from '../assets/images/image_66.png'; // Import the second image

const SmartComponents = () => {
  return (
    <div style={{ backgroundColor: '#000000' }}>
      {/* Buttons */}
      <div className="m-[0_100.5px_48px_100.5px] flex flex-row gap-[0_24px] w-[fit-content] box-sizing-border justify-center">
        <div className="rounded-[4px] border-[1px_solid_#FFFFFF] bg-[#014F4B] flex p-[11.6px_0_12.2px_2.6px] w-[225.6px] box-sizing-border">
          <span className="break-words font-['Inter'] font-medium text-[14.3px] tracking-[2px] leading-[1.175] uppercase text-[#FFFFFF]">
            Smart Yard
          </span>
        </div>
        <div className="rounded-[4px] border-[1px_solid_#FFFFFF] bg-[#014F4B] flex p-[11.6px_22.2px_12.2px_22.2px] w-[225.6px] box-sizing-border">
          <span className="break-words font-['Inter'] font-medium text-[14.3px] tracking-[2px] leading-[1.175] uppercase text-[#FFFFFF]">
            Smart Warehouse
          </span>
        </div>
        <div className="rounded-[4px] border-[1px_solid_#FFFFFF] bg-[#014F4B] flex p-[11.6px_0_12.2px_2px] w-[225.6px] box-sizing-border">
          <span className="break-words font-['Inter'] font-medium text-[14.3px] tracking-[2px] leading-[1.175] uppercase text-[#FFFFFF]">
            Smart Port
          </span>
        </div>
        <div className="opacity-50 rounded-[4px] border-[1px_solid_#FFFFFF] bg-[#014F4B] flex p-[11.6px_0_12.2px_2.5px] w-[225.6px] box-sizing-border">
          <span className="break-words font-['Inter'] font-medium text-[14.3px] tracking-[2px] leading-[1.175] uppercase text-[#FFFFFF]">
            Smart Factory
          </span>
        </div>
        <div className="opacity-50 rounded-[4px] border-[1px_solid_#FFFFFF] bg-[#014F4B] flex p-[11.6px_3.1px_12.2px_0] w-[225.6px] box-sizing-border">
          <span className="break-words font-['Inter'] font-medium text-[14.3px] tracking-[2px] leading-[1.175] uppercase text-[#FFFFFF]">
            Enterprise
          </span>
        </div>
      </div>

      {/* Main content */}
      <div className="relative flex">
        <div
          style={{ backgroundImage: `url(${image26})` }}
          className="bg-[50%_50%] bg-contain bg-no-repeat absolute left-[0] bottom-[0] w-[50%] h-[100%] z-[1]"
        >
        </div>
        <div
          className="bg-[50%_50%] bg-contain bg-no-repeat flex flex-col items-center p-[70.3px_0_67.9px_0] w-[883.5px] h-[fit-content] box-sizing-border ml-[50%]"
          style={{ backgroundImage: `url(${image66})` }}
        >
          <div className="m-[0_144.3px_7.8px_0] inline-block break-words font-['Inter'] font-semibold text-[35.9px] leading-[1.203] text-[#FFFFFF]">
            Smart Yard of the Future
          </div>
          <div className="bg-[linear-gradient(90deg,#FFFFFF,rgba(255,255,255,0.1))] m-[0_0_12px_0] w-[567px] h-[1px]"></div>
          <div className="m-[0_62.7px_96px_0] flex flex-col w-[fit-content] box-sizing-border">
            <span className="break-words font-['Inter'] font-semibold text-[17.6px] leading-[1.534] text-[#FFFFFF]">
              Autonomous Yard Operations from Gate to Cargo Visibility at 
            </span>
            <span className="self-start break-words font-['Inter'] font-semibold text-[17.6px] leading-[1.534] text-[#FFFFFF]">
              Dock Doors
            </span>
          </div>
          <div className="rounded-[4px] border-[1px_solid_#FFFFFF] bg-[#202123] m-[0_307px_0_0] flex flex-row justify-between p-[13px_23.3px_14px_0] w-[260px] box-sizing-border">
            <span className="m-[0_13.5px_0_0] w-[175.2px] break-words font-['Inter'] font-semibold text-[18.4px] tracking-[3px] leading-[1.467] uppercase text-[#FFFFFF]">
              Learn More
            </span>
            <div className="m-[6.5px_0_5.5px_0] flex w-[7.5px] h-[15px] box-sizing-border">
              <img className="w-[7.5px] h-[15px]" src="../assets/vectors/vector_36_x2.svg" alt="Learn More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmartComponents;



//---------------------------------------------------------------------------
// import React from 'react';
// import image26 from '../assets/images/image_26.png'; // Import the image
// import image66 from '../assets/images/image_66.png'; // Import the second image

// const SmartComponents = () => {
//   return (
//     <div>
//       <div className="relative m-[0_142.5px_48px_142.5px] flex p-[0_0_0_0px] w-[1140px] box-sizing-border">
//         <div className="bg-[linear-gradient(90deg,#111111,rgba(255,255,255,0.7),#111111)] absolute left-[0px] top-[11.9px] right-[0px] h-[5px]"></div>
//         <div className="bg-[#111111] relative flex p-[0_6.9px_0_0] w-[283px] h-[fit-content] box-sizing-border">
//           <p className="break-words font-['Inter'] font-semibold text-[24.6px] tracking-[7px] leading-[1.171] uppercase text-[#00B0E7]">
//             <span className="koi-vision-sub-0"></span><span></span>
//           </p>
//         </div>
//       </div>
      
//       {/* New code snippet */}
//       <div className="relative flex">
//         <div
//           style={{ backgroundImage: `url(${image26})` }}
//           className="bg-[50%_50%] bg-contain bg-no-repeat absolute left-[0] bottom-[0] w-[50%] h-[100%] z-[1]"
//         >
//         </div>
//         <div
//           className="bg-[50%_50%] bg-contain bg-no-repeat flex flex-col items-center p-[70.3px_0_67.9px_0] w-[883.5px] h-[fit-content] box-sizing-border ml-[50%]"
//           style={{ backgroundImage: `url(${image66})` }}
//         >
//           <div className="m-[0_144.3px_7.8px_0] inline-block break-words font-['Inter'] font-semibold text-[35.9px] leading-[1.203] text-[#FFFFFF]">
//             Smart Yard of the Future
//           </div>
//           <div className="bg-[linear-gradient(90deg,#FFFFFF,rgba(255,255,255,0.1))] m-[0_0_12px_0] w-[567px] h-[1px]"></div>
//           <div className="m-[0_62.7px_96px_0] flex flex-col w-[fit-content] box-sizing-border">
//             <span className="break-words font-['Inter'] font-semibold text-[17.6px] leading-[1.534] text-[#FFFFFF]">
//               Autonomous Yard Operations from Gate to Cargo Visibility at 
//             </span>
//             <span className="self-start break-words font-['Inter'] font-semibold text-[17.6px] leading-[1.534] text-[#FFFFFF]">
//               Dock Doors
//             </span>
//           </div>
//           <div className="rounded-[4px] border-[1px_solid_#FFFFFF] bg-[#202123] m-[0_307px_0_0] flex flex-row justify-between p-[13px_23.3px_14px_0] w-[260px] box-sizing-border">
//             <span className="m-[0_13.5px_0_0] w-[175.2px] break-words font-['Inter'] font-semibold text-[18.4px] tracking-[3px] leading-[1.467] uppercase text-[#FFFFFF]">
//               Learn More
//             </span>
//             <div className="m-[6.5px_0_5.5px_0] flex w-[7.5px] h-[15px] box-sizing-border">
//               <img className="w-[7.5px] h-[15px]" src="../assets/vectors/vector_36_x2.svg" alt="Learn More" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmartComponents;


// import React from 'react';
// import image26 from '../assets/images/image_26.png'; // Import the first image
// import image66 from '../assets/images/image_66.png'; // Import the second image

// const SmartComponents = () => {
//   return (
//     <div>
//       {/* Top section */}
//       <div className="relative m-[0_142.5px_48px_142.5px] flex p-[0_0_0_0px] w-[1140px] box-sizing-border">
//         <div className="bg-[linear-gradient(90deg,#111111,rgba(255,255,255,0.7),#111111)] absolute left-[0px] top-[11.9px] right-[0px] h-[5px]"></div>
//         <div className="bg-[#111111] relative flex p-[0_6.9px_0_0] w-[283px] h-[fit-content] box-sizing-border">
//           <p className="break-words font-['Inter'] font-semibold text-[24.6px] tracking-[7px] leading-[1.171] uppercase text-[#00B0E7]">
//             <span className="koi-vision-sub-0"></span><span></span>
//           </p>
//         </div>
//       </div>

//       {/* Left section */}
//       <div  style={{ backgroundImage: `url(${image66})` }}  className="absolute left-[50%] bottom-[0px] translate-x-[-50%] w-[480px] h-[270px]  bg-[50%_50%] bg-contain bg-no-repeat" style={{backgroundImage: `url(${image66})`}}>
//       </div>

//       {/* Right section */}
//       <div className="flex justify-end">
//         {/* Image 26 */}
//         <div
//           className=" bg-[50%_50%] bg-contain bg-no-repeat flex flex-col items-center p-[70.3px_0_67.9px_0] w-[883.5px] h-[fit-content] box-sizing-border"
//           style={{ backgroundImage: `url(${image26})` }}
//         >
//           <div className="m-[0_144.3px_7.8px_0] inline-block break-words font-['Inter'] font-semibold text-[35.9px] leading-[1.203] text-[#FFFFFF]">
//             Smart Yard of the Future
//           </div>
//           <div className="bg-[linear-gradient(90deg,#FFFFFF,rgba(255,255,255,0.1))] m-[0_0_12px_0] w-[567px] h-[1px]"></div>
//           <div className="m-[0_62.7px_96px_0] flex flex-col w-[fit-content] box-sizing-border">
//             <span className="break-words font-['Inter'] font-semibold text-[17.6px] leading-[1.534] text-[#FFFFFF]">
//               Autonomous Yard Operations from Gate to Cargo Visibility at 
//             </span>
//             <span className="self-start break-words font-['Inter'] font-semibold text-[17.6px] leading-[1.534] text-[#FFFFFF]">
//               Dock Doors
//             </span>
//           </div>
//           <div className="rounded-[4px] border-[1px_solid_#FFFFFF] bg-[#202123] m-[0_307px_0_0] flex flex-row justify-between p-[13px_23.3px_14px_0] w-[260px] box-sizing-border">
//             <span className="m-[0_13.5px_0_0] w-[175.2px] break-words font-['Inter'] font-semibold text-[18.4px] tracking-[3px] leading-[1.467] uppercase text-[#FFFFFF]">
//               Learn More
//             </span>
//             <div className="m-[6.5px_0_5.5px_0] flex w-[7.5px] h-[15px] box-sizing-border">
//               <img className="w-[7.5px] h-[15px]" src="../assets/vectors/vector_36_x2.svg" alt="Learn More" />
//             </div>
//           </div>
//         </div>

//         {/* Image 66 */}
//         <div className="bg-[50%_50%] bg-contain bg-no-repeat absolute left-[50%] bottom-[0px] translate-x-[-50%] w-[480px] h-[270px]" style={{ backgroundImage: `url(${image66})` }}>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SmartComponents;

