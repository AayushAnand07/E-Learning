import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(
    req:Request,
    {params}:{params:{courseId:String}}
){
    try{
        const session = await getServerSession(authOptions) 
        const userId= session?.user?.id
        if(!session?.user)
        return new NextResponse("Unauthorized",{status:401})
    
        const {title} = await req.json();

        const courseOwner= await prisma.course.findUnique({
         where:{
             id:params.courseId,
             userId:userId,
         }
        });
        if(!courseOwner){
            return new NextResponse("Unauthorized",{status:401})
        }

        const lastChapter= await prisma.chapter.findFirst({
            where:{
                courseId:params.courseId,

            },
            orderBy:{
                position:"desc",
            }
        })
        const newPosition= lastChapter? lastChapter.position +1:1;
        const chapter = await prisma.chapter.create({
            data:{
                title,
                courseId:params.courseId,
                position:newPosition
            }
        });

        return NextResponse.json(chapter)


    }
    catch(error){
        console.log("[CHAPTERS]",error);
        return new NextResponse("Internal Server Error",{status:501});

    }
}