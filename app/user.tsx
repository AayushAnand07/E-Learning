"use client"

import { useSession } from "next-auth/react"
export const User = ()  => {
 const {data:session}= useSession()
  return (
    <pre>
      <h1>Client</h1>
        {JSON.stringify(session)}
         </pre>
    
  )
}
