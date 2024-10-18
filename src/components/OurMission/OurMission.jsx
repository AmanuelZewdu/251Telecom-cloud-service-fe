import React from 'react'
import ArrayImage from '../../shared/images/arrayStorage.webp'
const OurMission = () => {
  return (
    <section className="ourmission-wrapper">
    <div className="ourmission-container flex flex-col md:flex-row justify-between align-middle p-2 w-[100%] px-20 lg:px-44 mt-[10%]  gap-14">
   <div className="ourmission-right w-[100%] h-[100%]">
    <img src={ArrayImage} alt="array" />
      </div>
      <div className="ourmission-left flex-col w-[100%]">
      <h1 className="text-3xl font-Inter font-semibold text-primary-blue py-2"> Our Mission</h1>  
       <p className='pt-4 tracking-wide text-black/80 leading-normal text-sm font-Inter'>Bridge the data divide and empower Ethiopians with information access,
fostering a culture of innovation, where data and infrastructure are
fiercely protected.</p>
</div>
    </div>
</section>
      
  
  )
}

export default OurMission