import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth"
import { DevBundlerService } from "next/dist/server/lib/dev-bundler-service";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";
export async function PATCH (
    req:Request,
    {params}:{params:{courseId:string}}
){
    try{
        const session = await getServerSession(authOptions) 
        const userId= session?.user?.id
        const {courseId}=params
        const values=await req.json()
        if(!userId) return new NextResponse("Unauthorized",{status:401})

        const course =await prisma.course.update({
            where:{
                id:courseId,
                userId
            },
            data:{
                ...values
            }

        });
        console.log(values)
        return NextResponse.json(course)
    }
    catch(error){

    }
}