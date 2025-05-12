import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-1g px-6 md:px-10 lg:px-20'>
        {/* -Pjesa ne te majt- */}
        <div className='md:w-1/2 flex flex-col item-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
        Rezervoni Takimin <br />
              Me Doktorrë të Besuar
            </p>
            <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
                <img className='w-28' src={assets.group_profiles} alt="Group Profiles" loading='lazy' />
                <p>
                Shfletoni listën tonë të gjerë të Doktorrëve të besuar, <br className='hidden sm:block' /> dhe rezervoni takimin tuaj pa mundim.
                </p>
            </div>
            <a  href="#speciality" 
             className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full text-gray-600 text-sm self-center md:self-start hover:scale-105 transition-all duration-300"
            >
                Rezervoni Takimin <img className='w-3' src={assets.arrow_icon} alt="Book Now" loading='lazy' />
            </a>
        </div>
        {/* -Pjesa ne te djatht- */}
        <div className='md:w-1/2 relative'>
            <img  className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="Header image" loading='lazy' />

        </div>
    </div>
  )
}

export default Header