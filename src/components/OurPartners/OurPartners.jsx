import React from 'react'
import ZadraLogo from '../../shared/images/zadara-logo.svg'
import SafaricomLogo from '../../shared/images/safaricom-logo.png'
import TouchnetLogo from '../../shared/images/touchnet-logo.png'
import RaxioLogo from '../../shared/images/raxio-logo.webp'

const OurPartners = () => {
  return (
   <section className="ourpartner-wrapper">
    <div className="ourpartner-container flex-col  align-middle my-16 px-20 lg:px-44">
    <h1 className="text-3xl font-Inter font-semibold text-primary-blue p-4 text-center">Our Partners</h1>
     <div className="partners-logo flex justify-between items-center  gap-8">
      <div className='partners-logo-img w-[100%]'>
      <img src={RaxioLogo} alt="zadara-logo"  />
      </div>
      <div className='partners-logo-img w-[100%]' >
      <img src={SafaricomLogo} alt="safaricom-logo"  />
      </div>
      <div className='partners-logo-img w-[100%]'>
      <img src={TouchnetLogo} alt="touchnet-logo" className='w-[80%]'  />
      </div>
      <div className='partners-logo-img w-[100%]'>
      <img src={ZadraLogo} alt="zadara-logo" />
      </div>
     </div>

    </div>
   </section>
  )
}

export default OurPartners