import React from 'react'
import PlatformImage from '../../shared/images/arrayStorage.webp'
const OurPlatform = () => {
  return (
   <section className="ourplatform-wrapper">
    <div className="ourplatform-container flex-col p-2  px-20 lg:px-44   my-16">
    <h1 className="text-3xl font-Inter font-semibold text-primary-blue p-4">
        Our Platform
          </h1>
       <div className="ourplatform-middle flex  flex-col lg:flex-row justify-between w-[100%]  p-4">
        <div className='ourplatform-middle-left w-[100%] lg-[100%]'>
            <img src={PlatformImage} alt="platformimage" />
        </div>
        <div className="ourplatform-middle-right flex-col flex align-middle gap-4  mt-4 w-[100%] lg:w-[100%] lg:ml-20 ">
            <h1 className='text-primary-blue text-2xl font-bold'>Zadara Cloud</h1>
            <p className='tracking-wide text-black/80 leading-normal text-sm font-Inter' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nisi quae iusto iure veniam obcaecati </p>
            <p className='tracking-wide text-black/80 leading-normal text-sm font-Inter'>perspiciatis aperiam repellat adipisci quas ducimus eligendi tempora est maiores deleniti ipsum laboriosam, omnis autem.</p>
            <p className='tracking-wide text-black/80 leading-normal text-sm font-Inter'>perspiciatis aperiam repellat adipisci quas ducimus eligendi tempora est maiores deleniti ipsum laboriosam, omnis autem.</p>
            
            </div>
       </div>
    </div>
   </section>
  )
}

export default OurPlatform