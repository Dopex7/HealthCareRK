import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment= () => {

  // E marrim ID-në e mjekut prej URL-së (p.sh. /doctors/1234)
  const { docId } = useParams();

  // marrem listen e mjekeve qe ekem priju ne appcontext.jsx
  const { doctors, currencySymbol } =useContext(AppContext);

  // I ruajm te dhenat e mjekve ne kete  State
  const [docInfo,setDocInfo ] = useState(null);
  const [docSlots,setDocSlots] = useState([]);

  // states qe ruajn poziten qe perdoruesi ka zjgedhur(0-6) dhe kohen (psh: 12:30)
  const [slotIndex,setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');

  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']


  //krijojm funksionin qe gjen dhe ruan mjeket me ID perkatese
  const fetchDocInfo = async () => {
    const docInfo = doctors.find( doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo); 
  }
  // UseEffect ekzekutohet kur ndryshon lista e mjekeve ose ID-ja
  useEffect(()=>{
    fetchDocInfo() // thirr funksionin per me gjejt mjeket
  },[doctors,docId])

  // Funksioni qe gjeneron oraret e lira per 7 ditet e ardhshme
  const getAvailableSlots = async () =>{
    //Fillimisht e zbrasim listen e orarve
    setDocSlots([])
    // marrim daten aktuale
    let today = new Date()

    // nepermjet forloop e perserisim qdo dit per 7 dit me rradhe
     for(let i =0 ; i<7; i++){

      // marrim daten aktuale duke perdor index i (0 deri 6)
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      // e vendosim kohen e fundit per ato dit (ora21:00 minuta:0 sekonda:0)
      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      // Nese eshte dita e sotme fillojmë prej kohes aktuale ose prej 10:00
      if(today.getDate() === currentDate.getDate()){

      //Nese ora aktuale eshte me e madhe se 10  shtoja kohes aktuale +1 or
        currentDate.setHours(currentDate.getHours() >10 ? currentDate.getHours() + 1 : 10)

      //E Merr minuten aktuale e kontrollon a eshte minuta me e madhe se 30 nese po vendos 30 nese jo 0
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
      } else{
      // Per ditet tjera qe nuk jon aktuale fillojm prej ores 10:00
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }
      
      //Krijojm ni Array per shfaqjen e orarve per dit
      let timeSlots = []
      
      //Gjenerojm orare qdo 30 minuta derisa te arrijm 21:00
      while(currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([],{hour: '2-digit', minute:'2-digit'})

        // shto orarin ne array (timeSlots)
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        })
        // shtojm 30 minuta per slotin tjeter
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }
        //e shtojm diten ne listen totale te slotave
      setDocSlots(prev => ([...prev,timeSlots]))
    }
  }

  useEffect(()=>{
    console.log(docSlots)
  },[docSlots])

  useEffect(()=>{
    getAvailableSlots()
  },[docInfo])

  return docInfo &&  (
    <div>
      {/* -Doctors Details- */}
      <div className='flex flex-cols sm:flex-row gap-4'>
        <div>
          <img className='bg-primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="The Doctor" loading='lazy' />
        </div>
        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          { /* -Doctors Info : emri, degree, Experienca- */ }
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="verified" loading='lazy' /></p>
          <div className='flex items-center gap-2 text-sm  mt-1 text-gray-600'>
          <p>{docInfo.degree} - {docInfo.speciality} </p>
          <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          <div>
            <p className='flex items-center gap-1 text-sm font-medium text-gray-900 mt-3'>Informatë Shtesë <img src={assets.info_icon} alt="About" loading='lazy' /></p>
            <p className='text-sm text-gray-500 max-w-[700px] mt-1'>{docInfo.about}</p>
          </div>
          <p className=' text-gray-500 font-medium mt-4'>Çmimi Takimit: <span className='text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
        </div>
      </div>

      {/* -Appointment Slots- */}
      <div className='sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700'>
        <p className='text-2xl font-medium text-gray-900'>Zgjidhni Kohën e Takimit</p>
        <div className='flex gap-3 items-center w-full overflow-x-scroll mt-4'>
          {
            docSlots.length && docSlots.map((item,index)=>(
              <div onClick={()=>setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
                <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                <p>{item[0] && item[0].datetime.getDate()}</p>
              </div>
            ))
          }
        </div>
        <div className='flex items-center gap-3 w-full overflow-x-scroll mt-4'>
          {docSlots.length && docSlots[slotIndex].map((item,index)=>(
            <p onClick={()=>setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime? 'bg-primary text-white': 'text-gray-400 border border-gray-300'}`} key={index}>
              {item.time.toLowerCase()}
            </p>
          ))}
        </div>
        
          <button className='bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6'>Rezërvoni nje Takim</button>
        </div>

        {/* Listojm Related Doctors*/}
        <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>

    </div>
  )
}

export default Appointment
