import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Pjesa ne te majt */}
            <div>
            <img className='mb-5 w-40' src={assets.logo} alt="Logo" loading='lazy' />
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>qui inventore voluptatem provident ipsam voluptatum laudantium exercitationem harum omnis eos. Ullam aliquam nostrum velit natus sunt possimus architecto dolorum saepe delectus, deserunt, distinctio nobis reprehenderit quos magnam asperiores reiciendis expedita vitae nesciunt. Quasi.</p>
            </div>
              {/* Pjesa ne mes */}
              <div>
                <p className='text-xl font-medium mb-5'>KOMPANIA</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
                  {/* Pjesa ne te djatht */}
            <div>
                <p className='text-xl font-medium mb-5'>NA KONTAKTONI</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-69699-696969</li>
                    <li>rinorkrasniqi094@gmail.com</li>
                </ul>
                </div>
        </div> 
        {/* Copyright Section */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ HealthCareRK - Të gjitha të drejtat e rezervuara.</p>
        </div>
    </div>
  )
}

export default Footer