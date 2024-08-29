import React from 'react'
import TigestImage from '../../shared/images/tigest.jpg'
import AddisImage from '../../shared/images/addis.jpg'
import MuiseImage from '../../shared/images/muise.jpg'
const MeetOurTeam = () => {
  return (
    <section className='meet-wrapper'>
     <div className='meet-container p-10 md:p-2   my-16 flex flex-col justify-center items-center align-middle'>
     <h1 className="text-3xl font-Inter font-semibold text-primary-blue py-2">Meet The Team</h1>  
       <div className="team-card flex flex-wrap justify-between items-center gap-8 lg:gap-16 align-middle mt-4">
        <div className='flex-col justify-center items-center align-middle  p-4 flex gap-2'>
        <img src={TigestImage} alt='tigest' className='rounded-full object-cover w-[100%] h-[100%]' /> 
          <h3 className='text-2xl text-primary-blue'>Tigist Damte</h3>
          <p className='tracking-wide text-black/80 leading-normal text-sm font-Inter'>Extensive experiance in <br/> managing datacenter<br/>projects</p>
       </div>

     <div className='flex-col justify-center items-center align-middle  p-4 flex gap-2'>
        <img src={MuiseImage} alt='muise' className='rounded-full object-cover w-[100%] h-[100%]' /> 
          <h3 className='text-2xl text-primary-blue mb-1'>Muise Haile</h3>
          <p className='tracking-wide text-black/80 leading-normal text-sm font-Inter mb-1'>Leverge CyberSecuirity<br/> aspect</p>
       </div>

       <div className='flex-col justify-center items-center align-middle text-center m-auto md:m-0  p-4 flex gap-2'>
          <img src={AddisImage} alt='addis' className='rounded-full object-cover w-[100%] h-[100%]' />  
        <h3 className='text-2xl text-primary-blue'>Addis Alemayehu</h3>
          <p className='tracking-wide text-black/80 leading-normal text-sm font-Inter'>Leverege Connections <br/> in the buisness and<br/>ivestment world</p>
       </div>
</div>
     </div>
    </section>
  )
}

export default MeetOurTeam