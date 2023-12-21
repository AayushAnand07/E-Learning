import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";



export async function DELETE(
    req:Request,
    {params}:{params:{
        courseId:string, attachmentId:string
    }}){
        try{
            const session = await getServerSession(authOptions) 
            const userId= session?.user?.id
            if(!session?.user)
            return new NextResponse("Unauthorized",{status:401})
            

            const CourseOwner= await prisma.course.findUnique({
                where:{
                    id:params.courseId,
                    userId:userId
                }
            })
            if(!CourseOwner) {
                return new NextResponse("Unauthorized",{status:401})
            }

            const attachment= await prisma.attachment.delete({
                where:{
                    courseId:params.courseId,
                    id:params.attachmentId
                }
            })
            return  NextResponse.json(attachment)
        }
        catch(error){
            console.log("ATTACHEMENT_ID",error);
            return new NextResponse("Internal Server Error",{status:501});

        }


}