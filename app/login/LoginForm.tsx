"use client"

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'

export const LoginForm = () => {
  const [email,setEmail] = useState('')
  const searchParams=useSearchParams()
  const callbackUrl= searchParams.get('callbackUrl')||'/'
 
  const [password,setPassword] = useState('')

    const onSubmit=(e:React.FormEvent)=>{
      
        e.preventDefault()
        signIn('credentials',{
          email,
          password,
          callbackUrl:callbackUrl   
        })
        

      }
  return (
    <form onSubmit={onSubmit} className='space-y-8 w-[400px]'>
         <div className='space-y-4'>
       
       <div className='grid w-full max-w-sm items-center gap-1.5'>
       <label htmlFor='Email'>Email</label>
       <Input value={email} onChange={(e)=>setEmail(e.target.value)}  type="Email" id="Email" placeholder="Email" />
       </div>

       <div className='grid w-full max-w-sm items-center gap-1.5'>
       <label htmlFor='Password'>Password</label>
       <Input  value={password} onChange={(e)=>setPassword(e.target.value)}   type="password" id="password" placeholder="Password" />
       </div>

      
       </div>
        <div className='w-full pb-4'>
        <Button className='w-full' >Login</Button>
        </div>
    </form>
  )
}
