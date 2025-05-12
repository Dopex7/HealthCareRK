import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

const RelatedDoctors = ({speciality,docId}) => {
    const navigate = useNavigate();
    const {doctors} = useContext(AppContext)
    const [relDoc, setRelDocs] = useState([''])

    useEffect(()=>{
        if(doctors.length > 0 && speciality){
            //shfaq doktorret me specializim tnjojt dhe jo ate me id te njojt
            const doctorsData = doctors.filter((doc) => doc.speciality === speciality && doc._id !== docId)
            setRelDocs(doctorsData)
        }
    },[doctors,speciality,docId])

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
    <h1 className='text-3xl font-medium'>Doktorrë Të Ngjashëm</h1>
    <p className='sm:w-1/3 text-center text-sm'>Shfletoni Doktorrë me specializim të njëjtë</p>
    <div className='w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {relDoc.slice(0,5).map((item,index)=>(
            <div onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                <img className='bg-blue-50' src={item.image} alt="Related Doctors" loading='lazy' />
                <div className='p-4'>
                    <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Në dispozicion</p>
                    </div>
                    <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                    <p className='text-gray-600 text-sm'>{item.speciality}</p>
                </div>
            </div>
        ))}
    </div>
    <button className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer' onClick={()=>{ navigate('/doctors'); scrollTo(0,0) }}>Shikoni Tjerë</button>
</div>
  )
}

export default RelatedDoctors