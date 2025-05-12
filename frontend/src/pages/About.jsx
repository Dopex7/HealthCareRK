import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>Rreth <span className='text-gray-700 font-medium'>Nesh</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="about us" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Mirëseerdet te HealthCareRK, partneri juaj i besë i ndërgjegjshëm në përgjegjjen e nevojave tuaja shëndetare duke e menaxhuar aty konvenientemente dhe efikas. Në HealthCareRK, ne e kuptojm problemet që individët konfrontohen kur vjen në planifikimin e takimave me doctorët dhe menaxhimin e të dhënave të tyre shëndetare.</p>
          <p>HealthCareRK është i përkushtuar për ekselencë në teknologjinë e kujdesit shëndetësor. Ne vazhdimisht përpiqemi të përmirësojmë platformën tonë, duke integruar risitë më të fundit për të përmirësuar përvojën e përdoruesit dhe për të ofruar shërbim superior. Qofshi duke rezervuar termin tuaj të parë apo duke menaxhuar kujdesin vazhdimisht, HealthCareRK është këtu për t'ju mbështetur në çdo hap.</p>
          <b className='text-gray-800'>Vizioni yne</b>
          <p>Vizioni ynë në Prescripto është të krijojmë një përvojë të qetë shëndetësore për çdo përdorues. Synojmë të ndërtojmë një urë midis pacientëve dhe ofruesve të shërbimeve shëndetësore, duke e bërë më të lehtë për ju që të gjeni kujdesin që ju nevojitet, kurdo që ju nevojitet.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>PSE <span className='text-gray-700 font-semibold'>TË ZGJIDHNI HealthCareRK?</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>EFIKASITETI:</b>
        <p>Planifikim i përshtatur i termineve që përshtatet me stilin tuaj të jetesës së zënë.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>KOMODITETI:</b>
        <p>Qasje në një rrjet të profesionistëve të besuar të kujdesit shëndetësor në zonën tuaj.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
        <b>PËRSHTATJA INDIVIDUALE:</b>
        <p>Rekomandime dhe njoftime të personalizuara për t'ju ndihmuar të ndiqni shëndetin tuaj.</p>
        </div>
      </div>

    </div>
  )
}

export default About