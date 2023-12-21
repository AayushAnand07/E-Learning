"use client"
import * as z from "zod"
import axios from "axios"
import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { Form, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast"


const formSchema=z.object({
    title:z.string().min(1,{
        message:"Title is required"
    })
});


const CreateCoursePage = () => {
    const router=useRouter();
    const form= useForm<z.infer<typeof formSchema>>({
        resolver:zodResolver(formSchema),
        defaultValues:{
        title:""
        },

    })

    const {isSubmitting, isValid}= form.formState;
    const onSubmit=async (values:z.infer<typeof formSchema>)=>{
        try {
            const response= await axios.post("/api/courses",values)
            router.push(`/teacher/courses/${response.data.id}`)
            toast.success("Course Created")
        } catch (error) {
           toast.error("Something went wrong")
        }
    }
  return (
    <div className="max-w-5xl mx-auto flex md:items-center md:justify-center h-full p-6">
         <div>
             <h1 className="text-2xl">Name your course</h1>
             <p className="text-sm text-slate-600">What would you like to name your course? You can change it later</p>
         
         <Form {...form}>
             <form className="space-y-8 mt-8" onSubmit={form.handleSubmit(onSubmit)}>
           <FormField
            control={form.control}
            name="title"
            render={({field})=>(
                <FormItem>
                    <FormLabel>
                        Course Title
                    </FormLabel>
                    <Input disabled={isSubmitting} placeholder="e.g. Full Stack Development"
                    {...field}
                    />
                    <FormDescription>
                        What will you teach in this course?
                    </FormDescription>
                    <FormMessage/>
                </FormItem>
                    
            )}
            
            
           />
           <div className="flex itmes-center gap-x-2">
                    <Link href="/">
                    <Button type="button" variant="ghost">
                    Cancel
                    </Button>

                    </Link>
                    <Button type="submit"  disabled={!isValid || isSubmitting}>
                    Continue
                    </Button>

           </div>

         
             </form>
         </Form>
         </div>
      </div>
  )
}   

export default CreateCoursePage

// {{{field}}=>(
//     <FormItem>
//      <FormItem>
//     Course Title
//     </FormLabel>
    
//     </FormItem>
