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
       <p className='pt-4 tracking-wide text-black/80 leading-normal text-sm font-Inter'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio voluptate sint nesciunt enim debitis inventore, sapiente, placeat obcaecati recusandae ad facere necessitatibus vitae magni, itaque quam aspernatur tenetur fuga accusantium!</p>
</div>
    </div>
</section>
      
  
  )
}

export default OurMission