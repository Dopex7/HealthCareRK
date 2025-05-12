import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 text-gray-500'>
          <p>Na <span className='text-gray-700 font-semibold'>kontaktoni</span></p>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-lg text-gray-600'>Lokacioni Ynë</p>
            <p className='text-gray-500'>10000 Prishtinë Godina Albi <br /> Zyra 42 Prishtinë, Kosovë</p>
            <p className='text-gray-500'>Tel: (+1) 69699-696969 <br /> Email: rinorkrasniqi094@gmail.com</p>
            <p className='font-semibold text-lg text-gray-600'>BASHKOHU EKIPIT TONË</p>
            <p className='text-gray-500'>Eksploroni mundësitë e karrierës me ne.</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Shfletoni Punët</button>
          </div>
        </div>
    </div>
  )
}

export default Contact