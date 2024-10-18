import React from 'react'
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import ArrayImage from '../../shared/images/arrayStorage.webp'

const OurVision = () => {
  return (
    <section className="ourvision-wrapper">
        <div className="ourvision-container flex justify-between mt-[10%] px-20 lg:px-44 gap-12 ">
         
         <div className="ourvision-left flex-col w-[100%]">
      <h1 className="text-3xl font-Inter font-semibold text-primary-blue py-2"> Our Vision</h1>  
       <p className='pt-4 tracking-wide text-black/80 leading-normal text-sm font-Inter'>Unleash Ethiopia's
Potential in a Secure
Cloud. Drive a Flourishing
Digital Future.</p>
</div>

    <div className="ourvision-right w-[100%] flex-col flex ">
    <h1 className="text-3xl font-Inter font-semibold text-primary-blue p-2 py-2"> Our Goals</h1>  
    <div className="list-container flex w-[100%] gap-4 p-2">
           <CheckCircleOutlineOutlinedIcon className='text-primary-blue' />
           <p className='text-[1rem] tracking-wide text-black/80 leading-normal text-sm font-Inter'> Enhanced Customer Experience</p>
         </div>
         <div className="list-container flex gap-4 p-2">
           <CheckCircleOutlineOutlinedIcon className='text-primary-blue' />
           <p className='text-[1rem] tracking-wide text-black/80 leading-normal text-sm font-Inter'>Increased Customer Acquisition:</p>
         </div>
         <div className="list-container flex gap-4 p-2">
           <CheckCircleOutlineOutlinedIcon className='text-primary-blue' />
           <p className='text-[1rem] tracking-wide text-black/80 leading-normal text-sm font-Inter'>Improved Customer Retention:</p>
         </div>
         <div className="list-container flex gap-4 p-2">
           <CheckCircleOutlineOutlinedIcon className='text-primary-blue' />
           <p className='text-[1rem] tracking-wide text-black/80 leading-normal text-sm font-Inter'>Enhanced Brand Reputation:</p>
         </div>
    </div>
        
        </div>
    </section>
  )
}

export default OurVision