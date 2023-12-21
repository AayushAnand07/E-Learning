import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../../auth/[...nextauth]/route";


export async function POST(
    req:Request,
    {params}:{params:{courseId:string}}
){
    try{
     const session = await getServerSession(authOptions) 
     const userId= session?.user?.id
     const {url,name}= await req.json()
     if(!session?.user)
     return new NextResponse("Unauthorized",{status:401})
     
     const courseOwner= await prisma.course.findUnique({
        where:{
            id:params.courseId,
            userId:userId


        }
     });
     if(!courseOwner){
        return new NextResponse("Unauthorized",{status:401})

     }

     const attachment= await prisma.attachment.create({
         data:{
             url,
             name,
             courseId:params.courseId,
         }
     })
     
    return NextResponse.json(attachment);
}
    catch(error){
        console.log("[ATTACHMENTS]",error);
        return new NextResponse("Internal Server Error",{status:500})
    }

}