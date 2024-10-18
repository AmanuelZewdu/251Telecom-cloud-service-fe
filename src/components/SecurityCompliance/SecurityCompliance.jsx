// import React, { useState } from 'react'
// import ArrayImage from '../../shared/images/arrayStorage.webp'
// import Soc1 from '../../shared/images/Soc1.png'
// import Soc2 from '../../shared/images/soc2.png'
// import Gdpr from '../../shared/images/gdpr.png'
// import Isoo27017 from '../../shared/images/iso27017.png'
// import Isoo27018 from '../../shared/images/ISO-27018.webp'
// import Isoo27001 from '../../shared/images/iso-27001.png'
// import Isoo27701 from '../../shared/images/iso-27701.png'
// import Hipaa from '../../shared/images/hipaa.png'
// const SecurityCompliance = () => {
  
//   return (
//     <section className="securitycompliance-wrapper">
//         <div className="securitycompliance-container flex-col align-middle justify-center items-center my-16 px-10 md:px-20 lg:px-44 ">
//         <h1 className="text-2xl md:text-3xl  font-Inter font-semibold text-primary-blue p-6 text-center lg:text-start">Security Compliance and Awards</h1>  
//         <div className="cards-container py-6 px-4 md:px-2 grid grid-cols-3 md:grid-cols-4 justify-center  align-middle gap-8">
//         <div className="image-container relative group w-full flex flex-col items-center justify-center rounded-lg p-8 gap-4 border border-solid border-r-white hover:border-blue-500 transition-all duration-300">
//   <img src={Soc1} alt="array" className="w-full" />

//   {/* <div className="flex flex-col items-center h-0 justify-center opacity-0 transition-opacity duration-300 group-hover:h-auto group-hover:opacity-100">
//     <h3 className="text-lg font-bold text-center font-Inter text-primary-blue">ISO Certified</h3>
//     <p className="text-sm text-gray-500 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ab</p>
//   </div> */}
// </div>

//   <div className="image-container  group w-full flex flex-col items-center justify-center rounded-lg p-8 gap-4 border border-solid border-r-white hover:border-blue-500 transition-all duration-300">
//     <img src={Isoo27017} alt="array" className="w-full" />

//     {/* <div className="overflow-hidden h-0 opacity-0 transition-opacity duration-300 group-hover:h-auto group-hover:opacity-100">
//       <h3 className="text-lg font-bold text-center font-Inter text-primary-blue">ISO Certified</h3>
//       <p className="text-sm text-gray-500 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ab</p>
//     </div> */}
//   </div>

//   <div className="image-container   group w-full flex flex-col items-center justify-center rounded-lg p-8 gap-4 border border-solid border-r-white hover:border-blue-500 transition-all duration-300">
//     <img src={Isoo27018} alt="array" className="w-full" />

//     {/* <div className="overflow-hidden h-0 opacity-0 transition-opacity duration-300 group-hover:h-auto group-hover:opacity-100">
//       <h3 className="text-lg font-bold text-center font-Inter text-primary-blue">ISO Certified</h3>
//       <p className="text-sm text-gray-500 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ab</p>
//     </div> */}
//   </div>

//   <div className="image-container  group w-full flex flex-col items-center justify-center rounded-lg p-8 gap-4 border border-solid border-r-white hover:border-blue-500 transition-all duration-300">
//     <img src={Isoo27001} alt="array" className="w-full" />

//     {/* <div className="overflow-hidden h-0 opacity-0 transition-opacity duration-300 group-hover:h-auto group-hover:opacity-100">
//       <h3 className="text-lg font-bold text-center font-Inter text-primary-blue">ISO Certified</h3>
//       <p className="text-sm text-gray-500 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ab</p>
//     </div> */}
//   </div>

//           <div className="image-container  group w-full flex flex-col items-center justify-center rounded-lg p-8 gap-4 border border-solid border-r-white hover:border-blue-500 transition-all duration-300">
//     <img src={Isoo27701} alt="array" className="w-full" />

//     {/* <div className="overflow-hidden h-0 opacity-0 transition-opacity duration-300 group-hover:h-auto group-hover:opacity-100">
//       <h3 className="text-lg font-bold text-center font-Inter text-primary-blue">ISO Certified</h3>
//       <p className="text-sm text-gray-500 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ab</p>
//     </div> */}
//   </div>
//   <div className="image-container  group w-full flex flex-col items-center justify-center rounded-lg p-8 gap-4 border border-solid border-r-white hover:border-blue-500 transition-all duration-300">
//     <img src={Soc2} alt="array" className="w-full" />

//     {/* <div className="overflow-hidden h-0 opacity-0 transition-opacity duration-300 group-hover:h-auto group-hover:opacity-100">
//       <h3 className="text-lg font-bold text-center font-Inter text-primary-blue">ISO Certified</h3>
//       <p className="text-sm text-gray-500 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ab</p>
//     </div> */}
//   </div>
//   <div className="image-container  group w-full flex flex-col items-center justify-center rounded-lg p-8 gap-4 border border-solid border-r-white hover:border-blue-500 transition-all duration-300">
//     <img src={Hipaa} alt="array" className="w-full" />

//     {/* <div className="overflow-hidden h-0 opacity-0 transition-opacity duration-300 group-hover:h-auto group-hover:opacity-100">
//       <h3 className="text-lg font-bold text-center font-Inter text-primary-blue">ISO Certified</h3>
//       <p className="text-sm text-gray-500 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ab</p>
//     </div> */}
//   </div>

//   <div className="image-container  group w-full flex flex-col items-center justify-center rounded-lg p-8 gap-4 border border-solid border-r-white hover:border-blue-500 transition-all duration-300">
//     <img src={Gdpr} alt="array" className="w-full" />

//     {/* <div className="overflow-hidden h-0 opacity-0 transition-opacity duration-300 group-hover:h-auto group-hover:opacity-100">
//       <h3 className="text-lg font-bold text-center font-Inter text-primary-blue">ISO Certified</h3>
//       <p className="text-sm text-gray-500 text-center">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta ab</p>
//     </div> */}
//   </div>
        

//          </div>
//         </div>
//     </section>
//   )
// }

// export default SecurityCompliance
import React from 'react';
import Soc1 from '../../shared/images/Soc1.png';
import Soc2 from '../../shared/images/soc2.png';
import Gdpr from '../../shared/images/gdpr.png';
import Isoo27017 from '../../shared/images/iso27017.png';
import Isoo27018 from '../../shared/images/ISO-27018.webp';
import Isoo27001 from '../../shared/images/iso-27001.png';
import Isoo27701 from '../../shared/images/iso-27701.png';
import Hipaa from '../../shared/images/hipaa.png';

const SecurityCompliance = () => {
  return (
    <section className="securitycompliance-wrapper">
      <div className="securitycompliance-container flex-col align-middle justify-center items-center my-10 px-6 md:px-16 lg:px-44">
        <h1 className="text-xl md:text-3xl font-Inter font-semibold text-primary-blue p-4 text-center lg:text-start">
          Security Compliance and Awards
        </h1>
        <div className="cards-container py-6 px-4 md:px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div className="image-container group w-full flex flex-col items-center justify-center rounded-lg p-6 gap-4 border border-solid border-gray-200 hover:border-blue-500 transition-all duration-300">
            <img src={Soc1} alt="SOC 1" className="w-full" />
          </div>
          <div className="image-container group w-full flex flex-col items-center justify-center rounded-lg p-6 gap-4 border border-solid border-gray-200 hover:border-blue-500 transition-all duration-300">
            <img src={Isoo27017} alt="ISO 27017" className="w-full" />
          </div>
          <div className="image-container group w-full flex flex-col items-center justify-center rounded-lg p-6 gap-4 border border-solid border-gray-200 hover:border-blue-500 transition-all duration-300">
            <img src={Isoo27018} alt="ISO 27018" className="w-full" />
          </div>
          <div className="image-container group w-full flex flex-col items-center justify-center rounded-lg p-6 gap-4 border border-solid border-gray-200 hover:border-blue-500 transition-all duration-300">
            <img src={Isoo27001} alt="ISO 27001" className="w-full" />
          </div>
          <div className="image-container group w-full flex flex-col items-center justify-center rounded-lg p-6 gap-4 border border-solid border-gray-200 hover:border-blue-500 transition-all duration-300">
            <img src={Isoo27701} alt="ISO 27701" className="w-full" />
          </div>
          <div className="image-container group w-full flex flex-col items-center justify-center rounded-lg p-6 gap-4 border border-solid border-gray-200 hover:border-blue-500 transition-all duration-300">
            <img src={Soc2} alt="SOC 2" className="w-full" />
          </div>
          <div className="image-container group w-full flex flex-col items-center justify-center rounded-lg p-6 gap-4 border border-solid border-gray-200 hover:border-blue-500 transition-all duration-300">
            <img src={Hipaa} alt="HIPAA" className="w-full" />
          </div>
          <div className="image-container group w-full flex flex-col items-center justify-center rounded-lg p-6 gap-4 border border-solid border-gray-200 hover:border-blue-500 transition-all duration-300">
            <img src={Gdpr} alt="GDPR" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
