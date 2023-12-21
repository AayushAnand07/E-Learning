import { IconBadge } from "@/components/icon-badge";
import prisma from "@/lib/prisma"
import { BadgeIndianRupee, CircleDollarSign, File, IndianRupee, LayoutDashboard, ListChecks } from "lucide-react";
import { redirect } from "next/navigation";
import { DescriptionForm } from "./_components/description-form";
import { ImageForm } from "./_components/image-form ";
import { TitleForm } from "./_components/title-form";
import { CategoryForm } from "./_components/category-form";
import { PriceForm } from "./_components/price-form";
import { AttachementForm } from "./_components/attachment-form";
import { ChaptersForm } from "./_components/chapters-form";


const CourseIdpage = async({params}:{params:{courseId:string}}) => {
    const course=await prisma.course.findUnique({
         where:{
             id:params.courseId,
             
         },
         include:{
           chapters:{
            orderBy:{
              position:"asc",
            }
           },
           attachments:{
             orderBy:{
               createdAt:"desc"
             }
           }
         }
    });

    const categories= await prisma.category.findMany({

      orderBy:{
        name:"asc"
      }
    })
    

    if(!course) return redirect("/")

    const requiredFields=[
      course.title,
      course.description,
      course.imageUrl,
      course.price,
      course.categoryId,
      course.chapters.some(chapter => chapter.isPublished)
    ];
    const totalFields=requiredFields.length;
    const completeFields=requiredFields.filter(Boolean).length;
    const completionText=`(${completeFields}/${totalFields})`

  return (
    
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-y-2">
          <h1 className="text-2xl font-medium">
            Course Setup

          </h1>
          <span className="text-sm text-slate-700">
            Complete all fields {completionText}
          </span>

        </div>

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
         <div>
       
           <div className="flex items-center gap-x-2">
           <IconBadge icon={LayoutDashboard}/>
              <h2 className="text-xl">
               Customize your Course
              </h2>

           </div>
           <TitleForm
            initialData={course}
            courseId={course.id}
           />
            <DescriptionForm
            initialData={course}
            courseId={course.id}
           />

          <ImageForm
            initialData={course}
            courseId={course.id}
           />
            <CategoryForm
            initialData={course}
            courseId={course.id}
            options={categories.map((category) => ({
              label: category.name,
              value: category.id,
            }))}

           />





         </div>
         <div className="space-y-6">
         <div className="flex items-center gap-x-2">
           <IconBadge icon={ListChecks}/>
            <h2 className="text-xl">Course Chapters</h2>
           </div>
           
           <ChaptersForm
            initialData={course}
            courseId={course.id}
           />
           

           <div className="flex items-center gap-x-2">
           <IconBadge icon={IndianRupee}/>
            <h2 className="text-xl">Sell Your course</h2>
           </div>
           <div>
            <PriceForm
            initialData={course}
            courseId={course.id}
            />
           </div>

           <div className="flex items-center gap-x-2">
           <IconBadge icon={File}/>
            <h2 className="text-xl">Resource & Attachments</h2>
           </div>
           <AttachementForm
            initialData={course}
            courseId={course.id}
           />

         </div>

        



      </div>
      </div>
  )
}

export default CourseIdpage