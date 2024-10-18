import React from 'react'
import WhoWeAre from '../WhoWeAre/WhoWeAre'
import OurMission from '../OurMission/OurMission'
import OurVision from '../OurVision/OurVision'
import MeetOurTeam from '../MeetOurTeam/MeetOurTeam'

const AboutUs = () => {
  return (
    <div className='flex flex-col'>
    <div className="contactUs w-full flex flex-col place-items-center place-content-end min-h-[19em] p-8 text-center gap-4">
        <h1 className="text-4xl text-primary-blue font-semibold">
          About <span className="relative text-button-color line">us</span>
        </h1>
        {/* <span className="text-primary-blue text-lg max-w-[40em]">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut et voluptas repellendus, nesciunt sapiente atque provident.
        </span> */}
      </div>
    <WhoWeAre />
    <OurMission />
    <OurVision />
     <MeetOurTeam />
      
    </div>
  )
}

export default AboutUs