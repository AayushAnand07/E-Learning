'use client'

import { LogOut } from "lucide-react"
import { signIn, signOut } from "next-auth/react"
import { redirect } from "next/navigation"



export const LoginButton=()=>{
    return <button onClick={()=>signIn()}>Sign In</button>
}

export const LogoutButton=()=>{
    return <button className="pl-5" onClick={()=>{
        signOut() 
       
    }}><LogOut/></button>
}