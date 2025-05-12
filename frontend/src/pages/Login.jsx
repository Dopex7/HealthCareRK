import React, { useState } from 'react'

const login = () => {

  const [state,setState] = useState('Sign Up')

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [name,setName] = useState('')

  const onSubmitHandler = async (event) =>{
    event.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex items-center' action="">
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Krijo Llogari" : "Kyçu"}</p>
          <p>Ju lutemi {state === 'Sign Up' ? "Regjistrohu" : "Kyçu"} për të rezervuar një takim</p>
          {
            state === "Sign Up" &&       <div className='w-full'>
            <p>Emri i Plotë</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="text" onChange={(e)=>setName(e.target.name)} value={name} required/>
          </div>
          }
    

          <div className='w-full'>
            <p>Email</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="email" onChange={(e)=>setEmail(e.target.email)} value={email} required/>
          </div>

          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' type="password" onChange={(e)=>setPassword(e.target.password)} value={password} required/>
          </div>
          <button className='bg-primary text-white w-full py-2 rounded-md text-base cursor-pointer'>{state === 'Sign Up' ? "Krijo Llogari" : "Kyçu"}</button>

          {
            state === "Sign Up"
            ? <p>Keni tashmë një llogari? <span onClick={()=>setState('Login')} className='text-primary underline cursor-pointer'>Hyni këtu</span></p>
            : <p>Hap një Llogari të re? <span onClick={()=>setState('Sign Up')} className='text-primary underline cursor-pointer'>click here</span></p>
          }
        </div>
    </form>
  )
}

export default login