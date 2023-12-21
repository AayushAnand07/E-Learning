import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(
    req:Request
){
    try{
     const session = await getServerSession(authOptions) 
     const userId= session?.user?.id
     const {title}= await req.json()
     if(!session?.user)
     return new NextResponse("Unauthorized",{status:401})
     
     const course = await prisma.course.create({
       data:{
        userId ,
        title
       }
    });
    return NextResponse.json(course);
}
    catch(error){
        console.log("[COURSES]",error);
        return new NextResponse("Interna Server Error",{status:500})
    }

}