"use client"

import { signIn } from 'next-auth/react'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import SignIn from '../login/page'



export const RegisterForm = () => {
  const [email,setEmail] = useState('')
  const [FirstName,setFirstName] = useState('')
  const [LastName,setLastName] = useState('')
  const [password,setPassword] = useState('')

    const onSubmit=async (e:React.FormEvent)=>{
        e.preventDefault()
         
        try{
          const name=FirstName+' '+LastName
        
          const res= await fetch('/api/register',{
            method:'POST',
            body:JSON.stringify({
                name,
                email,
                password
            }),
            headers:{
              'Content-Type':'application/json'
            }
          })
          
          if(res.ok){
           signIn()
          
           
          }
        }catch(error){
          console.error(error)
        }
       

      }
  return (
    <form onSubmit={onSubmit} className='space-y-8 w-full sm:w-[400px]'>
         <div className='space-y-4'>
        <div className='flex gap-x-5'>
      
        <div className='grid w-full  items-center gap-1.5'>
       <label htmlFor='fname'>First Name</label>
       <Input value={FirstName} onChange={(e)=>setFirstName(e.target.value)}  id="fname" placeholder="First Name" />
       </div>

       <div className='grid w-full items-center gap-1.5'>
       <label htmlFor='lname'>Last Name</label>
       <Input value={LastName} onChange={(e)=>setLastName(e.target.value)}  id="lname" placeholder="Last Name" />
       </div>
       </div>

       <div className='grid w-full items-center gap-1.5'>
       <label htmlFor='Email'>Email</label>
       <Input value={email} onChange={(e)=>setEmail(e.target.value)}  type="Email" id="Email" placeholder="Email" />
       </div>

       <div className='grid w-full items-center gap-1.5'>
       <label htmlFor='Password'>Password</label>
       <Input  value={password} onChange={(e)=>setPassword(e.target.value)}   type="password" id="password" placeholder="Password" />
       </div>

      
       </div>
        <div className='w-full pb-4'>
        <Button className='w-full' >Register</Button>
        </div>
    </form>
  )
}
