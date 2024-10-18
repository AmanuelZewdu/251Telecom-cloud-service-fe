import React from 'react'
import ArrayImage from '../../shared/images/arrayStorage.webp'

const WhoWeAre = () => {
  return (
    <section className="whoweare-wrapper">
        <div className="whoweare-container flex flex-col md:flex-row justify-between align-middle p-2 w-[100%] px-20 lg:px-44 mt-20  gap-10">
          <div className="whoweare-left flex-col w-[100%] lg:mt-10">
          <h1 className="text-3xl font-Inter font-semibold text-primary-blue py-2">Who We Are ?</h1>  
           <p className='pt-4 tracking-wide text-black/80 leading-normal text-sm font-Inter'>Cloud 251 is Ethiopia's premier cloud service provider, offering the
same level of reliability and features of public cloud providers such
as AWS and Azure with the added benefit of keeping your data within
the country and payment in local currency ( ETB).
Our goal is to empower businesses and individuals with flexible and
scalable cloud solutions and a powerful user console to control and
manage cloud resources.</p>

          </div>
          <div className="whoweare-right w-[100%] h-[100%]">
        <img src={ArrayImage} alt="array" />
          </div>
        </div>
    </section>
  )
}

export default WhoWeAre