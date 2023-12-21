"use client"

import { BarChart, Compass, Layout, List } from "lucide-react"
import { usePathname } from "next/navigation";
import { SidebarItem } from "./SidebarItem";

const guestRoutes=[
    {
        icon:Layout,
        label:"Dashboard",
        href:"/",
    },
    {
        icon:Compass,
        label:"Browse",
        href:"/search",
    },
   
]


const TeacherRoutes=[
  {
      icon:List,
      label:"Courses",
      href:"/teacher/courses",
  },
  {
      icon:BarChart,
      label:"Analytics",
      href:"/teacher/analytics",
  },
 
]


export const SidebarRoutes = () => {
  const pathname= usePathname()

  const isTeacherPage= pathname?.includes("/teacher");
    const routes=isTeacherPage?TeacherRoutes:guestRoutes;
  return (
      <div className="flex flex-col w-full">
   {routes.map((route)=>(
     <SidebarItem
     key={route.href}
     label={route.label}
     href={route.href}
     icon={route.icon}
     />
   ))}
   </div>
  )
}
