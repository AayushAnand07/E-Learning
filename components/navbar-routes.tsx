"use client"

import React from 'react'
import { LogOut } from 'lucide-react'
import { LogoutButton } from '@/app/auth'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import Link from 'next/link'
const NavbarRoutes = () => {
    const pathname=usePathname()
    const router= useRouter()

    const isTeacherPage= pathname?.startsWith("/teacher")
    const isPlayerPage= pathname?.startsWith("/chapter")
  return (
      <div className='flex gap-x-2 ml-auto'>
          {isTeacherPage || isPlayerPage?(
              <Link href="/">
                <Button size="sm">
                    <LogOut className='h-4 w-4 mr-2'/>
                   Student
                </Button>
                </Link>
          ):(
              <Link href="/teacher/courses">
                    <Button size="sm">
                  Teacher Mode
                </Button>
              </Link>
          )}
   <LogoutButton/>
   </div>
  )
}

export default NavbarRoutes