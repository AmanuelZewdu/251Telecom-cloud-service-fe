import React from 'react'
import ArrayImage from '../../shared/images/arrayStorage.webp'
const SecurityCompliance = () => {
  return (
    <section className="securitycompliance-wrapper">
        <div className="securitycompliance-container flex-col my-16 px-20 lg:px-44">
        <h1 className="text-3xl font-Inter font-semibold text-primary-blue p-6 text-center lg:text-start">Security Compliance and Awards</h1>  
         <div className="cards-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6">
          <div className="image-container w-[100%]">
            <img src={ArrayImage} alt="array" />
          </div>
          <div className="image-container w-[100%]">
            <img src={ArrayImage} alt="array" />
          </div>
          <div className="image-container w-[100%]">
            <img src={ArrayImage} alt="array" />
          </div>
          <div className="image-container w-[100%]">
            <img src={ArrayImage} alt="array" />
          </div>
          <div className="image-container w-[100%]">
            <img src={ArrayImage} alt="array" />
          </div>
          <div className="image-container w-[100%]">
            <img src={ArrayImage} alt="array" />
          </div>
          <div className="image-container w-[100%]">
            <img src={ArrayImage} alt="array" />
          </div>
          <div className="image-container w-[100%]">
            <img src={ArrayImage} alt="array" />
          </div>

         </div>
        </div>
    </section>
  )
}

export default SecurityCompliance