
import React from 'react'
import { Logo } from './logo'
import { SidebarRoutes } from './SidebarRoutes'

const Sidebar = () => {
  return (
    <div className='h-full bg-white-950 rounded-e-2xl border-r flex flex-col overflow-y-auto shadow-sm'>
      <div className='p-6 text-black text-2xl'>
        <h1 className="">E-Learning</h1>

      </div>
      <div className='flex flex-col w-full'>
      <SidebarRoutes/>
      </div>
    
    
    </div>
  )
}

export default Sidebar