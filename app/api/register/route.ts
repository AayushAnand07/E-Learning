import prisma from "@/lib/prisma"
import { hash } from "bcrypt"
import { NextResponse } from "next/server"


export async function POST(req:Request){
    
    const {name,email, password}= await req.json()
    console.log(password,email,name)
   
    const hashed= await hash(password,12)

    const user =await prisma.user.create({
        data:{
            email,
            password:hashed,
            name
           

        }
    })


    return NextResponse.json({
        
        user:{  email:user.email
        }
    })

}